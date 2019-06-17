import React from "react";
import "./LongStudentProfileCard.css";
import AcceptDecline from "../../AccectDeclineButtons/AcceptDecline.js";

const LongStudentProfileCard = () => {
  return (
    <div className="LongStudentProfileCard--main">
      <div className="LongStudentProfileCard">
        <div className="LongStudentProfileCard--container">
          <h2 className="LongStudentProfileCard--projectname">Student Name</h2>
          <p className="LongStudentProfileCard--projectdesc">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum
          </p>
          <div className="LongStudentProfileCard--contactcontainer">
            <div className="LongStudentProfileCard--contactdetailsdiv">
              <h4>Student Email</h4>
              <h4>Student Phone</h4>
              <h4>Student Linkedin</h4>
            </div>
            <div className="LongStudentProfileCard--projectdetailsdiv">
              <h4>University name</h4>
              <h4>Location</h4>
              <h4>Year of Study</h4>
            </div>
          </div>
          <div className="LongStudentProfileCard--downloadbrief">
            <span className="LongStudentProfileCard--downloadbrief__name">
              Curriculum Vitae
            </span>
            <button>Download</button>
          </div>
        </div>
      </div>
      <AcceptDecline />
    </div>
  );
};

export default LongStudentProfileCard;
