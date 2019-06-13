import React from 'react';
import "./Founders.css";
import Founder from "./Founder/Founder.js"

const Founders = () => {
  return (
    <div class="FoundersComponent">
      <h2 class="FoundersComponent--header">From the Founders</h2>
      <div class="FoundersComponent--container">
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
      <p class="FoundersComponent--text">
        In our final year of university, we noticed that business' recruitment strategies were failing to reach students in an effective way. So we set out to find a solution, which led us to Groundworks. Our way to revolutionise how companies connect with students worldwide.
      </p>
      <button class="FoundersComponent--joinbutton">
        Join
      </button>
    </div>
  )
}

export default Founders;
