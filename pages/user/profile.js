import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Profile from "../../components/Profile";
import Photo from "../../components/Photo";
import Header from "../../components/Header";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const ProfilePage = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        console.log(currentState.email);
        const response = await axios.post("/api/profile/getInfo", {
          email: currentState.email,
        });
        if (response.status === 200) {
          setData(response.data);
          console.log(response.data);
        }
      }
    });
  }, []);

  return (
    <div className="flex justify-center pt-[14vh]">
      <Row className="w-11/12">
        <Header title="profile" color="acm-green" />
        <Col className="flex justify-center items-stretch ml-0 mt-0 mr-0 mb-8 p-0">
          <Photo email={data?.id} />
        </Col>
        <Col>
          <Profile
            name={data?.data?.name}
            major={data?.data?.major}
            year={data?.data?.year}
            netId={data?.id?.substr(0, data.id.indexOf("@"))}
            email={data?.id}
            points={data?.data?.points}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
