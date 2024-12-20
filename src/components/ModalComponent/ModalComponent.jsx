import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalComponent = ({title,onSave,onCloseModal,renderBody}) => {
  return (
    <Modal.Dialog>
    <Modal.Header >
      <Modal.Title>
        {title}
      </Modal.Title>
    </Modal.Header>

    <Modal.Body>
      {renderBody}
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={onCloseModal} variant="secondary">Close</Button>
   { onSave  && <Button variant="primary" onClick={onSave} >Save changes</Button>}
    </Modal.Footer>
  </Modal.Dialog>
  )
}

export default ModalComponent