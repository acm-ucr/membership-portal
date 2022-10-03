import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import FormHeader from "./FormHeader";

const AvailableForms = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <FormHeader title="available forms" />
      <Row className="w-11/12">
        <Col xl={3}>
          <Form />
        </Col>
        <Col xl={3}>
          <Form />
        </Col>
      </Row>
    </div>
  );
};

export default AvailableForms;
