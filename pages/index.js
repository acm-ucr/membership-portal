import Welcome from "../components/Welcome";
import Login from "../components/Login";

const Index = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      <div className="w-11/12 flex flex-col justify-center items-center">
        <div className="flex flex-col sm:flex-row md:w-11/12 justify-center items-center sm:items-stretch">
          <Welcome />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Index;
