import Profile from "../../components/user/profile/Profile";
import ProtectedPage from "../../components/ProtectedPage";

const ProfilePage = () => {
  return (
    <ProtectedPage title="ACM UCR | Profile" restrictions={["member"]}>
      <Profile />
    </ProtectedPage>
  );
};

export default ProfilePage;
