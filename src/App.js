import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Appointmentarea from "./components/Appointmentarea";
import Home from './components/Home';
import Company from './components/Company';
import Ourcompany from './components/Ourcompany';
import Services from './components/Services';
import Itsoluations from './components/Itsoluations';
import Technology from './components/Technology';
import Blog from './components/Blog';
import Contactus from './components/Contactus';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
    
function App() {
  return (
    <div className="container">
      
      <div className="header-area">
        <BrowserRouter>
         <Header/>
       </BrowserRouter>
      </div>
 
      <div className="navbar-area">
        <BrowserRouter>
           <Navbar/>
          <Switch>
            <Route path="/home" exact component={Home}/>
            <Route path="/company" exact component={Company}/>
            <Route path="/services" exact component={Services}/>
            <Route path="/itsoluations" exact component={Itsoluations}/>
            <Route path="/technology" exact component={Technology} />
            <Route path="/blog" exact component={Blog}/>
            <Route path="/contactus" exact component={Contactus}/>
        </Switch>
       </BrowserRouter>
      </div>
      <div className="appointment-area">
        <Appointmentarea/>
      </div>
      <div className="service-area">
        <BrowserRouter>
          <Services/>
       </BrowserRouter>
      </div>
      <div className="tabs-wrapper-area">
       <BrowserRouter>
          <Ourcompany/>
       </BrowserRouter>
      </div>
      <div className="action-area">
        <BrowserRouter>
          <ul>
            <li><h1>We run all kinds of IT services that vow your <span>success</span></h1></li>
            <li><button> <Link to="/">Our Services</Link> </button></li>
            <li><button> <Link to="/">Our Services</Link> </button>  </li>
        </ul>
         </BrowserRouter>
      </div>
      <div className="fact-wrapper-area">7</div>
      <div className="contact-us-area">8</div>
      <div className="footer-area">9</div>
    </div>
  );
}

export default App;
