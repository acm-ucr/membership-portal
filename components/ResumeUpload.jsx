import axios from "axios";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

const ResumeUpload = ({ resume }) => {
  const { data: session } = useSession();
  const [submitted, setSubmitted] = useState(false);
  const [currentResume, setCurrentResume] = useState(resume);

  const handleResumeLinkChange = (e) => {
    setCurrentResume(e.target.value);
  };
  const handleResumeSubmit = (e) => {
    setSubmitted(true);
    axios.post("/api/submitResume", {
      uid: session.user.id,
      resume: resume,
    });
  };
  return (
    <div className="flex flex-row px-3 pb-4">
      <div className="flex flex-col">
        <input
          placeholder="resume link / pdf"
          className="w-full border-black border-2 py-2 rounded-xl px-4 text-xl font-lexend"
          onChange={handleResumeLinkChange}
          value={currentResume}
          type="text"
        />
      </div>
      <div className="pl-2 w-50">
        <button
          id="upload"
          onClick={handleResumeSubmit}
          className="mt-2 sm:w-4/6 md:w-4/12 py-1 font-lexend font-bold text-acm-white border-2 border-acm-marine text-xl transition-colors duration-150 bg-acm-marine rounded-lg focus:shadow-outline hover:border-acm-black"
        >
          submit
        </button>

        {submitted ? (
          <p className="text-acm-black text-md font-lexend m-0">
            submission successful
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default ResumeUpload;
