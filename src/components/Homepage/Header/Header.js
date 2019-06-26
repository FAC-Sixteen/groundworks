import React from "react";
import { Link } from "react-router-dom";
import "../../../style/css/Header.css";
import HeaderJoinButton from "../../Button/HeaderJoinButton";
import "../../../style/css/HeaderJoinButton.css";

const Header = () => {
  return (
    <div className="headerComponent">
      <div className="headerComponent--student">
        <h2 className="headerComponent--headerStudent">Students</h2>
        <p className="headerComponent--studentParagraph">
          Gain practical work experience, explore
          <br /> career paths and generate income.
        </p>
        <Link to="./Join">
          <HeaderJoinButton />
        </Link>
      </div>
      <div className="headerComponent--employer">
        <h2 className="headerComponent--headerEmployers">Employers</h2>
        <p className="headerComponent--employerParagraph ">
          Hire better and smarter. Connect directly with reviewed candidates.
        </p>
        <Link to="./Join">
          <HeaderJoinButton />
        </Link>
      </div>
    </div>
  );
};

export default Header;
