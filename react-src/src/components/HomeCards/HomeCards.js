import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import { Segment, Card, Header } from 'semantic-ui-react';

import './HomeCards.css';

class HomeCards extends Component {

  render() {
    
    let ChartAvgPlaceholder;
    if(this.props.avg_energy === false){
      ChartAvgPlaceholder = <h2> Loading </h2>
    }else{
      ChartAvgPlaceholder = <h2> {this.props.avg_energy} W</h2>
    }

    let ChartSevenPlaceholder;
    if(this.props.curr_reading.power === undefined){
      ChartSevenPlaceholder = <h2> Loading </h2>
    }else{
      ChartSevenPlaceholder = <h2> {this.props.seven} W</h2>
    }

    let ChartThirtyPlaceholder;
    if(this.props.curr_reading.power === undefined){
      ChartThirtyPlaceholder = <h2> Loading </h2>
    }else{
      ChartThirtyPlaceholder = <h2> {this.props.thirty} W</h2>
    }

    let ChartYearPlaceholder;
    if(this.props.curr_reading.power === undefined){
      ChartYearPlaceholder = <h2> Loading </h2>
    }else{
      
      ChartYearPlaceholder = <h2> {this.props.thirty} W</h2>
    }

    let RealTimePlaceholder;
    if(this.props.curr_reading === "No Data"){
      RealTimePlaceholder = <h2> Loading </h2>
    }else{
      RealTimePlaceholder = <h2> {this.props.curr_reading.power} W</h2>
    }
    return (
      <div>
      <Segment>
        <Header as='h2' textAlign={'center'}>
          <Header.Content>
            Energy Statistics
          </Header.Content>
        </Header>
      </Segment>
      
        <Card.Group itemsPerRow={5}>
          <Card data-tip="Average over the chart duration">
            <Card.Content className='center-card'>
              <h3> Chart Average</h3>
              { ChartAvgPlaceholder }
            </Card.Content>
          </Card>
          <Card data-tip="Most recent reading">
            <Card.Content className='center-card'>
              <h3> Real-Time</h3>
              { RealTimePlaceholder } 
            </Card.Content>
          </Card>
          <Card data-tip="Average wattage in the last seven days">
            <Card.Content className='center-card'>
              <h3> 7 Day Avg</h3>
              { ChartSevenPlaceholder } 
            </Card.Content>
          </Card>
          <Card data-tip="Average wattage in the last 30 days">
            <Card.Content className='center-card'>
              <h3> Prev Month Avg</h3>
              { ChartThirtyPlaceholder }
            </Card.Content>
          </Card>
          <Card data-tip="Average wattage in the last 365 days">
            <Card.Content className='center-card'>
              <h3>  Prev Year Avg</h3>
              { ChartYearPlaceholder }
            </Card.Content>
          </Card>
        </Card.Group>
        <ReactTooltip />
        </div>
    );
  }
}



export default HomeCards;
