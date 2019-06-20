import React, { useState } from "react";
import "./RegisterPortal.css";
import axios from "axios";

const RegisterPortal = () => {
  const [user, setUser] = useState("");

  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    userType: ""
  });

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
      userType: user
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(data);
    console.log(user);

    const addRegister = async () => {
      console.log(`Fake submitting: ${data}`);
      try {
        return await axios.post(`/api/${user}/join`, data);
      } catch (error) {
        console.error(error);
      }
    };
    addRegister();

    // props.history.push("/StudentDashboard");

    setData({
      userName: "",
      email: "",
      password: "",
      userType: ""
    });
  };

  return (
    <div>
      <form
        className="form"
        onSubmit={handleSubmit}
        action="/api/"
        method="post"
      >
        <h1 className="form--el form--title">Welcome to Groundworks.</h1>
        <p className="form--subtitle">Enter details below.</p>

        <fieldset id="user-type">
          <label htmlFor="student">
            Student
            <input
              type="radio"
              value="student"
              name="userType"
              onChange={() => setUser("student")}
            />
          </label>
          <label htmlFor="client">
            Client
            <input
              type="radio"
              value="client"
              name="userType"
              onChange={() => setUser("client")}
            />
          </label>
        </fieldset>

        <h2 className="form--el form--input__title">Name</h2>
        <input
          className="form--el input"
          type="text"
          onChange={handleChange}
          name="userName"
          value={data.userName}
        />
        <h2 className="form--el form--input__title">Email</h2>
        <input
          className="form--el input"
          type="text"
          onChange={handleChange}
          name="email"
          value={data.email}
        />
        <h2 className="form--el form--input__title">Password</h2>
        <input
          className="form--el input"
          type="text"
          onChange={handleChange}
          name="password"
          value={data.password}
        />
        <input
          className="form--button"
          type="submit"
          name="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default RegisterPortal;
