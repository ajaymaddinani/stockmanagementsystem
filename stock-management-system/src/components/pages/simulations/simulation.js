import React from 'react'
import { Button, Dropdown, Segment, Table, Input, Message  } from 'semantic-ui-react'
import { InputFile } from 'semantic-ui-react-input-file'
import axios from "axios";

function Simulation() {

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

  const [inProgress, setProgress] =  React.useState(false)
  
  return (
  

    <Segment>
    <br/>
      <label>Select Ticker</label>
      <Dropdown
        placeholder='Select Stock'
        fluid
        selection
        options={dummyStocks}
        label='Stocks'
      />
      <br/>
       <InputFile
  input={{
    id: 'input-control-id'
  }}
/>
  
      <br/>
      <Button
          content="Clear"
          icon='cancel'
          negative
          floated='right'
         onClick={() => setProgress(false)}
        />
      <Button
          content="Simulate"
          icon='cogs'
          primary
          floated='right'
         onClick={() => setProgress(true)}
        />
      
         <br/>
         <br/>
       {inProgress && <Message
      success
      header='Simulation Inprogress'
    />}  
    </Segment>
     
  )
}

export default Simulation