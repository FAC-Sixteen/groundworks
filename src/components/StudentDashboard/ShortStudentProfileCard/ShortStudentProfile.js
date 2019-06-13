import React from "react";
import "./ShortStudentProfileCard.css";

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
            src="./../assets/portrait-photo.png"
          />
          <h4>{name}</h4>
          <h4>{course}</h4>
          <h4>{university}</h4>
          <h4>{year}</h4>
        </div>
      </div>
    </div>
  );
};

export default ShortStudentProfile;
