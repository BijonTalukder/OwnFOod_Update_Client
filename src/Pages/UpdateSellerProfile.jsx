import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const UpdateSellerProfile = () => {
  return (
    <div>
      <div className='UpdateSellerProfile row '>
        <div className='col-12'>
          <div className='row'>
            <div className='col-4 text-center'>
              <h2>Name:Sadiya Talukder</h2>
              <h3>Kitchen Name: sadia kitchen</h3>
              <p>Catering Service: Saiya</p>
              <p>SellerID:sadiya123</p>
            </div>
            <div className='col-4'>
              <div className='profile-picture d-flex justify-content-center'>
                <img
                  alt=''
                  className='img-fluid '
                  src='/Assets/Img/avatar/01.jpg'
                />
              </div>
            </div>
            <div className='col-4'>
              <div className='seller-details'>
                <div className='country-info'>
                  <h5>i am Bangladeshi </h5>
                </div>
                <div>
                  <h5>i can cook something</h5>
                </div>

                <div className='other-skill'>
                  <h5>My other Skill</h5>
                </div>
                <div className='restriction'>
                  <h6>Restriction</h6>
                </div>
                <div className='taking-order'>
                  <h6>taking order</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12'>
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
        </div>
        <div className="col-12">
            <div className="row">
                <div>

                </div>
                <div></div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSellerProfile;
