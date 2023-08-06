import PageError from "../components/PageError";
import { useEffect } from "react"

const Error400 = () => {
  useEffect(() => {
    if (window.location.pathname === "/user")
    {
      window.location.pathname = "/user/dashboard";
    }
  })
  return (
    <div className="w-screen h-screen">
      <PageError errorCode="404" errorMsg="Page Not Found" />
    </div>
  );
};

export default Error400;
