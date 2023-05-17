import React from "react";
import PDFViewer from "../components/PDFViewer";
import ResumeUpload from "../components/ResumeUpload";
import ResumeFeedback from "../components/ResumeFeedback";
import Header from "../components/Header";
import { useState } from "react";
import { Timestamp } from "firebase/firestore";

const ResumePage = () => {
  const [resume, setResume] = useState({
    upload: Timestamp.now(),
    link: "",
    formatting: "",
    bulletPoints: "",
    general: "",
  });
  return (
    <div className="pt-[14vh] h-screen flex flex-col items-center">
      <Header title="resume" color="bg-acm-marine" />

      <title>Resume</title>

      <div className="pt-3 flex w-11/12 h-full pb-1">
        <div className="w-full gap-3 flex flex-col">
          <ResumeUpload setResume={setResume} resume={resume} />
          <ResumeFeedback />
        </div>
        <PDFViewer pdf={resume.link} />
      </div>
    </div>
  );
};

export default ResumePage;
