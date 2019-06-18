import React from "react";
import StudentSignupForm from "../components/StudentSignupForm/StudentSignupForm";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

const StudentSignup = () => {
  return (
    <div>
      <NavBar />
      <StudentSignupForm />
      <Footer />
    </div>
  );
};

export default StudentSignup;
