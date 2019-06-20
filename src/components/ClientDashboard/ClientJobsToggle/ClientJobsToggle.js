import React, { useState } from "react";
import "./ClientJobsToggle.css";
import ClientCompletedJobCard from "../CompletedJobCard/ClientCompletedJobCard.js";
import ClientCurrentJobCard from "../CurrentJobCard/CurrentJobCard.js";
import LongStudentProfileCard from "../LongStudentProfileCard/LongStudentProfileCard.js";

const ClientJobsToggle = () => {
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
    <div>
      <div className="ClientJobsToggle--container">
        <div
          className={grey1 ? "grey1" : "ClientJobsToggle--div1"}
          onClick={change1}
        >
          New
        </div>
        <div
          className={grey2 ? "grey2" : "ClientJobsToggle--div2"}
          onClick={change2}
        >
          Live
        </div>
        <div
          className={grey3 ? "grey3" : "ClientJobsToggle--div3"}
          onClick={change3}
        >
          Completed
        </div>
      </div>
      <ClientCompletedJobCard ClientCompletedJobCard={grey3} />
      <ClientCurrentJobCard ClientCurrentJobCard={grey2} />
      <LongStudentProfileCard LongStudentProfileCard={grey1} />
    </div>
  );
};

export default ClientJobsToggle;
