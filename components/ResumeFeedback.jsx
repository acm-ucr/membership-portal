import React from "react";

const feedbackList = ["your", "resume", "kinda", "trash"];

const ResumeFeedback = () => {
  return (
    <div className="w-full">
      <p className="text-acm-black text-3xl font-lexend font-bold m-0 pb-1">
        feedback
      </p>
      <p className="text-acm-black text-xl font-lexend m-0 pb-1">formatting</p>
      <div className="flex w-full flex-grow flex-col border-2 border-acm-black">
        {feedbackList.map((feedback, index) => (
          <li
            key={index}
            className="mx-2 text-acm-black text-md font-lexend m-0"
          >
            {feedback}
          </li>
        ))}
      </div>
    </div>
  );
};

export default ResumeFeedback;
