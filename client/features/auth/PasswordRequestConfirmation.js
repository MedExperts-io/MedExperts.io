import React from "react";
import { Card, Container, Row } from "react-bootstrap";

const PasswordRequestConfirmation = () => {
  return (
    <Container>
      <Row className="p-5">
        <Card border="light" className="p-5 mx-auto" style={{ maxWidth: "800px" }}>
          <Card.Body>
            <Card.Title>
              <h3>Forgot Password: Email Reset</h3>
            </Card.Title>
            <br />
            <Card.Text>
              <p>
                We've sent an email to the address provided. Follow the link in the email to reset
                your password.
              </p>
              <br />
              <p>If you don't see an email, please be sure to check your spam or junk folders.</p>
            </Card.Text>{" "}
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default PasswordRequestConfirmation;
