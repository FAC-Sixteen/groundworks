import React from "react";
import "../../style/css/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <img
          className="footer-img"
          src="https://user-images.githubusercontent.com/30301023/59760481-5c1c2000-928a-11e9-9283-510e4d638911.png"
          alt="instagram logo"
        />
        <img
          className="footer-img"
          src="https://user-images.githubusercontent.com/30301023/59760518-6ccc9600-928a-11e9-8537-04934fc4b82b.png"
          alt="twitter logo"
        />
        <img
          className="footer-img"
          src="https://user-images.githubusercontent.com/30301023/59760456-4ad31380-928a-11e9-9ca0-f6c5d06c19d3.png"
          alt="facebook logo"
        />
      </div>
      <p className="footer--paragraph">© Groundworks Graduates LTD</p>
    </div>
  );
};

export default Footer;
