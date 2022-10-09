import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "./Header";
import Form from "./Form";
import { AvailableFormsArray } from "./AvailableFormsArray";

const AvailableForms = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Header title="available forms" color="acm-black" />
      <Row className="w-11/12 py-2">
        {AvailableFormsArray.map((item, index) => (
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

export default AvailableForms;
