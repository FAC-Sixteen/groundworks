import React from "react";
import "./Ourplatform.css";

const Ourplatform = () => {
  return (
    <div className="OurplatformComponent">
      <h2 className="OurplatformComponent--header">Our Platform</h2>
      <div className="OurplatformComponent--container">
      <div className="OurplatformComponent--leftdiv__container">
      <p className="OurplatformComponent--paragraph">
        Our platform eliminates the ambiguity of the traditional graduate recruitment process, where top talent can be missed as a result of restrictive testing and interviews.
        <br/>
        <br/>
        With us, businesses can develop meaningful connections with students as they gain experience and develop their competencies.
      </p>
      </div>
      <div className="OurplatformComponent--rightdiv__container">
      <img src="./../../assets/devices-icon.png" alt=""/>
      </div>
      </div>
    </div>
  );
};

export default Ourplatform;
