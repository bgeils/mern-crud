import React, { Component } from 'react';
import { Card, Header } from 'semantic-ui-react';

import './HomeCards.css';

class HomeCards extends Component {

  render() {

    let ChartAvgPlaceholder;
    if(this.props.avg_energy === undefined){
      ChartAvgPlaceholder = <h1> Loading </h1>
    }else{
      ChartAvgPlaceholder = <h1> {this.props.avg_energy} W</h1>
    }

    let ChartSevenPlaceholder;
    if(this.props.curr_reading.power === undefined){
      ChartSevenPlaceholder = <h1> Loading </h1>
    }else{
      ChartSevenPlaceholder = <h1> {this.props.seven} W</h1>
    }

    let ChartThirtyPlaceholder;
    if(this.props.curr_reading.power === undefined){
      ChartThirtyPlaceholder = <h1> Loading </h1>
    }else{
      ChartThirtyPlaceholder = <h1> {this.props.thirty} W</h1>
    }

    let ChartYearPlaceholder;
    if(this.props.curr_reading.power === undefined){
      ChartYearPlaceholder = <h1> Loading </h1>
    }else{
      
      ChartYearPlaceholder = <h1> {this.props.thirty} W</h1>
    }

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
              { ChartAvgPlaceholder }
            </Card.Content>
          </Card>
          <Card>
            <Card.Content className='center-card'>
              <h3> Real-Time</h3>
              <h1> {this.props.curr_reading.power} W</h1>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content className='center-card'>
              <h3> 7 Day Avg</h3>
              { ChartSevenPlaceholder } 
            </Card.Content>
          </Card>
          <Card>
            <Card.Content className='center-card'>
              <h3> Prev Month Avg</h3>
              { ChartThirtyPlaceholder }
            </Card.Content>
          </Card>
          <Card>
            <Card.Content className='center-card'>
              <h3>  Prev Year Avg</h3>
              { ChartYearPlaceholder }
            </Card.Content>
          </Card>
        </Card.Group>
        </div>
    );
  }
}



export default HomeCards;
