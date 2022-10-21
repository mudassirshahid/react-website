import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  // const  [navbar, setNavBar] = useState(false);

  // const changeBackground = () => {
  //   if(window.scrollY >= 80) {
  //     setNavBar(true)
  //   } else {
  //     setNavBar(false)
  //   }
  //   console.log(window.scrollY)
  // }

  // window.addEventListener('scroll', changeBackground);
  // {navbar ? 'navbar active' : 'navbar'}

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12 p-0 ">
            <nav className="navbar fixed-top active px-lg-5 px-md-0 navbar-expand-lg navbar-light container-fluid ">
              <div className="container-fluid">
                <NavLink className="navbar-brand header-nav" to="/">
                  Navbar
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        aria-current="page"
                        to="/home"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/service">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>

                   
                  </ul>
                  
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
