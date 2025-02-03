import React from 'react'
import './Last.css'

const Last = () => {
  return (
    <section id='last'>
      <div className='last-div' id='last-div1'>
              
              <h3 id='last-h3'>About Us</h3>
              <div id='main'>
              <div className="last-about">
                <ul>
                  <li className='footer-li' id='footer-li1'><a href="#navdiv"></a>Home</li>
                  <li className='footer-li' id='footer-li2'><a href="#contact">Contact</a></li>
                  <li className='footer-li' id='footer-li2'><a href="#contact">Contact</a></li>
                </ul>
                <ul>
                  <li className='footer-li' id='footer-li3'><a href="#aboutus">About</a></li>
                  <li className='footer-li' id='footer-li4'><a href="#specialmenu">Menu</a></li>
                  <li className='footer-li' id='footer-li4'><a href="#gallary">Gallery</a></li>
                </ul>
              </div>
        </div>
        <div className='last-play'>
          <img src="src\assets\istore.png" alt="istore" className='last-store'/>
          <img src="src\assets\pstore.png" alt="pstore" className='last-store'/>
        </div>
      </div>


      {/* LOGO IMAGES */}
      <div className='last-div' id='last-div2'>
        <img src="src/assets/applogo.png" alt="Logo" id="last-logo" /><br />
        <h1 id='lah'>Laxury At Home</h1>
        <p><img src="src/assets/copy.png" alt="" id='lastcopy' /> 2025 - Pavan Vaishnav </p>
        <div className='last-logo1'>
          <a target='blank' href="https://www.linkedin.com/in/pavan-vaishnav11"><img src="src\assets\linkedin.png" alt="Linkedin" className='last-social-img' /></a>
          
          <a href="#"><img src="src\assets\fb.png" alt="FaceBook" className='last-social-img' /></a>
          <a href="#"><img src="src\assets\insta.jpg" alt="Instagram"  className='last-social-img'/></a>
          <a target='blank' href="https://x.com/Vortex_pv1?t=PvtuYYIHl1kW3c6YOEC77Q&s=09"><img src="src\assets\x.jpg" alt="X"  className='last-social-img'/></a>
        </div>
        
      </div>

      {/* ICONS OF SOME SOCIAL MEDIA PLATFORMS  */}
      <div className='last-div' id='last-div3'>
        <div><h3 id='last-h3' className='our'>OUR OUTLETS</h3></div>
        <div className='outlets-main'>
          <div className='outlet-sub'>
              <a href="#"><img src="src\assets\table1.jpg" alt=""  className='outlets-img'/>PUNE</a>
              <a href="#"><img src="src\assets\table2.jpg" alt=""  className='outlets-img'/>MUMBAI</a>
          </div>
          <div className='outlet-sub'>
              <a href="#"><img src="src\assets\table3.jpg" alt=""  className='outlets-img'/>DELHI</a>
              <a href="#"><img src="src\assets\table4.jpg" alt=""  className='outlets-img'/>BENGALURU</a>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Last
