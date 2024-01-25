import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Chasca from '../../img/hamburguesas-caseras-gourmet.png';
import CarouselItem from './CarouselItem';
export default function CarouselProduct() {
  return (
    <div className='text-center'>
      <Carousel>
        <CarouselItem />
        <Carousel.Item interval={500}>
          <img src={Chasca} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Chasca} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );

}
