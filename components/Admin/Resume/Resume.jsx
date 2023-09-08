import React from "react";
import Header from "../../Header";
import ResumeBox from "../Resume/ResumeBox";
import { Col, Row } from "react-bootstrap";

const Resume = () => {
  return (
    <div className="pt-[10vh] flex flex-col justify-center items-start w-11/12">
      <Header title="resume" color="bg-acm-marine" />
      <p className="text-acm-black text-2xl font-lexend font-semibold m-0 left-auto px-2 pt-3">
        Submited Resumes:
      </p>
      <div className="overscroll-auto">
        <Row className="px-2">
          <Col>
            <ResumeBox />
          </Col>
          <Col>
            <ResumeBox />
          </Col>
          <Col>
            <ResumeBox />
          </Col>
          <Col>
            <ResumeBox />
          </Col>
        </Row>
        <Row className="px-2">
          <Col xs={3}>
            <ResumeBox />
          </Col>
        </Row>
      </div>
      <p className="text-acm-black text-2xl font-lexend font-semibold m-0 left-auto px-2 pt-3">
        Reviewed Resumes:
      </p>
      <Col className="px-2">
        <ResumeBox />
      </Col>
    </div>
  );
};

export default Resume;
