import { useContext } from "react";
import CardAccess from "../components/CardAccess";
import Clubroom from "../components/Clubroom";
import UserContext from "../components/UserContext";
// import PageError from "../components/PageError";

const ClubroomPage = () => {
  const { user } = useContext(UserContext);

  return (
    !user && (
      <div className="pt-20">
        <Clubroom />
        <CardAccess />
      </div>
    )
  );
};
export default ClubroomPage;
