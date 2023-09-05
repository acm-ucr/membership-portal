import React from "react";
import ProtectedPage from "../../components/ProtectedPage";
import Resume from "../../components/Admin/Resume/Resume";

const resume = () => {
  return (
    <ProtectedPage title="ACM Admin | Resume" restrictions={["admin"]}>
      <Resume />
    </ProtectedPage>
  );
};

export default resume;
