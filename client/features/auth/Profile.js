import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Container, Card, Button, Modal } from "react-bootstrap";
import { editProfile } from "./authSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const { id, firstName, lastName, email, expertise, school } = useSelector((state) => state.auth.me);
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

  const expertiseOptions = ["Student", "Resident", "Fellow", "Physician Assistant", "Nurse", "Nurse Practitioner", "Pharmacist", "Internal Med", "Other"];

  return (
    <Container fluid className="profile-container bg-light">
      <Row className="d-flex justify-content-center align-items-center min-vh-100">
        <Col md={10} lg={7} xs={12}>
          <Card className="border-0 shadow-lg rounded-4">
            <Card.Header className="text-center border-0 pt-4 pb-3 bg-white">
              <h3 className="fw-bold text-primary mb-0">Edit My Profile</h3>
            </Card.Header>
            <Card.Body className="px-4 py-4">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-4">
                  <Form.Group as={Col} md={6} className="mb-3 mb-md-0">
                    <Form.Label className="text-secondary fw-semibold">
                      First Name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      onClick={clearText}
                      type="text"
                      defaultValue={userFirstName}
                      onChange={(e) => setUserFirstName(e.target.value)}
                      onBlur={(e) => (e.target.placeholder = userFirstName)}
                      className="form-control-lg border-secondary-subtle rounded-3"
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6}>
                    <Form.Label className="text-secondary fw-semibold">
                      Last Name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      onClick={clearText}
                      type="text"
                      defaultValue={userLastName}
                      onChange={(e) => setUserLastName(e.target.value)}
                      onBlur={(e) => (e.target.placeholder = userLastName)}
                      className="form-control-lg border-secondary-subtle rounded-3"
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-4">
                  <Form.Group as={Col} md={6} className="mb-3 mb-md-0">
                    <Form.Label className="text-secondary fw-semibold">School</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={school}
                      onClick={clearText}
                      onChange={(e) => setUserSchool(e.target.value)}
                      onBlur={(e) => (school && school.length ? (e.target.placeholder = userSchool) : (e.target.placeholder = ""))}
                      className="form-control-lg border-secondary-subtle rounded-3"
                    />
                  </Form.Group>

                  <Form.Group as={Col} md={6}>
                    <Form.Label className="text-secondary fw-semibold">
                      Expertise Level <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Select expertise level"
                      onChange={(e) => setUserExpertise(e.target.value)}
                      className="form-select-lg border-secondary-subtle rounded-3"
                      defaultValue={userExpertise}
                    >
                      {expertiseOptions.map((level, idx) => (
                        <option value={level} key={idx}>
                          {level}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Row className="mb-4">
                  <Form.Group as={Col}>
                    <Form.Label className="text-secondary fw-semibold">Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      disabled
                      readOnly
                      aria-describedby="disabled input for email address"
                      placeholder={email}
                      className="form-control-lg bg-light border-secondary-subtle rounded-3"
                    />
                  </Form.Group>
                </Row>

                <div className="text-center mt-4">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="px-5 py-3 rounded-3 fw-semibold"
                    onClick={handleShow}
                  >
                    Save Changes
                  </Button>
                </div>

                <Modal show={show} onHide={handleClose} centered className="rounded-4">
                  <Modal.Body className="text-center py-4">
                    <i className="bi bi-check-circle-fill text-success fs-1 mb-3"></i>
                    <h4 className="fw-bold mb-3">Changes Saved Successfully!</h4>
                    <p className="text-secondary mb-0">Your profile has been updated.</p>
                  </Modal.Body>
                  <Modal.Footer className="border-0 justify-content-center pb-4">
                    <Button 
                      variant="outline-primary" 
                      onClick={handleClose}
                      className="px-4 py-2 rounded-3 me-2"
                    >
                      Continue Editing
                    </Button>
                    <Button 
                      variant="primary" 
                      onClick={() => navigate("/dashboard")}
                      className="px-4 py-2 rounded-3"
                    >
                      Go to Dashboard
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
