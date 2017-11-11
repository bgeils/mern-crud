import React, { Component } from 'react';
import axios from 'axios';

import EnergyAreaChart from '../EnergyAreaChart/EnergyAreaChart';
import HomeCards from '../HomeCards/HomeCards';

class Home extends Component {

  constructor() {
    super();
    
    this.server = process.env.REACT_APP_API_URL || '';

    this.state = {
      consume_data: [],
      avg_energy: "No Data",
      dataLoaded: false
    }

    this.fetchConsumeData = this.fetchConsumeData.bind(this);
  }

  componentDidMount() {
    this.fetchConsumeData();
  }

  componentWillUnmount() {
    clearInterval(this.poll);
  }

  calcAverages(){
    var avg = Array.from(this.state.consume_data.reduce(
            (acc, obj) => Object.keys(obj).reduce( 
                (acc, key) => typeof obj[key] === "number"
                    ? acc.set(key, (acc.get(key) || []).concat(obj[key]))
                    : acc,
            acc),
        new Map()), 
            ([name, values]) =>
                ({ name, average: values.reduce( (a,b) => a+b ) / values.length })
        );
    
    if(avg.length !== 0){
      this.setState({ avg_energy: Math.round(avg[1].average *100)/100 });
    }
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
      this.setState({ dataLoaded: true });
      this.calcAverages();  
    })
    .catch((err) => {
      console.log(err);
    });
    
    this.poll = setTimeout(this.fetchConsumeData, 3*1000);


  }

  render() {

    let curr_reading = "No Data";
    if(this.state.consume_data.length !== 0){
      curr_reading = this.state.consume_data[0]
    }

    var EnergyPlaceholder;
    if (this.state.dataLoaded) {
      EnergyPlaceholder = <EnergyAreaChart data={this.state.consume_data} />
    } else {
      EnergyPlaceholder = <h2> Loading Data...</h2>;
    }

    let HomeCardPlaceHolder = <HomeCards 
                                avg_energy={this.state.avg_energy} 
                                curr_reading={curr_reading} 
                              />;
    
    return (
      <div>
        <h1>My Energy Dashboard</h1>
        <em id='online'>{`${this.state.consume_data.length} docs found on consumer data.`}</em>
        <br/>
        <br/>
        { HomeCardPlaceHolder }
        <br/>

        { EnergyPlaceholder }
        
        <h4> Things to add to energy panel:</h4>
        <ul>
          <li> [ X ] Ability to see current power draw  </li>
          <li> Today's power usage (so far today)</li>
          <li> Last 7 days power usage </li>
          <li> Last 30 days usage </li>
          <li> Last 365 days power usage </li>
          <li> Daily average power usage </li>
        </ul>
      </div>
    );
  }
}



export default Home;
