import React, { Component } from "react";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import "./normalize.css";
import "./app.css";

import Info from "./components/Homepage/Info/Info";
import Founders from "./components/Homepage/Founders/Founders";

const App = () => {
  return (
    <div>
      <NavBar />
      <Info />
      <Founders />
      <Footer />
    </div>
  );
};

export default App;
