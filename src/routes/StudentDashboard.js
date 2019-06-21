import React from "react";
import StudentJobsToggle from "../components/StudentDashboard/StudentJobsToggle/StudentJobsToggle";
import ShortStudentProfileCard from "../components/StudentDashboard/ShortStudentProfileCard/ShortStudentProfileCard";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import "./css/allPages.css";

const StudentDashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="fullViewportHeight">
        <ShortStudentProfileCard />
        <StudentJobsToggle />
      </div>
    </div>
  );
};

export default StudentDashboard;
