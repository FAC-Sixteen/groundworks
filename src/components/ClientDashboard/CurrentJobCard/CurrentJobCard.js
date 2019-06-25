import React, { useState, useEffect } from "react";
import "../../../style/css/ClientCurrentJobCard.css";
import axios from "axios";

const ClientCurrentJobCard = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/client/all-briefs");
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <ul className={props.ClientCurrentJobCard ? "showing" : "hidden"}>
      {data.map((value, index) => {
        return (
          <li key={index}>
            {
              <div className="ClientCurrentJobCard">
                <div className="ClientCurrentJobCard--container">
                  <h2 className="ClientCurrentJobCard--projectname">
                    Current Project Name: {value.projectName}
                  </h2>
                  <p className="ClientCurrentJobCard--projectdesc">
                    Project Brief: {value.projectBrief}
                  </p>
                  <div className="ClientCurrentJobCard--contactcontainer">
                    <div className="ClientCurrentJobCard--contactdetailsdiv">
                      <h4>Company Name: {value.companyName}</h4>
                      <h4>Contact Person: {value.contactPerson}</h4>
                    </div>
                    <div className="ClientCurrentJobCard--projectdetailsdiv">
                      <h4>Project Price: {value.projectPrice}</h4>
                      <h4>Estimated Workload: {value.estimatedWorkload}</h4>
                      <h4>Project Deadline: {value.projectDeadline}</h4>
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
            }
          </li>
        );
      })}
    </ul>
  );
};

export default ClientCurrentJobCard;
