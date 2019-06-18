import React from 'react';
import "./Founder.css";

const Founder = (props) => {
  return (
    <div className="FounderComponent">
      <img className="FounderComponent--portraitphoto" src="./../../assets/portrait-photo.png" alt=""/>
      <h3 className="FounderComponent--name">{props.name}</h3>
      <h4 className="FounderComponent--title">{props.position}</h4>
      <div className="FounderComponent--socialicons__container">
        <a href={props.instagram}>
          <img
            className="FounderComponent--socialicons__icons"
            src="../../assets/instagram.png"
            alt="instagram logo"
          />
        </a>
        <a href={props.twitter}>
          <img
            className="FounderComponent--socialicons__icons"
            src="../../assets/twitter.png"
            alt="twitter logo"
          />
        </a>
        <a href={props.facebook}>
          <img
            className="FounderComponent--socialicons__icons"
            src="../../assets/facebook.png"
            alt="facebook logo"
          />
        </a>
      </div>
    </div>
  )
}

export default Founder;
