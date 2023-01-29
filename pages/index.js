import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Welcome from "../components/Welcome";
import Login from "../components/Login";
import { useRouter } from "next/router";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        console.log(currentState.uid);
        const response = await axios.post("/api/profile/verifyUser", {
          uid: currentState.uid,
        });
        if (response.status === 200) {
          router.push("/user/dashboard");
        }
      }
    });
  }, []);

  return (
    <Row className="w-full flex justify-center items-center m-0 h-[100vh]">
      <Col xl={6} className="flex justify-center items-center">
        <Welcome />
      </Col>
      <Col xl={6} className="flex justify-center items-center">
        <Login />
      </Col>
    </Row>
  );
};

export default Index;
