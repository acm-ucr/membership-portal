import React from "react";
import AvailableForms from "../components/AvailableForms";
import CompletedForms from "../components/CompletedForms";
import SubmittedForms from "../components/SubmittedForms";
import MockInterviewFormDetails from "../components/MockInterviewFormDetails";

const forms = () => {
  return (
    <div className="pt-[14vh]">
      <MockInterviewFormDetails /> 
      <AvailableForms />
      <br></br>
      <SubmittedForms />
      <br></br>
      <CompletedForms />
    </div>
  );
};

export default forms;
