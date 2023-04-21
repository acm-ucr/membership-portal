import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Frame from "./Frame";

const Clubroom = () => {
  return (
    <div className="flex justify-center flex-col font-lexend text-acm-black mx-auto w-11/12">
      <p className="font-lexend text-acm-black text-heading text-center flex justify-center pb-5 m-0">
        ACM Clubroom
      </p>
      <Row className="bg-acm-blue flex items-center rounded-2xl !p-4 m-0 pb-8">
        <Col sm={6} className="text-text w-full h-full p-4">
          <p>
            We will often hold academic, professional, and technical workshops
            and events in this room! Located in Winston Chung Hall 127, behind
            Bytes, you can expect a lively environment to study, socialize, and
            learn new things!
          </p>
          Here are the perks:
          <>
            <li>Whiteboard walls</li>
            <li>Programming books</li>
            <li>Lockers</li>
            <li>Snacks</li>
            <li>Drinks</li>
          </>
        </Col>
        <Col sm={6} className="flex justify-center items-center w-full p-4">
          <Frame
            image="presentation4.webp"
            bottomLeft="#c792ea"
            topRight="#c3e88d"
            corners="black"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Clubroom;
