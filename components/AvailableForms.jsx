import React from "react";
import { Col, Row } from "react-bootstrap";
import FormHeader from "./FormHeader";

const AvailableForms = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <FormHeader title="available forms" />
      <Row className="w-11/12">
        <Col xl={3}>RESUME REVIEW</Col>
        <Col xl={3}>MOCK INTERVIEW</Col>
      </Row>
    </div>
  );
};

export default AvailableForms;
