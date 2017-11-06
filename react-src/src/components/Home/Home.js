import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';

import EnergyAreaChart from '../EnergyAreaChart/EnergyAreaChart';

class Home extends Component {

  constructor() {
    super();
    
    this.server = process.env.REACT_APP_API_URL || '';

    this.state = {
      consume_data: []
    }

    this.fetchConsumeData = this.fetchConsumeData.bind(this);
  }

  componentDidMount() {
    
    this.fetchConsumeData()
    
  }

  componentWillUnmount() {
    clearInterval(this.poll);
  }

  // Fetch data from the back-end every 3 seconds
  fetchConsumeData() {
    //console.log("polling");
    axios.get(`${this.server}/api/consum/`)
    .then((response) => {
      for(var i=0; i<response.data.length;i++){
        response.data[i].start_time = new Date(response.data[i].start_time);
      }
      this.setState({ consume_data: response.data });
      console.log(response.data)
    })
    .catch((err) => {
      console.log(err);
    });
    //this.poll = setTimeout(this.fetchConsumeData, 3*1000);
  }

  render() {
    // let consume_data = this.state.consume_data.length
    return (
      <div>
        <Container>
        <h3>test</h3>
          <em id='online'>{`${this.state.consume_data.length} docs found on consumer data.`}</em>
          <h4> Things to add to energy panel:</h4>
          <ul>
            <li> Ability to see current power draw </li>
            <li> Today's power usage (so far today)</li>
            <li> Last 7 days power usage </li>
            <li> Last 30 days usage </li>
            <li> Last 365 days power usage </li>
            <li> Daily average power usage </li>
          </ul>
        </Container>
        <br/>
        <EnergyAreaChart data={[5,10,1,3]} size={[500,500]}/>
      </div>
    );
  }
}



export default Home;
