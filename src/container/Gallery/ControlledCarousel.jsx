import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ControlledCarousel.css'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} id="caresol">
      <Carousel.Item>
        <img src="gallery01.png" alt="gallary" className='gallaryimgs'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="gallery02.png" alt="gallary" className='gallaryimgs'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="gallery03.png" alt="gallary" className='gallaryimgs'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="gallery04.png" alt="gallary" className='gallaryimgs'/>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default ControlledCarousel;