import React from 'react'
import { Icon, Modal, Menu, Table, Button } from 'semantic-ui-react'
import AddEditStock from './AddEditStock'

//Do an api call to populate this array
var stocks = [
{
  portfolioName:'HCL Technologies Ltd',
  stocks: '9',
  createdOn: '02 Jan 2020',
  modifiedOn: '13 Jan 2020'
},
{
  portfolioName:'Reliance Petroliums',
  stocks: '19',
  createdOn: '12 Feb 2020',
  modifiedOn: '30 Nov 2020'
},
{
  portfolioName:'Facebook',
  stocks: '93',
  createdOn: '12 Mar 2020',
  modifiedOn: '22 May 2020'
},
{
  portfolioName:'Amazon',
  stocks: '45',
  createdOn: '14 Apr 2020',
  modifiedOn: '16 Jul 2020'
},
{
  portfolioName:'Starbucks',
  stocks: '59',
  createdOn: '02 Aug 2020',
  modifiedOn: '23 Dec 2020'
}

];


const Stocks = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Portfolio Name</Table.HeaderCell>
        <Table.HeaderCell>Stocks</Table.HeaderCell>
        <Table.HeaderCell>Created On</Table.HeaderCell>
        <Table.HeaderCell>Modified On</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        stocks.map((stock) =>(
          <Table.Row>
          <Table.Cell>{stock.portfolioName}</Table.Cell>
          <Table.Cell>{stock.stocks}</Table.Cell>
          <Table.Cell>{stock.createdOn}</Table.Cell>
          <Table.Cell>{stock.modifiedOn}</Table.Cell>
        </Table.Row>
        )
        )
      }
     
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='4'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell colSpan='4'>
         <AddEditStock />
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default Stocks