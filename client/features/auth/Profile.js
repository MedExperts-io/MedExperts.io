import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Container, Card, Button } from "react-bootstrap";
import { editProfile } from "./authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const { id, firstName, lastName, email, expertise } = useSelector((state) => state.auth.me);
  const [userFirstName, setUserFirstName] = useState(firstName);
  const [userLastName, setUserLastName] = useState(lastName);
  const [userEmail, setUserEmail] = useState(email);
  const [userExpertise, setUserExpertise] = useState(expertise);

  const clearText = (evt) => {
    evt.target.value = "";
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // notify();

    dispatch(
      editProfile({
        id,
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        expertise: userExpertise,
      })
    );
    console.log("submitted");
    setValidated(true);
  };

  return (
    <Container fluid>
      <Row>
        <Col className="mx-auto" sm={8}>
          <Card border="light">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <h1>Edit My Profile</h1>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    onClick={clearText}
                    type="text"
                    defaultValue={userFirstName}
                    onChange={(e) => {
                      setUserFirstName(e.target.value);
                    }}
                    onFocus={(e) => (e.target.placeholder = "Enter Your First Name")}
                    onBlur={(e) => (e.target.placeholder = userFirstName)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    required
                    onClick={clearText}
                    type="text"
                    defaultValue={userLastName}
                    onChange={(e) => {
                      setUserLastName(e.target.value);
                    }}
                    onFocus={(e) => (e.target.placeholder = "Enter Your Last Name")}
                    onBlur={(e) => (e.target.placeholder = userLastName)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} className="mb-3" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    aria-describedby="emailBlock"
                    required
                    onClick={clearText}
                    defaultValue={userEmail}
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                    }}
                    onFocus={(e) => (e.target.placeholder = "Enter Your Email")}
                    onBlur={(e) => (e.target.placeholder = userEmail)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="expertiseLevel">
                  <Form.Label>Expertise Level</Form.Label>
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
                    <option value="Physician Assistant">Physician Assistant</option>
                    <option value="Nurse">Nurse</option>
                    <option value="Nurse Practitioner">Nurse Practitioner</option>
                    <option value="Pharmacist">Pharmacist</option>
                    <option value="Internal Med">Internal Med</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Button type="submit" variant="secondary">
                Update
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
