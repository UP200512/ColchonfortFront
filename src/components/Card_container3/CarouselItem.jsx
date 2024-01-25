import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Chasca from '../../img/hotdog.jpg'
export default function CarouselItem() {
  return (
    
       <Carousel.Item interval={1000}>
          <img src={Chasca} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla.</p>
          </Carousel.Caption>
        </Carousel.Item>
   
  )
}
