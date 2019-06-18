import React, { useState, useEffect } from "react";
import "./StudentCompletedJobCard.css";
import axios from "axios";

const StudentCompletedJobCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/client/all-briefs");
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <ul>
      {data.map((value, index) => {
        return (
          <li key={index}>
            {
              <div className="StudentCompletedJobCard">
                <div className="StudentCompletedJobCard--container">
                  <h2 className="StudentCompletedJobCard--projectname">
                    Project Name: {value.projectName}
                  </h2>
                  <p className="StudentCompletedJobCard--projectdesc">
                    Project Brief: {value.projectBrief}
                  </p>
                  <div className="StudentCompletedJobCard--contactcontainer">
                    <div className="StudentCompletedJobCard--contactdetailsdiv">
                      <h4>Company Name: {value.companyName}</h4>
                      <h4>Contact Person: {value.contactPerson}</h4>
                    </div>
                    <div className="StudentCompletedJobCard--projectdetailsdiv">
                      <h4>Project Price: {value.projectPrice}</h4>
                      <h4>Estimated Workload: {value.estimatedWorkload}</h4>
                      <h4>Project Deadline: {value.projectDeadline}</h4>
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
            }
          </li>
        );
      })}
    </ul>
  );
};

export default StudentCompletedJobCard;
