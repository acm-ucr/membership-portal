import React from "react";
import { useContext } from "react";
import PortalContext from "./PortalContext";

const ResumeFeedback = () => {
  const { user } = useContext(PortalContext);
  let feedbackList = ["No Feedback Yet"];
  if (user != null && { user }.resume_feedback != null) {
    feedbackList = { user }.resume_feedback;
  }

  return (
    <div className="w-full">
      <p className="text-acm-black text-3xl font-lexend font-bold m-0 pb-1">
        feedback
      </p>
      <div className="flex w-11/12 flex-grow flex-col border-2 border-acm-black">
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
