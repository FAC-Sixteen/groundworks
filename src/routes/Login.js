import React from "react";
import LoginPortal from "../components/LoginRegister/LoginPortal/LoginPortal";
// import LoginList from '../components/LoginRegister/LoginPortal/LoginList';
import { LoginProvider } from '../components/LoginRegister/LoginPortal/LoginContext';

const Login = () => {
  return (
    <LoginProvider>
    <div>
      <LoginPortal />
    </div>
    </LoginProvider>
  );
};

export default Login;
