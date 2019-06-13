import React, { Component } from "react";
import StudentJobsToggle from "../components/StudentDashboard/StudentJobsToggle/StudentJobsToggle";
import ShortStudentProfileCard from "../components/StudentDashboard/ShortStudentProfileCard/ShortStudentProfileCard";

const StudentDashboard = () => {
  return (
    <div>
      <ShortStudentProfileCard />
      <StudentJobsToggle />
    </div>
  );
};

export default StudentDashboard;
