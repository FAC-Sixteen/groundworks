import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./RegisterPortal.css";
import axios from "axios";

const RegisterPortal = props => {
  const [user, setUser] = useState("");
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    userType: "",
    university: "",
    yearOfStudy: "",
    courseStudied: "",
    skills: "",
    aboutYou: "",
    LinkedinURL: ""
  });

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
      userType: user
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(data);
    console.log(user);
    console.log(props);

    const addRegister = async () => {
      console.log(`Fake submitting: ${data}`);
      console.log(user);
      try {
        const response = await axios.post(`/api/${user}/sign-up`, data);
        if (response.status === 200) {
          // check if response status is ok
          props.history.push("/StudentDashboard");
          //success scenario
        }
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
      phoneNumber: "",
      userType: "",
      university: "",
      yearOfStudy: "",
      courseStudied: "",
      skills: "",
      aboutYou: "",
      LinkedinURL: ""
    });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form--el form--title">Welcome to Groundworks.</h1>
        <p className="form--subtitle">Register your details below.</p>

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
        <input className="form--el input" type="text" onChange={handleChange}
          name="userName" value={data.userName} />
        <h2 className="form--el form--input__title">Email</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="email" value={data.email} />
        <h2 className="form--el form--input__title">Password</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="password" value={data.password} />
        <h2 className="form--el form--input__title">Phone</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="phoneNumber" value={data.phoneNumber} />
        <h2 className="form--el form--input__title">University</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="university" value={data.university} />
        <h2 className="form--el form--input__title">Year of Study</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="yearOfStudy" value={data.yearOfStudy} />
        <h2 className="form--el form--input__title">Course of Study</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="courseStudied" value={data.courseStudied} />
        <h2 className="form--el form--input__title">Skills</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="skills" value={data.skills} />
        <h2 className="form--el form--input__title">About You</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="aboutYou" value={data.aboutYou} />
        <h2 className="form--el form--input__title">LinkedIn:</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="LinkedinURL" value={data.LinkedinURL} />
        <input className="form--button" type="submit" name="submit"
          value="Register" />
      </form>
    </div>
  );
};

export default withRouter(RegisterPortal);
