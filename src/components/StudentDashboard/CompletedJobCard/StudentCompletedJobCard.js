import React from "react";
import "./StudentCompletedJobCard.css";

const StudentCompletedJobCard = () => {
  return (
    <div className="StudentCompletedJobCard">
      <div className="StudentCompletedJobCard--container">
        <h2 className="StudentCompletedJobCard--projectname">Project Name</h2>
        <p className="StudentCompletedJobCard--projectdesc">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum
        </p>
        <div className="StudentCompletedJobCard--contactcontainer">
          <div className="StudentCompletedJobCard--contactdetailsdiv">
            <h4>Contact Email</h4>
            <h4>Contact Email</h4>
            <h4>Contact Email</h4>
          </div>
          <div className="StudentCompletedJobCard--projectdetailsdiv">
            <h4>Price</h4>
            <h4>Workload</h4>
            <h4>Deadline</h4>
          </div>
        </div>
        <div className="StudentCompletedJobCard--downloadbrief">
          <span className="StudentCompletedJobCard--downloadbrief__name">
            Brief File Name
          </span>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default StudentCompletedJobCard;
