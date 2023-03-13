import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Row,
  Col,
  Container,
  Card,
  Button,
  Modal,
} from "react-bootstrap";
import { editProfile } from "./authSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const { id, firstName, lastName, email, expertise, school } = useSelector(
    (state) => state.auth.me
  );
  const [userFirstName, setUserFirstName] = useState(firstName);
  const [userLastName, setUserLastName] = useState(lastName);
  const [userExpertise, setUserExpertise] = useState(expertise);
  const [userSchool, setUserSchool] = useState(school);

  // modal details
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setValidated(false);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  // end modal details

  const clearText = (evt) => {
    evt.target.value = "";
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      editProfile({
        id,
        firstName: userFirstName,
        lastName: userLastName,
        expertise: userExpertise,
        school: userSchool,
      })
    );
    setValidated(true);
  };

  const expertiseOptions = [
    "Student",
    "Resident",
    "Fellow",
    "Physician Assistant",
    "Nurse",
    "Nurse Practitioner",
    "Pharmacist",
    "Internal Med",
    "Other",
  ];

  return (
    <Container>
      <Row
        className="d-flex justify-content-center align-items-center"
        style={{ paddingTop: "5rem" }}
      >
        <Col md={10} lg={6} s={10} xs={12}>
          <Card className="mx-auto" id="edit-profile-card">
            <Card.Header className="text-center" id="edit-profile-card-header">
              Edit My Profile
            </Card.Header>
            <Card.Body>
              <Col>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="firstName">
                      <Form.Label className="text-muted">
                        First Name <span className="asterisk">*</span>
                      </Form.Label>
                      <Form.Control
                        onClick={clearText}
                        type="text"
                        defaultValue={userFirstName}
                        onChange={(e) => {
                          setUserFirstName(e.target.value);
                        }}
                        onBlur={(e) => (e.target.placeholder = userFirstName)}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="lastName">
                      <Form.Label className="text-muted">
                        Last Name <span className="asterisk">*</span>
                      </Form.Label>
                      <Form.Control
                        onClick={clearText}
                        type="text"
                        defaultValue={userLastName}
                        onChange={(e) => {
                          setUserLastName(e.target.value);
                        }}
                        onBlur={(e) => (e.target.placeholder = userLastName)}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="school">
                      <Form.Label className="text-muted">School</Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue={school}
                        onClick={clearText}
                        onChange={(e) => {
                          setUserSchool(e.target.value);
                        }}
                        onBlur={(e) =>
                          school && school.length
                            ? (e.target.placeholder = userSchool)
                            : (e.target.placeholder = "")
                        }
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="expertiseLevel">
                      <Form.Label className="text-muted">
                        Expertise Level <span className="asterisk">*</span>
                      </Form.Label>
                      <Form.Select
                        aria-label="default select example"
                        onChange={(e) => {
                          setUserExpertise(e.target.value);
                        }}
                      >
                        {expertiseOptions
                          .filter((current, expertise) => {
                            return current !== expertise;
                          })
                          .map((level, idx) => {
                            return (
                              <option value={level} key={idx}>
                                {level}
                              </option>
                            );
                          })}
                      </Form.Select>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="email">
                      <Form.Label className="text-muted">
                        Email Address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        disabled
                        readOnly
                        aria-describedby="disabled input for email address"
                        placeholder={email}
                      ></Form.Control>
                    </Form.Group>
                  </Row>
                  <center>
                    <Button
                      type="submit"
                      variant="success"
                      onClick={handleShow}
                    >
                      Update
                    </Button>
                  </center>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Body>Your changes have been recorded!</Modal.Body>
                    <Modal.Footer>
                      <Button variant="success" onClick={handleClose}>
                        Keep Editing
                      </Button>
                      <Button
                        variant="success"
                        onClick={() => navigate("/dashboard")}
                      >
                        Dashboard
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Form>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
