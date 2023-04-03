import React from "react";

const PageError = ({ errorCode, errorMsg }) => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="text-7xl font-bold md:text-9xl">{errorCode}</p>
        <p className="font-semibold md:text-xl">{errorMsg}</p>
      </div>
    </div>
  );
};

export default PageError;
