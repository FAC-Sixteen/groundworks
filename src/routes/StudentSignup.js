import React, { Component } from "react";
import StudentSignupForm from "../components/StudentSignupForm/StudentSignupForm";
import { RegisterProvider } from "../components/LoginRegister/RegisterPortal/RegisterContext";

const StudentSignup = () => {
  return (
    <RegisterProvider>
      <div>
        <StudentSignupForm />
      </div>
    </RegisterProvider>
  );
};

export default StudentSignup;
