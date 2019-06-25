import React, { useState } from "react";
import "../../style/css/AcceptDecline.css";

const AcceptDecline = () => {
  return (
    <div className="AcceptDecline">
      <button className="AcceptDecline--AcceptButton">&#10003; Accept</button>
      <button className="AcceptDecline--DeclineButton">&#10007; Decline</button>
    </div>
  );
};

export default AcceptDecline;
