import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Gallery.css';
import ControlledCarousel from './ControlledCarousel'

const Gallery = () => (
  <section id='gallary'>
    <div id='gallary1'>
        <div className='gallary-div1'>
          <h2 id='gallary-heading1'>Instagram</h2>
          <img src="spoon.png" alt="spoon" id='gallary-spoon'/>
        </div>
        <div className='gallary-div2'>
          <h1 id='gallary-heading2'>Photo Gallery</h1>
        </div>
        <div className='gallary-div3'>
          <p id='gallary-text'>
          Lorem Ipsum Dolor Sit Amet, ConsecEgestas Mu.
          </p>
          <button className='gallary-btn'>View More</button>
        </div>
    </div> 

    <div className='slideshowdiv'><ControlledCarousel></ControlledCarousel> </div>
  </section>
);

export default Gallery;
