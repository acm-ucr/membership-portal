import Header from "../components/Header";
import Resources from "../components/Resources";

const resources = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-[10vh]">
      <title>Resources</title>
      <Header title="resources" color="bg-acm-purple" />
      <Resources />
    </div>
  );
};

export default resources;
