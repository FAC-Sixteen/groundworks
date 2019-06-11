import React, { useState, createContext } from 'react';

export const StudentDataContext = createContext();

export const StudentDataProvider = (props) => {
  const [studentData, setStudentData] = useState ([
    {firstName: "Boutros Boutros", lastName: "Ghali", email:"boutros@gmail.com",
    phoneNumber: "12345678", password: "password",
    university: "University of Bristol", yearOfStudy: "4",
    courseStudied: "biochemistry", skills: ["excel", "writing", "research"],
    aboutYou: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    LinkedinURL: "www.linkedin.com/boutrosbaby"
  ]);

  return(
    <StudentDataContext.Provider value={[studentData, setStudentData]} />
    {this.props.children}
  </StudentDataContext.Provider>
  )
}
