import React from "react";
import "../../../style/css/ShortStudentProfileCard.css";

const ShortStudentProfile = ({ name, course, university, year }) => {
  return (
    <div className="StudentProfileCard">
      <div className="StudentProfileCard--container">
        <div className="StudentProfileCard--editbutton__container">
          <button className="StudentProfileCard--editbutton">Edit</button>
        </div>
        <div>
          <img
            className="StudentProfileCard--image"
            src="https://user-images.githubusercontent.com/32282170/60135235-ed6b2500-97a9-11e9-8d60-5affb9149370.jpg"
          />
          <h4>{name}</h4>
          <h4>Course: {course}</h4>
          <h4>{university}</h4>
          <h4>Year: {year}</h4>
        </div>
      </div>
    </div>
  );
};

export default ShortStudentProfile;
