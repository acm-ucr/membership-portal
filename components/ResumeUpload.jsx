import axios from "axios";
import React, { useContext, useState } from "react";
import PortalContext from "./PortalContext";

const rules = [
  "Resume must be in PDF format",
  "Resume must be named as 'First Name Last Name Resume'",
  "Resume must be uploaded to Google Drive",
];

const ResumeUpload = ({ setResume, resume }) => {
  const { user } = useContext(PortalContext);
  const [disabled, setDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentResume, setCurrentResume] = useState("");
  const handleUploadClick = (e) => {
    e.preventDefault();
    setResume(currentResume);
  };
  const handleResumeLinkChange = (e) => {
    e.preventDefault();
    setSubmitted(false);
    setCurrentResume(e.target.value);
    setDisabled(false);
  };
  const handleResumeSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    setSubmitted(true);
    axios.post("/api/submitResume", {
      uid: user.uid,
      resume: resume,
    });
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <p className="text-acm-black text-3xl font-lexend font-bold m-0 pb-1">
          insert resume link
        </p>
        <input
          placeholder="resume link"
          className="w-full border-black border-2 py-2 rounded-xl px-4 text-xl font-lexend"
          onChange={handleResumeLinkChange}
          type="text"
        />
      </div>
      <button
        id="upload"
        onClick={handleUploadClick}
        className="mt-2 mb-1 sm:w-4/6 md:w-4/12 py-1 font-lexend font-bold text-acm-black border-2 border-acm-blue text-xl transition-colors duration-150 bg-acm-blue rounded-lg focus:shadow-outline hover:border-acm-black"
      >
        upload link
      </button>
      {rules.map((rule, index) => (
        <li key={index} className="text-acm-black text-md font-lexend m-0">
          {rule}
        </li>
      ))}
      <div>
        {disabled ? (
          <button
            id="upload"
            disabled={disabled}
            className="mt-2 sm:w-4/6 md:w-4/12 py-1 font-lexend font-bold text-acm-black border-2  text-xl bg-acm-marine border-acm-marine opacity-50 rounded-lg"
          >
            submit for review
          </button>
        ) : (
          <button
            id="upload"
            onClick={handleResumeSubmit}
            disabled={disabled}
            className="mt-2 sm:w-4/6 md:w-4/12 py-1 font-lexend font-bold text-acm-black border-2 border-acm-marine text-xl transition-colors duration-150 bg-acm-marine rounded-lg focus:shadow-outline hover:border-acm-black"
          >
            submit for review
          </button>
        )}

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
