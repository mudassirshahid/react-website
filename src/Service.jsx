import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card';
import Servicedata from './Servicedata';


const Service = () => {
  return (
    <>
     <div className="my-5 py-5">
      <h1 className="tab-center d-flex justify-content-center">
        Our Services 
      </h1>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto my-5">
            <div className="row gy-5">
              {
                Servicedata.map((val, ind) => {
                  return <Card key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    btn={val.btn}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Service;
