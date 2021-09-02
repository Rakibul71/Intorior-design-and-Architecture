import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../images/in/bath/1.jpg";
import img2 from "../images/ex/p/1.jpg";
import img3 from "../images/ex/p/12.jpg";
import "./CarouselHome.css";

const CarouselHome = () => {
  return (
    <>
      <Carousel className="homeImg">
        {/* 1st slide */}
        <Carousel.Item className="homeImg" interval={500}>
          <img className="d-block w-100" src={img1} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* second slide */}
        <Carousel.Item className="homeImg" interval={500}>
          <img className="d-block w-100" src={img1} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="homeImg">
          <img className="d-block w-100" src={img1} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselHome;
