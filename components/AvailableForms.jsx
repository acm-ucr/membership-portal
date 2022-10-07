import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "./Header";
import Form from "./Form";

const AvailableForms = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Header title="available forms" />
      <Row className="w-11/12 py-2">
        <Col xs={3}>
          <Form
            title="mock interview request form"
            text="text-acm-marine"
            border="border-acm-marine"
            background="bg-acm-marine"
          />
        </Col>
        <Col xs={3}>
          <Form
            title="resume review form"
            text="text-acm-orange"
            border="border-acm-orange"
            background="bg-acm-orange"
          />
        </Col>
      </Row>
    </div>
  );
};

export default AvailableForms;
