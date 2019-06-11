import React, { Component } from "react";
import "./normalize.css";
import "./App.css";

import NavBar from "./components/Navbar/NavBar";
import Header from "./components/Homepage/Header/Header";
import Info from "./components/Homepage/Info/Info";
import Ourplatform from "./components/Homepage/Ourplatform/Ourplatform.js";
import Testimonials from "./components/Homepage/Testimonials/Testimonials.js";
import Founders from "./components/Homepage/Founders/Founders";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Info />
      <Ourplatform />
      <Testimonials />
      <Founders />
      <Footer />
    </div>
  );
};

export default App;
