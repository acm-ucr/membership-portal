import React from "react";
import Header from "../../components/admin/Header.jsx";
import Resources from "../../components/admin/Resources.jsx";

const resources = () => {
  return (
    <div className="flex justify-start items-center flex-col pt-24 bg-black min-h-screen">
      <Header title="Resources" color="bg-acm-blue" />
      <Resources />
    </div>
  );
};

export default resources;
