import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Grid, Container } from 'semantic-ui-react';
import { Security, ImplicitCallback } from '@okta/okta-react';

import Navigation from '../Navigation/Navigation';
//import Test from '../Test/Test';
import About from '../About/About';
import Dashboard from '../Dashboard/Dashboard';
import LoginPage from '../LoginPage/LoginPage';

import './App.css';

const config = {
  baseUrl: 'https://dev-357313.oktapreview.com',
  issuer: 'https://dev-357313.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  clientId: '0oaczk8q7oKxYVZOm0h7'
}

class App extends Component {

  render() {
    return (
        <BrowserRouter>
        <Security issuer={config.issuer}
                  client_id={config.clientId}
                  redirect_uri={config.redirect_uri}>
          <div>
            <Navigation/>
            <Grid>
              <Grid.Row only='tablet computer'>
                <Container>
                  <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/about" component={ About }/>
                    <Route path='/login' render={() => <LoginPage baseUrl={config.baseUrl} />} />
                    <Route path='/implicit/callback' component={ImplicitCallback} />
                  </Switch>
                </Container>
              </Grid.Row>
              <Grid.Row only='mobile'>
                <Container text>
                <p>Sorry we aren't mobile friendly yet!</p>
                </Container>
              </Grid.Row>

            </Grid>
             
          </div>
          </Security>
        </BrowserRouter>
    );
  }
}

export default App;
