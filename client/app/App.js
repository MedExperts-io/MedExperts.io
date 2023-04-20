import React from "react";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/navbar/Footer";
import AppRoutes from "./AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="min-h-screen relative flex flex-col pb-5 bg-[url('/img/newBG8T.png')]">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
