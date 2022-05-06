import React from 'react'
import { Button, Dropdown, Segment, Table, Input  } from 'semantic-ui-react'
import axios from "axios";

function Prediction() {

  //Dummy Stocks call api to fetch this data
  const dummyStocks = [
    {
      key: 'Reliance',
      text: 'Reliance',
      value: 'Reliance'
    },
    {
      key: 'HCL',
      text: 'HCL',
      value: 'HCL'
    },
    {
      key: 'TCS',
      text: 'TCS',
      value: 'TCS'
    },
    {
      key: 'Bajaj',
      text: 'Bajaj',
      value: 'Bajaj'
    },
    {
      key: 'Infosys',
      text: 'Infosys',
      value: 'Infosys'
    },
    
  ]

  const [stocks, setStocks] =  React.useState(dummyStocks)


  const dummyPredictions =[
  {
    "tickerName":"test ticker 1",
    "date":"2020-01-01",
    "modelType":"test model 1",
    "bestConfig":"best config 1",
    "predictedLabel":"PL 1",
    "predictedValue":"PV 1"

  },
  {
    "tickerName":"test ticker 2",
    "date":"2022-04-23",
    "modelType":"test model 2",
    "bestConfig":"best config 2",
    "predictedLabel":"PL 2",
    "predictedValue":"PV 2"

  }
]
const [predictions, setPredictions] =  React.useState(null)
  
  return (
  

    <Segment>
    <br/>
      <label>Select Ticker</label>
      <Dropdown
        placeholder='Select Stock'
        fluid
        selection
        options={stocks}
        label='Stocks'
      />
       <label>Select Model</label>
      <Dropdown
        placeholder='Select Model'
        fluid
        selection
        options={stocks}
        label='Stocks'
      />
        <label>Enter Period</label>
        <br/>
       <Input placeholder='Period In Days' />
      <br/>
      <Button
          content="Clear"
          icon='cancel'
          negative
          floated='right'
          onClick={() => setPredictions(null)}
        />
      <Button
          content="View Predictions"
          icon='eye'
          primary
          floated='right'
          onClick={() => setPredictions(dummyPredictions)}
        />
         <br/>
         <br/>
         <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Ticker Name</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Model Type</Table.HeaderCell>
              <Table.HeaderCell>Best Config</Table.HeaderCell>
              <Table.HeaderCell>Predicted Label</Table.HeaderCell>
              <Table.HeaderCell>Predicted Value</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
           {
             predictions && predictions.map((info) =>(
                <Table.Row key={info.tickerName}>
                    <Table.Cell>{info.tickerName}</Table.Cell>
                <Table.Cell>{info.date}</Table.Cell>
                <Table.Cell>{info.modelType}</Table.Cell>
                <Table.Cell>{info.bestConfig}</Table.Cell>
                <Table.Cell>{info.predictedLabel}</Table.Cell>
                <Table.Cell>{info.predictedValue}</Table.Cell>
              </Table.Row>
              )
              )
            }
            
          </Table.Body>
  </Table>
    </Segment>
     
  )
}

export default Prediction