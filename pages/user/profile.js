import { Col, Row } from "react-bootstrap";
import Profile from "../../components/Profile";
import Photo from "../../components/Photo";
import Header from "../../components/Header";
import ProtectedPage from "../../components/ProtectedPage";

const ProfilePage = () => {
  return (
    <ProtectedPage title="Profile" restrictions={["member"]}>
      <div className="flex justify-center pt-[10vh]">
        <title>Profile</title>
        <Row className="w-11/12">
          <Header title="profile" color="bg-acm-green" />
          <Col className="flex justify-center items-stretch ml-0 mt-0 mr-0 mb-8 p-0">
            <Photo />
          </Col>
          <Col>
            <Profile />
          </Col>
        </Row>
      </div>
    </ProtectedPage>
  );
};

export default ProfilePage;
