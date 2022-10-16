import React from "react";
import AvailableForms from "../components/AvailableForms";
import CompletedForms from "../components/CompletedForms";
import SubmittedForms from "../components/SubmittedForms";
//  import MockInterviewForm from "../components/MockInterviewForm";
import MockInterviewFormData from "../components/MockInterviewFormData";
import MockInterviewFormDetails from "../components/MockInterviewFormDetails";

const forms = () => {
  return (
    <div className="pt-[14vh]">
      <MockInterviewFormDetails
        name={MockInterviewFormData.name}
        email={MockInterviewFormData.email}
        typeOfInterview={MockInterviewFormData.typeOfInterview}
        dayTimePlace={MockInterviewFormData.dayTimePlace}
        formatOfInterview={MockInterviewFormData.formatOfInterview}
        preferredLanguages={MockInterviewFormData.preferredLanguages}
        typesOfProblems={MockInterviewFormData.typesOfProblems}
        intervierwName={MockInterviewFormData.intervierwName}
      />
      <AvailableForms />
      <br></br>
      <SubmittedForms />
      <br></br>
      <CompletedForms />
    </div>
  );
};

export default forms;
