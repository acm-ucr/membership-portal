import React from "react";
import Header from "../../components/admin/Header.jsx";
import Calendar from "../../components/admin/Calendar.jsx";

const calendar = () => {
  return (
    <div className="flex justify-start items-center flex-col w-full mt-24 bg-black min-h-screen">
      <Header title="Calendar" color="bg-acm-black" />
      <Calendar />
    </div>
  );
};

export default calendar;
