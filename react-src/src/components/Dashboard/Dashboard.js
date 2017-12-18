import React, { Component } from 'react';
import axios from 'axios';
import { Button, Segment } from 'semantic-ui-react';

import EnergyAreaChart from '../EnergyAreaChart/EnergyAreaChart';
import HomeCards from '../HomeCards/HomeCards';

import './Dashboard.css';

import energychart_placeholder from '../../media/redblur.png';



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
      year: false,
      isProduction: false
    }

    this.fetchConsumeData = this.fetchConsumeData.bind(this);
    this.fetchSevenDayData = this.fetchSevenDayData.bind(this);
    this.fetchThirtyDayData = this.fetchThirtyDayData.bind(this);
    this.fetchYearDayData = this.fetchYearDayData.bind(this);

    this.handleConsumptionClick = this.handleConsumptionClick.bind(this);
    this.handleProductionClick = this.handleProductionClick.bind(this);
  }

  componentDidMount() {
    this.loadInterval = true;
    this.fetchConsumeData();
    this.fetchSevenDayData();
    this.fetchThirtyDayData();
    this.fetchYearDayData();
  }

  componentWillUnmount() {
    this.loadInterval && clearInterval(this.poll);
    this.loadInterval = false;
  }

  handleConsumptionClick() {
    this.setState({'isProduction': false});
  }

  handleProductionClick() {
    this.setState({'isProduction': true});
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
      let ret = Math.round(avg[1].average *10)/10
      this.loadInterval && this.setState({ avg_energy: ret });
    }
  }
  

  // Fetch data from the back-end every 3 seconds
  fetchConsumeData() {
    
    axios.get(`${this.server}/api/consum`)
    .then((response) => {
      for(var i=0; i<response.data.length;i++){
        response.data[i].start_time = new Date(response.data[i].start_time);
      }
      this.loadInterval && this.setState({ consume_data: response.data });
      this.loadInterval && this.setState({ dataLoaded: true });
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
        this.loadInterval && this.setState({ seven: ret });
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
        this.loadInterval && this.setState({ thirty: ret });
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
        this.loadInterval && this.setState({ year: ret });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {

  const ButtonToggle = () => (
    <Button.Group>
      <Button color={'red'} onClick={this.handleConsumptionClick}>Consumption</Button>
      <Button.Or/>
      <Button positive onClick={this.handleProductionClick}>Production</Button>
    </Button.Group>
  )

    let curr_reading = "No Data";
    if(this.state.consume_data.length !== 0){
      curr_reading = this.state.consume_data[0]
    }

    var EnergyPlaceholder;
    if (this.state.isProduction){
      EnergyPlaceholder = ""
    }else if(this.state.dataLoaded) {
      EnergyPlaceholder = <EnergyAreaChart data={this.state.consume_data} />
    } else {
      EnergyPlaceholder = <img alt="" src={energychart_placeholder} style={{height:'520px',width:'890px',paddingLeft:'35px',paddingTop: '15px'}} />
      
    }

    var HomeCardsPlaceholder;
    if(this.state.isProduction){
      HomeCardsPlaceholder = "";
    }else{
      HomeCardsPlaceholder = <HomeCards 
            avg_energy={this.state.avg_energy} 
            curr_reading={curr_reading}
            seven={this.state.seven}
            thirty={this.state.thirty}
            year={this.state.year}
          />
    }

    return (
      <div>
        <ButtonToggle/>
        <Segment vertical>
          <h1 >{this.state.isProduction ? 'Production' : 'Consumption'} Dashboard</h1>
          <p>   
          {this.state.isProduction ? 'Production data is coming soon. An energy producer will be able to in real time understand their energy production benefits.' : 'The following energy data is simulated to depict real time consumption. Given the ability to easily visualize and track energy usage a consumer will on average reduce their consumption. In future iterations the Open Energy team will allow the consumer to download their consumption data over various time intervals to analyze usage for energy and cost reduction opportunities.'}
          </p>
        </Segment>
        <br/>
        
          { HomeCardsPlaceholder }

          { EnergyPlaceholder }
        
      </div>
    );
  }
}



export default Dashboard;
