import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import alitechnical from "../src/images/alitechnical.jpg";

const Home = () => {

    
    return (
        <>
           <Common 
             name="Grow Your Business With"
           imgsrc= {alitechnical}
           visit="/service"
           btname="Get Started"
            />
        </>
    );
};
export default Home;