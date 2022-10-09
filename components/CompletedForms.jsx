import React from "react";
import Header from "./Header";
import { CompletedFormsArray } from "./CompletedFormsArray";
import { Row, Col } from "react-bootstrap";
import Form from "./Form";

const CompletedForms = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Header title="completed forms" color="acm-black" />
      <Row className="w-11/12 py-2">
        {CompletedFormsArray.map((item, index) => (
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

export default CompletedForms;
