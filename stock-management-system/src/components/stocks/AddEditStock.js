import React from 'react'
import { Button, Header, Form, Modal } from 'semantic-ui-react'

function ModalExampleModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal 
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open} 
      trigger={<Button primary floated='right' icon='line graph' content='Add Stock'></Button>}
    >
      <Modal.Header>Add Stock</Modal.Header>
      <Modal.Content >
        <Form>
            <Form.Field>
            <label>Portfolio Name</label>
            <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
            <label>Stocks</label>
            <input placeholder='Last Name' />
            </Form.Field>
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