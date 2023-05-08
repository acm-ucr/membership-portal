import React from "react";

const rules = [
  "Resume must be in PDF format",
  "Resume must be named as 'First Name Last Name Resume'",
  "Resume must be uploaded to Google Drive",
];

const ResumeUpload = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <p className="text-acm-black text-3xl font-lexend font-bold m-0 pb-1">
          insert resume link
        </p>
        <input
          placeholder="resume link"
          className="w-11/12 border-black border-2 py-2 rounded-xl px-4 text-xl font-lexend"
          type="text"
        />
      </div>
      {rules.map((rule, index) => (
        <p key={index} className="text-acm-black text-md font-lexend m-0">
          * {rule}
        </p>
      ))}
      <button
        id="upload"
        className="mt-2 w-full sm:w-4/6 md:w-5/12 py-2 font-lexend font-bold text-acm-black border-2 border-acm-blue text-2xl transition-colors duration-150 bg-acm-blue rounded-lg focus:shadow-outline hover:border-acm-black"
      >
        upload
      </button>
    </div>
  );
};

export default ResumeUpload;
