import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { BaseURL } from "../../Helper/config";

const ModalCheckOut = (props) => {
  const [country, setCountry] = useState([]);
  const [validated, setValidated] = useState(false);
  const handleFocus = (event) => {
    const focusValue = event.target.value;
    console.log("Should be focus value", focusValue);
    // setFocusValue(focusValue);
  };
  useEffect(() => {
    const getCountry = async () => {
      const res = await fetch(`${BaseURL}/get-country`);
      const data = await res.json();
      if (data) {
        setCountry(data?.data);
      }
    };

    getCountry();
  }, []);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      const form = event.target;
      const country = form.country.value;
      console.log(country.countryName);
      // event.stopPropagation();
    }

    setValidated(true);
  };
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
            <div>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className='d-flex flex-column gap-3 '
              >
                <div className='d-flex justify-content-between align-content-center'>
                  <h6
                    className='mx-1 pe-2 font-bold
                '
                  >
                    {" "}
                    Name &nbsp;
                  </h6>
                  <Form.Group
                    md='4'
                    className='border border-dark rounded w-75'
                    controlId='validationCustom01'
                  >
                    <Form.Control required type='text' placeholder='Name' />
                    <Form.Control.Feedback className='text-success'>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className='d-flex justify-content-between align-content-center'>
                  <h6
                    className='mx-1 pe-2 font-bold
                '
                  >
                    {" "}
                    Phone &nbsp;
                  </h6>
                  <Form.Group
                    md='4'
                    className='border border-dark rounded w-75'
                    controlId='validationCustom01'
                  >
                    <Form.Control
                      required
                      type='text'
                      placeholder='Phone Number'
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </div>

                <div className='d-flex justify-content-around align-content-center'>
                  <h6
                    className='mx-1 pe-2 font-bold
                '
                  >
                    {" "}
                    Country &nbsp;
                  </h6>
                  <select
                    onChange={handleFocus}
                    name='country'
                    class='form-select border-dark  w-75'
                    aria-label='Default select example'
                  >
                    {country.map((i) => (
                      <option value={i._id}>{i?.countryName}</option>
                    ))}
                    {/* <option selected>Open this select menu</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option> */}
                  </select>
                </div>
                <div className='d-flex justify-justify-content-between align-content-center'>
                  <h6
                    className='mx-1 pe-2 font-bold me-1
                '
                  >
                    {" "}
                    City &nbsp;
                  </h6>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <select
                    class='form-select  w-75 border-dark'
                    aria-label='Default select  example'
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
                    class='form-select w-75 border-dark'
                    aria-label='Default select example'
                  >
                    <option selected>Open this select menu</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </select>
                </div>
                <button type='submit'>Place Order</button>
              </Form>
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
