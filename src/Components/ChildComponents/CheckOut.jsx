import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { getToken } from "../../Helper/SessionHelper";
import axios from "axios";
import { BaseURL } from "../../Helper/config";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";

import { decode as base64_decode, encode as base64_encode } from "base-64";

import { AiOutlinePlus } from "react-icons/ai";
import ModalCheckOut from "../Modal/ModalCheckOut";

const CheckOut = () => {
  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 1000);
    if (newRandomNumber) {
      return newRandomNumber;
    } else {
      generateRandomNumber();
    }
  };
  const [DefaultAddress, setDefaultAddress] = useState({});
  console.log(DefaultAddress);
  const [modalShow, setModalShow] = React.useState(false);
  // let subtotal = 0;
  const location = useLocation();
  let [cart, setCart] = useState([]);
  let [subTotal, setSubTotal] = useState(0);
  let [addressBooks, setAddressBooks] = useState([]);

  let navigate = useNavigate();
  const UserDetails = JSON.parse(localStorage.getItem("UserDetails"));
  let Token = getToken();
  useEffect(() => {
    setCart(
      localStorage.getItem("checkOut")
        ? JSON.parse(localStorage.getItem("cartList"))
        : []
    );

    const fetchData = async () => {
      const res = await fetch(
        `${BaseURL}/get-single-cart-by-user/${UserDetails?._id}`
      );
      // convert the data to json
      const data = await res.json();
      setCart(data.data[0]?.cartData[0]?.cartItem);
      setSubTotal(data.data[0]?.cartData[0]?.foodTotalPrice);
    };

    // call the function
    fetchData();

    const addressBook = async () => {
      const res = await fetch(
        `${BaseURL}/get-address-book-by-user/${UserDetails?._id}`
      );
      const data = await res.json();
      setAddressBooks(data.data);
    };

    addressBook();
  }, []);

  let deliveryFee = 50;
  let smallOrderFee = 20;
  let taxesFee = 15;
  let totalPrice = subTotal + deliveryFee + taxesFee;

  const Order = async (e) => {
    e.preventDefault();
    // console.log(name, phoneNumber, country, city, region);
    let postBody = {};
    if (cart?.length !== 0) {
      postBody.orderDeliveryAddressID = addressBooks._id;
      postBody.orderBillingAddressID = "63e8c354f4e215d144fe500a";
      postBody.orderStatusID = "63e760ba7dfb72bf9f7d3083";
      postBody.customerID = UserDetails?._id;
      postBody.sellerID = "6427d85e4916b8f65ca9a092";
      postBody.orderNumber = "12";
      postBody.OrderLabel = "PREORDER";
      postBody.orderNotes = "gtff";
      postBody.orderTotalAmount = totalPrice;
      postBody.orderItems = cart;
    } else {
      toast.error("Please Add Some Food!", {
        position: "bottom-center",
      });
    }

    if (getToken()) {
      axios
        .post(BaseURL + "/create-orders", postBody, {
          headers: {
            token: Token,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.data.status === "Success") {
            toast.success("Order Place successful!", {
              position: "bottom-center",
            });
            localStorage.removeItem("checkOut");
          }
        });
    } else {
      localStorage.setItem("prevPath", location.pathname);
      navigate("/CustomerLogin");
    }
    console.log(generateRandomNumber());
    const data = {
      wmx_id: "WMX645b310b5c57b",
      merchant_order_id: "123ownfood",
      merchant_ref_id: generateRandomNumber(),
      app_name: "www.ownfood.com",
      cart_info: "WMX5443344555,www.ownfood.com",
      customer_name: "bijon",
      customer_email: "bijontalukder1247@gmail.com",
      customer_add: "chittagong,bangladesh",
      customer_phone: "01632354922",
      product_desc: "add cart",
      amount: totalPrice,
      currency: "BDT",
      options: base64_encode("s=www.ownfood.com,i=103.200.95.105"),
      callback_url: "http://localhost:3000/CheckOut",
      access_app_key: "4cb0958293f18545aada2838ceab0b373e0afe47",
      authorization: `Basic ${base64_encode(
        "ownfood_1079519317:ownfood_1748760319"
      )}`,
    };
    axios
      .post("https://sandbox.walletmix.com/init-payment-process", data, {
        headers: {
          token: Token,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.statusMsg === "Success") {
          console.log(res);
          toast.success("payment success!", {
            position: "bottom-center",
          });

          let waletToken = res.data.token;
          console.log(waletToken);
          axios
            .get(
              `https://sandbox.walletmix.com/bank-payment-process/${waletToken}`,
              {
                headers: {
                  wmx_id: "WMX645b310b5c57b",
                  authorization: `Basic ${base64_encode(
                    "ownfood_1079519317:ownfood_1748760319"
                  )}`,
                  access_app_key: "4cb0958293f18545aada2838ceab0b373e0afe47",
                  token: Token,
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              }
            )
            .then((res) => res.request.responseURL)
            .then((url) => {
              console.log(url);
              window.location.href = url;
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
  };

  return (
    <>
      <ModalCheckOut
        show={modalShow}
        Order={Order}
        onHide={() => setModalShow(false)}
      />
      <section className='checkOut'>
        <Container>
          <form onSubmit={Order}>
            <div className='inner'>
              <Row>
                <Col lg={7}>
                  <div className='leftWrapper'>
                    {/* <h3 className='sellerName'>Seller Name: Alex Kitchen</h3> */}
                    <div className='introDelivery'>
                      <h4>Delivery details</h4>
                      <p>Berlin</p>
                    </div>

                    <div className='introDelivery'>
                      <h4>Delivery Addresss</h4>
                      <div className='Priority '>
                        <div
                          className='p-inner shadow-sm'
                          onClick={() => setModalShow(true)}
                        >
                          <div className='d-flex align-content-center'>
                            <AiOutlinePlus size={20} />
                            <p className='mx-2'>Add New Address</p>
                          </div>
                          <div></div>
                        </div>

                        {addressBooks
                          .filter((i) => i.billingDefault === true)
                          .map((item) => (
                            <div
                              key={item._id}
                              onClick={() => setDefaultAddress(item)}
                              className='p-inner'
                            >
                              <div>
                                <p>Deliver to: {item?.Name}</p>
                                <p>{`${item?.addressText},${item?.RegionData[0]?.regionName},${item?.CityData[0]?.cityName},${item?.CountryData[0]?.countryName}`}</p>
                                <p>{item?.phoneNumber}</p>
                                {/* <p>{item?.phoneNumber}</p> */}
                              </div>
                              <div className='border border-success round p-1'>
                                <p>{item.addressType}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className='introDelivery'>
                      <h4>Payment</h4>
                      <div className='Priority'>
                        <div className='p-inner'>
                          <p>Add payment method</p>
                          <button>
                            <label for='Payment'>Choose a car:</label>
                            <select nameName='Payment' id='Payment'>
                              <option value='volvo'>Cash On Delivery</option>
                              <option value='saab' selected>
                                Paypal
                              </option>
                            </select>
                          </button>
                          <button>Paypal</button>
                          <form>
                            <button>Submit</button>
                          </form>
                        </div>
                        <div className='p-inner'>
                          <p>Add promo code</p>
                          <input type='text' />
                        </div>
                      </div>
                    </div>
                    <div className='introDelivery'>
                      <h4>Order summary</h4>
                      <div className='Priority'>
                        <div className='p-inner-single'>
                          <p>Total Items: {cart?.length}</p>
                        </div>
                        <div className='p-inner-items'>
                          {cart?.length > 0 ? (
                            <ul>
                              {cart?.map((item, index) => (
                                <li key={index}>
                                  <div>
                                    <span>{index + 1}</span>{" "}
                                    <strong>{item?.foodName}</strong>
                                  </div>
                                  <div className='img-inner'>
                                    <div className='img-file'>
                                      <img src={item?.foodImage} alt='' />
                                    </div>
                                    <div>
                                      <button>${item?.foodPrice}</button>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p>No Order Found</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={5}>
                  <div className='inner'>
                    <div className='rightWrapper'>
                      <div className='introDelivery'>
                        <h4>Order total : {cart?.length}</h4>
                      </div>
                      <div className='order-intro-list'>
                        <ul>
                          <li>
                            <span>Subtotal:</span> <span>${subTotal}</span>
                          </li>
                          <li>
                            <span>Delivery Fee:</span>{" "}
                            <span>${deliveryFee}</span>
                          </li>
                          <li>
                            <span>Small order fee:</span>{" "}
                            <span>${smallOrderFee}</span>
                          </li>
                          <li>
                            <span>Taxes:</span> <span>${taxesFee}</span>
                          </li>
                        </ul>
                      </div>
                      <div className='total'>
                        <p>Total:</p>
                        <span>${totalPrice}</span>
                      </div>
                      <div className='trams'>
                        <p>
                          <strong>Terms:</strong> All prices incl. VAT. For your
                          order the Uber Eats additional conditions apply
                        </p>
                        <p>
                          Information about the processing of your data is
                          available in our privacy notice
                        </p>
                        <p>
                          If you’re not around when the delivery person arrives,
                          they’ll leave your order at the door. By placing your
                          order, you agree to take full responsibility for it
                          once it’s delivered. Orders containing alcohol or
                          other restricted items may not be eligible for leave
                          at door and will be returned to the store if you are
                          not available.
                        </p>
                        <p>
                          You are entitled to the statutory rights of
                          cancellation. You can find more information about
                          these or their exclusion in the Uber Eats Additional
                          Terms and the offers of the partners.
                        </p>
                      </div>
                      <div className='payment-btn'>
                        <button type='submit'>Continue To Payment</button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
};

export default CheckOut;
