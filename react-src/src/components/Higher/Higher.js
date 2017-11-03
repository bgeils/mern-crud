import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from '../App/App';
import Home from '../Home/Home';
import Billing from '../Billing/Billing';

class Higher extends Component {

  render() {

    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/account">Account</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/market">Market Place</Link></li>
              <li><Link to="/billing">Billing</Link></li>
              <li><Link to="/test">Test</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route exact path="/test" component={App}/>
            <Route exact path="/billing" component={Billing}/>

          </div>
        </Router>
      </div>
    );
  }
}



export default Higher;
