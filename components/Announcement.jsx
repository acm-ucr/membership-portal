import React from "react";
import { FaCircle } from "react-icons/fa";

const Announcement = ({
  background,
  text,
  title,
  date,
  time,
  location,
  details,
}) => {
  console.log(details);
  return (
    <div
      className={`flex justify-end items-center my-3 w-11/12 ${background} border-4 border-black rounded-3xl`}
    >
      <div className="w-11/12 bg-acm-white border-l-4 border-acm-black rounded-r-3xl font-lexend p-2">
        <p className="text-3xl font-semibold mx-2">{title}</p>
        <div className="flex justify-start items-center text-xl">
          <FaCircle
            className={`${text} mx-2 min-h-[7.5px] min-w-[7.5px] w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4`}
          />
          <p className="m-0">date: {date}</p>
        </div>
        <div className="flex justify-start items-center text-xl">
          <FaCircle
            className={`${text} mx-2 min-h-[7.5px] min-w-[7.5px] w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4`}
          />
          <p className="m-0">time: {time}</p>
        </div>
        <div className="flex justify-start items-center text-xl">
          <FaCircle
            className={`${text} mx-2 min-h-[7.5px] min-w-[7.5px] w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4`}
          />
          <p className="m-0">location: {location}</p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
