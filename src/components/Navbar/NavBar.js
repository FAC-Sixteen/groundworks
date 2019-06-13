import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
          <Link to={"/Join"} className="NavBar--li__a NavBar--joinbutton">
            Join
          </Link>
        </li>
        <li className="NavBar--li">
          <Link to={"/Login"} className="NavBar--li__a NavBar--loginbutton">
            Login
          </Link>
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
