import { useSession } from "next-auth/react";

const ResumeFeedback = () => {
  const { data: session } = useSession();

  return session.user.resume.feedback ? (
    <div className="w-full py-3">
      <div className=" m-0 pb-1 font-lexend flex justify-between items-center">
        <span className="text-acm-black text-3xl font-bold">feedback</span>
        <span>
          Reviewed:{" "}
          {new Date(
            session.user.resume.reviewed._seconds * 1000
          ).toDateString()}
        </span>
      </div>
      <div className="flex h-full rounded-xl p-2 font-lexend flex-grow flex-col border-2 border-acm-black">
        {session.user.resume.feedback}
      </div>
    </div>
  ) : (
    session.user.resume.reviewed === "" && session.user.resume.link !== "" && (
      <div className="font-lexend text-xl">
        Thank you for submitting a resume. Your resume is under review! We will
        get back to you shortly!
      </div>
    )
  );
};

export default ResumeFeedback;
