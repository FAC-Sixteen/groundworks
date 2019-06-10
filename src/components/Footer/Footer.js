import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <img
          className="footer-img"
          src="../../assets/instagram.png"
          alt="instagram logo"
        />
        <img
          className="footer-img"
          src="../../assets/twitter.png"
          alt="twitter logo"
        />
        <img
          className="footer-img"
          src="../../assets/facebook.png"
          alt="facebook logo"
        />
      </div>
      <p className="footer--paragraph">© Groundworks Graduates LTD</p>
    </div>
  );
};

export default Footer;
