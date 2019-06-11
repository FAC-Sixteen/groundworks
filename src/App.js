import React, { Component } from "react";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import "./normalize.css";
import "./App.css";

import Info from "./components/Homepage/Info/Info";
import Header from "./components/Homepage/Header/Header";
import Testimonials from "./components/Homepage/Testimonials/Testimonials.js";
import Founders from "./components/Homepage/Founders/Founders";

const App = () => {
  return (
    <div>
      <h1>Client Side ReactApp</h1>
      <Header />
      <NavBar />
      <Info />
      <Testimonials />
      <Founders />
      <Footer />
    </div>
  );
};

export default App;
