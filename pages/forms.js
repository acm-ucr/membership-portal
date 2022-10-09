import React from "react";
import AvailableForms from "../components/AvailableForms";
import CompletedForms from "../components/CompletedForms";
import SubmittedForms from "../components/SubmittedForms";

const forms = () => {
  return (
    <>
      <AvailableForms />
      <br></br>
      <SubmittedForms />
      <br></br>
      <CompletedForms />
    </>
  );
};

export default forms;
