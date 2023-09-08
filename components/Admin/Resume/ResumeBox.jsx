import React from "react";
import { Col, Row } from "react-bootstrap";
const ResumeBox = () => {
  return (
    <div className="flex my-3 w-33/12 border-3 rounded-xl bg-acm-marine ">
      <Row className="flex px-3 gx-1 mt-1">
        <Col md={5} className="flex flex-col mb-0">
          <p className=" text-xl font-semibold mb-0">Ashley Kim</p>
        </Col>
        <Col xs={7} md={2} className="flex flex-col md:py-1 ">
          <p className="text-sm font-semibold text-acm-white font-acm mb-0">
            7.24.23
          </p>
        </Col>
        <Col xs={7}>
          <p className="text-sm font-semibold text-acm-white font-acm mb-0">
            akim291
          </p>
        </Col>
        <Col xs={6} md={6} className="flex flex-col ml-auto">
          <button className="mb-3 py-2 font-lexend font-bold text-center text-acm-marine border-2 border-acm-marine text-sm bg-acm-black rounded-full hover:border-acm-white">
            review
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default ResumeBox;
