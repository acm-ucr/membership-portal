import React from "react";

const Form = ({ title, text, border, background }) => {
  return (
    <div
      className={`${background} rounded-3xl flex  items-center flex-col aspect-[1/1]`}
    >
      <p className="text-center p-4 font-bold text-xl">{title}</p>
    </div>
  );
};

export default Form;
