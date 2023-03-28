import React from "react";
import { Col, Row } from "react-bootstrap";
// import Announcements from "../../components/Announcements";
import Home from "../components/Home";
import Quickactions from "../components/Quickactions";

const dashboard = () => {
  return (
    <Row className="pt-[14vh] w-full m-0">
      <Col xl={12} className="p-0">
        <Home />
      </Col>
      {/* <Col xl={6}>
        <Announcements />
      </Col> */}
      <Col xl={6}>
        <Quickactions />
      </Col>
    </Row>
  );
};

export default dashboard;
