import React from "react";
import { useContext } from "react";
import PortalContext from "./PortalContext";

const ResumeFeedback = () => {
  const { user } = useContext(PortalContext);

  return (
    <div className="w-full">
      <p className="text-acm-black text-3xl font-lexend font-bold m-0 pb-1">
        feedback
      </p>
      <div className="flex w-11/12 flex-grow flex-col border-2 border-acm-black">
        {user.feedback ? user.feedback : "No Feedback"}
      </div>
    </div>
  );
};

export default ResumeFeedback;
