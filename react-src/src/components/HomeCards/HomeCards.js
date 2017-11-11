import React, { Component } from 'react';
import { Card, Header } from 'semantic-ui-react';

import './HomeCards.css';

class HomeCards extends Component {

  render() {
    return (
      <div>
        <Header as='h2'>
          <Header.Content>
            Energy Stats
          </Header.Content>
        </Header>
      
        <Card.Group itemsPerRow={5}>
          <Card>
            <Card.Content className='center-card'>
              <h3> Chart Average</h3>
              <h1> {this.props.avg_energy} W</h1>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content className='center-card'>
              <h3> Real-Time</h3>
              <h1> {this.props.curr_reading.energy} W</h1>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content className='center-card'>
              <h3> 7 Day Avg</h3>
              <h1> TODO </h1>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content className='center-card'>
              <h3> Prev Month Avg</h3>
              <h1> TODO </h1>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content className='center-card'>
              <h3>  Prev Year Avg</h3>
              <h1> TODO </h1>
            </Card.Content>
          </Card>
        </Card.Group>
        </div>
    );
  }
}



export default HomeCards;
