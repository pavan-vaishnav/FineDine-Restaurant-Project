import React from 'react';

import './Footer.css';

const Footer = () => (
  <section id='footer'>
    <div className='footer-cont'>
      <div className='footer-div1'><h1 className='footer-h1'>Subscibe To Our Newsletter</h1></div>
      <div id='footer-div2'><h3 className='footer-h3'>And Never Miss Latest Updates!</h3></div>
      <div className="footer-div3">
        <input type="email" name="input" placeholder=' &nbsp;&nbsp;&nbsp;&nbsp; Enter your Email' id="footer-textbox" /><button className='footer-btn'>Subscribe</button>
      </div>
    </div>
  </section>
);

export default Footer;
