import React, { Component } from 'react';
import {  Image, Card } from 'semantic-ui-react';

import './Team.css';

class Team extends Component {
	
	render(){

		return (
			<div>
			<Card.Group>
			<Card>
			  <Image src='http://sdmay18-41.sd.ece.iastate.edu/images/ArunSondhi.jpg' className="team-pic"/>
			    <Card.Content>
			      <Card.Header> Arun Sondhi</Card.Header>
			      <Card.Meta>Joined in 2017</Card.Meta>
			      <Card.Description>Arun is a comedian living in Nashville.</Card.Description>
			    </Card.Content>
			  </Card>
		    
		    <Card>
			  <Image src='http://sdmay18-41.sd.ece.iastate.edu/images/alec.jpg' className="team-pic" />
			    <Card.Content>
			      <Card.Header> Alec Dorenkamp</Card.Header>
			      <Card.Meta>Joined in 2017</Card.Meta>
			      <Card.Description>Dorenkamp makes his living in the Caymen Islands dropshipping.</Card.Description>
			    </Card.Content>
			  </Card>

		    <Card>
			  <Image src='http://sdmay18-41.sd.ece.iastate.edu/images/neig.jpg' className="team-pic" />
			    <Card.Content>
			      <Card.Header> Noah Eigenfeld</Card.Header>
			      <Card.Meta>Joined in 2017</Card.Meta>
			      <Card.Description>Noah skips has Thursday classes because he is asserting his free-will.</Card.Description>
			    </Card.Content>
			  </Card>

			<Card>
			  <Image src='https://scontent.fdsm1-1.fna.fbcdn.net/v/t1.0-9/17264490_1644216355595733_823841743167110404_n.jpg?oh=226866724de5c6fd4544dec2d3cb9450&oe=5AA1B6F4' className="team-pic" />
			    <Card.Content>
			      <Card.Header> Brendon Geils</Card.Header>
			      <Card.Meta>Joined in 2017</Card.Meta>
			      <Card.Description>Brendon believes we live in a simulation.</Card.Description>
			    </Card.Content>
			  </Card>
			  <Card>
			  <Image src='http://sdmay18-41.sd.ece.iastate.edu/images/jack.png' className="team-pic" />
			    <Card.Content>
			      <Card.Header> Jack Myers</Card.Header>
			      <Card.Meta>Joined in 2017</Card.Meta>
			      <Card.Description>Jack's favorite movie is Transformers 3.</Card.Description>
			    </Card.Content>
			  </Card>
			  <Card>
			  <Image src='http://sdmay18-41.sd.ece.iastate.edu/images/joe.jpg' className="team-pic" />
			    <Card.Content>
			      <Card.Header> Joe Staudacher</Card.Header>
			      <Card.Meta>Joined in 2017</Card.Meta>
			      <Card.Description>Joe wishes his name wasn't so basic.</Card.Description>
			    </Card.Content>
			  </Card>
			  
			  
			</Card.Group>
		    </div>
		  )
	}
}

export default Team;