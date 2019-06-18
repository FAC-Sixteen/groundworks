import React, { useState } from "react";
import "./NewBriefForm.css";
import axios from "axios";

const ClientNewBriefForm = () => {
  const [data, setData] = useState({
    companyName: "",
    contactPerson: "",
    projectName: "",
    projectBrief: "",
    projectDeadline: "",
    estimatedWorkload: "",
    projectPrice: "",
    studentSkills: "",
    additionalInfo: ""
  });

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const addBrief = async () => {
      console.log(`Fake submitting: ${data}`);
      try {
        return await axios.post("/api/client/new-brief", data);
      } catch (error) {
        console.error(error);
      }
    };
    addBrief();
    setData({
      companyName: "",
      contactPerson: "",
      projectName: "",
      projectBrief: "",
      projectDeadline: "",
      estimatedWorkload: "",
      projectPrice: "",
      studentSkills: "",
      additionalInfo: ""
    });
  };
  return (
    <div>
      <form className="NewBriefForm" onSubmit={handleSubmit}>
        <fieldset className="NewBrief--Fieldset">
          <legend>Client NewBrief</legend>
          <div className="NewBrief--div-p1">
            <h2>Company Information</h2>
            <div className="NewBrief--row">
              <label className="NewBrief-label" htmlFor="companyName">
                Company Name:
                <input
                  className="NewBrief--input"
                  id="companyName"
                  type="text"
                  name="companyName"
                  value={data.companyName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="NewBrief--row">
              <label className="NewBrief-label" htmlFor="contactPerson">
                Contact Person:
                <input
                  className="NewBrief--input"
                  id="contactPerson"
                  type="text"
                  name="contactPerson"
                  value={data.contactPerson}
                  onChange={handleChange}
                />
              </label>
            </div>
            <h2>Project Information</h2>
            <div className="NewBrief--row">
              <label className="NewBrief-label" htmlFor="projectName">
                Project Name:
                <input
                  className="NewBrief--input"
                  id="projectName"
                  type="text"
                  name="projectName"
                  value={data.projectName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="NewBrief--row">
              <label className="NewBrief--label" htmlFor="briefUpload">
                Project Brief:
                <input
                  className="NewBrief--input"
                  type="text"
                  name="projectBrief"
                  id="projectBrief"
                  value={data.projectBrief}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="NewBrief--row">
              <label className="NewBrief--label" htmlFor="projectDeadline">
                Project Deadline:
                <input
                  className="NewBrief--input"
                  type="text"
                  name="projectDeadline"
                  id="projectDeadline"
                  value={data.projectDeadline}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="NewBrief--row">
              <label className="NewBrief--label" htmlFor="estimatedWorkload">
                Estimated Workload
                <input
                  className="NewBrief--input"
                  id="estimatedWorkload"
                  type="text"
                  name="estimatedWorkload"
                  value={data.estimatedWorkload}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="NewBrief--row">
              <label className="NewBrief--label" htmlFor="projectPrice">
                Project Price
                <input
                  className="NewBrief--input"
                  id="projectPrice"
                  type="text"
                  name="projectPrice"
                  value={data.projectPrice}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="NewBrief--row">
              <label className="NewBrief--label" htmlFor="studentSkills">
                Student Skills
                <input
                  className="NewBrief--input"
                  id="studentSkills"
                  type="text"
                  name="studentSkills"
                  value={data.studentSkills}
                  onChange={handleChange}
                />
              </label>
            </div>
            <h2>Student Information</h2>
            <div className="NewBrief--row">
              <label className="NewBrief--label" htmlFor="additionalInfo">
                Additional Info
                <input
                  className="NewBrief--input"
                  id="additionalInfo"
                  type="text"
                  name="additionalInfo"
                  value={data.additionalInfo}
                  onChange={handleChange}
                />
              </label>
            </div>
            <input
              className="NewBriefForm--submit"
              type="submit"
              name="submit"
              value="submit"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ClientNewBriefForm;
