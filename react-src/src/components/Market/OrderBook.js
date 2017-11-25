import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

import './OrderBook.css';

class OrderBook extends Component {

  render() {
    return (
    <Table celled compact={'very'}>
    <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='3' textAlign='center'>Buy Orders</Table.HeaderCell>
          <Table.HeaderCell colSpan='3' textAlign='center'>Sell Orders</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign='right' className='no-border'>Power</Table.HeaderCell>
          <Table.HeaderCell textAlign='right' className='no-border'>Total</Table.HeaderCell>
          <Table.HeaderCell textAlign='right' className='no-border'>Price</Table.HeaderCell>

          <Table.HeaderCell textAlign='left' className='no-border'>Price</Table.HeaderCell>
          <Table.HeaderCell textAlign='left' className='no-border'>Total</Table.HeaderCell>
          <Table.HeaderCell textAlign='left' className='no-border'>Power</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell positive textAlign='right' className='no-border'>No Name Specified</Table.Cell>
          <Table.Cell positive textAlign='right' className='no-border'>Unknown</Table.Cell>
          <Table.Cell positive textAlign='right' className='no-border'>None</Table.Cell>

          <Table.Cell negative textAlign='left' className='no-border'>No Name Specified</Table.Cell>
          <Table.Cell negative textAlign='left' className='no-border'>Unknown</Table.Cell>
          <Table.Cell negative textAlign='left' className='no-border'>None</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    );
  }
}

export default OrderBook;
