import React, { useState } from "react";
import "./NewBriefForm.css";
import axios from "axios";

const ClientNewBriefForm = () => {
  const [data, setData] = useState("");

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const addClient = async () => {
      console.log(`Fake data: ${data}`);
      try {
        return await axios.post("/api/client/sign-up", data);
      } catch (error) {
        console.log(error);
      }
    };
    addClient();
    setData("");
  };
  return (
    <div>
      <form className="NewBriefForm" onSubmit={handleSubmit}>
        <fieldset className="NewBrief--Fieldset">
          <legend>Client NewBrief</legend>
          <div className="NewBrief--CompanyInfo">
            <div className="NewBrief--CompanyInfo__leftdiv">
              <h4>Company Name</h4>
              <h4>Company Location</h4>
              <h4>Company Sector</h4>
            </div>
            <div className="NewBrief--CompanyInfo__rightdiv">
              <h4>Contact Name</h4>
              <h4>Contact Email Address</h4>
              <h4>Contact Number</h4>
            </div>
          </div>
          <div className="NewBrief--div-p1">
            <h2>Project Information</h2>
            <div className="NewBrief--row">
              <label className="NewBrief-label" htmlFor="firstName">
                Project Title:
                <input
                  className="NewBrief--input"
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={data.firstName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="NewBrief--row">
              <label className="NewBrief--label" htmlFor="lastName">
                Project Description:
                <input
                  className="NewBrief--input"
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={data.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="NewBrief--row">
              <label className="NewBrief--label" htmlFor="email">
                Brief Link Upload:
                <input
                  className="NewBrief--input"
                  id="email"
                  type="text"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <h2>Student Information</h2>
            <div className="NewBrief--row">
              <label className="NewBrief--label" htmlFor="password">
                Required Skills:
                <input
                  className="NewBrief--input"
                  id="password"
                  type="text"
                  name="sectors"
                  value={data.password}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="NewBrief--row">
              <label className="NewBrief--label" htmlFor="sectors">
                Sectors:
                <input
                  className="NewBrief--input"
                  id="sectors"
                  type="text"
                  name="sectors"
                  value={data.sectors}
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
