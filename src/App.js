import React, { Component } from "react";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import "./normalize.css";
import "./app.css";

import Info from "./components/Homepage/Info/Info";

const App = () => {
  return (
    <div>
      <NavBar />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
