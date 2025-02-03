import React from 'react';
import Button from 'react-bootstrap/Button';
import './Header.css';

const Header = () => (
  <section id="headermaindiv">
    <div id="div1">
      <h5 id="firstline">Chase the new flavour</h5>
      <img src="src\assets\spoon.png" id='header-spoon'/>
      <h1 id="secondline">THE KEY TO FINE DINING</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque corrupti qui eligendi facilis repudiandae illo mollitia placeat, ab alias?</p>
      <Button variant="light" id="explorebtn">Explore More</Button>
    </div>
    {/*  */}
    <div id="div2">
    <img src="src\assets\welcome.png" id="welcomeimg"/>
    </div>
  </section>
);

export default Header;
