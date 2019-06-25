import React, { useState, useEffect } from "react";
import "../../../style/css/ClientCompletedJobCard.css";
import axios from "axios";

const ClientJobCard = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/client/all-briefs");
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <ul className={props.ClientCompletedJobCard ? "showing" : "hidden"}>
      {data.map((value, index) => {
        return (
          <li key={index}>
            {
              <div className="ClientJobCard">
                <div className="ClientJobCard--container">
                  <h2 className="ClientJobCard--projectname">
                    Completed Project Name: {value.projectName}
                  </h2>
                  <p className="ClientJobCard--projectdesc">
                    Project Brief: {value.projectBrief}
                  </p>
                  <div className="ClientJobCard--contactcontainer">
                    <div className="ClientJobCard--contactdetailsdiv">
                      <h4>Company Name: {value.companyName}</h4>
                      <h4>Contact Person: {value.contactPerson}</h4>
                    </div>
                    <div className="ClientJobCard--projectdetailsdiv">
                      <h4>Project Price: {value.projectPrice}</h4>
                      <h4>Estimated Workload: {value.estimatedWorkload}</h4>
                      <h4>Project Deadline: {value.projectDeadline}</h4>
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
            }
          </li>
        );
      })}
    </ul>
  );
};

export default ClientJobCard;
