import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Menu, Segment, Icon } from 'semantic-ui-react';
import { withAuth } from '@okta/okta-react';
import AlertContainer from 'react-alert';

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

    const LogInOut = this.state.authenticated ?
      <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.logOutUser} position={'right'} > Logout </Menu.Item> :
      <Menu.Item name='login' as={Link} to='/login' active={activeItem === 'login'} onClick={this.handleItemClick} position={'right'}>Login</Menu.Item>;

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

