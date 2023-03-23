import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  Row,
  Button,
  Modal,
  Col,
  ModalFooter,
} from "react-bootstrap";
const { aboutData } = require("./aboutData");
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Github } from "react-bootstrap-icons";

const AboutUs = () => {
  const [modalShow, setModalShow] = useState(false);
  console.log(modalShow);
  const [memberInfo, setMemberInfo] = useState(null);
  console.log(memberInfo, "outside modal");

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <Container fluid>
      <Card className="mx-auto" id="about-card">
        <h1 className="about-heading"> Meet the Team </h1>
        <Row className="justify-content-center">
          {aboutData.map((member, idx) => {
            return (
              <Card
                key={idx}
                id="member-card"
                className="member-card-hover"
                onClick={() => setMemberInfo(member)}
              >
                <Card.Body className="default">
                  <Card.Img
                    id="member-img"
                    variant="top"
                    src={member?.picture}
                    alt={`${member?.firstName} ${member?.lastName}`}
                  />
                </Card.Body>{" "}
                <Card.Body className="hover">
                  <Card.Img
                    id="member-img"
                    variant="top"
                    src={member?.picture}
                    alt={`${member?.firstName} ${member?.lastName}`}
                  />

                  <Card.ImgOverlay>
                    <Card.Title id="member-card-title">
                      <p id="member-name">
                        {member?.firstName} {member?.lastName}
                      </p>
                      <p id="member-role"> {member?.team}</p>{" "}
                      <p id="member-read" onClick={handleShow}>
                        {" "}
                        Read More{" "}
                      </p>
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card.Body>{" "}
                <Modal
                  show={modalShow}
                  onHide={handleClose}
                  centered
                  masktransitionname="maskTransitionName"
                >
                  <Modal.Header
                    style={{ padding: "4px", margin: "4px", border: "none" }}
                    closeButton
                  ></Modal.Header>
                  <Modal.Body>
                    <Card className="mx-auto" style={{ border: "none" }}>
                      <Card.Body
                        className="mx-auto"
                        style={{ marginTop: "0", paddingTop: "0" }}
                      >
                        <Row className="mx-auto">
                          <Col md={6}>
                            <div className="d-flex justify-content-center align-items-center">
                              <img
                                src={memberInfo?.picture}
                                style={{ maxWidth: "100%" }}
                                alt={`${memberInfo?.firstName} ${memberInfo?.lastName}`}
                              />
                            </div>
                          </Col>{" "}
                          <Col md={6}>
                            <p
                              style={{
                                fontSize: "25px",
                                fontWeight: "400",
                                paddingBottom: "0",
                                marginBottom: "0",
                              }}
                            >
                              {memberInfo?.firstName} {memberInfo?.lastName}
                            </p>
                            <p
                              style={{
                                fontSize: "20px",
                                paddingTop: "0",
                                marginTop: "0",
                                fontWeight: "200",
                              }}
                            >
                              {memberInfo?.title}
                            </p>
                            <p style={{ fontSize: "14px" }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Aliquam fringilla purus ac ultricies
                              facilisis. Integer rutrum, ante et ultricies
                              cursus, augue augue aliquet orci, non feugiat diam
                              metus sit amet eros. Nulla facilisi. Mauris sit
                              amet egestas ligula. Suspendisse potenti. In hac
                              habitasse platea dictumst. Integer sit amet urna
                              id sapien laoreet tincidunt in at felis.
                            </p>
                            <Row>
                              <p className="d-flex justify-content-start">
                                <GitHubIcon />
                                <LinkedInIcon />
                              </p>
                            </Row>{" "}
                          </Col>
                        </Row>{" "}
                      </Card.Body>
                    </Card>
                  </Modal.Body>{" "}
                </Modal>
              </Card>
            );
          })}
        </Row>
      </Card>
    </Container>
  );
};

export default AboutUs;
