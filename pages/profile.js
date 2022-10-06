import React from "react";
import { Col, Row } from "react-bootstrap";
import Profile from "../components/Profile";
import Photo from "../components/Photo";

const profile = () => {
  return (
    <Row>
      <Col>
        <Photo />
      </Col>
      <Col>
        <Profile />
      </Col>
    </Row>
  );
};

export default profile;
