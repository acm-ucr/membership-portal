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
        <Profile
          name="Highlander"
          major="Computer Science"
          classOf="2026"
          netId="high420"
          email="high420@ucr.edu"
          points="-69"
        />
      </Col>
    </Row>
  );
};

export default profile;
