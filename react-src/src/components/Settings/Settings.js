import React, { Component } from 'react';
import { Segment, Dimmer, Loader} from 'semantic-ui-react';

class Settings extends Component {

  constructor(props) {
    super(props)

  }

  render() {

    const uid = 'test1'
    const sub = 'test2'
    const dimmer = false;
    return (
      <Segment>
      <Dimmer active={dimmer} inverted>
        <Loader />
      </Dimmer>

        <h4> UID: </h4>
        <p> {uid} </p>
        <h4> Email: </h4>
        <p>{sub} </p>
    </Segment>

      );
  }
};
export default Settings;