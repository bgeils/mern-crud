import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { Container, Header, Menu, Visibility, Icon } from 'semantic-ui-react';

import Team from './Team/Team';
import General from './General/General';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  top: 0,
  left: 0,
  right: 'auto',
  bottom: 'auto'
}

class About extends Component {
  
  constructor() {
    super();

    this.state = {
      menuFixed: false
    }
    this.stickTopMenu = this.stickTopMenu.bind(this);
    this.unStickTopMenu = this.unStickTopMenu.bind(this);
  }

  stickTopMenu(){
    this.setState({ menuFixed: true })
  }

  unStickTopMenu(){
    this.setState({ menuFixed: false });
  };

  render() {
    return (
        <Container>

        <Container text style={{ marginTop: '2em' }}>
          <Header as='h1'>Open Energy Explained</Header>
          <p><i>Our mission is simple, we are incentivizing sustainable energy through transparency in the energy marketplace.</i></p>
        </Container>

        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop add add another styles if it has
            gone beyond the scope of visibility
          */}
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            className={this.state.menuFixed ? 'top fixed': ''}
            style={this.state.menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Icon name='lightning' className="bolt-icon" />
              </Menu.Item>
              <Menu.Item header>Learn more</Menu.Item>
              <Menu.Item as={Link} to='/about'>General</Menu.Item>
              <Menu.Item as={Link} to='/about/team'>Team</Menu.Item>
              
            </Container>
          </Menu>
        </Visibility>
        
        <Switch>
          <Route exact path="/about/team" component={Team}/>
          <Route extact path="/about" component={General} {...this.state} />
        </Switch>

      </Container>
    );
  }
}

export default About;
