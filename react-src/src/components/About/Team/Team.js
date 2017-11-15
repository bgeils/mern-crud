import React, { Component } from 'react';
import {  Image, Card } from 'semantic-ui-react';

import './Team.css';
import alec from '../../../media/AlecDorenkamp.jpg';

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
			      <Card.Description>Arun is a Software Engineer passionate about full-stack and embedded system development.  He enjoys taking on difficult problems and tinkers with drones in his free time.</Card.Description>
			    </Card.Content>
			  </Card>
		    
		    <Card>
			  <Image src={alec} className="team-pic" />
			    <Card.Content>
			      <Card.Header> Alec Dorenkamp</Card.Header>
			      <Card.Meta>Joined in 2017</Card.Meta>
			      <Card.Description>Alec is a software developer who enjoys web development, data analytics, and full-stack Java work.  He loves logic puzzles and is a self-proclaimed RegEx aficionado.</Card.Description>
			    </Card.Content>
			  </Card>

		    <Card>
			  <Image src='http://sdmay18-41.sd.ece.iastate.edu/images/neig.jpg' className="team-pic" />
			    <Card.Content>
			      <Card.Header> Noah Eigenfeld</Card.Header>
			      <Card.Meta>Joined in 2017</Card.Meta>
			      <Card.Description>Noah is a software developer with experience in web and full-stack Java development. When he is not writing code, he enjoys reading books and writing fiction, short- and long-form.</Card.Description>
			    </Card.Content>
			  </Card>

			<Card>
			  <Image src='https://scontent.fdsm1-1.fna.fbcdn.net/v/t1.0-9/17264490_1644216355595733_823841743167110404_n.jpg?oh=226866724de5c6fd4544dec2d3cb9450&oe=5AA1B6F4' className="team-pic" />
			    <Card.Content>
			      <Card.Header> Brendon Geils</Card.Header>
			      <Card.Meta>Joined in 2016</Card.Meta>
			      <Card.Description>Brendon is a electrical and software engineer with a passion for sustainability. His hobbies include chess, philosophy, and running. </Card.Description>
			    </Card.Content>
			  </Card>
			  <Card>
			  <Image src='http://sdmay18-41.sd.ece.iastate.edu/images/jack.png' className="team-pic" />
			    <Card.Content>
			      <Card.Header> Jack Myers</Card.Header>
			      <Card.Meta>Joined in 2017</Card.Meta>
			      <Card.Description>Jack is an electrical engineer with interest in hardware design and embedded systems. He believes assembly is the only real programming language.</Card.Description>
			    </Card.Content>
			  </Card>
			  <Card>
			  <Image src='http://sdmay18-41.sd.ece.iastate.edu/images/joe.jpg' className="team-pic" />
			    <Card.Content>
			      <Card.Header> Joe Staudacher</Card.Header>
			      <Card.Meta>Joined in 2017</Card.Meta>
			      <Card.Description>Joe Staudacher is an Electrical Engineering major with an emphasis on power distribution and generation. His hobbies include basketball, crossword puzzles, and watching Jeopardy.</Card.Description>
			    </Card.Content>
			  </Card>
			  
			  
			</Card.Group>
		    </div>
		  )
	}
}

export default Team;