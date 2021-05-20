import React, { useState } from "react";

const Contact = () => {

     const [data , setData] = useState({

        fullname : "",
        phone : "",
        email : "",
         msg : "",
     });
    
     const InputEvent = (event) => {
         const {name , value} = event.target;

         setData((preVal) => {
             return {
                 ...preVal,
                 [name] : value ,
             };
         });
     }
    const formSubmit = ( event) => {
            event.preventDefault();
            alert(
               ` My Full Name is ${data.fullname}.
                My Email Address is ${data.email}.
                My Phone Number is ${data.phone}.
                My Message is ${data.msg} `)
    }
    
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                   <div className="col-md-6 col-10 mx-auto">
                       <form onSubmit={formSubmit}>
                       <div class="mb-3">
                         <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                           <input type="text"
                            class="form-control"
                            name = "fullname"
                                 value={data.fullname}
                                 onChange={InputEvent}
                             id="exampleFormControlInput1" 
                             placeholder="Enter Your Full Name" />
                        </div> 
                     <div class="mb-3">
                         <label for="exampleFormControlInput1"
                          class="form-label">Email address</label>
                            <input type="email" 
                            class="form-control"
                            name = "email"
                                 value={data.email}
                                 onChange={InputEvent}
                             id="exampleFormControlInput1"
                              placeholder="Enter Your Email Address" />
                    </div>
                       <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Phone</label>
                            <input type="number"
                             class="form-control"
                             name = "phone"
                                 value={data.phone}
                                 onChange={InputEvent}
                              id="exampleFormControlInput1"
                               placeholder="Enter Your Mobile Number" />
                       </div>

                      <div class="mb-3">
                           <label for="exampleFormControlTextarea1"
                            class="form-label">Message</label>
                               <textarea class="form-control"
                                id="exampleFormControlTextarea1"
                                 name = "msg"
                                 value={data.msg}
                                 onChange={InputEvent}
                                 rows="3">

                                 </textarea>
                       </div>
                       
                       <div class="col-12">
                             <button className="btn btn-outline-info "  type="submit">Submit Form</button>
                         </div>
                       </form>
                       <br />
                   </div>
                </div>
            </div>
        </>
    );
};
export default Contact;
