import React from "react";
import { useSession } from "next-auth/react";

const ResumeFeedback = () => {
  const { data: session } = useSession();

  return (
    session && (
      <div className="w-full">
        <p className="text-acm-black text-3xl font-lexend font-bold m-0 pb-1">
          feedback
        </p>
        <div className="flex w-11/12 flex-grow flex-col border-2 border-acm-black">
          {session.user.feedback ? session.user.feedback : "No Feedback"}
        </div>
      </div>
    )
  );
};

export default ResumeFeedback;
