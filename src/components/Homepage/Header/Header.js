import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerComponent">
      <div className="headerComponent--student">
        <h2 className="headerComponent--headerStudent">Students</h2>
        <p>
          Gain practical work experience, explore
          <br /> career paths and generate income.
        </p>
      </div>
      <div className="headerComponent--employer">
        <h2 className="headerComponent--headerEmployers">Employers</h2>
        <p>
          Hire better and smarter. Connect directly with reviewed candidates.
        </p>
      </div>
    </div>
  );
};

export default Header;
