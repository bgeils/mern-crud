import React, { Component } from 'react';
import axios from 'axios';

import EnergyAreaChart from '../EnergyAreaChart/EnergyAreaChart';
import HomeCards from '../HomeCards/HomeCards';

import './Dashboard.css';

import energychart_placeholder from '../../media/energychart_placeholder.png';

class Dashboard extends Component {

  constructor() {
    super();
    
    this.server = process.env.REACT_APP_API_URL || '';

    this.state = {
      consume_data: [],
      avg_energy: false,
      dataLoaded: false,
      seven: false,
      thirty: false,
      year: false
    }

    this.fetchConsumeData = this.fetchConsumeData.bind(this);
    this.fetchSevenDayData = this.fetchSevenDayData.bind(this);
    this.fetchThirtyDayData = this.fetchThirtyDayData.bind(this);
    this.fetchYearDayData = this.fetchYearDayData.bind(this);

  }

  componentDidMount() {
    this.fetchConsumeData();
    this.fetchSevenDayData();
    this.fetchThirtyDayData();
    this.fetchYearDayData();
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
      let ret = Math.round(avg[0].average *10)/10
      this.setState({ avg_energy: ret });
    }
  }
  

  // Fetch data from the back-end every 3 seconds
  fetchConsumeData() {
    //console.log("polling");
    axios.get(`${this.server}/api/consum`)
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

  fetchSevenDayData(){
    axios.get(`${this.server}/api/consum/agg/7`)
    .then((response) => {
      for(var i=0; i<response.data.length;i++){
        response.data[i].start_time = new Date(response.data[i].start_time);
      }
      if(response.data.length){
        let ret = parseInt(response.data[0].power * 10, 10) / 10
        this.setState({ seven: ret });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  fetchThirtyDayData(){

    axios.get(`${this.server}/api/consum/agg/30`)
    .then((response) => {
      for(var i=0; i<response.data.length;i++){
        response.data[i].start_time = new Date(response.data[i].start_time);
      }
      if(response.data.length){
        let ret = parseInt(response.data[0].power * 10, 10) / 10
        this.setState({ thirty: ret });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  fetchYearDayData(){
    axios.get(`${this.server}/api/consum/agg/365`)
    .then((response) => {
      for(var i=0; i<response.data.length;i++){
        response.data[i].start_time = new Date(response.data[i].start_time);
      }
      if(response.data.length){
        let ret = parseInt(response.data[0].power * 10, 10) / 10
        this.setState({ year: ret });
      }
    })
    .catch((err) => {
      console.log(err);
    });
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
      EnergyPlaceholder = <img alt="" src={energychart_placeholder} style={{height:'520px',width:'890px',paddingLeft:'35px',paddingTop: '15px'}} />
      
    }

    let HomeCardPlaceHolder = <HomeCards 
                                avg_energy={this.state.avg_energy} 
                                curr_reading={curr_reading}
                                seven={this.state.seven}
                                thirty={this.state.thirty}
                                year={this.state.year}
                              />;
    
    return (
      <div>
        <h1>My Energy Dashboard</h1>
        
        <br/>
        { HomeCardPlaceHolder }
        <br/>

        { EnergyPlaceholder }

      </div>
    );
  }
}



export default Dashboard;
