import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaHeart, FaPlay, FaQuestion, FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { BaseURL } from "../../Helper/config";

const FoodGallery = () => {
  const data = [
    {
      foodName: "Tandoori Chicken",
      userName: "Maira Sola",
      bgColor: "Fuchsia",
      link: "/",
      bgImg: "/Assets/Img/blog/01.jpg",
      profileImg: "/Assets/Img/profileKitchenImg/profile-kit1.png",
      price: "40",
    },
    {
      foodName: "Horseradish Relish",
      userName: "Danielle A. Willey",
      bgColor: "Purple",
      link: "/",
      bgImg: "/Assets/Img/blog/02.jpg",
      profileImg: "/Assets/Img/profileKitchenImg/profile-kit2.png",
      price: "60",
    },
    {
      foodName: "Guava Jelly",
      userName: "Gerald R. Danner",
      bgColor: "Pink",
      link: "/",
      bgImg: "/Assets/Img/blog/03.jpg",
      profileImg: "/Assets/Img/profileKitchenImg/profile-kit3.png",
      price: "46",
    },
    {
      foodName: "Mango Chutney",
      userName: "Linda S. Turner",
      bgColor: "Emerald",
      link: "/",
      bgImg: "/Assets/Img/blog/04.jpg",
      profileImg: "/Assets/Img/profileKitchenImg/profile-kit4.png",
      price: "30",
    },
    {
      foodName: "Pickapeppa Sauce",
      userName: "Alfredo L. Escalante",
      bgColor: "Fuchsia",
      link: "/",
      bgImg: "/Assets/Img/blog/05.jpg",
      profileImg: "/Assets/Img/profileKitchenImg/profile-kit5.png",
      price: "80",
    },
    {
      foodName: "Ginger Jam",
      userName: "Luis K. Stephens",
      bgColor: "Purple",
      link: "/",
      bgImg: "/Assets/Img/blog/06.jpg",
      profileImg: "/Assets/Img/profileKitchenImg/profile-kit6.png",
      price: "43",
    },
    {
      foodName: "Smoked Sprats",
      userName: "Bernice F. Jackson",
      bgColor: "Pink",
      link: "/",
      bgImg: "/Assets/Img/blog/07.jpg",
      profileImg: "/Assets/Img/profileKitchenImg/profile-kit7.png",
      price: "70",
    },
    {
      foodName: "Pancit Luglug",
      userName: "Noelia R. Hall",
      bgColor: "Emerald",
      link: "/",
      bgImg: "/Assets/Img/blog/08.jpg",
      profileImg: "/Assets/Img/profileKitchenImg/profile-kit8.png",
      price: "55",
    },
  ];
  let params = useParams();
  const [seller, setSeller] = useState([]);
  useEffect(() => {
    axios
      .get(BaseURL + "/get-single-public-become-seller/" + params.id)
      .then((res) => {
        setSeller(res.data.data?.[0]);
      });
  }, []);
  console.log(seller);
  return (
    <div className='Category ProfileFoodGallery'>
      {/* <section className='inner-section single-banner bannerstyle'>
        <div className='container text-white'></div>
      </section> */}
      <section className='inner-section shop-part'>
        <div className='container'>
          <div className='row content-reverse'>
            <div className='col-lg-12'>
              {/* <div className='row'>
                <div className='col-lg-12'>
                  <div className='top-filter d-flex justify-content-end'></div>
                </div>
              </div> */}
              <div className='row'>
                {seller?.foodData?.length !== undefined &&
                seller?.foodData?.length > 0 ? (
                  <>
                    {seller?.foodData?.map((item, index) => (
                      <Col xs={3} className='mb-4' key={index}>
                        <div className={`inner__body ${"Pink"}`}>
                          <div className='img__file'>
                            <img
                              className='img-fluid'
                              src={item?.foodImage}
                              alt=''
                            />
                            <div className='text_design'>
                              <h5>{item?.kitchenName}</h5>
                            </div>
                            <ul className='card-action-buttons'>
                              <li>
                                <a
                                  href='#'
                                  className='btn-floating  white'
                                  alt=''
                                >
                                  <i className='material-icons grey-text text-darken-3'>
                                    <FaQuestion />
                                  </i>
                                </a>
                              </li>
                              <li>
                                <a className='btn-floating accent-2'>
                                  <i className='material-icons like'>
                                    <FaHeart />
                                  </i>
                                </a>
                              </li>
                              <li>
                                <a id='buy' className='btn-floating  blue'>
                                  <i className='material-icons buy'>
                                    <FaStar />
                                  </i>
                                </a>
                              </li>
                              <li>
                                <a id='buy' className='btn-floating  blue'>
                                  <i className='material-icons buy'>
                                    <FaPlay />
                                  </i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className='text__file'>
                            <div className='d-flex justify-content-between align-items-center top_header'>
                              <p className='price'>${item?.foodPrice}</p>

                              <p className='intro'>
                                <i
                                  className='material-icons buy'
                                  //   onClick={() => handleAddToCart(item)}
                                >
                                  add_shopping_cart
                                </i>
                              </p>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                              <Link to={`/ProductsDetails/${item?._id}`}>
                                <p
                                  className=''
                                  style={{
                                    marginTop: -18,
                                    position: "relative",
                                  }}
                                >
                                  <h2>{item?.foodName?.slice(0, 10)}</h2>
                                </p>
                              </Link>
                            </div>
                            <ul className='bottom_footer'>
                              <li>
                                <img
                                  src='/Assets/Img/pot-1.jpeg'
                                  className='footer_img'
                                  alt=''
                                />
                              </li>
                              <li>
                                <img
                                  src='/Assets/Img/pot-2.jpeg'
                                  className='footer_img'
                                  alt=''
                                />
                              </li>
                              <li>
                                <img
                                  src='/Assets/Img/pot-3.jpeg'
                                  className='footer_img'
                                  alt=''
                                />
                              </li>
                            </ul>

                            {/* <div className='overlay__img'>
                              <img
                                className='img-fluid'
                                src={
                                  "/Assets/Img/profileKitchenImg/profile-kit6.png"
                                }
                                alt=''
                              />
                            </div> */}
                          </div>
                        </div>
                      </Col>
                    ))}
                  </>
                ) : (
                  <>
                    <div className='mt-4'>
                      <h2>No Food Found!</h2>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodGallery;
