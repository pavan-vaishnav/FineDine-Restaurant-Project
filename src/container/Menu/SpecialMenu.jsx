import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SpecialMenu.css';
import data from './data.jsx'

const { wines, cocktails } = data;


const SpecialMenu = () => (
  <section id='specialmenu'>
    <div id='smdiv1'>
      <h3 id='h3'>Menu that fits you palatte</h3>
      <span><img src="src\assets\spoon.png" alt="" id='spoon'/></span>
    </div>
    <div id="smdiv2">
      <h1 id='h1'>Today's Special</h1>
    </div>
    
    <div id='subdiv'>
      <Container>
      <Row id='menu'>
            <Col id='col1'><div id='menuitem1'>
              <h1 id='menuheader'>Wine & Beer</h1>
            {wines.map((wine, index) => (
              <div className="menu-container">

                <div key={index} className="wine-item">
                  <div>
                    <h3 id='wine-title'>{wine.title}</h3>
                  </div>
                  <div>
                  <div className="line-price">
                    <div className="golden-line"></div>
                    <p className="price" style={{ fontSize: "25px" }}>
                      {wine.price}
                    </p>
                  </div>
                  </div>
                </div>
                <p className='wine-tag'>{wine.tags}</p>
              </div>
            ))}
            </div></Col>

            <Col  id='col2'><img src="src\assets\menu.png" alt="menubottle" id='menubottle' /></Col>
            
            <Col  id='col3'><div id='menuitem2'>
              <h1 id='menuheader'>Cocktails</h1>
              <div>
              {cocktails.map((cocktail, index) => (
              <div className="menu-container">

                <div key={index} className="cocktail-item">
                  <div>
                    <h3 id='wine-title'>{cocktail.title}</h3>
                  </div>
                  <div>
                  <div className="line-price">
                    <div className="golden-line"></div>
                    <p className="price" style={{ fontSize: "25px" }}>
                      {cocktail.price}
                    </p>
                  </div>
                  </div>
                </div>
                <p className='cocktail-tag'>{cocktail.tags}</p>
              </div>
            ))}
              </div>
            </div></Col>
      </Row>
    </Container>
    
    </div>
    <div id='know-more-btn'><button id='veiwmorebtn'>View More</button></div>
  </section>
);

export default SpecialMenu;
