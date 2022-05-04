import React from 'react'
import { Icon, Modal, Menu, Table, Button } from 'semantic-ui-react'
import AddEditStock from './AddEditStock'
import axios from "axios";



const Stocks = () => {
  
const baseURL= "http://localhost:8000/lasttraded" 

const [isLoading, setLoading] = React.useState(true);
const [lasttradedinfo, setLasttradedinfo] =  React.useState(null) 

// lasttradedinfo =[ {
//   "ticker":"test",
//   "name":"test",
//   "last_traded_date":"9999-01-01",
//   "Close":0.00,
//   "high":0.00,
//   "low":0.00,
//   "open":0.00,
//   "volume":0

// }]



React.useEffect(() => {
axios.get(baseURL).then((response) => {
  console.log(response)
  setLasttradedinfo(response.data);
  setLoading(false);
  })
.catch((error) => {  
  console.log(error)
});
}, []);

if (isLoading) {
  return <div className="App" >  
  <br/>  
    Loading...</div>;
}

return  (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Ticker</Table.HeaderCell>
        <Table.HeaderCell>Company Name</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Close</Table.HeaderCell>
        <Table.HeaderCell>High</Table.HeaderCell>
        <Table.HeaderCell>Low</Table.HeaderCell>
        <Table.HeaderCell>Open</Table.HeaderCell>
        <Table.HeaderCell>Volume Traded</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {
        lasttradedinfo.map((info) =>(
          <Table.Row key={info.ticker}>
          <Table.Cell>{info.ticker}</Table.Cell>
          <Table.Cell>{info.name}</Table.Cell>
          <Table.Cell>{info.last_traded_date}</Table.Cell>
          <Table.Cell>{info.Close}</Table.Cell>
          <Table.Cell>{info.high}</Table.Cell>
          <Table.Cell>{info.low}</Table.Cell>
          <Table.Cell>{info.open}</Table.Cell>
          <Table.Cell>{info.volume}</Table.Cell>
        </Table.Row>
        )
        )
      }
     
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='4'>
         <AddEditStock />
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)
    }

export default Stocks