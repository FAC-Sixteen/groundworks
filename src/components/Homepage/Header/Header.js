import React from "react";
import "./Header.css";
import HeaderJoinButton from "../../Button/HeaderJoinButton";
import "../../Button/HeaderJoinButton.css";

const Header = () => {
  return (
    <div className="headerComponent">
      <div className="headerComponent--student">
        <h2 className="headerComponent--headerStudent">Students</h2>
        <p className="headerComponent--studentParagraph">
          Gain practical work experience, explore
          <br /> career paths and generate income.
        </p>
        <HeaderJoinButton />
      </div>
      <div className="headerComponent--employer">
        <h2 className="headerComponent--headerEmployers">Employers</h2>
        <p className="headerComponent--employerParagraph ">
          Hire better and smarter. Connect directly with reviewed candidates.
        </p>
        <HeaderJoinButton />
      </div>
    </div>
  );
};

export default Header;
