import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

const Home = (props) => {
  const { firstName, email } = useSelector((state) => state.auth.me);
  return (
    <Container fluid>
      <div className="mx-auto">
        <h3>Welcome, {firstName}!</h3>
        <h5>Let's pretend this is a personalized user dashboard :)</h5>
      </div>
    </Container>
  );
};

export default Home;
