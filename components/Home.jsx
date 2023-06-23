import { useContext } from "react";
import PortalContext from "./PortalContext";

const Home = () => {
  const { user } = useContext(PortalContext);

  return (
    user && (
      <div className="w-full flex justify-center items-center                                         ">
        <div className="w-full mb-12">
          <div className="mb-4">
            <p className="flex text-center text-5xl md:text-6xl text-black font-bold">
              welcome‚ {user.name}
            </p>
          </div>
          <div>
            <p className="flex text-center text-3xl text-acm-gray font-acm ">
              member since {user.start} | {user.points} points
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Home;
