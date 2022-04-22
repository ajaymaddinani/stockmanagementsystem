import React from 'react'
import { Icon, Modal, Menu, Table, Button } from 'semantic-ui-react'
import AddEditStock from './AddEditStock'

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
      <Table.Row>
        <Table.Cell>
                 HCL Technologies Ltd
        </Table.Cell>
        <Table.Cell>9</Table.Cell>
        <Table.Cell>02 Jan 2020</Table.Cell>
        <Table.Cell>13 Jan 2022</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Reliance Petroliums</Table.Cell>
        <Table.Cell>25</Table.Cell>
        <Table.Cell>15 Mar 2021</Table.Cell>
        <Table.Cell>31 Dec 2021</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Bajaj Auto</Table.Cell>
        <Table.Cell>67</Table.Cell>
        <Table.Cell>22 Oct 2021</Table.Cell>
        <Table.Cell>13 Apr 2022</Table.Cell>
      </Table.Row>
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