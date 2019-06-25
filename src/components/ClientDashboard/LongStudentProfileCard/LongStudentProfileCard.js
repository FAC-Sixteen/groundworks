import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../style/css/LongStudentProfileCard.css";
import AcceptDecline from "../../AccectDeclineButtons/AcceptDecline";

const LongStudentProfileCard = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "/api/student/get-student/5d0783ded1ea443e7621cc88"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className={props.LongStudentProfileCard ? "showing" : "hidden"}>
      <div className="LongStudentProfileCard--main">
        <div className="LongStudentProfileCard">
          <div className="LongStudentProfileCard--container">
            <h2 className="LongStudentProfileCard--projectname">
              Student Name: {data.firstName}
              {data.lastName}
            </h2>
            <p className="LongStudentProfileCard--projectdesc">
              About Myself: {data.aboutYou}
            </p>
            <div className="LongStudentProfileCard--contactcontainer">
              <div className="LongStudentProfileCard--contactdetailsdiv">
                <h4>Email: {data.email}</h4>
                <h4>Phone: {data.phoneNumber}</h4>
                <h4>Linkedin: {data.LinkedinURL}</h4>
              </div>
              <div className="LongStudentProfileCard--projectdetailsdiv">
                <h4>University: {data.university}</h4>
                <h4>Course Studied: {data.courseStudied}</h4>
                <h4>Year of Study: {data.yearOfStudy}</h4>
              </div>
            </div>
            <div className="LongStudentProfileCard--downloadbrief">
              <span className="LongStudentProfileCard--downloadbrief__name">
                Curriculum Vitae
              </span>
              <button className="LongStudentProfileCard--downloadbrief__button">
                Download
              </button>
            </div>
          </div>
        </div>
        <AcceptDecline />
      </div>
    </div>
  );
};

export default LongStudentProfileCard;
