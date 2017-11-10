import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import App from '../App/App';
import Home from '../Home/Home';
import Billing from '../Billing/Billing';

class Higher extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
     const { activeItem } = this.state

    const Header = () => (
    <Grid>
      <Grid.Column only='tablet computer'>
        <Menu>
          <Menu.Item
          name='home'
          as={Link}
          to='/'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
          <Menu.Item
          name='account'
          as={Link}
          to='/account'
          active={activeItem === 'account'}
          onClick={this.handleItemClick}
          >
            Account
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
          <Menu.Item
          name='market'
          as={Link}
          to='/market'
          active={activeItem === 'market'}
          onClick={this.handleItemClick}
          >
            Market Place
          </Menu.Item>

          <Menu.Item
          name='billing'
          as={Link}
          to='/billing'
          active={activeItem === 'billing'}
          onClick={this.handleItemClick}
          >
            Billing
          </Menu.Item>
          <Menu.Item
          name='test'
          as={Link}
          to='/test'
          active={activeItem === 'test'}
          onClick={this.handleItemClick}
          >
            Test
          </Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid>
    
  )

    return (
        <Router>
          <div>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/test" component={App}/>
              <Route exact path="/billing" component={Billing}/>
            </Switch>
          </div>
        </Router>
      
    );
  }
}



export default Higher;
