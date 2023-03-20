import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container fluid>
      <Card className="about-card mx-auto" style={{ border: "none" }}>
        <h1 className="about-heading"> Meet the Team </h1>
        <Row>
          <Card id="member-card" as={Col}>
            <Card.Img></Card.Img>
            <Card.Body></Card.Body>
            <Card.Title id="member-card-title">
              <strong> Cody the Pug</strong>
              <br />
              Software Engineer
            </Card.Title>
          </Card>
          <Card id="member-card" as={Col}>
            <Card.Img></Card.Img>
            <Card.Body></Card.Body>
            <Card.Title id="member-card-title">
              <strong>Brody the Bird</strong>
              <br />
              Software Engineer
            </Card.Title>
          </Card>
          <Card id="member-card" as={Col}>
            <Card.Img></Card.Img>
            <Card.Body></Card.Body>
            <Card.Title id="member-card-title">
              <strong>Oscar the Grouch</strong>
              <br />
              Software Engineer
            </Card.Title>
          </Card>
        </Row>
      </Card>
    </Container>
  );
};

export default AboutUs;
