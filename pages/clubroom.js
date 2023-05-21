import { useContext } from "react";
import CardAccess from "../components/CardAccess";
import Clubroom from "../components/Clubroom";
import PortalContext from "../components/PortalContext";
import Header from "../components/Header";

const ClubroomPage = () => {
  const { user } = useContext(PortalContext);

  return (
    user && (
      <div className="pt-[10vh] flex-col flex items-center h-screen">
        <title>Clubroom</title>
        <Header title="clubroom" color="bg-acm-lightblue" />
        <Clubroom />
        <CardAccess />
      </div>
    )
  );
};
export default ClubroomPage;
