import React from 'react';
import Button from 'react-bootstrap/Button';
import './AboutUs.css';

const AboutUs = () => (
  <section id="aboutus">
    <div id="maindiv">
    <div className="about-us-container">
      <h2 className="about-title">About Us</h2>
      <img src="spoon.png" alt="spoon" className="spoon-img" />
      <p className="about-text">
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra
        Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet
        Eu Proin Mauris Et.
      </p>
        <Button className="about-button">Know more</Button>
        
    </div>
    <div id="div2">
        <img src="knife.png" className='knife'/>
        <img src="G.png" id="Gimg" />
    </div>
    <div className="about-us-container">
      <h2 className="about-title">Our History</h2>
      <img src="spoon.png" alt="spoon" className="spoon-img" />
      <p className="about-text about-text2">
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra
        Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet
        Eu Proin Mauris Et.
      </p>
      <Button className="about-button">Know more</Button>
    </div>
      
    </div>
  </section>
);

export default AboutUs;
