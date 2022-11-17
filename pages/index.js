import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Welcome from "../components/Welcome";
import Login from "../components/Login";
import RoleContext from "../components/RoleContext";

const Index = () => {
  const [role, setRole] = useState("TESTING");
  const value = { role, setRole };

  return (
    <RoleContext.Provider value={value}>
      <Row className="w-full flex justify-center items-center m-0 h-[100vh]">
        <Col xl={6} className="flex justify-center items-center">
          <Welcome />
          {role}
        </Col>
        <Col xl={6} className="flex justify-center items-center">
          <Login />
        </Col>
      </Row>
    </RoleContext.Provider>
  );
};

export default Index;
