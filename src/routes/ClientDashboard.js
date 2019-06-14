import React, { Component } from "react";
import ClientJobsToggle from "../components/ClientDashboard/ClientJobsToggle/ClientJobsToggle";
import ClientProfileCard from "../components/ClientDashboard/ClientProfileCard/ClientProfileCard";
import ClientCompletedJobCard from "../components/ClientDashboard/CompletedJobCard/ClientCompletedJobCard";

const ClientDashboard = () => {
  return (
    <div>
      <ClientProfileCard />
      <ClientJobsToggle />
      <ClientCompletedJobCard />
    </div>
  );
};

export default ClientDashboard;
