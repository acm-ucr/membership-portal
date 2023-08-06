import React from "react";
import Row from "react-bootstrap/Row";

const Clubroom = () => {
  return (
    <div className="flex font-lexend text-acm-black mx-auto w-11/12 h-auto">
      <Row className="flex !p-4 m-0 text-text text-2xl ">
        <p className="pb-4">
          Welcome to our clubroom! We will often hold academic, professional,
          and technical workshops and events in this room. Located in Winston
          Chung Hall 127, behind Bytes, you can expect a lively environment to
          study, socialize, and learn new things!
        </p>
        <div className="font-bold">Some of the perks include:</div>

        <div className="indent-3 pb-5">
          <li>Whiteboard walls</li>
          <li>Programming books</li>
          <li>Lockers</li>
          <li>Snacks / Drinks</li>
        </div>
      </Row>
    </div>
  );
};

export default Clubroom;
