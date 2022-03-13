import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

const HeroSlider = () => {
  return (
    <div className="carousel p-4 mb-3">
      <Carousel>
        <Carousel.Item interval={5000}>
          <Image
            className="d-block w-100"
            src="/comingsoon.jpg"
            width="60%"
            layout="responsive"
            height="30%"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Image
            className="d-block w-100"
            src="/bigsale.jpg"
            width="60%"
            layout="responsive"
            height="30%"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Image
            className="d-block w-100"
            src="/megaoffer.jpg"
            width="60%"
            layout="responsive"
            height="30%"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSlider;
