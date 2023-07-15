import React from "react";
import PDFViewer from "../components/PDFViewer";
import ResumeUpload from "../components/ResumeUpload";
import ResumeFeedback from "../components/ResumeFeedback";
import Header from "../components/Header";
import { useSession } from "next-auth/react";

const ResumePage = () => {
  const { data: session } = useSession();

  return (
    <div className="pt-[10vh] h-screen flex flex-col items-center">
      <Header title="resume" color="bg-acm-marine" />

      <title>Resume</title>

      <div className="pt-3  flex w-11/12 h-full pb-1">
        <div className="w-3/5 flex flex-col">
          <ResumeUpload resume={session.user.resume} />
          <ResumeFeedback />
        </div>
        <div className="w-2/5">
          <PDFViewer pdf={session.user.resume} />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
