import Welcome from "../components/Welcome";
import Login from "../components/Login";

const Index = () => {
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
