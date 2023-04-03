import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Profile from "../components/Profile";
import Photo from "../components/Photo";
import Header from "../components/Header";
import UserContext from "../components/UserContext";

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  return (
    user && (
      <div className="flex justify-center pt-[14vh]">
        <title>Profile</title>
        <Row className="w-11/12">
          <Header title="profile" color="bg-acm-green" />
          <Col className="flex justify-center items-stretch ml-0 mt-0 mr-0 mb-8 p-0">
            <Photo uid={user.uid} />
          </Col>
          <Col>
            <Profile
              uid={user.uid}
              name={user.name}
              major={user.major}
              year={user.year}
              netId={user.email.substr(0, user.email.indexOf("@"))}
              email={user.email}
              points={user.points}
            />
          </Col>
        </Row>
      </div>
    )
  );
};

export default ProfilePage;
