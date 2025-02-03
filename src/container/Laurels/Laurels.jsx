import React from 'react';

import './Laurels.css';

const Laurels = () => (
  <section id='awards'>
    <div className='main1'>
      <div id='heading1'>
        <h2 id='subheading1'>Awards & Recognition</h2>
        <img src="spoon.png" alt="spoon" id='awards-spoon'/>
      </div>
      <div id='heading2'>
        <h1 id='subheading2'>Our Laurels</h1>
      </div>
      <div id='awards-div'>
        <div id='carry1'>
          <div id='awards-subdiv1' className='subdiv'>
            <img src="award02.png" alt="award2" id='award2' />
            <div id='award2-text'>
            <h1 id="award-title" >Bib Gourmond</h1> 
            <h4>Lorem ipsum dolor sit amet, consectetur.</h4>
            </div>
          </div>
          <div id='awards-subdiv2' className='subdiv'>
            <img src="award01.png" alt="award1" id='award1' />
            <div id='award2-text'>
            <h1 id="award-title">Rising Star</h1>
            <h4> Lorem ipsum dolor sit amet, consectetur.</h4>
            </div>
          </div>
        </div>

        <div id='carry2'>
          <div id='awards-subdiv3' className='subdiv'>
            <img src="award05.png" alt="award5" id='award5' />
            <div id='award2-text'>
            <h1 id="award-title">AA Hospitality</h1> 
              <h4>Lorem ipsum dolor sit amet, consectetur.</h4>
              </div>
          </div>
          <div id='awards-subdiv4' className='subdiv'>
          <img src="award03.png" alt="award3" id='award3'/>
            <div id='award2-text'>
            <h1 id="award-title">Outstanding Chef</h1>
            <h4> Lorem ipsum dolor sit amet, consectetur.</h4>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className='main2'>
      <img src="laurels.png" alt="laurels" id='laurels-img'/>
    </div>
  </section>
);

export default Laurels;
