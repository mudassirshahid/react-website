import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 my-5 mx-auto">
              <div className="row">
                <div className="col-md-6 mt-5 order-2 order-md-1 d-flex justify-content-center flex-column">
                  <h1 className="main-heading">
                    {props.name}
                    <br /> With <strong className="text-info">Us</strong>
                  </h1>
                  <h3 className="my-3 text-capitalize team">
                    we are the team of talented developer making websites
                  </h3>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-outline-info get-started">
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-md-2 header-img">
                  <img src={props.imgsrc} alt="" className="img-animation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
