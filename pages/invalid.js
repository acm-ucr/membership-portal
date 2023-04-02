import React from "react";
import PageError from "../components/PageError";

const Error400 = () => {
  return (
    <div className="w-screen h-screen">
      <PageError errorCode="" errorMsg="Fail sign in. Invalid account info." />
    </div>
  );
};

export default Error400;
