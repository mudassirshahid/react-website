import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
    <Common name="Grow Your Business"  imgsrc={logo} visit="/service" btnname="Get Started" />
    </>
  );
};

export default Home;
