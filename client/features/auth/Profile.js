import React from "react";
import { Form, Row, Col, Container, Card, Button } from "react-bootstrap";

const Profile = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="mx-auto" sm={8}>
          <Card border="light">
            <Form>
              <h1>Edit My Profile</h1>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="first name" />
                </Form.Group>

                <Form.Group as={Col} controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="last name" />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} className="mb-3" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    aria-describedby="emailBlock"
                    placeholder="Enter email address"
                  ></Form.Control>
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="email">
                  <Form.Label>Expertise Level</Form.Label>
                  <Form.Control type="email" placeholder="Enter email address"></Form.Control>
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
