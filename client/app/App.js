import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useSelector } from "react-redux";
import Footer from "../features/navbar/Footer";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";

const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <AppRoutes />
      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default App;
