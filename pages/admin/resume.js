import React from "react";
import ProtectedPage from "../../components/ProtectedPage";
import Resume from "../../components/admin/resume/Resumes";

const resume = () => {
  return (
    <ProtectedPage title="ACM Admin | Resume" restrictions={["admin"]}>
      <Resume />
    </ProtectedPage>
  );
};

export default resume;
