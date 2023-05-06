import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalCheckOut = (props) => {
  return (
    <>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <div className='d-flex justify-content-around align-content-center'>
                <h6
                  className='mx-1 pe-2 font-bold
                '
                >
                  {" "}
                  Country
                </h6>
                <select
                  class='form-select form-select-sm'
                  aria-label='Default select example'
                >
                  <option selected>Open this select menu</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
              </div>
              <div></div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCheckOut;
