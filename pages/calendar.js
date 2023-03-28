import React from "react";
import Calendar from "/components/Calendar.jsx";
// import Header from "../components/Header";

const calendar = () => {
  return (
    <div className="mt-28 flex justify-center items-center flex-col">
      {/* <Header title="Calendar of Events" color="bg-acm-purple" /> */}
      <Calendar />
    </div>
  );
};

export default calendar;
