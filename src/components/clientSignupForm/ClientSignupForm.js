import React, { useState } from "react";
import "./ClientSignupForm.css";
import axios from "axios";

const ClientSignupForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    jobTitle: "",
    companyName: "",
    companyUrl: ""
  });

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const addClient = async () => {
      console.log(`Fake data: ${data}`);
      try {
        return await axios.post("/api/client/sign-up", data);
      } catch (error) {
        console.error(error);
      }
    };
    addClient();
    setData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      jobTitle: "",
      companyName: "",
      companyUrl: ""
    });
  };
  return (
    <div>
      <form className="SignupForm" onSubmit={handleSubmit}>
        <fieldset className="Signup--Fieldset">
          <legend>Client Signup</legend>

          <div className="Signup--div-p1">
            <div className="Signup--row">
              <label className="Signup-label" htmlFor="firstName">
                First Name:
                <input
                  className="Signup--input"
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={data.firstName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="Signup--row">
              <label className="Signup--label" htmlFor="lastName">
                Last Name:
                <input
                  className="Signup--input"
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={data.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="Signup--row">
              <label className="Signup--label" htmlFor="email">
                Email:
                <input
                  className="Signup--input"
                  id="email"
                  type="text"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="Signup--row">
              <label className="Signup--label" htmlFor="password">
                Password:
                <input
                  className="Signup--input"
                  id="password"
                  type="text"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="Signup--row">
              <label className="Signup--label" htmlFor="phoneNumber">
                Phone Number:
                <input
                  className="Signup--input"
                  id="phoneNumber"
                  type="text"
                  name="phoneNumber"
                  value={data.phoneNumber}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="Signup--row">
              <label className="Signup--label" htmlFor="jobTitle">
                Job Title:
                <input
                  className="Signup--input"
                  id="jobTitle"
                  type="text"
                  name="jobTitle"
                  value={data.jobTitle}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="Signup--row">
              <label className="Signup--label" htmlFor="companyName">
                Company Name:
                <input
                  className="Signup--input"
                  id="companyName"
                  type="text"
                  name="companyName"
                  value={data.companyName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="Signup--row">
              <label className="Signup--label" htmlFor="companyUrl">
                Company URL:
                <input
                  className="Signup--input"
                  id="companyUrl"
                  type="text"
                  name="companyUrl"
                  value={data.companyUrl}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <input
            className="SignupForm--submit"
            type="submit"
            name="submit"
            value="submit"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default ClientSignupForm;
