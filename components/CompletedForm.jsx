import React from "react";

const Form = ({ title, text, border, background }) => {
  return (
    <div className="rounded-2xl flex justify-center items-center flex-col">
      <div className={`${background} w-full rounded-t-2xl pb-4`}>
        <p className="text-center p-2 font-bold text-xl">{title}</p>
      </div>
      <div className="bg-acm-black w-full flex justify-center items-center flex-col p-[9px] rounded-b-2xl">
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
