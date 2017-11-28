import React, { Component } from 'react';
import { Segment, Dimmer, Loader} from 'semantic-ui-react';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Settings extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null
    }

    this.server = process.env.REACT_APP_API_URL || '';
  }

  async componentDidMount() {
    try {
      const response = await fetch(`${this.server}/api/user`, {
        headers: {
          Authorization: 'Bearer ' + await this.props.auth.getAccessToken()
        }
      });
      const data = await response.json();
      console.log(data)
      this.setState({ 'user': data });
    } catch (err) {
      // handle error as needed
      console.log(err)
    }
  }

  render() {

    const uid = this.state.user ? this.state.user.uid : '';
    const sub = this.state.user ? this.state.user.sub : '';
    const devices = this.state.user ? this.state.user.deviceid.map(device =>
      <li key={device}>{device}</li>
    ) : 'No devices';
    const dimmer = this.state.user? false : true;
    return (
      <Segment>
      <Dimmer active={dimmer} inverted>
        <Loader />
      </Dimmer>

        <h4> UID: </h4>
        <p> {uid} </p>
        <h4> Email: </h4>
        <p>{sub} </p>
        <h4> Devices </h4>
        <ul> {devices} </ul>
    </Segment>

      );
  }
});