import React, { useState } from "react";
import "./LoginPortal.css";

const LoginPortal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form--el form--title">Welcome to Groundworks.</h1>
        <p className="form--subtitle">Enter details below.</p>
        <h2 className="form--el form--input__title">Email</h2>
        <input
          className="form--el input"
          type="text"
          onChange={e => setEmail({ email: e.target.value })}
        />
        <h2 className="form--el form--input__title">Password</h2>
        <input
          className="form--el input"
          type="text"
          onChange={e => setPassword({ password: e.target.value })}
        />
        <input className="form--button" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginPortal;
