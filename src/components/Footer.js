import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";
import "./Footer.css";
import footerLogo from "../images/logo.png";

const Footer = () => {
  return (
    <>
      <Row className="Footer">
        <Col className="firstPart" md={4}>
          <img src={footerLogo} alt="logo" height="70px" width="70px" />
        </Col>
        <Col className="firstPart" md={4}>
          222Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          temporibus repellat ullam. 222Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Tempora temporibus repellat ullam. 222Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Tempora temporibus
          repellat ullam.
        </Col>
        {/* <Col md={{ span: 4, offset: 4 }}> */}
        <Col className="firstPart" md={4}>
          3333Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          temporibus repellat ullam. 3333Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Tempora temporibus repellat ullam. 3333Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Tempora temporibus
          repellat ullam.
        </Col>
      </Row>
    </>
  );
};

export default Footer;
