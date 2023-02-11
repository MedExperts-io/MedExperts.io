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
  const [userEmail, setUserEmail] = useState(email);
  const [userExpertise, setUserExpertise] = useState(expertise);
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
        email: userEmail,
        expertise: userExpertise,
      })
    );
    setValidated(true);
  };

  return (
    <Container>
      <Row className="p-5">
        <Card
          id="form-border"
          className="p-5 mx-auto"
          style={{ maxWidth: "800px", padding: "0px" }}
        >
          <Card.Header
            className="text-center"
            style={{ fontWeight: "bold", fontSize: "150%" }}
          >
            Edit My Profile
          </Card.Header>
          <Card.Body>
            <Col>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {/* <h1>Edit My Profile</h1> */}
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="firstName">
                    <Form.Label className="text-muted">First Name</Form.Label>
                    <Form.Control
                      onClick={clearText}
                      type="text"
                      defaultValue={userFirstName}
                      onChange={(e) => {
                        setUserFirstName(e.target.value);
                      }}
                      onFocus={(e) =>
                        (e.target.placeholder = "Enter Your First Name")
                      }
                      onBlur={(e) => (e.target.placeholder = userFirstName)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="lastName">
                    <Form.Label className="text-muted">Last Name</Form.Label>
                    <Form.Control
                      onClick={clearText}
                      type="text"
                      defaultValue={userLastName}
                      onChange={(e) => {
                        setUserLastName(e.target.value);
                      }}
                      onFocus={(e) =>
                        (e.target.placeholder = "Enter Your Last Name")
                      }
                      onBlur={(e) => (e.target.placeholder = userLastName)}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="school">
                    <Form.Label className="text-muted">
                      School Affiliation
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={school}
                      aria-label="Disabled input for school affiliation"
                      disabled
                      readOnly
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="expertiseLevel">
                    <Form.Label className="text-muted">
                      Expertise Level
                    </Form.Label>
                    <Form.Select
                      aria-label="default select example"
                      onChange={(e) => {
                        setUserExpertise(e.target.value);
                      }}
                    >
                      <option defaultValue> {expertise}</option>
                      <option value="Student">Student</option>
                      <option value="Resident">Resident</option>
                      <option value="Fellow">Fellow</option>
                      <option value="Physician Assistant">
                        Physician Assistant
                      </option>
                      <option value="Nurse">Nurse</option>
                      <option value="Nurse Practitioner">
                        Nurse Practitioner
                      </option>
                      <option value="Pharmacist">Pharmacist</option>
                      <option value="Internal Med">Internal Med</option>
                      <option value="Other">Other</option>
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
                      aria-describedby="emailBlock"
                      onClick={clearText}
                      defaultValue={userEmail}
                      onChange={(e) => {
                        setUserEmail(e.target.value);
                      }}
                      onFocus={(e) =>
                        (e.target.placeholder = "Enter Your Email")
                      }
                      onBlur={(e) => (e.target.placeholder = userEmail)}
                    ></Form.Control>
                  </Form.Group>
                </Row>
                <center>
                  <Button
                    // id="form-submit-btn"
                    type="submit"
                    variant="secondary"
                    onClick={handleShow}
                  >
                    Update
                  </Button>
                </center>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Body>Your changes have been recorded!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Keep Editing
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => navigate("/home")}
                    >
                      Dashboard
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Form>
            </Col>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Profile;
