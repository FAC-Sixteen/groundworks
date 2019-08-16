import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentJobsToggle from "../components/StudentDashboard/StudentJobsToggle/StudentJobsToggle";
import ShortStudentProfileCard from "../components/StudentDashboard/ShortStudentProfileCard/ShortStudentProfileCard";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import "./css/allPages.css";

const StudentDashboard = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/api/student/get-student/` + document.cookie.slice(3));
      setProfile(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="fullViewportHeight">
        <ShortStudentProfileCard props={profile}/>
        <StudentJobsToggle props={profile}/>
      </div>
    </div>
  );
};

export default StudentDashboard;
