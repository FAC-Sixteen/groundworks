import React, { useState } from "react";
import "./RegisterPortal.css";
import axios from "axios";

const RegisterPortal = () => {
  const [user, setUser] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    usertype: ""
  });

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
      usertype: user
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
    setData({
      name: "",
      email: "",
      password: ""
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
              name="user-type"
              onChange={() => setUser("student")}
            />
          </label>
          <label htmlFor="client">
            Client
            <input
              type="radio"
              value="client"
              name="user-type"
              onChange={() => setUser("client")}
            />
          </label>
        </fieldset>

        <h2 className="form--el form--input__title">Name</h2>
        <input
          className="form--el input"
          type="text"
          onChange={handleChange}
          name="name"
          value={data.name}
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
