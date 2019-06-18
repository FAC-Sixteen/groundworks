import React from "react";
import StudentJobsToggle from "../components/StudentDashboard/StudentJobsToggle/StudentJobsToggle";
import ShortStudentProfileCard from "../components/StudentDashboard/ShortStudentProfileCard/ShortStudentProfileCard";
import StudentCompletedJobCard from "../components/StudentDashboard/CompletedJobCard/StudentCompletedJobCard";
import StudentCurrentJobCard from "../components/StudentDashboard/CurrentJobCard/CurrentJobCard";
import NewJobCard from "../components/StudentDashboard/NewJobCard/NewJobCard";

const StudentDashboard = () => {
  return (
    <div>
      <ShortStudentProfileCard />
      <StudentJobsToggle />
      <StudentCompletedJobCard />
      <StudentCurrentJobCard />
      <NewJobCard />
    </div>
  );
};

export default StudentDashboard;
