import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CenterSlider from "../Components/ChildComponents/CenterSlider";
import ReactPlayer from "react-player";
import { FaCartPlus } from "react-icons/fa";
import Header from "../Components/Common/Header";

const UpdateSellerProfile = () => {
  const a = [1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 55, 4];
  return (
    <div className=''>
      <Header />
      <div className='UpdateSellerProfile row '>
        <div className='col-12'>
          <div className='d-flex profile-section gap-2'>
            <div className='col-8 '>
              <div className='d-flex align-items-center justify-content-between'>
                <div>
                  {" "}
                  <h2>Name:Sadiya Talukder</h2>
                </div>
                <div>
                  <h6>seller id:something123</h6>
                </div>
              </div>

              <h3>Kitchen Name: sadia kitchen</h3>
              <p>Catering Service: Saiya</p>
              <p>I am Bangladeshi</p>
              <p>SellerID:sadiya123</p>
              <div className='othersinfo d-flex justify-content-between'>
                <div className=''>
                  <h5>My Skill</h5>
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
                <div className=''>
                  <h5>My Restriction</h5>
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
            <div className='col  '>
              <div className='d-flex align-items-center justify-content-center'>
                <div className='profile-picture'>
                  <img
                    alt=''
                    className='img-fluid '
                    src='/Assets/Img/avatar/01.jpg'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 mt-4'>
          {/* <Tabs>
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
          </Tabs> */}
        </div>
        <div className='col-12 second-section mt-4'>
          <div className='row gap-1 '>
            <div className='col-6 center-block center-slider'>
              <CenterSlider />
            </div>
            <div className='col video-player  '>
              <Tabs>
                <div className='row   shadow'>
                  <div className='col-8 video-player-item'>
                    <TabPanel>
                      <div className='wrapper '>
                        <div className='video'>
                          <ReactPlayer
                            className=''
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
                  </div>
                  <div className='col-4 video-list'>
                    <div className='row gap-2 '>
                      <TabList>
                        <Tab className='col video-item shadow'>
                          <div className='d-flex justify-content-around  align-items-center shadow-sm'>
                            <div className='small-video '>
                              <ReactPlayer
                                className=''
                                url={
                                  "https://www.youtube.com/watch?v=NLPuCclm5lA"
                                }
                                width='100%'
                                height='100%'
                              />
                            </div>
                            <div className='text-dark'>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                              </p>
                            </div>
                          </div>
                        </Tab>
                        <Tab className='col video-item shadow'>
                          <div className='d-flex justify-content-around  align-items-center shadow-sm'>
                            <div className='small-video '>
                              <ReactPlayer
                                className=''
                                url={
                                  "https://www.youtube.com/watch?v=NLPuCclm5lA"
                                }
                                width='100%'
                                height='100%'
                              />
                            </div>
                            <div className='text-dark'>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                              </p>
                            </div>
                          </div>
                        </Tab>
                        <Tab className='col video-item shadow'>
                          <div className='d-flex justify-content-around  align-items-center shadow-sm'>
                            <div className='small-video '>
                              <ReactPlayer
                                className=''
                                url={
                                  "https://www.youtube.com/watch?v=NLPuCclm5lA"
                                }
                                width='100%'
                                height='100%'
                              />
                            </div>
                            <div className='text-dark'>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                              </p>
                            </div>
                          </div>
                        </Tab>
                        <Tab className='col video-item shadow'>
                          <div className='d-flex justify-content-around  align-items-center shadow-sm'>
                            <div className='small-video '>
                              <ReactPlayer
                                className=''
                                url={
                                  "https://www.youtube.com/watch?v=NLPuCclm5lA"
                                }
                                width='100%'
                                height='100%'
                              />
                            </div>
                            <div className='text-dark'>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
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
        <div className='col-12 mt-5 third-section'>
          <div className='row '>
            <div className='col-4 shadow-sm'>
              <h5>Dish I Made</h5>
              <div className='row gx-0'>
                {a.map((i) => (
                  <div className='col-3'>
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
                  <div className='col-3'>
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
        </div>
        <div className='col-12 fourth-section'>
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
        </div>
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
