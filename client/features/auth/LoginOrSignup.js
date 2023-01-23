import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Login from "./Login";
import SignUp from "./SignUp";

const LoginOrSignup = () => {
  return (
    <Container className="p-4">
      <Card className="mx-auto" style={{ maxWidth: "800px" }}>
        <Col>
          <center>
            <Tabs
              defaultActiveKey="login"
              id="justify-tab-login"
              className="mb-3"
              justify
            >
              <Tab eventKey="login" title="Login">
                {<Login />}
              </Tab>
              <Tab eventKey="signup" title="Sign Up">
                {<SignUp />}
              </Tab>
            </Tabs>
          </center>
        </Col>
      </Card>
      <div className="p-2"></div>
    </Container>
  );
};
export default LoginOrSignup;
