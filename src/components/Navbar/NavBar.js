import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className="NavBar--ul">
        <li>
          <img
            className="NavBar--li__logo"
            src="../../assets/groundworks-logo.png"
            alt="GroundWorks Logo"
          />
        </li>
        <li className="NavBar--li">
          <a className="NavBar--li__a NavBar--joinbutton" href="">
            Join
          </a>
        </li>
        <li className="NavBar--li">
          <a className="NavBar--li__a NavBar--loginbutton" href="">
            Login
          </a>
        </li>
        <li className="NavBar--li">
          <img src="" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

//logo
//login
//join
// profile icon
