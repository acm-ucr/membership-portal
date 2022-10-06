import React from "react";
import Header from "../components/Header";
import TimeFilter from "../components/TimeFilter";
import Resources from "../components/Resources";

const resources = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Header title="resources" />
      <TimeFilter />
      <Resources />
    </div>
  );
};

export default resources;
