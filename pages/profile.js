import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Profile from "../components/Profile";
import Photo from "../components/Photo";
import Header from "../components/Header";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const ProfilePage = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        console.log(currentState.photoURL);
        const response = await axios.post("/api/profile/getInfo", {
          uid: currentState.uid,
        });
        if (response.status === 200) {
          setData({
            ...response.data,
            photoURL: currentState.photoURL,
            email: currentState.email,
            name: currentState.displayName,
            uid: currentState.uid,
          });
          console.log(response.data);
        }
      }
    });
  }, []);
  console.log(data);
  return (
    <div className="flex justify-center pt-[14vh]">
      <title>Profile</title>
      <Row className="w-11/12">
        <Header title="profile" color="bg-acm-green" />
        <Col className="flex justify-center items-stretch ml-0 mt-0 mr-0 mb-8 p-0">
          <Photo uid={data?.uid} photoURL={data?.photoURL} />
        </Col>
        <Col>
          <Profile
            uid={data?.uid}
            name={data?.name}
            major={data?.data?.major}
            year={data?.data?.year}
            netId={data?.email?.substr(0, data.email.indexOf("@"))}
            email={data?.email}
            points={data?.data?.points}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
