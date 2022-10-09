import React from "react";
import { FaCircle } from "react-icons/fa";
const Meeting = ({ title, date, location, backgroundColor }) => {
  return (
    <div className="flex flex-col font-lexend border-black border-2 rounded-3xl">
      <div className="flex bg-black text-white text-2xl font-semibold rounded-3xl p-1 px-4 w-fit mx-4 mt-4 mb-4">
        scheduled meetings
      </div>
      <div className="flex flex-col border-2 rounded-3xl border-black bg-yellow-200 mb-4 mx-4 w-12/12">
        <div className="font-semibold text-3xl mx-4 py-2 ">mock interview</div>
        <div className="flex justify-start text-xl text-black">
          <FaCircle className=" fill-white mx-4 mb-2" /> date: date
        </div>
        <div className="flex justify-start text-xl text-black">
          <FaCircle className=" fill-white mx-4 mb-2" /> time: time
        </div>
        <div className="flex justify-start text-xl text-black mb-2">
          <FaCircle className=" fill-white mx-4" /> location: location
          <button className="flex  bg-white justify-center ml-52 rounded-3xl w-48">
            more details
          </button>
        </div>
        {/* <div className="flex mr-2"><button className="flex bg-white justify-center rounded-3xl w-3/12">more details</button></div> */}
      </div>
    </div>
  );
};

export default Meeting;
