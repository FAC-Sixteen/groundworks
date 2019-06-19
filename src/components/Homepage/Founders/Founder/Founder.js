import React from "react";
import "./Founder.css";

const Founder = props => {
  return (
    <div className="FounderComponent">
      <img
        className="FounderComponent--portraitphoto"
        src="https://user-images.githubusercontent.com/30301023/59760509-66d6b500-928a-11e9-8227-05c4cd4288db.png"
        alt=""
      />
      <h3 className="FounderComponent--name">{props.name}</h3>
      <h4 className="FounderComponent--title">{props.position}</h4>
      <div className="FounderComponent--socialicons__container">
        <a href={props.instagram}>
          <img
            className="FounderComponent--socialicons__icons"
            src="https://user-images.githubusercontent.com/30301023/59760481-5c1c2000-928a-11e9-9283-510e4d638911.png"
            alt="instagram logo"
          />
        </a>
        <a href={props.twitter}>
          <img
            className="FounderComponent--socialicons__icons"
            src="https://user-images.githubusercontent.com/30301023/59760518-6ccc9600-928a-11e9-8537-04934fc4b82b.png"
            alt="twitter logo"
          />
        </a>
        <a href={props.facebook}>
          <img
            className="FounderComponent--socialicons__icons"
            src="https://user-images.githubusercontent.com/30301023/59760456-4ad31380-928a-11e9-9ca0-f6c5d06c19d3.png"
            alt="facebook logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Founder;
