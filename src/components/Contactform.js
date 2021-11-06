import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
// import pic from '../images/containt.svg';
const Contactform =()=>{
  
  return(
    <>
    <div className="grid-container">
   
       <div className="contact_div">
         <div className="contact">
    
          <form onsubmit={""} method="POST" >
            <div className="contact-title">
               <h2>Book Appointment</h2>
            </div>
            <div className="contact-input">
            <p type="Name:"><input name="fullname" autoComplete="off" required value={""} onChange={InputEvent} placeholder="Write your name here.." /></p>
            <p type="Email:"><input name="email" autoComplete="off" required value={""} onChange={InputEvent} placeholder="Write your email" /></p>
            <p type="Select Deperment to Email:"><input name="message" autoComplete="off" required value={""} onChange={InputEvent} placeholder="Select Depertment..." /></p>
            <p type="Message:"><input name="message" autoComplete="off" required value={""} onChange={InputEvent} placeholder="Message.." /></p>
            </div>
            <div className="contact-button">
            <button type="submit" onClick={""}>Submit</button>
            </div>
          </form>



         </div>

       </div>

      </div>
  
      </>
  );
};
export default Contactform;