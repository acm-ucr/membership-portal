import Dashboard from "../../components/Dashboard/Dashboard";
import ProtectedPage from "../../components/ProtectedPage";

const DashboardPage = () => {
  return (
    <ProtectedPage title="ACM UCR | Dashboard" restrictions={["member"]}>
      <Dashboard />
    </ProtectedPage>
  );
};

export default DashboardPage;
