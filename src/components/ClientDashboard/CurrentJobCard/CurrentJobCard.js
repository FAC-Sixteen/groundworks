import React from "react";
import "./CurrentJobCard.css";

const ClientCurrentJobCard = () => {
  return (
    <div className="ClientCurrentJobCard">
      <div className="ClientCurrentJobCard--container">
        <h2 className="ClientCurrentJobCard--projectname">Project Name</h2>
        <p className="ClientCurrentJobCard--projectdesc">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum
        </p>
        <div className="ClientCurrentJobCard--contactcontainer">
          <div className="ClientCurrentJobCard--contactdetailsdiv">
            <h4>Contact Email</h4>
            <h4>Contact Email</h4>
            <h4>Contact Email</h4>
          </div>
          <div className="ClientCurrentJobCard--projectdetailsdiv">
            <h4>Price</h4>
            <h4>Workload</h4>
            <h4>Deadline</h4>
          </div>
        </div>
        <div className="ClientCurrentJobCard--downloadbrief">
          <span className="ClientCurrentJobCard--downloadbrief__name">
            Brief File Name
          </span>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default ClientCurrentJobCard;
