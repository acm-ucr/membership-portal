import Header from "../../components/Header";
import ProtectedPage from "../../components/ProtectedPage";
import Resources from "../../components/Resources";

const resources = () => {
  return (
    <ProtectedPage title="Resources" restrictions={["member"]}>
      <div className="flex justify-center items-center flex-col pt-[10vh]">
        <title>Resources</title>
        <Header title="resources" color="bg-acm-purple" />
        <Resources />
      </div>
    </ProtectedPage>
  );
};

export default resources;
