import React from "react";
import PDFViewer from "../../components/PDFViewer";
import ResumeUpload from "../../components/ResumeUpload";
// import ResumeFeedback from "../../components/ResumeFeedback";
import Header from "../../components/Header";
import { useSession } from "next-auth/react";
import ProtectedPage from "../../components/ProtectedPage";

const ResumePage = () => {
  const { data: session } = useSession();

  return (
    <ProtectedPage title="Resume" restrictions={["member"]}>
      <div className="pt-[10vh] h-[160vh] flex flex-col items-center">
        <Header title="resume" p="resume" color="bg-acm-marine" />

        <title>Resume</title>

        <p className="text-acm-black text-2xl font-lexend w-11/12 font-bold m-0 left-auto px-2 pt-2">
          In order to nurture the professional development of our members, ACM
          offers a resume review! <br />
          Submit a link to your resume and receive feedback from our board
          members:
        </p>

        <div className="pt-3 flex flex-col flex-grow w-11/12 pb-1">
          <div className="w-3/5 flex flex-col flex-grow">
            <ResumeUpload resume={session?.user?.resume} />
            <PDFViewer pdf={session?.user?.resume} />
            {/* <ResumeFeedback />  RESUME FEEDBACK MOVED TO PDFVIEWER*/}
          </div>
        </div>
      </div>
    </ProtectedPage>
  );
};

export default ResumePage;
