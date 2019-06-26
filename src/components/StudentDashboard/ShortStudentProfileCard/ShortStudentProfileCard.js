import React, { useState, useEffect } from "react";
import axios from "axios";
import ShortStudentProfile from "./ShortStudentProfile";

const ShortStudentProfileCard = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/student/get-student/5d1286b8a0aa563dc52dbbe7");
      console.log("Results: ", result.data.completedJobs);
      setProfile(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ShortStudentProfile
        name={profile.userName}
        university={profile.university}
        year={profile.yearOfStudy}
        course={profile.courseStudied}
      />
    </div>
  );
};

export default ShortStudentProfileCard;
