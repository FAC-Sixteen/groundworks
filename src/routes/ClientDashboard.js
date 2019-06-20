import React from "react";
import ClientJobsToggle from "../components/ClientDashboard/ClientJobsToggle/ClientJobsToggle";
import ClientProfileCard from "../components/ClientDashboard/ClientProfileCard/ClientProfileCard";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import "./css/allPages.css";

const ClientDashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="fullViewportHeight">
        <ClientProfileCard />
        <ClientJobsToggle />
      </div>
      <Footer />
    </div>
  );
};

export default ClientDashboard;
