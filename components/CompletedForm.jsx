import React from "react";

const Form = ({ title, text, border, background }) => {
  return (
    <div className="aspect-[1/1] rounded-2xl flex justify-center items-center flex-col">
      <div className={`bg-acm-black h-2/3 w-full rounded-t-3xl pb-4`}>
        <p className={`${text} text-center p-2 font-bold text-lg`}>{title}</p>
      </div>
      <div className={`${background} h-1/3 w-full flex justify-center items-center flex-col p-[9px] rounded-b-3xl`}>
        <p
          className={`text-acm-black text-center border-acm-black border-2 p-1 rounded-full m-0 w-11/12 font-semibold text-xl`}
        >
          details
        </p>
      </div>
    </div>
  );
};

export default Form;
