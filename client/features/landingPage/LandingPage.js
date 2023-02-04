import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

const LandingPage = ({ isLoggedIn }) => {
  const { firstName } = useSelector((state) => state.auth.me);

  return (
    <Container fluid>
      <div className="mx-auto">
        {isLoggedIn ? (
          <>
            <h3>Welcome, {firstName}!</h3>
            <h5>Hold for landing page</h5>
          </>
        ) : (
          <h5>Hold for landing page</h5>
        )}
      </div>
    </Container>
  );
};

export default LandingPage;
