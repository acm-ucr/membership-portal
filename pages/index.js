import React from "react";
import { Row, Col } from "react-bootstrap";
import Welcome from "../components/Welcome";
import Login from "../components/Login";

const index = () => {
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

export default index;
