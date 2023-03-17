import React from "react";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/navbar/Footer";
import AppRoutes from "./AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
