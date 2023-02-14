import React from "react";
import PageError from "../../components/PageError";

const Error400 = () => {
  return (
    <div className="w-screen h-screen">
      <PageError errorCode="404" errorMsg="Page Not Found" />
    </div>
  );
};

export default Error400;
