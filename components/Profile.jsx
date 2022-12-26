import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

// getting the name, major, class of working.
// it gets data from the db and is passed into the profile component

const Profile = ({ name, major, year, netId, email, points }) => {
  const [editState, setEditState] = useState(false);
  const values = {
    name: name,
    major: major,
    year: year,
  };
  const [yearErrors, setYearErrors] = useState("");

  const validateYear = (yr) => {
    let isValid = true;
    const errors = "";
    const regex = /^20[0-9]{2}$/;

    const currentDate = new Date().getFullYear();

    if (yr < currentDate) {
      isValid = false;
      errors = "Did not save, class of cannot be in the past";
    }

    if (yr > currentDate + 6) {
      isValid = false;
      errors = "Did not save, class of too far in the future";
    }

    if (!regex.test(yr)) {
      isValid = false;
      errors = "Did not save. Please input a valid year";
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
  };

  // Change major
  const handleMajorChange = (event) => {
    setEditableValues({
      ...editableValues,
      [event.target.name]: event.target.value,
    });
  };

  // Change class of
  const handleyearChange = (event) => {
    if (validateYear(event.target.value)) {
      console.log("\nSUCCESS: ");

      setEditableValues({
        ...editableValues,
        [event.target.name]: event.target.value,
      });
    }
  };

  // Functions for buttons
  const editProfile = () => {
    console.log("Edit Profile Button Pressed");
    setEditState(true);
  };

  const [refresh, setRefresh] = useState(false);

  const saveEditedValues = () => {
    if (
      (editableValues.name == undefined &&
        editableValues.major == undefined &&
        editableValues.year == undefined) ||
      (editableValues.name == name &&
        editableValues.major == major &&
        editableValues.year == year)
    ) {
      setEditState(false);
      return;
    }

    if (editableValues.name == undefined) {
      editableValues.name = name;
    }

    if (editableValues.major == undefined) {
      editableValues.major = major;
    }

    if (editableValues.year == undefined) {
      editableValues.year = year;
    }

    const data = {
      name: editableValues.name,
      major: editableValues.major,
      year: editableValues.year,
      email: email,
    };

    axios
      .post("/api/profile/setInfo", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setEditState(false);

    setTimeout(() => {
      setRefresh(true);
    }, 1000);
  };

  if (refresh) {
    window.location.reload();
  }

  const cancelChanges = () => {
    setEditState(false);
  };

  if (editState) {
    return (
      <Row className="w-full">
        <Col xl={6}>
          <p className="text-acm-black text-3xl font-lexend font-bold pb-1">
            name:
          </p>
          <input
            type="text"
            name="name"
            placeholder={name}
            onChange={handleNameChange}
            className="text-acm-black text-2xl font-lexend pb-1 bg-gray-300 rounded-lg sm:w-4/6 md:w-4/5"
          />

          <p className="text-acm-black text-3xl font-lexend font-bold pt-3">
            major:
          </p>
          <input
            type="text"
            name="major"
            placeholder={major}
            onChange={handleMajorChange}
            className="text-acm-black text-2xl font-lexend pb-1 bg-gray-300 rounded-lg sm:w-4/6 md:w-4/5"
          />

          <p className="text-acm-black text-3xl font-lexend font-bold pt-3">
            class of:
          </p>
          <input
            type="text"
            name="year"
            placeholder={year}
            onChange={handleyearChange}
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
    return (
      <Row className="w-full">
        <Col xl={6}>
          <p className="text-acm-black text-3xl font-lexend font-bold pb-1">
            name:
          </p>
          <p className="text-acm-black text-2xl font-lexend pb-1">{name}</p>

          <p className="text-acm-black text-3xl font-lexend font-bold pt-3">
            major:
          </p>
          <p className="text-acm-black text-2xl font-lexend">{major}</p>

          <p className="text-acm-black text-3xl font-lexend font-bold pt-3">
            class of:
          </p>
          <p className="text-acm-black text-2xl font-lexend">{year}</p>
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
