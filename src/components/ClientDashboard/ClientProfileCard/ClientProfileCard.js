import React, { useState } from "react";
import "./ClientProfileCard.css";

const ClientProfileCard = ({ name, company, jobtitle }) => {
  return (
    <div className="ClientProfileCard">
      <div className="ClientProfileCard--container">
        <div className="ClientProfileCard--editbutton__container">
          <button className="ClientProfileCard--editbutton">Edit</button>
        </div>
        <img
          className="ClientProfileCard--image"
          src="./../assets/portrait-photo.png"
          alt=""
        />
        <h3>{name}</h3>
        <h4>{company}</h4>
        <h4>{jobtitle}</h4>
      </div>
    </div>
  );
};

export default ClientProfileCard;
