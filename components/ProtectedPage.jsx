import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";

const ProtectedPage = ({ title, children, restrictions }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      console.log("Not signed in");
      router.push("/");
    }
    if (
      status === "authenticated" &&
      session.user.role === "member" &&
      session.user.verified === false
    ) {
      console.log("User not Accepted ");
      router.push("/invalid");
    }
    if (
      status === "authenticated" &&
      restrictions.includes("admin") &&
      session.user.role !== "admin"
    ) {
      console.log("Dont have admin permissions");
      router.push("/");
    }
  }, [status]);

  return (
    <>
      {status === "loading" && <>LOADING</>}
      {status === "authenticated" && (
        <div className="flex justify-center">
          <title>{title}</title>
          {children}
        </div>
      )}
    </>
  );
};

export default ProtectedPage;
