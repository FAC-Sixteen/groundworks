import React from "react";
import "./ClientCompletedJobCard.css";

const ClientJobCard = () => {
  return (
    <div className="ClientJobCard">
      <div className="ClientJobCard--container">
        <h2 className="ClientJobCard--projectname">Project Name</h2>
        <p className="ClientJobCard--projectdesc">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum
        </p>
        <div className="ClientJobCard--contactcontainer">
          <div className="ClientJobCard--contactdetailsdiv">
            <h4>Contact Email</h4>
            <h4>Contact Email</h4>
            <h4>Contact Email</h4>
          </div>
          <div className="ClientJobCard--projectdetailsdiv">
            <h4>Price</h4>
            <h4>Workload</h4>
            <h4>Deadline</h4>
          </div>
        </div>
        <div className="ClientJobCard--downloadbrief">
          <span className="ClientJobCard--downloadbrief__name">
            Brief File Name
          </span>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default ClientJobCard;
