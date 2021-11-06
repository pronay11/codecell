import React from 'react'
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="servicetext">
            <h4>SERVICES WE PROVIDE</h4>
            <h1>we provide <span>truly prominent IT solutions.</span> </h1>

            <div className="iconwrap">
                <div className="itemone">
                    <h3>WEB Development</h3>
                    <p>We develop dynamic responsive website, e-commerce stores,different
                        kinds of web portals and other web application with easy to use
                        admin panel to edit images and other contents.</p>
                    <Link to="/">Discover Now</Link>
                </div>
                <div className="itemtwo">
                    <h3>App Development</h3>
                    <p>We develop dynamic responsive website, e-commerce stores,different
                        kinds of web portals and other web application with easy to use
                        admin panel to edit images and other contents.</p>
                     <Link to="/">Discover Now</Link>
                </div>
                <div className="itemthree">
                    <h3>ERP System</h3>
                    <p>We develop dynamic responsive website, e-commerce stores,different
                        kinds of web portals and other web application with easy to use
                        admin panel to edit images and other contents.</p>
                    <Link to="/">Discover Now</Link>
                </div>
            </div>
        </div>
        
        
    )
}

export default Services
