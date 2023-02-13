import React from "react";
import PageError from "../../components/PageError";

const Error500 = () => {
  return (
    <div className="w-screen h-screen">
      <PageError errorCode="500" errorMsg="Server Error" />
    </div>
  );
};

export default Error500;
