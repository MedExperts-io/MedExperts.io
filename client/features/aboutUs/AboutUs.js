import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Row, Button, Col } from "react-bootstrap";
const { aboutData } = require("./aboutData");
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const AboutUs = () => {
  return (
    <Container fluid>
      <Card className="mx-auto" id="about-card">
        <h1 className="about-heading"> Meet the Team </h1>
        <Row className="justify-content-center">
          {aboutData.map((member, idx) => {
            return (
              <Card key={idx} id="member-card">
                <Card.Body className="default">
                  <Card.Img
                    id="member-img"
                    variant="top"
                    src={member?.picture}
                    alt={`${member?.firstName} ${member?.lastName}`}
                  />
                  <Card.Title>
                    <p id="member-name1">
                      {member?.firstName} {member?.lastName}
                    </p>
                    <p id="member-role1"> {member?.title}</p>{" "}
                  </Card.Title>{" "}
                  <p id="member-desc1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam fringilla purus ac ultricies facilisis. Integer
                    rutrum, ante et ultricies cursus, augue augue aliquet orci,
                    non feugiat diam metus sit amet eros. Nulla facilisi. Mauris
                    sit amet egestas ligula. Suspendisse potenti. In hac
                    habitasse platea dictumst. Integer sit amet urna id sapien
                    laoreet tincidunt in at felis.
                  </p>
                  <p className="d-flex justify-content-start">
                    {member?.github && (
                      <a
                        target="_blank"
                        href={member?.github}
                        style={{ color: "#FF6262" }}
                      >
                        <GitHubIcon />
                      </a>
                    )}
                    <a target="_blank" style={{ color: "#FF6262" }}>
                      <LinkedInIcon />
                    </a>
                  </p>
                </Card.Body>{" "}
              </Card>
            );
          })}
        </Row>
      </Card>
    </Container>
  );
};

export default AboutUs;
