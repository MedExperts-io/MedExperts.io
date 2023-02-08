import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const VerifyEmail = () => {
  const navigate = useNavigate();

  return (
    <div>
      Thank you for verifying your email! Please login using your credentials.
      <Button onClick={() => navigate("/login")}>Login</Button>
    </div>
  );
};

export default VerifyEmail;
