import { Col, Row } from "react-bootstrap";
import Profile from "../components/Profile";
import Photo from "../components/Photo";
import Header from "../components/Header";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session } = useSession();

  return (
    session && (
      <div className="flex justify-center pt-[10vh]">
        <title>Profile</title>
        <Row className="w-11/12">
          <Header title="profile" color="bg-acm-green" />
          <Col className="flex justify-center items-stretch ml-0 mt-0 mr-0 mb-8 p-0">
            <Photo uid={session.user.id} />
          </Col>
          <Col>
            <Profile
              uid={session.user.id}
              name={session.user.name}
              major={session.user.major}
              year={session.user.year}
              netId={session.user.email.substr(
                0,
                session.user.email.indexOf("@")
              )}
              email={session.user.email}
              points={session.user.points}
            />
          </Col>
        </Row>
      </div>
    )
  );
};

export default ProfilePage;
