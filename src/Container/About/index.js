import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Ironman from "./iron.png";
import Captain from "./captain.png";
import Thor from "./thor.png";
import Hulk from "./hulk.png";
import "./style.css";

const AboutContainer = () => {
  return (
    <>
      <Container>
        <h1 className="txtCenter">About Us</h1>
        <p className="txtCenter description">
          MovieScout is a user-friendly movie search website that offers a vast
          collection of films across genres, eras, and languages. With its
          intuitive search function and comprehensive TMDB database, it provides
          a whole comprehensive of movies. MovieScout allows you to explore
          movies by title and offers in-depth informations and ratings about the
          movies. Stay updated with the latest releases and curated collections
          to enhance your movie-watching experience. MovieScout is your ultimate
          companion for discovering and exploring the world of cinema. Discover
          your next favorite movie with MovieScout.
        </p>
        <Row className="justify-content-center custom-row-margin">
          <Col sm={6} md={4} lg={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src={Ironman} />
              <Card.Body>
                <Card.Title className="text-center">
                  Revan Revian (00000067662)
                </Card.Title>
                <Card.Text className="text-center"></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src={Hulk} />
              <Card.Body>
                <Card.Title className="text-center">
                  Javier Raell (00000067721)
                </Card.Title>
                <Card.Text className="text-center"></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src={Captain} />
              <Card.Body>
                <Card.Title className="text-center">
                  Hito Kawiswara (00000068541)
                </Card.Title>
                <Card.Text className="text-center"></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src={Thor} />
              <Card.Body>
                <Card.Title className="text-center">
                  Rio Christian (00000068574)
                </Card.Title>
                <Card.Text className="text-center"></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutContainer;
