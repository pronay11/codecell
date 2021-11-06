import React ,{useState,useContext}from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo-dark.png';
import Slick from '../components/Slick';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const Header = () => { 
    return (
        <>
            <div className="header-part-one">
               <div className="logo-pic">
                  <img src={logo} alt="No Image"/>
               </div>
                
                <div className="swiper-slide">
                  <Slick/>
                    
                </div>
                <div className="social-link">
                   <li><Link to="/contact"><TwitterIcon/></Link></li>
                  <li><Link to="/about"><FacebookIcon /></Link></li>
                  <li><Link to="/about"><LinkedInIcon /></Link></li>
                  <li><Link to="/about"><InstagramIcon/></Link></li> 
                </div>
                
             </div>  
            

           <div className="headerparttwo">           
                {/* <li><Link to="/contact"><TwitterIcon/></Link></li>
               <li><Link to="/about"><FacebookIcon /></Link></li>
               <li><Link to="/about"><LinkedInIcon /></Link></li>
               <li><Link to="/about"><InstagramIcon/></Link></li>            */}
          </div>  
        </>
    )
}

export default Header