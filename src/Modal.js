import React from 'react';
import { Modal, Button } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Question Submitted Successfully
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h4>{props.nameOfQuestion}</h4>
        <p>

          <SyntaxHighlighter language="python" style={docco}>
            {props.code}
          </SyntaxHighlighter>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;