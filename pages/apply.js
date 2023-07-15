import ProtectedPage from "../components/ProtectedPage";
import Apply from "../components/Apply";

const ApplyPage = () => {
  return (
    <ProtectedPage title="Apply">
      <Apply />
    </ProtectedPage>
  );
};

export default ApplyPage;
