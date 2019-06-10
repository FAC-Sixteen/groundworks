import React, { Component } from "react";
import NavBar from "./components/Navbar/NavBar";
import "./normalize.css";
import "./app.css";

import Info from "./components/Homepage/Info/Info";


const App = () => {
  return (
    <div>
      <NavBar />
      <Info />
    </div>
  );
};

export default App;
