import { useContext } from "react";
import CardAccess from "../components/CardAccess";
import Clubroom from "../components/Clubroom";
import PortalContext from "../components/PortalContext";
// import PageError from "../components/PageError";

const ClubroomPage = () => {
  const { user } = useContext(PortalContext);

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
