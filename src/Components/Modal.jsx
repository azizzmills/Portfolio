import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Row, Col, Image} from 'react-bootstrap'
import Gmail from './images/gmial.jpg'
import LinkedIn from './images/linkedIn.png'
import './Modal.css'


function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='d-flex justify-content-center align-items-center button-background' 
      onClick={handleShow}>
        Contact
       </Button>

      <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false} 
        className='Modal-body'             
      >
        <Modal.Header closeButton className='modal-header'>
          <Modal.Title>Modes of Communication</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
            <a href="https://www.linkedin.com/in/azizz-mills-5b15b7212/" target='_blank'>
              <Image src={LinkedIn} style={{
                height: '150px',
                width: 'auto',
                borderRadius: '50%'
              }}/>
            </a> 
            </Col>
            <Col>
            <a href="mailto:azizzmillz@gmail.com">
            <Image src={Gmail} style={{
              height: '150px',
              width: 'auto',
              borderRadius: '50%'
            }} />
           </a>
            </Col>
          </Row>            
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <Button onClick={handleClose} className='Modal_btn'>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Contact;