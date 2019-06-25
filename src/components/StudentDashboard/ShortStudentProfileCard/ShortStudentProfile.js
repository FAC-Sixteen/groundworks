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
            src="https://user-images.githubusercontent.com/32282170/59887196-0bf8a700-93cb-11e9-9016-e046470cb8e9.jpg"
          />
          <h4>{name}</h4>
          <h4>{course}</h4>
          <h4>{university}</h4>
          <h4>Year {year}</h4>
        </div>
      </div>
    </div>
  );
};

export default ShortStudentProfile;
