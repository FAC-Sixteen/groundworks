import React from "react";
import ClientJobsToggle from "../components/ClientDashboard/ClientJobsToggle/ClientJobsToggle";
import ClientProfileCard from "../components/ClientDashboard/ClientProfileCard/ClientProfileCard";
import ClientCompletedJobCard from "../components/ClientDashboard/CompletedJobCard/ClientCompletedJobCard";
import ClientCurrentJobCard from "../components/ClientDashboard/CurrentJobCard/CurrentJobCard";
import LongStudentProfileCard from "../components/ClientDashboard/LongStudentProfileCard/LongStudentProfileCard";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

const ClientDashboard = () => {
  return (
    <div>
      <NavBar />
      <ClientProfileCard />
      <ClientJobsToggle />
      <ClientCompletedJobCard />
      <ClientCurrentJobCard />
      <LongStudentProfileCard />
      <Footer />
    </div>
  );
};

export default ClientDashboard;
