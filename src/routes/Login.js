import React from "react";
import LoginPortal from "../components/LoginRegister/LoginPortal/LoginPortal";
// import LoginList from '../components/LoginRegister/LoginPortal/LoginList';
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

const Login = () => {
  return (
      <div>
        <NavBar />
        <LoginPortal />
        <Footer />
      </div>
  );
};

export default Login;
