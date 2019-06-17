import React from "react";
import "./NewJobCard.css";

const StudentNewJobCard = () => {
  return (
    <div className="StudentNewJobCard">
      <div className="StudentNewJobCard--container">
        <h2 className="StudentNewJobCard--projectname">Project Name</h2>
        <p className="StudentNewJobCard--projectdesc">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum
        </p>
        <div className="StudentNewJobCard--contactcontainer">
          <div className="StudentNewJobCard--contactdetailsdiv">
            <h4>Contact Email</h4>
            <h4>Contact Email</h4>
            <h4>Contact Email</h4>
          </div>
          <div className="StudentNewJobCard--projectdetailsdiv">
            <h4>Price</h4>
            <h4>Workload</h4>
            <h4>Deadline</h4>
          </div>
        </div>
        <div className="StudentNewJobCard--downloadbrief">
          <span className="StudentNewJobCard--downloadbrief__name">
            Brief File Name
          </span>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default StudentNewJobCard;
