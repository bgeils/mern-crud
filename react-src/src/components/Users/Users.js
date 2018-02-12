import React, { Component } from 'react';
import { Header, Table, Container } from 'semantic-ui-react';
import axios from 'axios';

class Users extends Component {

  constructor() {
    super();

    this.state = {
      users: [],
    }

    this.server = process.env.REACT_APP_API_URL || '';

    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers(){
    axios.get(
      `${this.server}/api/user/all`
    )
    .then((response) => {
      //console.log(response.data)
      this.setState({users: response.data})
    })
    .catch((err) => {
      throw err;
    });
  }
  render() {
    return (
      <Container>
      	<br/>
      	<br/>
        <Header content='Users'/>
        <Table>
          <Table.Header>
            <Table.Row>
            	<Table.HeaderCell >UID</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {this.state.users.map((item, index) => {
            return(
              <Table.Row key={item._id}>
                <Table.Cell>
                  {item.uid}
                </Table.Cell>
              </Table.Row>
            )
            })
          }
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default Users;
