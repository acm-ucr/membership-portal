import React from "react";
import Header from "../components/admin/Header";
import Resources from "../components/admin/Resources";

const resources = () => {
  return (
    <div className="flex justify-start items-center flex-col pt-24 bg-black min-h-screen">
      <Header title="Resources" color="bg-acm-blue" />
      <Resources />
    </div>
  );
};

export default resources;
