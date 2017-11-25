import React, { Component } from 'react';
import axios from 'axios';

import OrderBook from './OrderBook';

class Market extends Component {

  constructor() {
    super();

    this.server = process.env.REACT_APP_API_URL || '';

    this.state = {
      buyOrders: [],
      sellOrders: [],
      dataLoaded: false,
    }

    this.fetchOrderData = this.fetchOrderData.bind(this);
  }

  componentDidMount() {
    this.loadInterval = true;
    this.fetchOrderData();
  }

  componentWillUnmount() {
    this.loadInterval && clearInterval(this.poll);
    this.loadInterval = false;
  }

  fetchOrderData() {
    //console.log("polling");
    axios.get(`${this.server}/api/orders`)
    .then((response) => {
      for(var i=0; i<response.data.length;i++){
        response.data[i].start_time = new Date(response.data[i].start_time);
      }
      this.loadInterval && this.setState({ buyOrders: response.data });
      console.log(this.state.buyOrders)
    })
    .catch((err) => {
      console.log(err);
    });
    // TODO uncomment below
    //this.poll = setTimeout(this.fetchOrderData, 3*1000);
  }

  render() {
    return (
      <div>
    <OrderBook/>
    </div>
    );
  }
}

export default Market;
