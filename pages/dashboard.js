import React from "react";
import { Col, Row } from "react-bootstrap";
import Announcements from "../components/Announcements";
import Home from "../components/Home";
import MeetingMap from "../components/MeetingMap";

const dashboard = () => {
  return (
    <Row>
      <Col xl={12}>
        <Home />
      </Col>
      <Col xl={6}>
        <Announcements />
      </Col>
      <Col xl={6}>
        <MeetingMap />
      </Col>
    </Row>
  );
};

export default dashboard;
