import Welcome from "../components/Welcome";
import Login from "../components/Login";
import { useContext, useEffect } from "react";
import UserContext from "../components/UserContext";
import { useRouter } from "next/router";

const Index = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/dashboard");
  }, [user]);

  return (
    <div className="mt-5 w-full flex flex-col justify-center items-center h-[100vh]">
      <div className="w-11/12 flex flex-col justify-center items-center h-[100vh]">
        <div className="flex flex-col sm:flex-row md:w-11/12 justify-center items-center sm:items-stretch">
          <Welcome />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Index;
