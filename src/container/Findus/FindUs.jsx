import React from 'react';
import './FindUs.css';

const FindUs = () => (
  <section id='contact'>
    <div id="contact-main1" className="contact-main">
      <div id="heading">
        <h3 id='contact-heading1'>Contact</h3>
        <img src="spoon.png" alt="spoon" id='contact-spoon' />
        <h1 id='contact-heading2'>Find Us</h1>
      </div>
      <div id="heading">
        <p id="contact-p1">South Bombay</p>
        <h3 id="contact-h3">Opening Hours</h3>
        <p id="contact-p1">Mon - Fri: 10:00 Am - 02:00 Am</p>
        <p id="contact-p1">Sat - Sun: 10:00 Am - 03:00 Am</p>
      </div>
      <div id="contact-btndiv">
        <button id='contactbtn'>Visit Us</button>
      </div>
    </div>
    <div id="contact-main2" className="contact-main">
        <img src="findus.png" alt="FindUs" id='findUsImg'/>
    </div>
  </section>
);

export default FindUs;