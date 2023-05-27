import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsArrowUpShort
} from "react-icons/bs";

const FooterComponent = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="myFooter">
      <Container>
        <Row>
          <Col className="col-12 text-center">
            <ul className="socialIconsList">
              <li>
                <a rel="noreferrer" href="#" title="Instagram">
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a rel="noreferrer" href="#" title="Facebook">
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a rel="noreferrer" href="#" title="Twitter">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a rel="noreferrer" href="#" title="YouTube">
                  <BsYoutube />
                </a>
              </li>
            </ul>
          </Col>
          <Col className="col-12 text-center">
            <div className="footerContent">
              <small>Discover your next favorite movie with MovieScout.</small>
            </div>
          </Col>
          <Col className="col-12 text-center">
            <div className="scrollToTop" onClick={handleScrollToTop}>
              <BsArrowUpShort />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
