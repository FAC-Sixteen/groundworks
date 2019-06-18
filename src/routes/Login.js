import React from "react";
import LoginPortal from "../components/LoginRegister/LoginPortal/LoginPortal";
// import LoginList from '../components/LoginRegister/LoginPortal/LoginList';
import { LoginProvider } from "../components/LoginRegister/LoginPortal/LoginContext";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

const Login = () => {
  return (
    <LoginProvider>
      <div>
        <NavBar />
        <LoginPortal />
        <Footer />
      </div>
    </LoginProvider>
  );
};

export default Login;
