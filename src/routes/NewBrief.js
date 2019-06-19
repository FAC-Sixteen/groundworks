import React from "react";
import NewBriefForm from "../components/NewBrief/NewBriefForm/NewBriefForm";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

const NewBrief = () => {
  return (
    <div>
      <NavBar />
      <NewBriefForm />
      <Footer />
    </div>
  );
};

export default NewBrief;
