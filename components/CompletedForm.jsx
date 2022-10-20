import React, { useState } from "react";
import MockInterviewFormDetails from "./MockInterviewFormDetails";
import ResumeReviewFormDetails from "./ResumeReviewFormDetails";
import MockInterviewFormData from "./MockinterviewFormData";
import ResumeReviewFormData from "./ResumeReviewFormData";

const Form = ({ title, text, border, background }) => {
  const [formState, setFormState] = useState(0);
  const onClick = () => {
    if (title == "mock interview request form") {
      setFormState(1);
    } else if (title == "resume review form") {
      setFormState(2);
    }
  };
  return (
    <div className="aspect-[1/1] rounded-2xl flex justify-center items-center flex-col">
      <div className={`bg-acm-black h-2/3 w-full rounded-t-3xl pb-4`}>
        <p className={`${text} text-center p-2 font-bold text-lg`}>{title}</p>
      </div>
      <div
        className={`${background} h-1/3 w-full flex justify-center items-center flex-col p-[9px] rounded-b-3xl`}
      >
        <button
          onClick={onClick}
          className={`text-acm-black text-center border-acm-black border-2 p-1 rounded-full m-0 w-11/12 font-semibold text-xl`}
        >
          details
        </button>
      </div>
      <div>
        {formState === 1 ? (
          <MockInterviewFormDetails
            setFormState={setFormState}
            name={MockInterviewFormData.name}
            email={MockInterviewFormData.email}
            typeOfInterview={MockInterviewFormData.typeOfInterview}
            dayTimePlace={MockInterviewFormData.dayTimePlace}
            formatOfInterview={MockInterviewFormData.formatOfInterview}
            preferredLanguages={MockInterviewFormData.preferredLanguages}
            typesOfProblems={MockInterviewFormData.typesOfProblems}
            intervierwName={MockInterviewFormData.intervierwName}
          />
        ) : formState === 2 ? (
          <ResumeReviewFormDetails
            setFormState={setFormState}
            name={ResumeReviewFormData.name}
            email={ResumeReviewFormData.email}
            formatOfInterview={ResumeReviewFormData.formatOfInterview}
            dayTimePlace={ResumeReviewFormData.dayTimePlace}
            interviewerName={ResumeReviewFormData.interviewerName}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Form;
