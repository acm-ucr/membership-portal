import React from "react";
import { Col, Row } from "react-bootstrap";
import Home from "../components/Home";
import Announcements from "../components/Announcements";
import Meetings from "../components/Meetings";

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
        <Meetings />
      </Col>
    </Row>
  );
};

export default dashboard;
