import React, { Component } from "react";
import StudentJobsToggle from "../components/StudentDashboard/StudentJobsToggle/StudentJobsToggle";
import ShortStudentProfileCard from "../components/StudentDashboard/ShortStudentProfileCard/ShortStudentProfileCard";
import StudentCompletedJobCard from "../components/ClientDashboard/CompletedJobCard/ClientCompletedJobCard";

const StudentDashboard = () => {
  return (
    <div>
      <ShortStudentProfileCard />
      <StudentJobsToggle />
      <StudentCompletedJobCard />
    </div>
  );
};

export default StudentDashboard;
