import React, { Component } from 'react';
import { Grid, Menu, Container, Segment, Icon } from 'semantic-ui-react';
import { MemoryRouter } from 'react-router'

import {
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Test from '../Test/Test';
import About from '../About/About';
import Dashboard from '../Dashboard/Dashboard';



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
          name='about'
          as={Link}
          to='/about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          >
            About
          </Menu.Item>

        </Menu>
        </Segment>
      </Grid.Column>
    </Grid>
    
  )

    return (
        <MemoryRouter>
          <div>
            <Header/>
            <Grid>
              <Grid.Row only='tablet computer'>
                <Container>
                  <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/test" component={Test}/>
                    <Route exact path="/about" component={ About }/>
                    <Route exact path="/about/team" component={ About }/>
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
        </MemoryRouter>
      
    );
  }
}



export default App;
