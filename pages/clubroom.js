import { useContext } from "react";
import CardAccess from "../components/CardAccess";
import Clubroom from "../components/Clubroom";
import PortalContext from "../components/PortalContext";
import Header from "../components/Header";
// import PageError from "../components/PageError";

const ClubroomPage = () => {
  const { user } = useContext(PortalContext);

  return (
    user && (
      <div className="pt-[14vh] flex-col gap-12 flex items-center">
        <title>Clubroom</title>
        <Header title="clubroom" color="bg-acm-lightblue" />
        <Clubroom />
        <CardAccess />
      </div>
    )
  );
};
export default ClubroomPage;
