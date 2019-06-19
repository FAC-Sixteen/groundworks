import React, { useState, useEffect } from "react";
import "./NewJobCard.css";
import axios from "axios";

const StudentNewJobCard = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/client/all-briefs");
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <ul className={props.StudentNewJobCard ? "showing" : "hidden"}>
      {data.map((value, index) => {
        return (
          <li key={index}>
            {
              <div className="StudentNewJobCard">
                <div className="StudentNewJobCard--container">
                  <h2 className="StudentNewJobCard--projectname">
                    Student Project Name: {value.projectName}
                  </h2>
                  <p className="StudentNewJobCard--projectdesc">
                    Project Brief: {value.projectBrief}
                  </p>
                  <div className="StudentNewJobCard--contactcontainer">
                    <div className="StudentNewJobCard--contactdetailsdiv">
                      <h4>Company Name: {value.companyName}</h4>
                      <h4>Contact Person: {value.contactPerson}</h4>
                    </div>
                    <div className="StudentNewJobCard--projectdetailsdiv">
                      <h4>Project Price: {value.projectPrice}</h4>
                      <h4>Estimated Workload: {value.estimatedWorkload}</h4>
                      <h4>Project Deadline: {value.projectDeadline}</h4>
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
            }
          </li>
        );
      })}
    </ul>
  );
};

export default StudentNewJobCard;
