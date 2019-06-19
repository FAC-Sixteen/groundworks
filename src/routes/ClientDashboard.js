import React from "react";
import ClientJobsToggle from "../components/ClientDashboard/ClientJobsToggle/ClientJobsToggle";
import ClientProfileCard from "../components/ClientDashboard/ClientProfileCard/ClientProfileCard";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

const ClientDashboard = () => {
  return (
    <div>
      <NavBar />
      <ClientProfileCard />
      <ClientJobsToggle />
      <Footer />
    </div>
  );
};

export default ClientDashboard;
