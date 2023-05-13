import React, { useState } from "react";

const rules = [
  "Resume must be in PDF format",
  "Resume must be named as 'First Name Last Name Resume'",
  "Resume must be uploaded to Google Drive",
];

const ResumeUpload = ({ setResume }) => {
  const [resumeLink, setResumeLink] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setResume(resumeLink);
  };
  const handleChange = (e) => {
    setResumeLink(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <p className="text-acm-black text-3xl font-lexend font-bold m-0 pb-1">
          insert resume link
        </p>
        <input
          placeholder="resume link"
          className="w-11/12 border-black border-2 py-2 rounded-xl px-4 text-xl font-lexend"
          onChange={handleChange}
          type="text"
        />
      </div>
      <button
        id="upload"
        onClick={handleClick}
        className="mt-2 mb-1 sm:w-4/6 md:w-4/12 py-1 font-lexend font-bold text-acm-black border-2 border-acm-blue text-xl transition-colors duration-150 bg-acm-blue rounded-lg focus:shadow-outline hover:border-acm-black"
      >
        upload link
      </button>
      {rules.map((rule, index) => (
        <li key={index} className="text-acm-black text-md font-lexend m-0">
          {rule}
        </li>
      ))}
      <button
        id="upload"
        className="mt-2 sm:w-4/6 md:w-4/12 py-1 font-lexend font-bold text-acm-black border-2 border-acm-marine text-xl transition-colors duration-150 bg-acm-marine rounded-lg focus:shadow-outline hover:border-acm-black"
      >
        submit for review
      </button>
    </div>
  );
};

export default ResumeUpload;
