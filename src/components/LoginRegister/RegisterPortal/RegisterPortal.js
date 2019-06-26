import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./RegisterPortal.css";
import axios from "axios";

const RegisterPortal = props => {
  const [user, setUser] = useState("");
  const [details, setDetails] = useState({
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
    LinkedinURL: "",
    photoURL: "",
    text: "Please press submit when complete"
  });

  const handleChange = event => {
    setDetails({
      ...details,
      [event.target.name]: event.target.value,
      userType: user
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(details);
    console.log(user);
    console.log(props);

    const addRegister = async () => {
      console.log(`Fake submitting: ${details}`);
      console.log(user);
      try {
        const response = await axios.post(`/api/${user}/sign-up`, details)
        if (response.status === 200) {
          // check if response status is ok
          props.history.push("/StudentDashboard");
          //success scenario
        } else if (response.status === 400) {
          setDetails({ text: data.msg })
        }
      } catch (error) {
        console.error(error);
      }
    };
    addRegister();
    // props.history.push("/StudentDashboard");

    setDetails({
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
      LinkedinURL: "",
      photoURL: "",
      text: ""
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
          name="userName" value={details.userName} />
        <h2 className="form--el form--input__title">Email</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="email" value={details.email} />
        <h2 className="form--el form--input__title">Password</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="password" value={details.password} />
        <h2 className="form--el form--input__title">Phone</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="phoneNumber" value={details.phoneNumber} />
        <h2 className="form--el form--input__title">University</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="university" value={details.university} />
        <h2 className="form--el form--input__title">Year of Study</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="yearOfStudy" value={details.yearOfStudy} />
        <h2 className="form--el form--input__title">Course of Study</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="courseStudied" value={details.courseStudied} />
        <h2 className="form--el form--input__title">Skills</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="skills" value={details.skills} />
        <h2 className="form--el form--input__title">About You</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="aboutYou" value={details.aboutYou} />
        <h2 className="form--el form--input__title">LinkedIn:</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="LinkedinURL" value={details.LinkedinURL} />
        <h2 className="form--el form--input__title">Photo URL:</h2>
        <input className="form--el input" type="text" onChange={handleChange}
          name="photoURL" value={details.photoURL} />

        <h3>{details.text}</h3>

        <input className="form--button" type="submit" name="submit"
          value="Register" />
      </form>
    </div>
  );
};

export default withRouter(RegisterPortal);
