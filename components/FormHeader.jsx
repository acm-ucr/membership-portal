import React from "react";

const FormHeader = ({ title }) => {
  return (
    <div className="w-11/12 p-2 font-lexend font-semibold rounded-3 text-2xl bg-acm-black text-acm-white">
      {title}
    </div>
  );
};

export default FormHeader;
