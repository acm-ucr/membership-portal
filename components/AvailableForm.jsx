import React, { useState } from "react";
import MockInterviewForm from "./MockInterviewForm";
import ResumeReviewForm from "./ResumeReviewForm";

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
    <div className="aspect-[1/1] rounded-3xl flex justify-center items-center flex-col">
      <div className={`${background} w-full rounded-t-3xl h-2/3`}>
        <p className="text-center p-2 font-bold text-lg">{title}</p>
      </div>
      <div className="bg-acm-black w-full flex justify-center items-center flex-col h-1/3 rounded-b-3xl">
        <button
          onClick={onClick}
          className={`${text} text-center ${border} border-2 p-1 rounded-full m-0 w-11/12 font-semibold text-xl cursor-pointer hover:text-acm-black hover:bg-${text}`}
        >
          apply
        </button>
      </div>
      <div>
        {formState === 1 ? (
          <MockInterviewForm setFormState={setFormState} />
        ) : formState === 2 ? (
          <ResumeReviewForm setFormState={setFormState} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Form;
