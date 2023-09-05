import ProtectedPage from "../../components/ProtectedPage";
import Resume from "../../components/Resume/Resume";

const ResumePage = () => {
  return (
    <ProtectedPage title="ACM UCR | Resume" restrictions={["member"]}>
      <Resume />
    </ProtectedPage>
  );
};

export default ResumePage;
