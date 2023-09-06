import React from "react";
import { Col, Row } from "react-bootstrap";
const ResumeBox = () => {
  return (
    <div className="flex my-3 w-3/12 h-11/12 border-3 rounded-xl bg-acm-marine ">
      <Row className="flex  justify-start">
        <Col md={7} className="flex flex-col text-center">
          <p className=" text-xl font-semibold text-center">Ashley Kim</p>
        </Col>
        <Col xs={6} md={3} className="flex flex-col text-center">
          <p className="text-sm py-1 font-semibold text-acm-white font-acm">
            7.24.23
          </p>
        </Col>
        <Col xs={6} md={7} className="flex flex-col">
          <p className="text-sm font-semibold px-2 text-acm-white font-acm">
            akim291
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ResumeBox;
