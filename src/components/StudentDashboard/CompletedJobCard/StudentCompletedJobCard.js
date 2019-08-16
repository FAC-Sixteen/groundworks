import React, { useState, useEffect } from "react";
import "../../../style/css/StudentCompletedJobCard.css";
import axios from "axios";

const StudentCompletedJobCard = ({StudentCompletedJobCard, props}) => {
  const [passedProps, updateProps] = useState(props);

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/brief/all-briefs");
      setData(result.data);
    };
    fetchData();
    
  }, []);

  return (
    <ul className={StudentCompletedJobCard ? "showing" : "hidden"}>
      {data.map((value, index) => {
        return (
          <li key={index}>
            {
              <div className="StudentCompletedJobCard">
                <div className="StudentCompletedJobCard--container">
                  <h2 className="StudentCompletedJobCard--projectname">
                    {value.companyName}
                  </h2>
                  <p className="StudentCompletedJobCard--projectdesc">
                    Brief: {value.projectBrief}
                  </p>
                  <div className="StudentCompletedJobCard--contactcontainer">
                    <div className="StudentCompletedJobCard--contactdetailsdiv">
                      <h4>Project: {value.projectName}</h4>
                      <h4>Contact: {value.contactPerson}</h4>
                    </div>
                    <div className="StudentCompletedJobCard--projectdetailsdiv">
                      <h4>Pay: {value.projectPrice}</h4>
                      <h4>Hours: {value.estimatedWorkload}</h4>
                      <h4>Due: {value.projectDeadline}</h4>
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
