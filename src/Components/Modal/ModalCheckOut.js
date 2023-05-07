import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalCheckOut = (props) => {
  return (
    <>
      <Modal
        {...props}
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className='d-flex flex-column gap-3'>
              <div className='d-flex justify-content-around align-content-center'>
                <h6
                  className='mx-1 pe-2 font-bold
                '
                >
                  {" "}
                  Country &nbsp;
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
              <div className='d-flex justify-justify-content-between align-content-center'>
                <h6
                  className='mx-1 pe-2 font-bold
                '
                >
                  {" "}
                  City &nbsp;
                </h6>
                &nbsp; &nbsp; &nbsp; &nbsp;
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
              <div className='d-flex justify-content-around align-content-center'>
                <h6
                  className='mx-1 pe-2 font-bold
                '
                >
                  {" "}
                  Region &nbsp;
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
