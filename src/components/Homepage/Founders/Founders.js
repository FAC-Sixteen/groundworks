import React from 'react';
import "./Founders.css";
import Founder from "./Founder/Founder";
import { Link } from 'react-router-dom';

const Founders = () => {
  return (
    <div className="FoundersComponent">
      <h2 className="FoundersComponent--header">From the Founders</h2>
      <div className="FoundersComponent--container">
        <Founder
          name="Dan Foster"
          position="CEO"
          instagram="#"
          twitter="#"
          facebook="#"
        />
        <Founder
          name="James Foster"
          position="COO"
          instagram="#"
          twitter="#"
          facebook="#"
        />
        <Founder
          name="Pete Foster"
          position="CTO"
          instagram="#"
          twitter="#"
          facebook="#"
        />
      </div>
      <p className="FoundersComponent--text">
        In our final year of university, we noticed that business' recruitment strategies were failing to reach students in an effective way. So we set out to find a solution, which led us to Groundworks. Our way to revolutionise how companies connect with students worldwide.
      </p>
      <Link to='/Join'>
      <button className="FoundersComponent--joinbutton">
        Join
      </button>
      </Link>
    </div>
  )
}

export default Founders;
