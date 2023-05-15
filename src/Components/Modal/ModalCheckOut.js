import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { BaseURL } from "../../Helper/config";
import axios from "axios";
import { getToken } from "../../Helper/SessionHelper";
import { toast } from "react-hot-toast";

const ModalCheckOut = (props) => {
  const { Order } = props;
  console.log(Order);
  const [country, setCountry] = useState([]);
  const [countryID, setCountryID] = useState("63eb3c5af7ec2bc366654b88");
  const [regionID, setReigionID] = useState("63e8b2e4798c4de2d1ba6c3b");
  const [validated, setValidated] = useState(false);
  const [reigion, setReigion] = useState([]);
  const [city, setCity] = useState([]);
  console.log(regionID);
  const UserDetails = JSON.parse(localStorage.getItem("UserDetails"));
  let Token = getToken();
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

    const getReigion = async () => {
      const res = await fetch(`${BaseURL}/get-reigion-by-country/${countryID}`);
      const data = await res.json();
      if (data) {
        setReigion(data?.data);
      }
    };

    getReigion();
    const getCity = async () => {
      const res = await fetch(`${BaseURL}/get-city-by-reigion/${regionID}`);
      const data = await res.json();
      if (data) {
        setCity(data?.data);
      }
    };
    getCity();
  }, [countryID, regionID]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const country = form.country.value;
    const name = form.name.value;
    const phoneNumber = form.phoneNumber.value;
    const city = form.city.value;
    const region = form.region.value;
    const addressType = form.addressType.value;
    const address = form.address.value;
    console.log(address);
    if (getToken()) {
      axios
        .post(
          BaseURL + "/create-address-book",
          {
            cityID: city,
            regionID: region,
            countryID: country,
            customerID: UserDetails?._id,
            // createdBy: "63e4bd183291fd211a3ad53e",
            addressText: address,
            addressType: addressType,
            // shippingDefault: true,
            // billingDefault: true,
            // latitude: "203250",
            // logitude: "8569200",
            // zipCode: "45220",
            // status: true,
            // updatedBy: "Raj",
          },
          {
            headers: {
              token: Token,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.data.status === "Success") {
            toast.success("Order Place successful!", {
              position: "bottom-center",
            });
            // localStorage.removeItem("checkOut");
          }
        });
    }
    // Order(name, phoneNumber, country, city, region);
    // }

    setValidated(true);
  };
  //console.log(city);
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
                <div className='shadow-sm p-3 d-flex flex-column gap-2'>
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
                      <Form.Control
                        required
                        type='text'
                        name='name'
                        placeholder='Name'
                      />
                      <Form.Control.Feedback className='text-success'></Form.Control.Feedback>
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
                        name='phoneNumber'
                        placeholder='Phone Number'
                      />
                      <Form.Control.Feedback></Form.Control.Feedback>
                    </Form.Group>
                  </div>
                </div>
                <div className='shadow-sm p-3 d-flex flex-column gap-2'>
                  <div className='d-flex justify-content-around align-content-center'>
                    <h6
                      className='mx-1 pe-2 font-bold
                '
                    >
                      {" "}
                      Country &nbsp;
                    </h6>
                    <select
                      onChange={(e) => setCountryID(e.target.value)}
                      name='country'
                      class='form-select border-dark  w-75'
                      aria-label='Default select example'
                    >
                      {country?.map((i) => (
                        <option value={i._id}>{i?.countryName}</option>
                      ))}
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
                      onChange={(e) => setReigionID(e.target.value)}
                      name='region'
                      class='form-select w-75 border-dark'
                      aria-label='Default select example'
                    >
                      {reigion?.map((i) => (
                        <option value={i._id}>{i?.regionName}</option>
                      ))}
                    </select>
                  </div>

                  <div className='d-flex justify-justify-content-between align-content-center'>
                    <h6
                      className='mx-1 pe-2 font-bold me-1
                '
                    >
                      {" "}
                      City
                    </h6>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <select
                      class='form-select  w-75 border-dark'
                      name='city'
                      aria-label='Default select  example'
                    >
                      {city.length > 0
                        ? city?.map((i) => (
                            <option value={i._id}>{i?.cityName}</option>
                          ))
                        : null}
                    </select>
                  </div>
                  <div className='d-flex justify-content-between align-content-center'>
                    <h6
                      className='mx-1 pe-2 font-bold
                '
                    >
                      {" "}
                      Address &nbsp;
                    </h6>
                    <Form.Group
                      md='4'
                      className='border border-dark rounded w-75'
                      controlId='validationCustom01'
                    >
                      <Form.Control
                        required
                        type='text'
                        name='address'
                        placeholder='House no / Building / street / area'
                      />
                      <Form.Control.Feedback></Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div>
                    <h6>Address Label</h6>
                    <div class='radio-toolbar d-flex'>
                      <div className='mx-2'>
                        <input
                          type='radio'
                          id='office'
                          name='addressType'
                          value='office'
                          checked
                        />
                        <label for='office'>Office</label>
                      </div>
                      <div className='mx-2'>
                        <input
                          type='radio'
                          id='home'
                          name='addressType'
                          value='home'
                        />
                        <label for='home'>Home</label>
                      </div>
                    </div>
                  </div>
                </div>

                <button type='submit'>Place Order</button>
              </Form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCheckOut;
