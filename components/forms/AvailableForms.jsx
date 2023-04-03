import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../Header";
import Form from "./AvailableForm.jsx";
import AvailableFormsArray from "./AvailableFormsArray";

const AvailableForms = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Header title="available forms" color="bg-acm-black" />
      <Row className="w-11/12 py-2">
        {AvailableFormsArray.map((item, index) => (
          <Col xs={6} sm={4} md={3} lg={2} key={index}>
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
