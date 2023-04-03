import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ApplicationProfile = ({ color, name, email, image }) => {
  return (
    <Row
      className={`${color} p-2 py-4 m-1 rounded-2xl flex justify-center items-center`}
    >
      <Col xs={10} className="font-lexend text-acm-black m-0 pr-0">
        <img
          className={`shadow-[10px_8px_0px_0px] shadow-acm-white w-full mb-3`}
          src={image}
          alt="Profile Picture of Board Member"
        />
        <p className={`inline text-xl font-medium`}>{name}</p>
        <br />
        <p className="inline text-[1.1rem]">{email}</p>
      </Col>
    </Row>
  );
};

export default ApplicationProfile;
