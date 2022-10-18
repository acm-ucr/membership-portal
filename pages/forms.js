import React from "react";
import AvailableForms from "../components/AvailableForms";
import CompletedForms from "../components/CompletedForms";
import SubmittedForms from "../components/SubmittedForms";
//  import MockInterviewForm from "../components/MockInterviewForm";
import MockInterviewFormData from "../components/MockinterviewFormData";
import MockInterviewFormDetails from "../components/MockInterviewFormDetails";
// import ResumeReviewForm from "../components/ResumeReviewForm";
import ResumeReviewFormData from "../components/ResumeReviewFormData";
import ResumeReviewFormDetails from "../components/ResumeReviewFormDetails";

const forms = () => {
  return (
    <div className="pt-[14vh]">
      {/* <MockInterviewFormDetails
        name={MockInterviewFormData.name}
        email={MockInterviewFormData.email}
        typeOfInterview={MockInterviewFormData.typeOfInterview}
        dayTimePlace={MockInterviewFormData.dayTimePlace}
        formatOfInterview={MockInterviewFormData.formatOfInterview}
        preferredLanguages={MockInterviewFormData.preferredLanguages}
        typesOfProblems={MockInterviewFormData.typesOfProblems}
        intervierwName={MockInterviewFormData.intervierwName}
      /> */}
      <br></br>
      <ResumeReviewFormDetails
        name={ResumeReviewFormData.name}
        email={ResumeReviewFormData.email}
        formatOfInterview={ResumeReviewFormData.formatOfInterview}
        dayTimePlace={ResumeReviewFormData.dayTimePlace}
        interviewerName={ResumeReviewFormData.interviewerName}
      />
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
