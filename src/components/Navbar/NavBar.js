import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className="NavBar--ul">
        <Link to={"/"}>
          <li>
            <img
              className="NavBar--li__logo"
              src="https://user-images.githubusercontent.com/30301023/59760468-54f51200-928a-11e9-8009-2ae607c498b5.png"
              alt="GroundWorks Logo"
            />
          </li>
        </Link>
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
