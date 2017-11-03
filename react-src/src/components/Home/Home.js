import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class Home extends Component {

  // constructor() {
  //   super();
  // }

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  render() {

    return (
      <div>
        <Container>
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
      </div>
    );
  }
}



export default Home;
