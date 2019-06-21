import React, { useState, useEffect } from "react";
import axios from "axios";
import ShortStudentProfile from "./ShortStudentProfile";

const ShortStudentProfileCard = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/student/get-student/5d0c022affa1b43f5cbb270e");
      console.log(result.data);
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
