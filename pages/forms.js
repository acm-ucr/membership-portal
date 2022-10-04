import React from "react";
import AvailableForms from "../components/AvailableForms";
import CompletedForms from "../components/CompletedForms";
import SubmittedForms from "../components/SubmittedForms";

const forms = () => {
  return (
    <>
      <AvailableForms />
      <SubmittedForms />
      <CompletedForms />
    </>
  );
};

export default forms;
