import React, { Component } from "react";
import "./normalize.css";
import "./App.css";

import Info from "./components/Homepage/Info/Info";
import Header from "./components/Homepage/Header/Header";
import Founders from "./components/Homepage/Founders/Founders";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import ClientJobsToggle from "./components/ClientDashboard/ClientJobsToggle/ClientJobsToggle";
import Ourplatform from "./components/Homepage/Ourplatform/Ourplatform";

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Info />
      <Ourplatform />
      <Founders />
      <ClientJobsToggle />
      <Footer />
    </div>
  );
};

export default App;
