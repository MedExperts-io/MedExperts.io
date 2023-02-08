import React, { useEffect, useEffectß } from "react";

import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { verifyNewUserEmail } from "./authSlice";

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const tempId = searchParams.get("tempId");

  useEffect(() => {
    dispatch(verifyNewUserEmail({ token, tempId }));
  }, []);

  return (
    <Container>
      {error ? (
        <p>Sorry, there was an error with your request. </p>
      ) : (
        <div>
          Thank you for verifying your email! Please login using your
          credentials.
          <Button onClick={() => navigate("/login")}>Login</Button>
        </div>
      )}
    </Container>
  );
};

export default VerifyEmail;
