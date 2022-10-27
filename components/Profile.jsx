import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

/* NOTE : 
When backend is implemented

  1. Go to saveEditedValues function and change make sure name gets updated in database

  2. In the HTML
    Change all {editableValues.name} to just name
    Change all {editableValues.major} to just major
    Change all {editableValues.classOf} to just classOf
*/

const Profile = ({ name, major, classOf, netId, email, points }) => {
  const [edit, setEdit] = useState(false);
  const values = {
    name: name,
    major: major,
    classOf: classOf,
  };
  const [yearErrors, setYearErrors] = useState("");

  const validateYear = (yr) => {
    let isValid = true;
    const errors = "";
    const regex = /^20[0-9]{2}$/;
    if (!regex.test(yr)) {
      errors = "Did not save, invalid class of";
      isValid = false;
    } else {
      const currentDate = new Date().getFullYear();
      if (yr < currentDate) {
        errors = "Did not save, class of cannot be in the past";
        isValid = false;
      } else if (yr > currentDate + 6) {
        errors = "Did not save, class of too far in the future";
        isValid = false;
      }
    }
    console.log(errors);
    setYearErrors(errors);
    return isValid;
  };

  const [editableValues, setEditableValues] = useState(values);

  const handleNameChange = (event) => {
    setEditableValues({
      ...editableValues,
      [event.target.name]: event.target.value,
    });
    console.log(editableValues.name);
  };

  // Change major
  const handleMajorChange = (event) => {
    setEditableValues({
      ...editableValues,
      [event.target.name]: event.target.value,
    });
    console.log(editableValues.major);
  };

  // Change class of
  const handleClassOfChange = (event) => {
    if (validateYear(event.target.value)) {
      console.log("\nSUCCESS: ");
      console.log(event.target.value);
      setEditableValues({
        ...editableValues,
        [event.target.name]: event.target.value,
      });
    }
  };

  // Functions for buttons
  const editProfile = () => {
    console.log("Edit Profile Button Pressed");
    setEdit(true);
  };

  const saveEditedValues = () => {
    // put code to update edited values in the database in here
    name = editableValues.name;
    major = editableValues.major;
    classOf = editableValues.classOf;
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
            name="name"
            placeholder={editableValues.name}
            onChange={handleNameChange}
            className="text-acm-black text-2xl font-lexend pb-1 bg-gray-300 rounded-lg sm:w-4/6 md:w-4/5"
          />

          <p className="text-acm-black text-3xl font-lexend font-bold pt-3">
            major:
          </p>
          <input
            type="text"
            name="major"
            placeholder={editableValues.major}
            onChange={handleMajorChange}
            className="text-acm-black text-2xl font-lexend pb-1 bg-gray-300 rounded-lg sm:w-4/6 md:w-4/5"
          />

          <p className="text-acm-black text-3xl font-lexend font-bold pt-3">
            class of:
          </p>
          <input
            type="text"
            name="classOf"
            placeholder={editableValues.classOf}
            onChange={handleClassOfChange}
            className="text-acm-black text-2xl font-lexend pb-1 bg-gray-300 rounded-lg sm:w-4/6 md:w-4/5"
          />
        </Col>
        <Col xl={6}>
          <p className="text-acm-black text-3xl font-lexend h-fit w-fit font-bold">
            netid:
          </p>
          <p className="text-acm-black text-2xl font-lexend h-fit w-fit">
            {netId}
          </p>

          <p className="text-acm-black text-3xl font-lexend h-fit w-fit font-bold pt-3">
            email:
          </p>
          <p className="text-acm-black text-2xl font-lexend h-fit w-fit">
            {email}
          </p>

          <p className="text-acm-black text-3xl font-lexend h-fit w-fit font-bold pt-3">
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
              className="mt-3 w-full sm:w-4/6 md:w-4/5 py-2 font-lexend font-bold text-acm-black text-2xl  bg-acm-white border-2 border-acm-black rounded-lg focus:shadow-outline hover:bg-acm-lightpurple"
              onClick={cancelChanges}
            >
              cancel
            </button>
          </Col>
        </Row>
      </Row>
    );
  } else {
    /* 
  LLLLLLLLLLLLLLLLLLLLJJJJJJJJJJJJJJJJJJ
  kkkkkk
  kkkkkkk
  kkkkkkk
  */
    return (
      <Row className="w-full">
        <Col xl={6}>
          <p className="text-acm-black text-3xl font-lexend font-bold pb-1">
            name:
          </p>
          <p className="text-acm-black text-2xl font-lexend pb-1">
            {editableValues.name}
          </p>

          <p className="text-acm-black text-3xl font-lexend font-bold pt-3">
            major:
          </p>
          <p className="text-acm-black text-2xl font-lexend">
            {editableValues.major}
          </p>

          <p className="text-acm-black text-3xl font-lexend font-bold pt-3">
            class of:
          </p>
          <p className="text-acm-black text-2xl font-lexend">
            {editableValues.classOf}
          </p>
        </Col>
        <Col xl={6}>
          <p className="text-acm-black text-3xl font-lexend h-fit w-fit font-bold">
            netid:
          </p>
          <p className="text-acm-black text-2xl font-lexend h-fit w-fit">
            {netId}
          </p>

          <p className="text-acm-black text-3xl font-lexend h-fit w-fit font-bold pt-3">
            email:
          </p>
          <p className="text-acm-black text-2xl font-lexend h-fit w-fit">
            {email}
          </p>

          <p className="text-acm-black text-3xl font-lexend h-fit w-fit font-bold pt-3">
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
        <p className="text-acm-red font-bold pt-[2%]">{yearErrors}</p>
      </Row>
    );
  }
};

export default Profile;
