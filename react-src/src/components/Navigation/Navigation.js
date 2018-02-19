import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Menu, Segment, Icon } from 'semantic-ui-react';
import { withAuth } from '@okta/okta-react';
import AlertContainer from 'react-alert';

import './Navigation.css';

export default withAuth(class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
    this.logOutUser = this.logOutUser.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();

    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
      let this_ = this;
      this.props.auth.getUser().then(function(value) {
        if(value === undefined){
          this_.props.saveUser(null);
        }else{
          this_.props.saveUser(value);
        }

      });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
  }

  logOutUser(){
    this.props.auth.logout();
    this.msg.success('Successfully logged out.')
  }

  render() {
    let alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 2000,
      transition: 'scale'
    }
    const { activeItem } = this.state

    const LoggedOut = () => (
      <Menu.Menu position='right'>
        <Menu.Item name='settings' as={Link} to='/settings' active={activeItem === 'settings'} > Settings </Menu.Item>
        <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.logOutUser} > Logout </Menu.Item>
      </Menu.Menu>
    )

    const LoggedIn = () => (
      <Menu.Menu position='right'>
        <Menu.Item name='newUser' as={Link} to='/createUser' active={activeItem === 'createUser'} onClick={this.handleItemClick} >Create New User</Menu.Item>
        <Menu.Item name='login' as={Link} to='/login' active={activeItem === 'login'} onClick={this.handleItemClick} >Login</Menu.Item>
      </Menu.Menu>
    )

    const LogInOut = this.state.authenticated ? <LoggedOut/> : <LoggedIn/>;

    const MapView = this.state.authenticated ? <Menu.Item
            name='map'
            as={Link}
            to='/map'
            active={activeItem === 'map'}
            onClick={this.handleItemClick}
            >
              Map
            </Menu.Item> : "" ;

    const UsersMenu = this.state.authenticated ? <Menu.Item
            name='users'
            as={Link}
            to='/users'
            active={activeItem === 'users'}
            onClick={this.handleItemClick}
            >
              Users
            </Menu.Item> : "" ;

    const Header = () => (
      <Grid>
        <Grid.Column only='tablet computer'>
        <Segment inverted className="energy-menu">
          <Menu inverted>
            <Menu.Item header>
              <h2><Icon inverted name='lightning' className="bolt-icon" />Open Energy</h2>
            </Menu.Item>
            <Menu.Item
            name='dashboard'
            as={Link}
            to='/'
            active={activeItem === 'dashboard'}
            onClick={this.handleItemClick}
            >
              Dashboard
            </Menu.Item>

            <Menu.Item
            name='about'
            as={Link}
            to='/about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
            >
              About
            </Menu.Item>
            { MapView }
            { UsersMenu }

            { LogInOut }

          </Menu>
          </Segment>
        </Grid.Column>
      </Grid>
    )
    return (
          <div>
            <Header/>
            <AlertContainer ref={a => this.msg = a} {...alertOptions} />
          </div>
    );
  }
});
