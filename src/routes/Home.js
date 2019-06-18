import React from "react";

import NavBar from "../components/Navbar/NavBar";
import Header from "../components/Homepage/Header/Header";
import Info from "../components/Homepage/Info/Info";
import Ourplatform from "../components/Homepage/Ourplatform/Ourplatform";
import Testimonials from "../components/Homepage/Testimonials/Testimonials";
import Founders from "../components/Homepage/Founders/Founders";
import Footer from "../components/Footer/Footer";

const Home = () => {
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

export default Home;
