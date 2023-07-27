// import PageError from "../components/PageError"; // ORIGINAL 404 PAGE
import { useEffect } from "react";
import { useRouter } from "next/router";

const Error400 = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/user/dashboard");
  }, []);

  return null;
  // return (             // ORIGINAL 404 PAGE
  //   <div className="w-screen h-screen">
  //     <PageError errorCode="404" errorMsg="Page Not Found" />
  //   </div>
  // );
};

export default Error400;
