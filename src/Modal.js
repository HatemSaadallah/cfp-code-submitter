import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function MyVerticallyCenteredModal({
  show,
  onHide,
  code,
  nameOfQuestion,
}) {
  return (
    <Modal
      show={show}
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
        <h4 className="question_name">{nameOfQuestion}</h4>
        <p>

          <SyntaxHighlighter language="python" style={docco}>
            {code}
          </SyntaxHighlighter>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
MyVerticallyCenteredModal.defaultProps = {
  show: false,
  onHide: null,
  code: '',
  nameOfQuestion: '',
};

MyVerticallyCenteredModal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  code: PropTypes.string,
  nameOfQuestion: PropTypes.string,
};
export default MyVerticallyCenteredModal;
