import React from "react";
import "./ClientJobsToggle.css";

const ClientJobsToggle = () => {
  return (
    <div className="ClientJobsToggle--container">
      <div className="ClientJobsToggle--div">New</div>
      <div className="ClientJobsToggle--div">Live</div>
      <div className="ClientJobsToggle--div">Completed</div>
    </div>
  );
};

export default ClientJobsToggle;
