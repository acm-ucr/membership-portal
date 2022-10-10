import React from "react";
import { Col, Row } from "react-bootstrap";
import Profile from "../components/Profile";
import Photo from "../components/Photo";
import Header from "../components/Header";

const profile = () => {
  return (
    <div className="flex justify-center pt-[14vh]">
      <Row className="w-11/12">
        <Header title="profile" color="acm-green" />
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
    </div>
  );
};

export default profile;
