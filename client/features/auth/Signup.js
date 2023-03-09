import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../app/store";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const { error } = useSelector((state) => state.auth);
  const [err, setErr] = useState(error);

  const expertiseLevel = ["Student", "Resident", "Fellow", "Physician Assistant", "Nurse", "Nurse Practitioner", "Pharmacist", "Internal Med", "Other"];

  //password checker
  const atLeastOneUppercase = /[A-Z]/g;
  const atLeastOneLowercase = /[a-z]/g;
  const atLeastOneNumber = /[0-9]/g;
  const atLeastOneSpecialCharacter = /[#?!@$%^&*-]/g;
  const eightCharactersOrMore = /.{8,}/g;
  const [showReqs, setShowReqs] = useState(false);
  const [password, setPassword] = useState("");

  const passwordTracker = {
    uppercase: password.match(atLeastOneUppercase),
    lowercase: password.match(atLeastOneLowercase),
    number: password.match(atLeastOneNumber),
    specialCharacter: password.match(atLeastOneSpecialCharacter),
    eightCharactersOrGreater: password.match(eightCharactersOrMore),
  };

  const passwordStrength = Object.values(passwordTracker).filter((value) => value).length;
  //end password checker

  const togglePassword = (evt) => {
    evt.preventDefault();
    setPasswordShown(!passwordShown);
  };

  // start modal details
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {}; //setShow(true);
  // end modal details

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const firstName = evt.target.firstName.value;
    const lastName = evt.target.lastName.value;
    const expertise = evt.target.expertiseLevel.value;
    const school = evt.target.school.value;
    const email = evt.target.signupEmail.value;
    const password = evt.target.signupPassword.value;

    if (firstName && lastName && expertise && email && password) {
      await dispatch(
        authenticate({
          firstName,
          lastName,
          email,
          password,
          expertise,
          school,
          method: "signup",
        })
      )
        .unwrap()
        .then(() => {
          if (err) navigate("/signup");
          else if (!err) {
            setShow(true);
          }
        });
    }
  };

  return (
    <Container>
      <Row className="p-5 d-flex justify-content-center align-items-center">
        <Col md={8} lg={10} s={10} xs={12}>
          <Card className="shadow">
            <Card.Header>Create Account</Card.Header>
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <div className="mb-3">
                  <Form onSubmit={handleSubmit} name="signup">
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="firstName">
                        <Form.Label label="First Name">First Name</Form.Label>
                        <Col sm={12}>
                          <InputGroup>
                            <Form.Control style={{ borderRadius: "10px" }} required type="text" placeholder="Enter first name" />
                            <Form.Control.Feedback type="invalid">Please provide your first name.</Form.Control.Feedback>
                          </InputGroup>
                        </Col>
                      </Form.Group>

                      <Form.Group as={Col} controlId="lastName">
                        <Form.Label label="Last Name">Last Name</Form.Label>
                        <Col sm={12}>
                          <InputGroup>
                            <Form.Control style={{ borderRadius: "10px" }} required type="text" placeholder="Enter last name" />
                            <Form.Control.Feedback type="invalid">Please provide your last name.</Form.Control.Feedback>
                          </InputGroup>
                        </Col>
                      </Form.Group>
                    </Row>

                    <Row>
                      <Form.Group className="mb-3" as={Col} controlId="expertiseLevel">
                        <Form.Label label="Expertise Level">Expertise Level</Form.Label>
                        <Form.Select aria-label="Default select example">
                          {expertiseLevel.map((level) => (
                            <option key={level} value={level}>
                              {level}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="school">
                        <Form.Label label="School Affiliation">School Affiliation</Form.Label>
                        <Col sm={12}>
                          <InputGroup>
                            <Form.Control style={{ borderRadius: "10px" }} type="text" placeholder="Enter school name" />
                            <Form.Control.Feedback type="invalid">Please provide your school affiliation.</Form.Control.Feedback>
                          </InputGroup>
                        </Col>
                      </Form.Group>
                    </Row>

                    <Row>
                      <Form.Group as={Col} controlId="signupEmail">
                        <Form.Label label="Email Address">Email Address</Form.Label>

                        <Col sm={12}>
                          <InputGroup>
                            <Form.Control style={{ borderRadius: "10px" }} required autoComplete="email" type="email" placeholder="Enter email" />
                            <Form.Control.Feedback type="invalid">Enter email</Form.Control.Feedback>
                          </InputGroup>
                        </Col>
                      </Form.Group>

                      <Form.Group as={Col} controlId="signupPassword">
                        <Form.Label label="Password">Password</Form.Label>

                        <Row className="mb-3">
                          <Col sm={12}>
                            <InputGroup>
                              <Form.Control
                                required
                                onFocus={() => setShowReqs(true)}
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                autoComplete="new-password"
                                type={passwordShown ? "text" : "password"}
                                placeholder="Enter password"
                              />
                              <Button title="hide or show password" variant="outline-secondary" onClick={togglePassword} size="md" style={{ zIndex: 0 }}>
                                {passwordShown ? <VisibilityOffIcon title="show password" /> : <RemoveRedEyeIcon title="hide password" />}
                              </Button>
                              <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                            </InputGroup>
                          </Col>
                        </Row>
                      </Form.Group>
                    </Row>
                    {showReqs && (
                      <div>
                        <div className="password-strength-meter"></div>
                        <div className="text-muted">
                          <ul>
                            <small style={{ textDecorationLine: "underline" }}>{passwordStrength < 5 && "Password Requirements"}</small>
                            <small>
                              {!passwordTracker.uppercase && <li>MUST contain at least one uppercase letter</li>}
                              {!passwordTracker.lowercase && <li>MUST contain at least one lowercase letter</li>}
                              {!passwordTracker.specialCharacter && <li>MUST contain at least one special character (#?!@$%^&*-)</li>}
                              {!passwordTracker.number && <li>MUST contain at least one number</li>}
                              {!passwordTracker.eightCharactersOrGreater && <li>MUST contain at least 8 characters</li>}
                            </small>
                          </ul>
                        </div>
                      </div>
                    )}
                    <div className="d-grid">
                      <Button onClick={handleShow} disabled={passwordStrength != 5} id="buttons" variant="secondary" type="submit" size="md">
                        Sign Up
                      </Button>
                      {error && (
                        <p className="small" style={{ color: "red" }}>
                          {error}
                        </p>
                      )}
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Thank you for creating a MedExperts account!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Please login using the email and password you used to create your account.</Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={() => {
                              navigate("/login");
                            }}
                          >
                            Login
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </Form>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <p className="small">
                <a className="text" style={{ color: "black" }} href="/login">
                  Already have an account? Login to your account.
                </a>
              </p>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
