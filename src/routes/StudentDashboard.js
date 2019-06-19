import React from "react";
import StudentJobsToggle from "../components/StudentDashboard/StudentJobsToggle/StudentJobsToggle";
import ShortStudentProfileCard from "../components/StudentDashboard/ShortStudentProfileCard/ShortStudentProfileCard";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

const StudentDashboard = () => {
  return (
    <div>
      <NavBar />
      <ShortStudentProfileCard />
      <StudentJobsToggle />
      <Footer />
    </div>
  );
};

export default StudentDashboard;
