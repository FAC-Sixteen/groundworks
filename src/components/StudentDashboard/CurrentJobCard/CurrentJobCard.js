import React, { useState, useEffect } from "react";
import "./CurrentJobCard.css";
import axios from "axios";

const StudentCurrentJobCard = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/client/all-briefs");
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <ul className={props.StudentCurrentJobCard ? "showing" : "hidden"}>
      {data.map((value, index) => {
        return (
          <li key={index}>
            {
              <div className="StudentCurrentJobCard">
                <div className="StudentCurrentJobCard--container">
                  <h2 className="StudentCurrentJobCard--projectname">
                    Project Name: {value.projectName}
                  </h2>
                  <p className="StudentCurrentJobCard--projectdesc">
                    Project Brief: {value.projectBrief}
                  </p>
                  <div className="StudentCurrentJobCard--contactcontainer">
                    <div className="StudentCurrentJobCard--contactdetailsdiv">
                      <h4>Company Name: {value.companyName}</h4>
                      <h4>Contact Person: {value.contactPerson}</h4>
                    </div>
                    <div className="StudentCurrentJobCard--projectdetailsdiv">
                      <h4>Project Price: {value.projectPrice}</h4>
                      <h4>Estimated Workload: {value.estimatedWorkload}</h4>
                      <h4>Project Deadline: {value.projectDeadline}</h4>
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
            }
          </li>
        );
      })}
    </ul>
  );
};

export default StudentCurrentJobCard;
