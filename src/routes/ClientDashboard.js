import React, { Component } from "react";
import ClientJobsToggle from "../components/ClientDashboard/ClientJobsToggle/ClientJobsToggle";
import ClientProfileCard from "../components/ClientDashboard/ClientProfileCard/ClientProfileCard";

const ClientDashboard = () => {
  return (
    <div>
      <ClientProfileCard />
      <ClientJobsToggle />
    </div>
  );
};

export default ClientDashboard;
