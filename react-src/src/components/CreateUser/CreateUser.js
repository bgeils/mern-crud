import React, { Component } from 'react';
import { Header, Container, Form, Input, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import axios from 'axios';


export default withAuth(class CreateUser extends Component {

  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.state = {
      authenticated: null,
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      confirmPassword: '',
      accountCreated: false
    };
    this.checkAuthentication();

    this.server = process.env.REACT_APP_API_URL || '';

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.oktaCreateUser = this.oktaCreateUser.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  onSuccess(res) {
    return this.props.auth.redirect({
      sessionToken: res.session.token
    });
  }

  onError(err) {
    console.log('error creating new user', err);
  }

  //Uses state variables to create an Okta request to create the new user
  oktaCreateUser() {
    console.log("Creating New User on Okta.");
    console.log(this.props.baseUrl + '/api/v1/users?activate=true');

    var data = JSON.stringify({
      "profile": {
        "firstName": this.state.firstName,
        "lastName": this.state.lastName,
        "email": this.state.emailAddress,
        "login": this.state.emailAddress
      },
      "credentials": {
        "password": {
          "value": this.state.password
        }
      }
    });

    console.log(data);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
        var response = JSON.parse(this.responseText);
        console.log(response);
        if (response.hasOwnProperty('errorCauses')) {
          var errorSummary = response.errorCauses[0].errorSummary;
          console.log(errorSummary);
          alert("Error: " + errorSummary);
        } else {
          alert("Account successfully created!");
          // this.state.accountCreated = true; // redirect to login LoginPage
          //TODO: automatically login on successful account creation
        }
      }
    });

    xhr.open("POST", this.props.baseUrl + '/api/v1/users?activate=true');
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "SSWS 00qTMIXAb539NUwbElCPC1FKDmdR_eIu2mDFNqZdFF");//TODO: pass this token in from elsewhere
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "37ae08e2-0a32-c21c-d160-8480d833d8c3");

    xhr.send(data);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
    // console.log(event.target.value);
  }

  handleSubmit() {
    console.log("Form submitted.");

    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const emailAddress = this.state.emailAddress;
    const password = this.state.password;
    const confirmPassword = this.state.confirmPassword;

    console.log(this.state);

    if (firstName === '' || lastName === '' || emailAddress === '' || password === '' || confirmPassword === '') {
      alert("One or more required fields not filled in.");
    } else {

      if (password.length < 8) { //TODO: Add password complexity requirements
        alert("Your password is too short");
      } else {

        if (password !== confirmPassword) {
          console.log("Passwords did not match!");
        } else {
          //passwords match -> create account
          console.log("Passwords matched!");
          this.oktaCreateUser();
        }
      }
    }
  }

  render() {
    if (this.state.authenticated === null) return null;
    if (this.state.accountCreated) return <Redirect to={{ pathname: '/login'}}/>;
    return this.state.authenticated ?
      <Redirect to={{ pathname: '/' }}/> :
      <Container>
        <br/>
        <br/>
        <Header content='Create New User'/>
        <Form name='createUserForm' onSubmit={this.handleSubmit}>
          <Form.Field name='firstName' label='First Name' control='input' placeholder='First Name' onChange={this.handleChange}/>
          <Form.Field name='lastName' label='Last Name' control='input' placeholder='Last Name' onChange={this.handleChange}/>
          <Form.Field name='emailAddress' label='Email Address' control='input' placeholder='Email Address' onChange={this.handleChange}/>
          <Form.Field name='password' label='Password (at least 8 characters, a lowercase letter, an uppercase letter, a number, no parts of your username)' control='input' type='password' placeholder='Password' onChange={this.handleChange}/>
          <Form.Field name='confirmPassword' label='Confirm Password' control='input' type='password' placeholder='Password' onChange={this.handleChange}/>
          <Button type='submit'>Create Account</Button>
        </Form>
      </Container>;
  }
});
