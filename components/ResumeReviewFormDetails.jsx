import React from "react";
import { FaCircle, FaTimes } from "react-icons/fa";

const ResumeReviewFormDetails = ({
  name,
  email,
  formatOfInterview,
  dayTimePlace,
  interviewerName,
}) => {
  return (
    <>
      <div className="fixed bg-acm-white opacity-50 w-full h-full"></div>
      <div className="absolute w-full">
        <div className="flex justify-center isolation-auto ">
          <div className="bg-acm-black rounded-3xl w-1/2 flex flex-col">
            <div className="flex justify-between">
              <p className="font-lexend bg-acm-orange text-acm-black rounded-full m-3 text-2xl p-2 font-bold">
                resume review form details
              </p>
              <FaTimes className="text-3xl text-acm-orange m-4 hover:cursor-pointer" />
            </div>
            <div className="ml-4 mb-4 mr-4">
              <p className="font-lexend text-acm-white text-lg  font-medium m-1">
                name
              </p>
              <div className="flex justify-start items-center">
                <FaCircle className="text-acm-orange text-sm" />
                <p className="font-lexend text-acm-white text-m ml-3 font-light mb-0">
                  {name}
                </p>
              </div>

              <p className="font-lexend text-acm-white text-lg  font-medium m-1">
                email
              </p>
              <div className="flex justify-start items-center">
                <FaCircle className="text-acm-orange text-sm" />
                <p className="font-lexend text-acm-white text-m ml-3 font-light mb-1 mt-1">
                  {email}
                </p>
              </div>

              <p className="font-lexend text-acm-white text-lg  font-medium m-1">
                format of interview
              </p>
              <div className="flex justify-start items-center">
                <FaCircle className="text-acm-orange text-sm" />
                <p className="font-lexend text-acm-white text-m ml-3 font-light mb-1 mt-1">
                  {formatOfInterview}
                </p>
              </div>

              <p className="font-lexend text-acm-white text-lg  font-medium m-1">
                day, time, and place of mock interview
              </p>
              <div className="flex justify-start items-center">
                <FaCircle className="text-acm-orange text-sm" />
                <p className="font-lexend text-acm-white text-m  font-light mb-1 mt-1 ml-3">
                  date: {dayTimePlace.date}
                </p>
              </div>
              <div className="flex justify-start items-center">
                <FaCircle className="text-acm-orange text-sm" />
                <p className="font-lexend text-acm-white text-m  font-light mb-1 mt-1 ml-3">
                  time: {dayTimePlace.time}
                </p>
              </div>
              <div className="flex justify-start items-center">
                <FaCircle className="text-acm-orange text-sm" />
                <p className="font-lexend text-acm-white text-m  font-light mb-1 mt-1 ml-3">
                  location: {dayTimePlace.location}
                </p>
              </div>
              <p className="font-lexend text-acm-white text-lg  font-medium m-1">
                interviewer name
              </p>
              <div className="flex justify-start items-center">
                <FaCircle className="text-acm-orange text-sm" />
                <p className="font-lexend text-acm-white text-m ml-3 font-light mb-0">
                  {interviewerName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeReviewFormDetails;
