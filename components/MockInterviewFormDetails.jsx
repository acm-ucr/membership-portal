import React from "react";
import { FaCircle, FaTimes } from "react-icons/fa";
import mockInterviewFormDetails from "./MockinterviewFormData";

const MockInterviewFormDetails = () => {
  return (
    <>
      <div className="fixed bg-acm-white opacity-50 w-full h-full"></div>
      <div className="absolute w-full">
        <div className="flex justify-center isolation-auto ">
          <div className="bg-acm-black rounded-3xl w-1/2 flex flex-col">
            <div className="flex justify-between">
              <p className="font-lexend bg-acm-marine text-acm-black rounded-full m-3 text-2xl p-2 font-bold">
                mock interview request forms details
              </p>
              <FaTimes className="text-3xl text-acm-marine m-4 hover:cursor-pointer" />
            </div>
            <div className="ml-4 mb-4 mr-4">
              <p className="font-lexend text-acm-white text-lg  font-medium m-1">
                name
              </p>
              <div className="flex justify-start items-center">
                <FaCircle className="text-acm-marine text-sm" />
                <p className="font-lexend text-acm-white text-m ml-3 font-light mb-0">
                  {mockInterviewFormDetails.name}
                </p>
              </div>

              <p className="font-lexend text-acm-white text-lg  font-medium m-1">
                email
              </p>
              <div className="flex justify-start items-center">
                <FaCircle className="text-acm-marine text-sm" />
                <p className="font-lexend text-acm-white text-m ml-3 font-light mb-1 mt-1">
                  {mockInterviewFormDetails.email}
                </p>
              </div>

              <p className="font-lexend text-acm-white text-lg  font-medium m-1">
                type of interview
              </p>
              <div className="flex justify-start items-center">
                <FaCircle className="text-acm-marine text-sm" />
                <p className="font-lexend text-acm-white text-m ml-3 font-light mb-1 mt-1">
                  {mockInterviewFormDetails.typeOfInterview}
                </p>
              </div>

              <p className="font-lexend text-acm-white text-lg  font-medium m-1">
                format of interview
              </p>
              <div className="flex justify-start items-center">
                <FaCircle className="text-acm-marine text-sm" />
                <p className="font-lexend text-acm-white text-m ml-3 font-light mb-1 mt-1">
                  {mockInterviewFormDetails.formatOfInterview}
                </p>
              </div>

              <p className="font-lexend text-acm-white text-lg  font-medium m-1">
                preferred languages
              </p>
              <div className="flex flex-col">
                {mockInterviewFormDetails.preferredLanguages.map(
                  (language, index) => (
                    <div
                      key={index}
                      className="flex justify-start items-center"
                    >
                      <FaCircle className="text-acm-marine text-sm" />
                      <p className="font-lexend text-acm-white text-m  font-light mb-1 mt-1 ml-3">
                        {language}
                      </p>
                    </div>
                  )
                )}
              </div>
              <p className="font-lexend text-acm-white text-lg  font-medium m-1">
                types of problems
              </p>
              <div className="flex flex-col">
                {mockInterviewFormDetails.typesOfProblems.map(
                  (language, index) => (
                    <div
                      key={index}
                      className="flex justify-start items-center"
                    >
                      <FaCircle className="text-acm-marine text-sm" />
                      <p className="font-lexend text-acm-white text-m  font-light mb-1 mt-1 ml-3">
                        {language}
                      </p>
                    </div>
                  )
                )}
              </div>
              <p className="font-lexend text-acm-white text-lg  font-medium m-1">
                day, time, and place of mock interview
              </p>
              <div className="flex justify-start items-center">
                <FaCircle className="text-acm-marine text-sm" />
                <p className="font-lexend text-acm-white text-m  font-light mb-1 mt-1 ml-3">
                  date: {mockInterviewFormDetails.dayTimePlace.date}
                </p>
              </div>
              <div className="flex justify-start items-center">
                <FaCircle className="text-acm-marine text-sm" />
                <p className="font-lexend text-acm-white text-m  font-light mb-1 mt-1 ml-3">
                  time: {mockInterviewFormDetails.dayTimePlace.time}
                </p>
              </div>
              <div className="flex justify-start items-center">
                <FaCircle className="text-acm-marine text-sm" />
                <p className="font-lexend text-acm-white text-m  font-light mb-1 mt-1 ml-3">
                  location: {mockInterviewFormDetails.dayTimePlace.location}
                </p>
              </div>
              <p className="font-lexend text-acm-white text-lg  font-medium m-1">
                interviewer name
              </p>
              <div className="flex justify-start items-center">
                <FaCircle className="text-acm-marine text-sm" />
                <p className="font-lexend text-acm-white text-m ml-3 font-light mb-0">
                  {mockInterviewFormDetails.intervierwName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockInterviewFormDetails;
