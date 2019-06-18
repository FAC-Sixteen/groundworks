import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ClientProfileCard.css";

const ClientProfileCard = ({ name, company, jobtitle }) => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/client/get-client/5d08cff93136b6429a9c01eb")
      console.log(result.data);
      setProfile(result.data);
    }

    fetchData();
  }, []);

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
        <h3>{profile.firstName}</h3>
        <h4>{profile.companyName}</h4>
        <h4>{profile.jobTitle}</h4>
      </div>
    </div>
  );
};

export default ClientProfileCard;
