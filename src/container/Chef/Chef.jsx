import React from 'react';

import './Chef.css';

const Chef = () => (
  <section id='sectionchef'>
    <div id='chef-img-div'>
      <img src="chef.png" alt="chef" id='chef-img'/>
    </div>
    <div id='chef-text-div'>
      <div id='chef-word'>
        <h1>Chef-Word</h1>
        <img src="spoon.png" alt="spoon" id='spoon-chef'/>
      </div>
      <div id='chef-slogan'>
      What we believe in
      </div>
      <div id='chef-lorem'>
        <img src="quote.png" alt="qoute" id='chef-qoute' />
        <p className='qoute-text'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit.
          Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
      </div>
      <div id='chef-name'>
      <h4 id='kevin'>Kevin Luo</h4>
      <h2 id='designation'>Chef & Founder</h2>
      </div>
      <div id='chef-sign'>
        <img src="sign.png" alt="sign" id='sign'/>
      </div>
    </div>
  </section>
);

export default Chef;
