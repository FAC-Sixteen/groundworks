import React from "react";
import "./CurrentJobCard.css";

const StudentCurrentJobCard = () => {
  return (
    <div className="StudentCurrentJobCard">
      <div className="StudentCurrentJobCard--container">
        <h2 className="StudentCurrentJobCard--projectname">Project Name</h2>
        <p className="StudentCurrentJobCard--projectdesc">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum
        </p>
        <div className="StudentCurrentJobCard--contactcontainer">
          <div className="StudentCurrentJobCard--contactdetailsdiv">
            <h4>Contact Email</h4>
            <h4>Contact Email</h4>
            <h4>Contact Email</h4>
          </div>
          <div className="StudentCurrentJobCard--projectdetailsdiv">
            <h4>Price</h4>
            <h4>Workload</h4>
            <h4>Deadline</h4>
          </div>
        </div>
        <div className="StudentCurrentJobCard--downloadbrief">
          <span className="StudentCurrentJobCard--downloadbrief__name">
            Brief File Name
          </span>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default StudentCurrentJobCard;
