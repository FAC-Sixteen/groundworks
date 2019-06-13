import React, { useState, useEffect } from "react";
import axios from "axios";
import ShortStudentProfile from "./ShortStudentProfile";

const ShortStudentProfileCard = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/student/all");
      setProfile(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ShortStudentProfile
        name={profile.name}
        university={profile.university}
        year={profile.yearOfStudy}
        course={profile.courseStudied}
      />
    </div>
  );
};

export default ShortStudentProfileCard;
