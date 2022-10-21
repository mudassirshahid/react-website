import React from "react";
import logo from "../src/images/software.png";
import Common from "./Common";

const About = () => {
  return (
    <>
    <Common  name="Welcome to About Page"  imgsrc={logo}  visit="/contact" btnname="Contact Now" />
    </>
  );
};

export default About;
