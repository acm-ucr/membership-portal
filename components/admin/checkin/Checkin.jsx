import React from "react";
import Scanner from "./Scanner";
import Header from "../../Header";

const Checkin = () => {
  return (
    <div className="flex flex-col mt-[10vh]">
      <Header title="Checkin" color="bg-acm-black" />
      <Scanner />
    </div>
  );
};

export default Checkin;
