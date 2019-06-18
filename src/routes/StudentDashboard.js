import React from "react";
import StudentJobsToggle from "../components/StudentDashboard/StudentJobsToggle/StudentJobsToggle";
import ShortStudentProfileCard from "../components/StudentDashboard/ShortStudentProfileCard/ShortStudentProfileCard";
import StudentCompletedJobCard from "../components/StudentDashboard/CompletedJobCard/StudentCompletedJobCard";
import StudentCurrentJobCard from "../components/StudentDashboard/CurrentJobCard/CurrentJobCard";
import NewJobCard from "../components/StudentDashboard/NewJobCard/NewJobCard";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

const StudentDashboard = () => {
  return (
    <div>
      <NavBar />
      <ShortStudentProfileCard />
      <StudentJobsToggle />
      <StudentCompletedJobCard />
      <StudentCurrentJobCard />
      <NewJobCard />
      <Footer />
    </div>
  );
};

export default StudentDashboard;
