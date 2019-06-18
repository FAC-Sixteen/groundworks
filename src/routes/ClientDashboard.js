import React from "react";
import ClientJobsToggle from "../components/ClientDashboard/ClientJobsToggle/ClientJobsToggle";
import ClientProfileCard from "../components/ClientDashboard/ClientProfileCard/ClientProfileCard";
import ClientCompletedJobCard from "../components/ClientDashboard/CompletedJobCard/ClientCompletedJobCard";
import ClientCurrentJobCard from "../components/StudentDashboard/CurrentJobCard/CurrentJobCard";
import LongStudentProfileCard from "../components/ClientDashboard/LongStudentProfileCard/LongStudentProfileCard";

const ClientDashboard = () => {
  return (
    <div>
      <ClientProfileCard />
      <ClientJobsToggle />
      <ClientCompletedJobCard />
      <ClientCurrentJobCard />
      <LongStudentProfileCard />
    </div>
  );
};

export default ClientDashboard;
