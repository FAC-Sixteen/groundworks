import React from "react";
import "./NewJobCard.css";
// import axios from "axios";

const StudentNewJobCard = props => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await axios("/api/client/all-briefs");
  //       console.log(result.data);
  //       setData(result.data);
  //     };
  //     fetchData();
  //   }, []);

  return (
    <ul className={props.StudentNewJobCard ? "showing" : "hidden"}>
      <div className="StudentNewJobCard">
        <h2 className="StudentNewJobCard--projectname">Project Name:</h2>
        <p className="StudentNewJobCard--projectdesc">Project Brief:</p>
        <div className="StudentNewJobCard--contactcontainer">
          <div className="StudentNewJobCard--contactdetailsdiv">
            <h4>Contact Email</h4>
            <h4>Contact Email</h4>
            <h4>Contact Email</h4>
          </div>
          <div className="StudentNewJobCard--projectdetailsdiv">
            <h4>Price</h4>
            <h4>Workload</h4>
            <h4>Deadline</h4>
          </div>
        </div>
        <div className="StudentNewJobCard--downloadbrief">
          <span className="StudentNewJobCard--downloadbrief__name">
            Brief File Name
          </span>
          <button>Download</button>
        </div>
      </div>
    </ul>
  );
};

export default StudentNewJobCard;
