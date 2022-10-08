import React from "react";
import { Col, Row } from "react-bootstrap";

const editProfile = () => {
  console.log("Edit Profile Button Pressed");
};

const Profile = ({ name, major, classOf, netId, email, points }) => {
  return (
    <Row className="w-full">
      <Col xl={6}>
        <p className="text-acm-black text-3xl font-lexend font-bold pb-1">
          name:
        </p>
        <p className="text-acm-black text-2xl font-lexend pb-1">{name}</p>

        <p className="text-acm-black text-3xl font-lexend font-bold">major:</p>
        <p className="text-acm-black text-2xl font-lexend">{major}</p>

        <p className="text-acm-black text-3xl font-lexend font-bold">
          class of:
        </p>
        <p className="text-acm-black text-2xl font-lexend">{classOf}</p>
      </Col>
      <Col xl={6}>
        <p className="text-acm-black text-3xl font-lexend h-fit w-fit font-bold">
          netid:
        </p>
        <p className="text-acm-black text-2xl font-lexend h-fit w-fit">
          {netId}
        </p>

        <p className="text-acm-black text-3xl font-lexend h-fit w-fit font-bold">
          email:
        </p>
        <p className="text-acm-black text-2xl font-lexend h-fit w-fit">
          {email}
        </p>

        <p className="text-acm-black text-3xl font-lexend h-fit w-fit font-bold">
          points:
        </p>
        <p className="text-acm-black text-2xl font-lexend h-fit w-fit">
          {points}
        </p>
      </Col>
      <Col xl={12}>
        <button
          id="editProfile"
          className=" w-full sm:w-4/6 md:w-5/12 py-2 font-lexend font-bold text-acm-black text-2xl transition-colors duration-150 bg-acm-lightpurple rounded-lg focus:shadow-outline hover:bg-indigo-500"
          onClick={editProfile}
        >
          edit profile
        </button>
      </Col>
    </Row>
  );
};

export default Profile;
