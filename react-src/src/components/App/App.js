import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';

import Navigation from '../Navigation/Navigation';
import Test from '../Test/Test';
import About from '../About/About';
import Dashboard from '../Dashboard/Dashboard';
import Market from '../Market/Market';
import LoginPage from '../LoginPage/LoginPage';
import CreateUser from '../CreateUser/CreateUser';
import Settings from '../Settings/Settings';
import MapPlot from '../MapPlot/MapPlot';
import Users from '../Users/Users';

import './App.css';

const config = {
  baseUrl: 'https://dev-357313.oktapreview.com',
  issuer: 'https://dev-357313.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  clientId: '0oaczk8q7oKxYVZOm0h7'
}

class App extends Component {

  constructor() {
    super();

    this.state = {
      user: null
    }

    this.saveUser = this.saveUser.bind(this);
  }

  saveUser(value){
    this.setState({ user: value});
  }

  render() {
    // console.log(this.state.user)
    return (
        <BrowserRouter>
        <Security issuer={config.issuer}
                  client_id={config.clientId}
                  redirect_uri={config.redirect_uri}>
          <div>
            <Navigation saveUser={this.saveUser} {...this.state} />
            <div>
                  <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/about" component={ About }/>
                    <Route path="/market" component={ Market }/>
                    <Route path="/test" component={ Test }/>
                    <Route path="/settings" component={ Settings } {...this.state}/>
                    <Route path="/map" component={ MapPlot }/>
                    <Route path="/users" component={ Users }/>
                    <Route path='/login' render={() => <LoginPage baseUrl={config.baseUrl} />} />
                    <Route path='/createUser' render={() => <CreateUser baseUrl={config.baseUrl} />} />
                    <Route path='/implicit/callback' component={ImplicitCallback} />
                  </Switch>

            </div>

          </div>
          </Security>
        </BrowserRouter>
    );
  }
}

export default App;
