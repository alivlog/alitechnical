import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/web.jpg";




const Card = (props) => {

   return (
        <>
      
           
                     <div className="col-md-4 col-10 mx-auto">
                     <div className="card" >
                         <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                           <div className="card-body">
                              <h5 class="card-title font-weight-bold">{props.title}</h5>
                                
                                  <p className="card-text">Some quick example text to
                                   build on the card title and make up the bulk of 
                                   the card's content.</p>
                                   <NavLink to="#" className={props.btname}>Learn Now</NavLink>
                        </div>
                     </div>

                     </div>
                   
                 

        </>
    );
};
export default Card;         