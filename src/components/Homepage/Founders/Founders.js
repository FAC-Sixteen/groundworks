import React from "react";
import { Link } from 'react-router-dom';
import "./Founders.css";
import Founder from "./Founder/Founder";

const Founders = () => {
  return (
    <div className="FoundersComponent">
      <h2 className="FoundersComponent--header">From the Founders</h2>
      <div className="FoundersComponent--container">
        <Founder
          name="Alex Foster"
          src="https://user-images.githubusercontent.com/33389104/59862163-3110f980-937a-11e9-96c4-c6616dc20b43.jpeg"
          position="CEO"
          instagram="#"
          twitter="#"
          facebook="#"
        />
        <Founder
          name="Max Adorian"
          src="https://user-images.githubusercontent.com/33389104/59861571-04a8ad80-9379-11e9-9a99-5a8c26140a4c.jpeg"
          position="COO"
          instagram="#"
          twitter="#"
          facebook="#"
        />
        <Founder
          name="Joe Major"
          src="https://user-images.githubusercontent.com/33389104/59861571-04a8ad80-9379-11e9-9a99-5a8c26140a4c.jpeg"
          position="CTO"
          instagram="#"
          twitter="#"
          facebook="#"
        />
      </div>
      <p className="FoundersComponent--text">
        In our final year of university, we noticed that business' recruitment
        strategies were failing to reach students in an effective way. So we set
        out to find a solution, which led us to Groundworks. Our way to
        revolutionise how companies connect with students worldwide.
      </p>
      <Link to='./Join'>
      <button className="FoundersComponent--joinbutton">Join</button>
      </Link>
    </div>
  );
};

export default Founders;
