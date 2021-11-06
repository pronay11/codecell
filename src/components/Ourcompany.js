import React from 'react'
import { Link } from 'react-router-dom'

const Ourcompany = () => {
    return (
        <>
        <div className="company-info">
            <h4>Discover Our Company</h4>
         </div>

        <div className="company-info-delails">
           <div className="our-services">
              <button> <Link to="/">Our Services</Link> </button>  
            </div>
             <div className="partners">
                <button><Link to="/">Technology Partners</Link> </button>
             </div>
             <div className="it-soluation">
               <button> <Link to="/">IT Soluation</Link> </button>
             </div>     
        </div>
        
       </>
    )
}

export default Ourcompany
