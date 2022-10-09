import React from "react";
import Header from "./Header";
import { SubmittedFormsArray } from "./SubmittedFormsArray";
import { Col, Row } from "react-bootstrap";
import Form from "./Form";

const SubmittedForms = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Header title="submitted forms" />
      <Row className="w-11/12 py-2">
        {SubmittedFormsArray.map((item, index) => (
          <Col xs={3} key={index}>
            <Form
              title={item.title}
              text={item.text}
              border={item.border}
              background={item.background}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SubmittedForms;
