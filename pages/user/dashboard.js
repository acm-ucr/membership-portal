import React from "react";
import { Col, Row } from "react-bootstrap";
import Announcements from "../../components/Announcements";
import Home from "../../components/Home";
import Meetings from "../../components/Meetings";

const dashboard = () => {
  return (
    <Row className="pt-[14vh]">
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
