import React from "react";
import { Col, Row } from "react-bootstrap";

const editProfile = () => {
  console.log("Edit Profile Button Pressed");
};

const Profile = ({ name, major, classOf, netId, email, points }) => {
  return (
    <div>
      <Row className="w-2/5">
        <Col className="w-2/3">
          <p className="text-acm-black text-3xl font-lexend h-fit w-fit font-bold pb-2">
            name:
          </p>
          <p className="text-acm-black text-2xl font-lexend h-fit w-fit">
            {name}
          </p>

          <p className="text-acm-black text-3xl font-lexend h-fit w-fit font-bold">
            major:
          </p>
          <p className="text-acm-black text-2xl font-lexend h-fit w-fit ">
            {major}
          </p>

          <p className="text-acm-black text-3xl font-lexend h-fit w-fit font-bold">
            class of:
          </p>
          <p className="text-acm-black text-2xl font-lexend h-fit w-fit">
            {classOf}
          </p>
        </Col>
        <Col className="w-2/3">
          <p className="text-acm-black text-3xl font-lexend h-fit w-fit font-bold">
            netid:
          </p>
          <p className="text-acm-black text-2xl font-lexend h-fit w-fit ">
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
          <p className="text-acm-black text-2xl font-lexend h-fit w-fit font-bold">
            {points}
          </p>
        </Col>
      </Row>

      <button
        id="editProfile"
        className=" mt-8 h-20 w-1/6 font-lexend font-bold text-acm-black text-2xl transition-colors duration-150 bg-acm-lightpurple rounded-lg focus:shadow-outline hover:bg-indigo-500"
        onClick={editProfile}
      >
        edit profile
      </button>
    </div>
  );
};

export default Profile;
