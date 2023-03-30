import React, { useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Welcome from "../components/Welcome";
import Login from "../components/Login";
import { useRouter } from "next/router";
import UserContext from "../components/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";

const Index = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  console.log(user);

  useEffect(() => {
    console.log(user);
    if (user) {
      router.push("/dashboard");
    } else {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser !== null) {
          axios
            .post("/api/profile/getInfo", { uid: currentUser.uid })
            .then((response) => {
              const data = response.data.data;
              const date = new Date(data.start.seconds * 1000);
              data.start = date.getFullYear();
              setUser({
                ...response.data.data,
                name: currentUser.displayName,
                uid: currentUser.uid,
                email: currentUser.email,
              });
            });
        }
      });
    }
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
