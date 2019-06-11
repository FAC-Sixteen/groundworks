import React, { useState } from 'react';
import './StudentSignup.css';
import axios from 'axios';

function StudentSignup() {
  const [data, setData] = useState({firstName:"", lastName: "", email: "",
    phoneNumber: "", password: "", university: "", yearOfStudy: "",
    courseStudied: "", aboutYou: "", LinkedinURL: ""});

  const handleChange = (event) => {
    setData({
      ...data, [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data)
  // const addStudent = async () => {
  //   console.log(`Fake submitting: ${data}`);
  //   try {
  //     return await
  //     axios.post('/api/student/create', this.data)
  //   } catch(error) {
  //     console.error(error)
  //   }
  // }
  // addStudent();
  // props.history.push('/dashboard');
    setData({firstName:"", lastName: "", email: "",
      phoneNumber: null, password: "", university: "", yearOfStudy: 0,
      courseStudied: "", aboutYou: "", LinkedinURL: ""});
}

  return (
    <div>
    <h1>Hello</h1>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Student Signup</legend>

        <label for="firstName">First Name: </label>
        <input id="firstName" type="text" name="firstName"
          value={data.firstName} onChange={handleChange} />
        <label for="lastName">Last Name: </label>
        <input id="lastName" type="text" name="lastName"
          value={data.lastName} onChange={handleChange}  />
        <label for="email">Email: </label>
        <input id="email" type="text" name="email"
          value={data.email} onChange={handleChange} />
        <label for="phoneNumber">Phone Number: </label>
        <input id="phoneNumber" type="text" name="phoneNumber"
          value={data.phoneNumber} onChange={handleChange} />
        <label for="password">Password: </label>
        <input id="password" type="text" name="password"
          value={data.password} onChange={handleChange} />

        <label for="university">University: </label>
        <input id="university" type="text" name="university"
          value={data.university} onChange={handleChange}/>
        <label for="yearOfStudy">Year of Study: </label>
        <input id="yearOfStudy" type="text" name="yearOfStudy"
          value={data.yearOfStudy} onChange={handleChange}/>
        <label for="courseStudied">Course of Study: </label>
        <input id="courseStudied" type="text" name="courseStudied"
          value={data.courseStudied} onChange={handleChange} />
<h2>skills checkbox/dropdown</h2>

        <label for="aboutYou">About Yourself: </label>
        <input id="aboutYou "type="text" name="aboutYou"
          value={data.aboutYou} onChange={handleChange} />
        <label for="LinkedinURL">LinkedinURL: </label>
        <input id="LinkedinURL "type="text" name="LinkedinURL"
          value={data.LinkedinURL} onChange={handleChange} />

        <input type="submit" name="submit" value="submit" />

      </fieldset>
    </form>
  </div>
  )
}

export default StudentSignup;
