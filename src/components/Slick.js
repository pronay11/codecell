import React, { Component } from "react";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
           <h6 class="info-title">+880 1630456676</h6>
           <div class="info-sub-title">Info@codecell.ltd</div>
          </div>
          <div>
            <h6 class="info-title">Kamarpara,Uttara</h6>
            <div class="info-sub-title">Dhaka 1230, Bangladesh</div>
          </div>
          <div>
             <h6 class="info-title">11:00AM - 5:00PM</h6>
             <div class="info-sub-title">Saturday to Wednesday</div>
          </div>
          <div>
            <h6 class="info-title">Online 24/7</h6>
            <div class="info-sub-title">+880 1630456676</div>
          </div>
          
        </Slider>
      </div>
    );
  }
}