import React from "react";
import { FaCircle } from "react-icons/fa";

const Announcement = ({ background, text, title, date, time, location }) => {
  return (
    <div
      className={`flex justify-end items-center my-3 w-11/12 ${background} border-4 border-black rounded-3xl`}
    >
      <div className="w-11/12 bg-acm-white border-l-4 border-acm-black rounded-r-3xl font-lexend p-2">
        <p className="text-3xl font-semibold mx-2">{title}</p>
        <div className="flex justify-start items-center text-xl">
          <FaCircle className={`${text}  mx-2`} />
          date: {date}
        </div>
        <div className="flex justify-start items-center text-xl">
          <FaCircle className={`${text} mx-2`} />
          time: {time}
        </div>
        <div className="flex justify-start items-center text-xl">
          <FaCircle className={`${text}  mx-2`} />
          location: {location}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
