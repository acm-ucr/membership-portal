// import { useContext } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="p-0 z-10 mt-0 w-1/2 sm:w-4/12 bg-acm-white sm:bg-acm-blue rounded-[25px] sm:rounded-r-[50px] sm:rounded-l-[0px] flex flex-col items-center justify-center sm:min-w-[300px] lg:min-w-[450px]">
      <p className="text-base sm:text-xl md:text-3xl sm:pr-2 md:pr-4 m-0 pb-2 sm:text-white text-acm-black font-lexend sm:m-4 text-center">
        Login using UCR email!
      </p>
      <button
        className="hover:border-acm-black border-acm-blue border-2 bg-white rounded-full flex flex-row items-center"
        onClick={() =>
          signIn("google", {
            callbackUrl: `${window.location}/user/dashboard`,
            redirect: true,
          })
        }
      >
        <FcGoogle className="text-4xl md:text-6xl pl-2 md:pl-4 pr-1 md:pr-2" />
        <p className="text-black text-md md:text-xl m-0 py-2 pr-2 md:pr-4">
          Login with Google
        </p>
      </button>
    </div>
  );
};

export default Login;
