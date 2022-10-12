import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Profile = ({ name, major, classOf, netId, email, points }) => {
  const [edit, setEdit] = useState(false);

  // Change name
  const [newName, setName] = useState(name);
  const handleNameChange = (event) => {
    setName(event.target.value);
    // console.log(event.target.value);
  };

  // Change major
  const [newMajor, setMajor] = useState(major);
  const handleMajorChange = (event) => {
    console.log(event.target.value);
    setMajor(event.target.value);
  };

  // Change class of
  const [newClassOf, setClassOf] = useState(classOf);
  const handleClassOfChange = (event) => {
    console.log(event.target.value);
    setClassOf(event.target.value);
  };

  // Functions for buttons
  const editProfile = () => {
    console.log("Edit Profile Button Pressed");
    setEdit(true);
  };

  const saveEditedValues = () => {
    // update edited values in the database
    setEdit(false);
  };

  const cancelChanges = () => {
    setEdit(false);
  };

  if (edit) {
    return (
      <Row className="w-full">
        <Col xl={6}>
          <p className="text-acm-black text-3xl font-lexend font-bold pb-1">
            name:
          </p>
          <input
            type="text"
            placeholder={newName}
            onChange={handleNameChange}
            className="text-acm-black text-2xl font-lexend pb-1 bg-gray-300 rounded-lg"
          />

          <p className="text-acm-black text-3xl font-lexend font-bold">
            major:
          </p>
          <input
            type="text"
            placeholder={newMajor}
            onChange={handleMajorChange}
            className="text-acm-black text-2xl font-lexend pb-1 bg-gray-300 rounded-lg"
          />

          <p className="text-acm-black text-3xl font-lexend font-bold">
            class of:
          </p>
          <input
            type="text"
            placeholder={newClassOf}
            onChange={handleClassOfChange}
            className="text-acm-black text-2xl font-lexend pb-1 bg-gray-300 rounded-lg"
          />
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

        <Row>
          <Col xl={6}>
            <button
              id="editProfile"
              className="mt-3 w-full sm:w-4/6 md:w-4/5 py-2 font-lexend font-bold text-acm-black text-2xl border-2 border-acm-lightpurple transition-colors duration-150 bg-acm-lightpurple rounded-lg focus:shadow-outline hover:border-acm-black "
              onClick={saveEditedValues}
            >
              save
            </button>
          </Col>

          <Col xl={6}>
            <button
              id="editProfile"
              className="mt-3 w-full sm:w-4/6 md:w-4/5 py-2 font-lexend font-bold text-acm-black text-2xl  bg-acm-white border-2 border-acm-black rounded-lg focus:shadow-outline hover:bg-indigo-500"
              onClick={cancelChanges}
            >
              cancel
            </button>
          </Col>
        </Row>
      </Row>
    );
  } else {
    return (
      <Row className="w-full">
        <Col xl={6}>
          <p className="text-acm-black text-3xl font-lexend font-bold pb-1">
            name:
          </p>
          <p className="text-acm-black text-2xl font-lexend pb-1">{newName}</p>

          <p className="text-acm-black text-3xl font-lexend font-bold">
            major:
          </p>
          <p className="text-acm-black text-2xl font-lexend">{newMajor}</p>

          <p className="text-acm-black text-3xl font-lexend font-bold">
            class of:
          </p>
          <p className="text-acm-black text-2xl font-lexend">{newClassOf}</p>
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
            className=" w-full sm:w-4/6 md:w-5/12 py-2 font-lexend font-bold text-acm-black border-2 border-acm-lightpurple text-2xl transition-colors duration-150 bg-acm-lightpurple rounded-lg focus:shadow-outline hover:border-acm-black"
            onClick={editProfile}
          >
            edit profile
          </button>
        </Col>
      </Row>
    );
  }
};

export default Profile;
