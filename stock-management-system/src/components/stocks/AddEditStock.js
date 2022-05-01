import React from 'react'
import { Button, Header, Form, Modal,  Input, TextArea, Select, Dropdown  } from 'semantic-ui-react'
import axios from "axios";

function ModalExampleModal() {

  const client = axios.create({
    baseURL: "https://localhost:4000/stocks" 
  });

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

  const [open, setOpen] = React.useState(false)
  const [stocks, setStocks] =  React.useState(dummyStocks)

  React.useEffect(() => {
    client.get("/stocks").then((response) => {
      setStocks(response.data);
    });
  }, []);


  const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

  
  return (
    <Modal 
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open} 
      trigger={<Button primary floated='right' icon='line graph' content='Add Stock'></Button>}
    >
      <Modal.Header>Add Stock</Modal.Header>
      <Modal.Content >
      <Form >
        <Form.Field
          id='txtPortfolioName'
          control={Input}
          label='Portfolio'
        />
        <Dropdown
        placeholder='Select Stock'
        fluid
        selection
        options={stocks}
        label='Stocks'
      />
  </Form>
      </Modal.Content>
      <Modal.Actions>
      <Button
          content="Save"
          icon='save'
          onClick={() => setOpen(false)}
          positive
        />
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal