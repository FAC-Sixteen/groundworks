import React, { useState, useEffect } from "react";
import ShortStudentProfile from "./ShortStudentProfile";

const ShortStudentProfileCard = ({props}) => {

  return (
    <div>
      <ShortStudentProfile
        name={props.userName}
        university={props.university}
        year={props.yearOfStudy}
        course={props.courseStudied}
        photo={props.photoURL}
      />
    </div>
  );
};

export default ShortStudentProfileCard;
