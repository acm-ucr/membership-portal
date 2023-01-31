import React from "react";
import AvailableForms from "../../components/AvailableForms";
import CompletedForms from "../../components/CompletedForms";
import SubmittedForms from "../../components/SubmittedForms";

const forms = () => {
  return (
    <div className="pt-[14vh]">
      <title>Forms</title>
      <br></br>
      <AvailableForms />
      <br></br>
      <SubmittedForms />
      <br></br>
      <CompletedForms />
    </div>
  );
};

export default forms;
