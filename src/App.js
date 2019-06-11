import React, { Component } from "react";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import "./normalize.css";
import "./app.css";

import Info from "./components/Homepage/Info/Info";
import Header from "./components/Homepage/Header/Header";
import Founders from "./components/Homepage/Founders/Founders";
import Ourplatform from "./components/Homepage/Ourplatform/Ourplatform";

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Info />
      <Ourplatform />
      <Founders />
      <Footer />
    </div>
  );
};

export default App;
