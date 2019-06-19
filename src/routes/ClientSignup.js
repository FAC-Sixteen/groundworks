import React from "react";
import ClientSignupForm from "../components/clientSignupForm/ClientSignupForm";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

const ClientSignup = () => {
  return (
    <div>
      <NavBar />
      <ClientSignupForm />
      <Footer />
    </div>
  );
};

export default ClientSignup;
