import React, { Component } from "react";
import "./normalize.css";
import "./app.css";

import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import LoginPortal from "./components/LoginRegister/LoginPortal/LoginPortal";
import Info from "./components/Homepage/Info/Info";
import Header from "./components/Homepage/Header/Header";
import Founders from "./components/Homepage/Founders/Founders";

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Info />
      <Founders />
      <Footer />
    </div>
  );
};

export default App;
