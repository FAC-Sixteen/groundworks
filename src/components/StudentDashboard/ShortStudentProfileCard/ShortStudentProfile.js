import React from "react";
import "../../../style/css/ShortStudentProfileCard.css";

const ShortStudentProfile = ({ name, course, university, year, photo }) => {
  return (
    <div className="StudentProfileCard">
      <div className="StudentProfileCard--container">
        <div className="StudentProfileCard--editbutton__container">
          <button className="StudentProfileCard--editbutton">Edit</button>
        </div>
        <div>
          <img
            className="StudentProfileCard--image"
            src={photo}
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
