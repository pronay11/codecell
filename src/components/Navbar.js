import React ,{useState,useContext}from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  
    return (
        <>  
           <div className="navbar">
              
              <ul className= "nav-links">

                <li><Link to="/login">HOME</Link></li> 
                <li><Link to="/contact">Company</Link></li>
                <li><Link to="/about">Services</Link></li>
                <li><Link to="/about">ItSoluations</Link></li>
                <li><Link to="/about">Technology</Link></li>
                <li><Link to="/about">Blog</Link></li>
                <li><Link to="/about">ContactUs</Link></li> 
                

              </ul>
                
             </div>  
        </>
    )
}

export default Navbar;