import Link from "next/link";
import React from "react";
import { FaCircle } from "react-icons/fa";

const Meeting = ({ title, date, time, location, backgroundColor }) => {
  return (
    <div
      className={`flex flex-col font-lexend border-2 ${backgroundColor} rounded-3xl border-black my-3 mx-4 w-12/12`}
    >
      <div className="font-semibold text-3xl mx-4 py-2 ">{title}</div>
      <div className="flex justify-start text-xl text-black">
        <FaCircle className=" fill-white mx-4 mb-2" /> date: {date}
      </div>
      <div className="flex justify-start text-xl text-black">
        <FaCircle className=" fill-white mx-4 mb-2" /> time: {time}
      </div>
      <div className="flex flex-wrap justify-start text-xl text-black mb-2">
        <FaCircle className=" fill-white mx-4" /> location: {location}
        <Link href="/user/forms">
          <button className="flex bg-white justify-center rounded-3xl text-xs w-24 h-8 items-center mr-auto ml-auto sm:mr-2 md:w-40 md:text-base">
            more details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Meeting;
