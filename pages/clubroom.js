// import React, { useContext } from "react";
// import CardAccess from "../components/CardAccess";
// import UserContext from "../components/UserContext";
import PageError from "../components/PageError";

const ClubroomPage = () => {
  // const { user } = useContext(UserContext);

  return (
    <PageError
      errorCode={402}
      errorMsg="This page is still under development!"
    />
    // user && (
    //   <CardAccess
    //     email={user.email}
    //     name={user.name}
    //     rowNum={user.row}
    //     uid={user.uid}
    //   />
  );
};
export default ClubroomPage;
