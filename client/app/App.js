import React from "react";
import ImagePreloader from "./ImagePreloader";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/navbar/Footer";
import AppRoutes from "./AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <ImagePreloader />
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
