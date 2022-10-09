import React from "react";

const Form = ({ title, text, border, background }) => {
  return (
    <div className="aspect-[1/1] rounded-3xl flex justify-center items-center flex-col">
      <div className={`${background} w-full rounded-t-3xl h-2/3`}>
        <p className="text-center p-2 font-bold text-lg">{title}</p>
      </div>
      <div className="bg-acm-black w-full flex justify-center items-center flex-col h-1/3 rounded-b-3xl">
        <p
          className={`${text} text-center ${border} border-2 p-1 rounded-full m-0 w-11/12 font-semibold text-xl`}
        >
          apply
        </p>
      </div>
    </div>
  );
};

export default Form;
