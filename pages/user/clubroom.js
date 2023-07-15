import CardAccess from "../../components/CardAccess";
import Clubroom from "../../components/Clubroom";
import Header from "../../components/Header";
import ProtectedPage from "../../components/ProtectedPage";

const ClubroomPage = () => {
  return (
    <ProtectedPage title="Clubroom" restrictions={["member"]}>
      <div className="pt-[10vh] flex-col flex items-center h-[90vh]">
        <Header title="clubroom" color="bg-acm-lightblue" />
        <Clubroom />
        <CardAccess />
      </div>
    </ProtectedPage>
  );
};
export default ClubroomPage;
