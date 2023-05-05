import { useContext } from "react";
import {
  setPersistence,
  browserLocalPersistence,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import PortalContext from "./PortalContext";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const router = useRouter();
  const { setUser } = useContext(PortalContext);

  const fetchUser = async (result) => {
    const response = await axios.post("/api/profile/getInfo", {
      uid: result.user.uid,
    });
    const data = response.data.data;
    const date = new Date(data.start.seconds * 1000);
    data.start = date.getFullYear();
    setUser({
      ...data,
      name: result.user.displayName,
      uid: result.user.uid,
      email: result.user.email,
    });
  };

  const signin = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        fetchUser(result)
          .then(() => {
            router.push("/dashboard");
          })
          .catch((error) => {
            if (result.user.email.includes("@ucr.edu")) {
              router.push("apply");
            } else {
              router.push("/invalid");
            }
          });
      })
      .catch((error) => {
        console.log(error);
        router.push("/");
      });
  };

  const login = () => {
    setPersistence(auth, browserLocalPersistence)
      .then((res) => {
        signin();
      })
      .catch((error) => {
        router.push("/");
      });
  };

  return (
    <div className="p-0 z-10 mt-0 w-1/2 sm:w-4/12 bg-acm-white sm:bg-acm-blue rounded-[25px] sm:rounded-r-[50px] sm:rounded-l-[0px] flex flex-col items-center justify-center sm:min-w-[300px] lg:min-w-[450px]">
      <p className="hidden sm:block text-xl md:text-3xl pr-2 md:pr-4 text-white font-lexend m-4 text-center">
        Login using UCR email!
      </p>
      <p className="flex sm:hidden text-base m-0 p-0 text-acm-black font-lexend text-center">
        Login using UCR email!
      </p>
      <button
        className="hover:border-acm-black border-acm-blue border-2 bg-white rounded-full flex flex-row items-center"
        onClick={login}
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
