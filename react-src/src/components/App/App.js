import React, { Component } from 'react';
import { Grid, Menu, Container, Segment, Icon } from 'semantic-ui-react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Test from '../Test/Test';
import About from '../About/About';
import Dashboard from '../Dashboard/Dashboard';
import Billing from '../Billing/Billing';

class App extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
     const { activeItem } = this.state


    const Header = () => (
    <Grid>
      <Grid.Column only='tablet computer'>
      <Segment inverted>
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
        </Segment>
      </Grid.Column>
    </Grid>
    
  )

    return (
        <Router>
          <div>
            <Header/>
            <Grid>
              <Grid.Row only='tablet computer'>
                <Container>
                  <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/test" component={Test}/>
                    <Route exact path="/billing" component={Billing}/>
                    <Route exact path="/about" component={ About }/>
                    <Route exact path="/about/team" component={ About }/>
                    <Route exact path="/about/technology" component={ About }/>

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
        </Router>
      
    );
  }
}



export default App;
