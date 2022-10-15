import React from "react";
import AvailableForms from "../components/AvailableForms";
import CompletedForms from "../components/CompletedForms";
import SubmittedForms from "../components/SubmittedForms";
import MockInterviewForm from "../components/MockInterviewForm";

const forms = () => {
  return (
    <div className="pt-[14vh]">
      <MockInterviewForm />
      <AvailableForms />
      <br></br>
      <SubmittedForms />
      <br></br>
      <CompletedForms />
    </div>
  );
};

export default forms;
