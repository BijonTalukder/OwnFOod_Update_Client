import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CenterSlider from "../Components/ChildComponents/CenterSlider";
import ReactPlayer from "react-player";
import { FaCartPlus } from "react-icons/fa";
import Header from "../Components/Common/Header";
import ProfileFoodGallery from "../Components/ChildComponents/ProfileFoodGallery";

const UpdateSellerProfile = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      if (scrollPosition > 1000) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const a = [1, 2, 3, 5, 3, 3, 1, 1, 1];
  return (
    <div className=''>
      <Header />
      <div className='UpdateSellerProfile row g-0'>
        {/* first section start */}
        <div className='col-12 p'>
          <div className='d-flex profile-section gap-2'>
            <div className='col-8 '>
              <div className='inner-section'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div>
                    {" "}
                    <h1 className='text-uppercase SellerName'>
                      Sadiya Talukder
                    </h1>
                  </div>
                  <div>
                    <h6>
                      <span className='sellerId'> seller id:</span> Something123
                    </h6>
                  </div>
                </div>

                <h3>Kitchen Name: Sadia kitchen</h3>
                <p>Catering Service: Saiya</p>
                <p>I am Bangladeshi</p>
                <p>SellerID:sadiya123</p>
                <div className='othersinfo d-flex justify-content-between'>
                  <div className=''>
                    <div className='msr'>
                      <h5 className='ms-1'>My Skill</h5>
                    </div>

                    <div className='d-flex'>
                      <div className='s-content d-flex justify-content-center align-items-center me-1'>
                        <span>someresdfgfsdf</span>
                      </div>
                      <div className='s-content d-flex justify-content-center align-items-center me-1'>
                        <span>someresdfgfsdf</span>
                      </div>
                      <div className='s-content d-flex justify-content-center align-items-center me-1'>
                        <span>someresdfgfsdf</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='msr'>
                      <h5 className='ms-1'>My Restriction</h5>
                    </div>

                    <div className='d-flex'>
                      <div className='s-content d-flex justify-content-center align-items-center me-1'>
                        <span>someresdfgfsdf</span>
                      </div>
                      <div className='s-content d-flex justify-content-center align-items-center me-1'>
                        <span>someresdfgfsdf</span>
                      </div>
                      <div className='s-content d-flex justify-content-center align-items-center me-1'>
                        <span>someresdfgfsdf</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col  '>
              <div className='d-flex align-items-center justify-content-center'>
                <div className='profile-picture'>
                  <img
                    alt=''
                    className='img-fluid '
                    src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* first section end */}

        {/* second section start */}
        <div className='col-12 second-section mt-4 shadow-sm'>
          <div className='row gap-1 '>
            <div className='col-6 center-block center-slider'>
              <CenterSlider />
            </div>
            <div className='col video-player  '>
              <Tabs>
                <div className='row   '>
                  <div className='col-8 video-player-item'>
                    <TabPanel>
                      <div className='video'>
                        <ReactPlayer
                          className='react-player'
                          //  playing
                          controls
                          // light={<img className="img-fluid" src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='Thumbnail' />}
                          url={"https://www.youtube.com/watch?v=GPBe-oYlG1A"}
                          width='100%'
                          height='100%'
                        />
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className='wrapper '>
                        <div className='video'>
                          <ReactPlayer
                            className='video-player'
                            url={"https://www.youtube.com/watch?v=NLPuCclm5lA"}
                            width='100%'
                            height='100%'
                          />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className='wrapper '>
                        <div className='video'>
                          <ReactPlayer
                            className='video-player'
                            url={"https://www.youtube.com/watch?v=NLPuCclm5lA"}
                            width='100%'
                            height='100%'
                          />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className='wrapper '>
                        <div className='video'>
                          <ReactPlayer
                            className='video-player d-flex align-items-center justify-content-center'
                            url={"https://www.youtube.com/watch?v=NLPuCclm5lA"}
                            width='80%'
                            height='80%'
                          />
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                  <div className='col-4 video-list'>
                    <div className='row gap-2 '>
                      <TabList>
                        <Tab className='col video-item shadow-sm'>
                          <div className='row d-flex justify-content-around  align-items-center shadow-sm'>
                            <div className='small-video col-4 '>
                              <img
                                className='img-fluid'
                                src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                                alt='Thumbnail'
                              />
                            </div>
                            <div className='text-dark col-8'>
                              <p>
                                Lorem ipsum dolor sit amet, some thing or
                                another
                              </p>
                            </div>
                          </div>
                        </Tab>
                        <Tab className='col video-item shadow-sm'>
                          <div className='row d-flex justify-content-around  align-items-center shadow-sm'>
                            <div className='small-video col-4 '>
                              <img
                                className='img-fluid'
                                src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                                alt='Thumbnail'
                              />
                            </div>
                            <div className='text-dark col-8'>
                              <p>
                                Lorem ipsum dolor sit amet, some thing or
                                another
                              </p>
                            </div>
                          </div>
                        </Tab>
                        <Tab className='col video-item shadow-sm'>
                          <div className='row d-flex justify-content-around  align-items-center shadow-sm'>
                            <div className='small-video col-4 '>
                              <img
                                className='img-fluid'
                                src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                                alt='Thumbnail'
                              />
                            </div>
                            <div className='text-dark col-8'>
                              <p>
                                Lorem ipsum dolor sit amet, some thing or
                                another
                              </p>
                            </div>
                          </div>
                        </Tab>
                        <Tab className='col video-item shadow-sm'>
                          <div className='row d-flex justify-content-around  align-items-center shadow-sm'>
                            <div className='small-video col-4 '>
                              <img
                                className='img-fluid'
                                src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                                alt='Thumbnail'
                              />
                            </div>
                            <div className='text-dark col-8'>
                              <p>
                                Lorem ipsum dolor sit amet, some thing or
                                another
                              </p>
                            </div>
                          </div>
                        </Tab>
                        <Tab className='col video-item shadow-sm'>
                          <div className='row d-flex justify-content-around  align-items-center shadow-sm'>
                            <div className='small-video col-4 '>
                              <img
                                className='img-fluid'
                                src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                                alt='Thumbnail'
                              />
                            </div>
                            <div className='text-dark col-8'>
                              <p>
                                Lorem ipsum dolor sit amet, some thing or
                                another
                              </p>
                            </div>
                          </div>
                        </Tab>
                      </TabList>
                    </div>
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        {/* second section end */}

        {/* menubar start */}
        {/* className={isSticky ? "sticky MenuBar col-12" : "MenuBar col-12"} */}

        <div
          className={`sticky-item MenuBar col-12  MenuBar col-12  ${
            isSticky ? "sticky " : ""
          }`}
        >
          <nav class='menu-bar'>
            <ul>
              <li>
                <a href='#'>My Profile</a>
              </li>
              <li>
                <a href='#'>Kacchi Biryani </a>
              </li>
              <li>
                <a href='#'>Panta Ilish</a>
                <ul class='submenu'>
                  <li>
                    <a href='#'>Panta Ilish</a>
                  </li>
                  <li>
                    <a href='#'>Panta Ilish </a>
                  </li>
                  <li>
                    <a href='#'>Panta Ilish</a>
                  </li>
                  <li>
                    <a href='#'>Panta Ilish</a>
                  </li>
                  <li>
                    <a href='#'>Panta Ilish Specials</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>Vuna Khichuri</a>
              </li>
              <li>
                <a href='#'>Morog Polao</a>
              </li>
              <li>
                <a href='#'>Reservations</a>
              </li>
              <li>
                <a href='#'>Grill Chicken</a>
              </li>
              <li>
                <a href='#'>Haleem</a>
              </li>
              <li>
                <a href='#'>Seekh Kebab</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* menuvbar end */}

        {/* third section start */}
        {/* <div className='col-12 mt-4'>
          <Tabs>
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div> */}
        {/* third section end */}
        {/* fourth section start */}
        <div className='col-12 mt-1'>
          <div className='row'>
            <div
              className='col-4 shadow-sm   '
              //  style={{background:"#7c3aed"}}
            >
              <h5>Dish I Made</h5>
              <div className='row gx-0'>
                {a.map((i) => (
                  <div className='col-4 gap-1'>
                    <img
                      style={{ border: "3px solid white" }}
                      src='/Assets/Img/barger.jpg'
                      className='img-fluid'
                      alt=''
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='col-4 shadow-sm  '>
              <h4>My Recipe</h4>
              <div className='row gap-1 m-2'>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center text-center'>
                    <div className='col-12'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            style={{ width: "457px", height: "200px" }}
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-12 text-center'>title sdfsadfs sdf</div>
                  </div>
                </div>

                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-8'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-8'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4 shadow-sm'>
              <h5>Experiment Food</h5>
              <div className='row gx-0'>
                {a.map((i) => (
                  <div className='col-4'>
                    <img
                      style={{ border: "3px solid white" }}
                      src='/Assets/Img/barger.jpg'
                      className='img-fluid'
                      alt=''
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* fourth section end */}
        <div className='col-12 mt-5'>
          <div className='row g-0'>
            <div className='col-4 shadow-sm  '>
              <h4>Special Offer</h4>
              <div className='row gap-1 m-2'>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center text-center'>
                    <div className='col-12'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            style={{ width: "457px", height: "200px" }}
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-12 text-center'>title sdfsadfs sdf</div>
                  </div>
                </div>

                <div className='row gap-0 g-0 '>
                  <div className='col-12 shadow-sm'>
                    <div className='row   align-items-center'>
                      <div className='col-4'>
                        <div className='d-flex justify-content-center'>
                          <div>
                            <img
                              src='/Assets/Img/barger.jpg'
                              className='img-fluid'
                              alt=''
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-6'>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Quasi, animi.
                        </p>
                      </div>
                      <div className='col-2'>
                        <div className='d-flex flex-column align-items-center justify-content-between'>
                          <div>
                            <h6>200$</h6>
                          </div>
                          <div className='d-flex justify-content-center align-items-center'>
                            <div className='rounded-circle cart-item'>
                              {" "}
                              <FaCartPlus className='' size={20} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 shadow-sm'>
                    <div className='row  p-2 align-items-center'>
                      <div className='col-2'>
                        <div className='d-flex flex-column align-items-center justify-content-between'>
                          <div className='d-flex justify-content-center align-items-center'>
                            <div className='rounded-circle cart-item '>
                              {" "}
                              <FaCartPlus className='' size={20} />
                            </div>
                          </div>
                          <div>
                            <h6>200$</h6>
                          </div>
                        </div>
                      </div>
                      <div className='col-6'>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Quasi, animi.
                        </p>
                      </div>

                      <div className='col-4'>
                        <div className='d-flex justify-content-center'>
                          <div>
                            <img
                              src='/Assets/Img/barger.jpg'
                              className='img-fluid'
                              alt=''
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 shadow-sm'>
                    <div className='row  p-2 align-items-center'>
                      <div className='col-4'>
                        <div className='d-flex justify-content-center'>
                          <div>
                            <img
                              src='/Assets/Img/barger.jpg'
                              className='img-fluid'
                              alt=''
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-6'>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Quasi, animi.
                        </p>
                      </div>
                      <div className='col-2'>
                        <div className='d-flex flex-column align-items-center justify-content-between'>
                          <div>
                            <h6>200$</h6>
                          </div>
                          <div className='d-flex justify-content-center align-items-center'>
                            <div className='rounded-circle cart-item '>
                              {" "}
                              <FaCartPlus className='' size={20} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='col-4 shadow-sm  '>
              <h4 className='ms-2'>Special Offers</h4>
              <div className='row gap-1 m-2'>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item'>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                        <div>
                          <h6>200$</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>

                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className='col-4 shadow-sm  '>
              <h4>Instant Food</h4>
              <div className='row gap-1 m-2'>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4 shadow-sm overflow-hidden'>
              <h5>Advance Menu </h5>
              <div className='row justify-content-center align-items-center d-flex gap-1'>
                <div className='col-11 '>
                  <div className='row gap-1'>
                    <div className='col border text-center'>
                      <h5>Burger</h5>
                    </div>
                    <div className='col border text-center'>
                      <h5>Fish</h5>
                    </div>
                    <div className='col border text-center'>
                      <h5>Biryani</h5>
                    </div>
                  </div>
                </div>
                <div className='col-11 '>
                  <div className='row gap-1 '>
                    <div className='col border text-center'>
                      <h5>Burger</h5>
                    </div>
                    <div className='col border text-center'>
                      <h5>Fish</h5>
                    </div>
                    <div className='col border text-center'>
                      <h5>Biryani</h5>
                    </div>
                  </div>
                </div>
                <div className='col-11 '>
                  <div className='row gap-1 '>
                    <div className='col border text-center'>
                      <h5>Burger</h5>
                    </div>
                    <div className='col border text-center'>
                      <h5>Fish</h5>
                    </div>
                    <div className='col border text-center'>
                      <h5>Biryani</h5>
                    </div>
                  </div>
                </div>
                <div className='col-11 '>
                  <div className='row gap-1 '>
                    <div className='col border text-center'>
                      <h5>Burger</h5>
                    </div>
                    <div className='col border text-center'>
                      <h5>Fish</h5>
                    </div>
                    <div className='col border text-center'>
                      <h5>Biryani</h5>
                    </div>
                  </div>
                </div>
                <div className='col-11 '>
                  <div className='row gap-1 '>
                    <div className='col border text-center'>
                      <h5>Burger</h5>
                    </div>
                    <div className='col border text-center'>
                      <h5>Fish</h5>
                    </div>
                    <div className='col border text-center'>
                      <h5>Biryani</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 mt-5'>
          <div className='row'>
            <div className='col-4 shadow-sm  '>
              <h4>Catering Food</h4>
              <div className='row gap-1 m-2'>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4 shadow-sm  '>
              <h4>Wish Food</h4>
              <div className='row gap-1 m-2'>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4 shadow-sm overflow-hidden'>
              <h5>Seller Near ME</h5>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin'
                width='600'
                height='380'
                frameborder='0'
                style={{ border: 0, overflow: "hidden" }}
                allowfullscreen=''
                aria-hidden='false'
                tabindex='0'
              ></iframe>
            </div>
          </div>
        </div>
        <div className='col-12 mt-5 '>
          <div className='row'>
            <div className='col-4 shadow-sm p-2'>
              <div className='row comments-section'>
                <h4 className='m-1 text-uppercase font-monospace'>
                  User Review
                </h4>
                <div className='col-12 '>
                  <div class='comment'>
                    <div class='comment-header'>
                      <img
                        class='avatar'
                        src='/Assets/Img/avatar/01.jpg'
                        alt='User 1'
                      />
                      <div class='comment-meta'>
                        <h3>User 1</h3>
                        <span class='timestamp'>June 10, 2023</span>
                      </div>
                    </div>
                    <div class='comment-content'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed vitae neque vitae sapien cursus pharetra non sit
                        amet nisi. Sed pellentesque elit in neque auctor, ut
                        rhoncus nulla dapibus.
                      </p>
                    </div>
                    {/* <div class="comment-actions">
            <button class="like-button">Like</button>
            <button class="reply-button">Reply</button>
        </div> */}
                  </div>

                  <div class='comment'>
                    <div class='comment-header'>
                      <img
                        class='avatar'
                        src='/Assets/Img/avatar/02.jpg'
                        alt='User 2'
                      />
                      <div class='comment-meta'>
                        <h3>User 2</h3>
                        <span class='timestamp'>June 11, 2023</span>
                      </div>
                    </div>
                    <div class='comment-content'>
                      <p>Thank you for your comment!</p>
                    </div>
                    {/* <div class="comment-actions">
            <button class="like-button">Like</button>
            <button class="reply-button">Reply</button>
        </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4 shadow-sm p-2'>
              <div className='row comments-section'>
                <h4 className='m-1 text-uppercase font-monospace'>
                  User Review
                </h4>
                <div className='col-12 '>
                  <div class='comment'>
                    <div class='comment-header'>
                      <img
                        class='avatar'
                        src='/Assets/Img/avatar/01.jpg'
                        alt='User 1'
                      />
                      <div class='comment-meta'>
                        <h3>User 1</h3>
                        <span class='timestamp'>June 10, 2023</span>
                      </div>
                    </div>
                    <div class='comment-content'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed vitae neque vitae sapien cursus pharetra non sit
                        amet nisi. Sed pellentesque elit in neque auctor, ut
                        rhoncus nulla dapibus.
                      </p>
                    </div>
                    {/* <div class="comment-actions">
            <button class="like-button">Like</button>
            <button class="reply-button">Reply</button>
        </div> */}
                  </div>

                  <div class='comment'>
                    <div class='comment-header'>
                      <img
                        class='avatar'
                        src='/Assets/Img/avatar/02.jpg'
                        alt='User 2'
                      />
                      <div class='comment-meta'>
                        <h3>User 2</h3>
                        <span class='timestamp'>June 11, 2023</span>
                      </div>
                    </div>
                    <div class='comment-content'>
                      <p>Thank you for your comment!</p>
                    </div>
                    {/* <div class="comment-actions">
            <button class="like-button">Like</button>
            <button class="reply-button">Reply</button>
        </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4 shadow-sm  '>
              <h4> Food Display</h4>
              <div className='row gap-1 m-2'>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 mt-5'>
          <div className='row'>
            <div className='col-4'>
              <h4>similar Food</h4>
              <div className='row gap-1 m-2'>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div>
                          <h6>200$</h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                          <div className='rounded-circle cart-item '>
                            {" "}
                            <FaCartPlus className='' size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <h4>Similar Recipe</h4>
              <div className='row gap-1 m-2'>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-8'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-8'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-8'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <h4>Similar seller</h4>
              <div className='row gap-2 mt-1'>
                <div className="col">
                  <img
                    src='https://mdbcdn.b-cdn.net/img/new/avatars/8.webp'
                    class='rounded-circle mb-3'
                    style={{width: '100px'}}
                    alt='Avatar'
                  />

                  <h5 class='mb-2'>
                    <strong>John Doe</strong>
                  </h5>
                  <p class='text-muted'>
                    kitchen name <span class='badge bg-primary'>PRO</span>
                  </p>
                </div>
                <div className="col">
                  <img
                    src='https://mdbcdn.b-cdn.net/img/new/avatars/8.webp'
                    class='rounded-circle mb-3'
                    style={{width: '100px'}}
                    alt='Avatar'
                  />

                  <h5 class='mb-2'>
                    <strong>John Doe</strong>
                  </h5>
                  <p class='text-muted'>
                    kitchen name <span class='badge bg-primary'>PRO</span>
                  </p>
                </div>
                <div className="col">
                  <img
                    src='https://mdbcdn.b-cdn.net/img/new/avatars/8.webp'
                    class='rounded-circle mb-3'
                    style={{width: '100px'}}
                    alt='Avatar'
                  />

                  <h5 class='mb-2'>
                    <strong>John Doe</strong>
                  </h5>
                  <p class='text-muted'>
                    kitchen name <span class='badge bg-primary'>PRO</span>
                  </p>
                </div>
                <div className="col">
                  <img
                    src='https://mdbcdn.b-cdn.net/img/new/avatars/8.webp'
                    class='rounded-circle mb-3'
                    style={{width: '100px'}}
                    alt='Avatar'
                  />

                  <h5 class='mb-2'>
                    <strong>John Doe</strong>
                  </h5>
                  <p class='text-muted'>
                    kitchen name <span class='badge bg-primary'>PRO</span>
                  </p>
                </div>
                <div className="col">
                  <img
                    src='https://mdbcdn.b-cdn.net/img/new/avatars/8.webp'
                    class='rounded-circle mb-3'
                    style={{width: '100px'}}
                    alt='Avatar'
                  />

                  <h5 class='mb-2'>
                    <strong>John Doe</strong>
                  </h5>
                  <p class='text-muted'>
                    kitchen name <span class='badge bg-primary'>PRO</span>
                  </p>
                </div>
                <div className="col">
                  <img
                    src='https://mdbcdn.b-cdn.net/img/new/avatars/8.webp'
                    class='rounded-circle mb-3'
                    style={{width: '100px'}}
                    alt='Avatar'
                  />

                  <h5 class='mb-2'>
                    <strong>John Doe</strong>
                  </h5>
                  <p class='text-muted'>
                    kitchen name <span class='badge bg-primary'>PRO</span>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <ProfileFoodGallery />
        {/* <div className='col-12 mt-5 third-section'>
          <div className='row '>
            <div className='col-4 shadow-sm'>
              <h5>Dish I Made</h5>
              <div className='row gx-0'>
                {a.map((i) => (
                  <div className='col-4'>
                    <img
                      src='/Assets/Img/barger.jpg'
                      className='img-fluid'
                      alt=''
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='col-4 shadow-sm'>
              <h5>Experimental Food</h5>
              <div className='row gx-0'>
                {a.map((i) => (
                  <div className='col-4'>
                    <img
                      src='/Assets/Img/barger.jpg'
                      className='img-fluid'
                      alt=''
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='col-4 shadow-sm overflow-hidden'>
              <h5>Seller Near ME</h5>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin'
                width='600'
                height='450'
                frameborder='0'
                style={{ border: 0, overflow: "hidden" }}
                allowfullscreen=''
                aria-hidden='false'
                tabindex='0'
              ></iframe>
            </div>
          </div>
        </div> */}
        {/* <div className='col-12 fourth-section'>
          <div className='row  '>
            <div className='col-4 shadow-sm  '>
              <h4>Special Offers</h4>
              <div className='row gap-1 m-2'>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex justify-content-center align-items-center'>
                        <div className='rounded-circle cart-item'>
                          {" "}
                          <FaCartPlus className='text-white' size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4 h-100'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid h-100'
                            alt=''
                          />
                        </div>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex justify-content-center align-items-center'>
                        <div className='rounded-circle cart-item'>
                          {" "}
                          <FaCartPlus className='text-white' size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4 shadow-sm  '>
              <h4>Special Offers</h4>
              <div className='row gap-1 m-2'>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex justify-content-center align-items-center'>
                        <div className='rounded-circle cart-item'>
                          {" "}
                          <FaCartPlus className='text-white' size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2 align-items-center'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                    <div className='col-2'>
                      <div className='d-flex justify-content-center align-items-center'>
                        <div className='rounded-circle cart-item'>
                          {" "}
                          <FaCartPlus className='text-white' size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4 shadow-sm '>
              <h4>Special Offers</h4>
              <div className='row gap-1 m-2'>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-8'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-8'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className='col-12 fourth-section'>
          <div className='row  '>
            <div className='col-4 shadow-sm  '>
              <h4>Special Offers</h4>
              <div className='row gap-1 m-2'>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-8'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-8'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4 shadow-sm  '>
              <h4>Special Offers</h4>
              <div className='row gap-1 m-2'>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-8'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-8'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4 shadow-sm '>
              <h4>Special Offers</h4>
              <div className='row gap-1 m-2'>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-8'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 shadow-sm'>
                  <div className='row  p-2'>
                    <div className='col-4'>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                        <div>
                          <img
                            src='/Assets/Img/barger.jpg'
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-8'>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi, animi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UpdateSellerProfile;
