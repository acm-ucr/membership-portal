import React from "react";
import PDFViewer from "../components/PDFViewer";
import ResumeUpload from "../components/ResumeUpload";
import ResumeFeedback from "../components/ResumeFeedback";

const ResumePage = () => {
  return (
    <div className="pt-20 h-screen flex justify-center items-start">
      <div className="w-full">
        <ResumeUpload />
        <ResumeFeedback />
      </div>
      <PDFViewer pdf="https://shahdivyank.github.io/shahdivyank_resume_2022.pdf#toolbar=0" />
    </div>
  );
};

export default ResumePage;
