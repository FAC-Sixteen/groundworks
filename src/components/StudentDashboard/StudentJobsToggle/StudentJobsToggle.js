import React from "react";
import "./StudentJobsToggle.css";

const StudentJobsToggle = () => {
  return (
    <div className="StudentJobsToggle--container">
      <div className="StudentJobsToggle--div">New</div>
      <div className="StudentJobsToggle--div">Live</div>
      <div className="StudentJobsToggle--div">Completed</div>
    </div>
  );
};

export default StudentJobsToggle;
