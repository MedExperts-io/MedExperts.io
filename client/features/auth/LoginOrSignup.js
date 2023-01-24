import React from "react";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Login from "./Login";
import SignUp from "./Signup";

const LoginOrSignup = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={8} lg={6} xs={12} id="centre">
          <Card className="shadow">
            <Card.Body>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    // <Container className="d-flex">
    //   <
    //     style={{
    //       maxWidth: "500px",
    //     }}
    //   >
    //     <Col>
    //       {/* <center> */}
    //       <Tabs
    //         defaultActiveKey="login"
    //         id="justify-tab-login"
    //         className="mb-3"
    //         justify
    //       >
    //         <Tab eventKey="login" title="Login">
    //           {<Login />}
    //         </Tab>
    //         <Tab eventKey="signup" title="Sign Up">
    //           {<SignUp />}
    //         </Tab>
    //       </Tabs>
    //       {/* </center> */}
    //     </Col>
    //   </Card>
    // </Container>
  );
};
export default LoginOrSignup;
