import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export default function HeroSection() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <>
    <div style={{ marginTop: '100px' }}></div>
      <div>
      <div className="card" style={{ width: '800px', height: '320px', position: 'relative', left: '30px', top: '-5px', marginBottom: '40px' }}>
          <h2 className="card-header">*********</h2>
          <div className="card-body">
            <h5 className="card-title">Welcome to AcademicNexa</h5>
            <p>
              Join Academic Nexa and unlock a world of educational possibilities. Start your journey towards academic success and personal growth.
            </p>
            <p>
              It is a platform where students access academic information, grades, and resources, facilitating streamlined communication, course management, and administrative tasks for an enhanced educational experience
            </p>
            <p>
              Get started today and experience AcademicNexa at its best!
            </p>
            <Link to="/studentregister">
              <button className="btn btn-lg btn-primary">
                Create an Account &raquo;
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '100px' }}></div>
        <Slider {...sliderSettings}>
          <div>
            <img src={image1} alt="Slide 1" style={{ width: '100%', border: '2px solid #fff' }} />
          </div>
          <div>
            <img src={image2} alt="Slide 2" style={{ width: '100%', border: '2px solid #fff' }} />
          </div>
          <div>
            <img src={image3} alt="Slide 3" style={{ width: '100%', border: '2px solid #fff' }} />
          </div>
          {/* Add more slides as needed */}
        </Slider>

        
        

      <div style={{ marginTop: '30px', marginRight: '20px' }}>
        <BsArrowLeft style={{ fontSize: '24px', cursor: 'pointer' }} />
        <BsArrowRight style={{ fontSize: '24px', marginLeft: '20px', cursor: 'pointer' }} />
      </div>
    </>
  );
}
