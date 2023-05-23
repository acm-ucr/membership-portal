import { useRouter } from "next/router";
import PageError from "../components/PageError";

const Error400 = () => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="h-3/4">
        <PageError
          errorCode="403"
          errorMsg="Authorization Error: You do not have access to this application!"
        />
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

export default Error400;
