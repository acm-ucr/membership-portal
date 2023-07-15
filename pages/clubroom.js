import CardAccess from "../components/CardAccess";
import Clubroom from "../components/Clubroom";
import Header from "../components/Header";

const ClubroomPage = () => {
  return (
    <div className="pt-[10vh] flex-col flex items-center h-[90vh]">
      <title>Clubroom</title>
      <Header title="clubroom" color="bg-acm-lightblue" />
      <Clubroom />
      <CardAccess />
    </div>
  );
};
export default ClubroomPage;
