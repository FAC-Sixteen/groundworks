import React, { useState } from "react";
import "./StudentJobsToggle.css";

const StudentJobsToggle = () => {
  const [grey1, setGrey1] = useState(false);
  const [grey2, setGrey2] = useState(false);
  const [grey3, setGrey3] = useState(false);

  const change1 = () => {
    setGrey1(!grey1);
    setGrey2(false);
    setGrey3(false);
  };

  const change2 = () => {
    setGrey2(!grey2);
    setGrey1(false);
    setGrey3(false);
  };

  const change3 = () => {
    setGrey3(!grey3);
    setGrey1(false);
    setGrey2(false);
  };

  return (
    <div className="StudentJobsToggle--container">
      <div className={grey1 ? "grey1" : "StudentJobsToggle--div1"} onClick={change1}>New</div>
      <div className={grey2 ? "grey2" : "StudentJobsToggle--div2"} onClick={change2}>Live</div>
      <div className={grey3 ? "grey3" : "StudentJobsToggle--div3"} onClick={change3}>Completed</div>
    </div>
  );
};

export default StudentJobsToggle;
