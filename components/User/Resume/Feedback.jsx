import { useSession } from "next-auth/react";

const ResumeFeedback = () => {
  const { data: session } = useSession();

  return session.user.feedback ? (
    <div className="w-full py-3">
      <p className="text-acm-black text-3xl font-lexend font-bold m-0 pb-1">
        feedback
      </p>
      <div className="flex h-44 w-11/12 flex-grow flex-col border-2 border-acm-black">
        {session.user.feedback}
      </div>
    </div>
  ) : (
    <div className="font-lexend text-xl">
      Thank you for submitting a resume. Your resume is under review! We will
      get back to you shortly!
    </div>
  );
};

export default ResumeFeedback;
