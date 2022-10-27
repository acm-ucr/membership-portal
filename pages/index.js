import React from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Row, Col } from "react-bootstrap";
import Welcome from "../components/Welcome";
import Login from "../components/Login";

// Validate user
const handleLogin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error Code: ${errorCode}`);
      console.log(`Error Message: ${errorMessage}`);
    });
};

const index = () => {
  return (
    <Row className="w-full flex justify-center items-center m-0 h-[100vh]">
      <Col xl={6} className="flex justify-center items-center">
        <Welcome />
      </Col>
      <Col xl={6} className="flex justify-center items-center">
        <Login handleLogin={handleLogin} />
      </Col>
    </Row>
  );
};

export default index;
