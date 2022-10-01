import React from "react";
import Announcement from "../components/Announcement";
import { Row } from "react-bootstrap";

const index = () => {
  return (
    <div>
      <Row className="p-5">
        <Announcement
          color="#c3e88d"
          title="really cool title"
          date="january 1st"
          time="1 pm"
          location="winston"
        />
      </Row>
    </div>
  );
};

export default index;
