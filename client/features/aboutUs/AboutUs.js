import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
const { aboutData } = require("./aboutData");

const AboutUs = () => {
  console.log(aboutData);
  return (
    <Container fluid>
      <Card className="about-card mx-auto" style={{ border: "none" }}>
        <h1 className="about-heading"> Meet the Team </h1>
        <Row className="justify-content-center">
          {aboutData.map(
            ({
              firstName,
              lastName,
              title,
              summary,
              picture,
              linkedin,
              github,
            }) => {
              return (
                <Card id="member-card" key={firstName}>
                  <Card.Img id="member-img" variant="top" src={picture} />
                  <Card.Body></Card.Body>
                  <Card.Title id="member-card-title">
                    <strong>
                      {firstName} {lastName}
                    </strong>
                    <br />
                    {title}
                  </Card.Title>
                </Card>
              );
            }
          )}
        </Row>
      </Card>
    </Container>
  );
};

export default AboutUs;
