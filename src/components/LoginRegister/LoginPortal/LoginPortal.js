import React, { useState } from "react";
import "./LoginPortal.css";
import { withRouter } from 'react-router-dom';
import axios from "axios";

const LoginPortal = (props) => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [errorText, setText] = useState({text:"Please enter your information"});

  const handleChange = event => {
    setDetails({...details, [event.target.name]: event.target.value})
  };

  const handleSubmit = event => {
    event.preventDefault();

    const validate = async () => {
      try {
        return await axios.post('/api/student/login', details)
          .then(({data}) => {
            setText({ text: data.msg })
            if (data.success) {
              props.history.push('/StudentDashboard');
            }
          })
      } catch (error) {
        console.error(error)
      }
    }
    validate()
  };

  return ( <
    div className="container--div">

    <form className="form" onSubmit={handleSubmit}>

    <h1 className="form--el form--title"> Welcome to Groundworks. </h1>
    <p className="form--subtitle"> Enter details below. </p>

    <h2 className="form--el form--input__title"> Email </h2>
    <input className="form--el input" type="text" name="email"
      value={details.email} onChange={handleChange} />
    <h2 className="form--el form--input__title"> Password </h2> <
    input className = "form--el input" type = "text" name = "password"
      value={details.password} onChange={handleChange} />
    <h3>{errorText.text}</h3>
    <input className="form--button" type="submit" value="Login" />
    </form> </div>
  );
};

export default withRouter(LoginPortal);
