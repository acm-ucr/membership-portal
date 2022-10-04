import React from "react";
import { Col, Row } from "react-bootstrap";

const alterFontSize = (word) => {
  const numChars = word.length;

  if (numChars > 40) {
    return "text-[0.75vw] font-lexend h-[8vh] w-1/50 pb-[1.0vw] 0.5vw";
  } else if (numChars > 35) {
    return "text-[1.30vw] font-lexend h-[8vh] w-1/50 pb-[1.0vw] 0.5vw";
  }

  return "text-[1.5vw] font-lexend h-[8vh] w-1/50 pb-[1.0vw] 1.0vw";
};
const Profile = ({ name, major, classOf, netId, email, points }) => {
  return (
    <div>
      <Row className="w-3/5">
        <Col className="w-2/3">
          <p className="text-[2.0vw] font-lexend h-fit w-fit font-bold">
            name:
          </p>
          <p className={alterFontSize(name)}>{name}</p>

          <p className="text-[2.0vw] font-lexend h-fit w-fit font-bold">
            major:
          </p>
          <p className="text-[1.5vw] font-lexend h-[8vh] w-1/50 pb-[1.0vw]">
            {major}
          </p>

          <p className="text-[2.0vw] font-lexend h-fit w-max font-bold">
            class of:
          </p>
          <p className="text-[1.5vw] font-lexend h-[8vh] w-1/50 pb-[1.0vw]">
            {classOf}
          </p>
        </Col>
        <Col className="w-2/3">
          <p className="text-[2.0vw] font-lexend h-fit w-fit font-bold">
            netid:
          </p>
          <p className="text-[1.5vw] font-lexend h-[8vh] w-1/50 pb-[1.0vw] 30">
            {netId}
          </p>

          <p className="text-[2.0vw] font-lexend h-fit w-fit font-bold">
            email:
          </p>
          <p className={alterFontSize(email)}>{email}</p>

          <p className="text-[2.0vw] font-lexend h-fit w-fit font-bold">
            points:
          </p>
          <p className="text-[1.5vw] font-lexend h-[8vh] w-1/50 pb-[1.0vw] 30">
            {points}
          </p>
        </Col>
      </Row>

      <button
        id="editProfile"
        className=" mt-[2vh] px-3 py-2 text-[1.7vw] h-[9vh] w-[20vw] font-lexend font-bold text-acm-black transition-colors duration-150 bg-[#C693EA] rounded-lg focus:shadow-outline hover:bg-indigo-500"
        onClick={() => console.log(" 'Edit Profile' Button clicked")}
      >
        edit profile
      </button>
    </div>
  );
};

export default Profile;
