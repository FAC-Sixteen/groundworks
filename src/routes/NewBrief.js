import React from "react";
import NewBriefForm from "../components/NewBrief/NewBriefForm/NewBriefForm";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import "./css/allPages.css";

const NewBrief = () => {
  return (
    <div>
      <NavBar />
      <div className="fullViewportHeight">
        <NewBriefForm />
      </div>
      <Footer />
    </div>
  );
};

export default NewBrief;
