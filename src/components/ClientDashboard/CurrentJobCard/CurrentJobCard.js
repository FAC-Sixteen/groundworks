import React, { useState, useEffect } from "react";
import "./CurrentJobCard.css";
import axios from "axios";

const ClientCurrentJobCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("api/client/all-briefs");
      setData(result.data);
    };
    fetchData();
  }, []);
  console.log("this is the project name", data[2]);
  console.log("this is the number of briefs", Object.keys(data).length);

  return (
    <div className="ClientCurrentJobCard">
      <div className="ClientCurrentJobCard--container">
        <h2 className="ClientCurrentJobCard--projectname">
          Project Name: {data.projectName}{" "}
        </h2>
        <p className="ClientCurrentJobCard--projectdesc">this uno</p>
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
