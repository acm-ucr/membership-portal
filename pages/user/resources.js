import React from "react";
import Header from "../../components/Header";
import Resources from "../../components/Resources";

const resources = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-[14vh]">
      <Header title="resources" color="bg-acm-purple" />
      <Resources />
    </div>
  );
};

export default resources;
