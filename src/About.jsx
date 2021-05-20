import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import technical from "../src/images/technical.png";

const About = () => {

   
    return (
        <>
          <Common 
           name="Welcome To About Page"
           imgsrc={technical}
           visit="/contact"
           btname="Contact Now"
           />
        </>
    );
};
export default About;