import React from "react";
import Header from "../../Header";
import ResumeBox from "../Resume/ResumeBox";
const Resume = () => {
  return (
    <div className="pt-[10vh] flex flex-col justify-center items-start w-11/12">
      <Header title="resume" color="bg-acm-marine" />
      <p className="text-acm-black text-2xl font-lexend font-semibold m-0 left-auto px-2 pt-3">
        Submited Resumes:
      </p>
      <ResumeBox />
    </div>
  );
};

export default Resume;
