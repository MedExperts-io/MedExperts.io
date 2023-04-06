import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Row, Button, Col } from "react-bootstrap";
const { aboutData } = require("./aboutData");
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const AboutUs = () => {
  const medicalTeam = aboutData.filter((member) => member.team === "Medical");
  const engineeringTeam = aboutData
    .filter((member) => member.team === "Engineering")
    .sort((a, b) => a.lastName.localeCompare(b.lastName));

  console.log(engineeringTeam);

  return (
    <Container fluid>
      <Card className="shadow mx-auto" id="about-card">
        <Card.Header
          className="about-heading"
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          Meet the Team
        </Card.Header>
        {/* <------------------------------------Medical Team -----------------------------------> */}
        {/* <h1 className="dept-heading me-auto" style={{ width: "15%" }}>
          Medical
        </h1>
        <Row className="justify-content-center">
          {medicalTeam.map((member, idx) => {
            return (
              <Card key={idx} id="member-card">
                <Card.Body>
                  <div className="member-card slide-up">
                    <Card.Img
                      className="member-img"
                      variant="top"
                      src={member?.picture}
                      alt={`${member?.firstName} ${member?.lastName}`}
                    />{" "}
                    <div className="member-caption">
                      {" "}
                      <Card.Title>
                        <p id="member-name1">
                          {member?.firstName} {member?.lastName}
                        </p>
                        <p id="member-role1"> {member?.title}</p>{" "}
                      </Card.Title>{" "}
                      <p id="member-desc1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam fringilla purus ac ultricies facilisis. Integer
                        rutrum, ante et ultricies cursus, augue augue aliquet
                        orci, non feugiat diam metus sit amet eros.
                      </p>
                      <p
                        className="d-flex justify-content-start"
                        style={{ paddingTop: "0", marginTop: "0" }}
                      >
                        {member?.github && (
                          <a
                            target="_blank"
                            href={member?.github}
                            style={{ color: "black" }}
                          >
                            <GitHubIcon />
                          </a>
                        )}
                        <a target="_blank" style={{ color: "black" }}>
                          <LinkedInIcon />
                        </a>
                      </p>
                    </div>
                  </div>
                </Card.Body>{" "}
              </Card>
            );
          })}
        </Row>{" "} */}
        {/* <------------------------------------Engineering Team -----------------------------------> */}
        {/* <h1 className="dept-heading me-auto" style={{ width: "15%" }}>
          Engineering
        </h1> */}
        <Row className="justify-content-center">
          {engineeringTeam.map((member, idx) => {
            return (
              <Card key={idx} id="member-card">
                <Card.Body>
                  <div className="member-card slide-up">
                    <Card.Img
                      className="member-img"
                      variant="top"
                      src={member?.picture}
                      alt={`${member?.firstName} ${member?.lastName}`}
                    />{" "}
                    <div className="member-caption">
                      {" "}
                      <Card.Title>
                        <p id="member-name1">
                          {member?.firstName} {member?.lastName}
                        </p>
                        <p id="member-role1"> {member?.title}</p>{" "}
                      </Card.Title>{" "}
                      {member?.summary ? (
                        <p id="member-desc1"> {member?.summary} </p>
                      ) : (
                        <p id="member-desc1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aliquam fringilla purus ac ultricies facilisis.
                          Integer rutrum, ante et ultricies cursus, augue augue
                          aliquet orci, non feugiat diam metus sit amet eros.
                        </p>
                      )}
                      <p
                        className="d-flex justify-content-start"
                        style={{ paddingTop: "0", marginTop: "0" }}
                      >
                        {member?.github && (
                          <a
                            target="_blank"
                            href={member?.github}
                            style={{ color: "black" }}
                          >
                            <GitHubIcon />
                          </a>
                        )}
                        <a target="_blank" style={{ color: "black" }}>
                          <LinkedInIcon />
                        </a>
                      </p>
                    </div>
                  </div>
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
