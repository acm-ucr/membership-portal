import { useRouter } from "next/router";
import PageError from "../components/PageError";

const Error500 = () => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="h-[80vh] flex items-center justify-center">
        <PageError errorCode="500" errorMsg="Uh Oh! Server Error" />
      </div>
      <button
        id="upload"
        onClick={() => {
          router.push("/");
        }}
        className="sm:w-4/6 md:w-4/12 py-1 font-lexend font-bold text-acm-black border-2 border-acm-blue text-xl transition-colors duration-150 bg-acm-blue rounded-lg focus:shadow-outline hover:border-acm-black"
      >
        back to login screen
      </button>
    </div>
  );
};

export default Error500;
