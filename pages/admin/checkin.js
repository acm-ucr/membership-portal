import Checkin from "../../components/Admin/Checkin/Checkin";
import ProtectedPage from "../../components/ProtectedPage";

const checkin = () => {
  return (
    <ProtectedPage title="ACM Admin | Checkin" restrictions={["admin"]}>
      <Checkin />
    </ProtectedPage>
  );
};

export default checkin;
