import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import LoadingScreen from "../loading/LoadingScreen";
import { CopyAll } from "@mui/icons-material";

const Home = () => {
  const { firstName, email } = useSelector((state) => state.auth.me);
  const loading = useSelector((state) => state.auth.loading);
  console.log(loading);

  return (
    <Container fluid>
      {loading && <LoadingScreen />}
      <div className="mx-auto">
        <h3>Welcome, {firstName}!</h3>
        <h5>Let's pretend this is a personalized user dashboard :)</h5>
      </div>
    </Container>
  );
};

export default Home;
