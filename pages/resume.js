import React, { useContext, useState, useEffect } from "react";
import PDFViewer from "../components/PDFViewer";
import ResumeUpload from "../components/ResumeUpload";
import ResumeFeedback from "../components/ResumeFeedback";
import Header from "../components/Header";
import PortalContext from "../components/PortalContext";

const ResumePage = () => {
  const { user } = useContext(PortalContext);
  const [resume, setResume] = useState("");

  useEffect(() => {
    if (user?.resume) {
      setResume(user.resume);
    }
  }, [user?.resume]);

  return (
    <div className="pt-[10vh] h-screen flex flex-col items-center">
      <Header title="resume" color="bg-acm-marine" />

      <title>Resume</title>

      <div className="pt-3 flex w-11/12 h-full pb-1">
        <div className="w-2/3 gap-3 flex flex-col">
          <ResumeUpload setResume={setResume} resume={resume} />
          <ResumeFeedback />
        </div>
        <div className="w-1/3">
          <PDFViewer pdf={resume} />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
