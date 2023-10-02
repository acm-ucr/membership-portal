import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();
  const { name, major, year, email, points } = session.user;

  const uid = session.user.id;
  const netId = session.user.email.substr(0, session.user.email.indexOf("@"));

  const [editState, setEditState] = useState(false);
  const [editableValues, setEditableValues] = useState({
    major: major,
    year: year,
  });

  const thisYear = new Date().getFullYear();
  const years = Array.from(new Array(6), (val, index) => index + thisYear);

  useEffect(() => {
    setEditableValues({ major: major, year: year });
  }, [major, year]);
  // Change major
  const handleMajorChange = (event) => {
    setEditableValues({
      ...editableValues,
      major: event.target.value,
    });
  };

  // Change class of
  const handleyearChange = (event) => {
    setEditableValues({
      ...editableValues,
      year: event.target.value,
    });
  };

  // Functions for buttons
  const editProfile = () => {
    setEditState(true);
  };

  const saveEditedValues = () => {
    if (editableValues.major == undefined) editableValues.major = major;
    if (editableValues.year == undefined) editableValues.year = year;
    if (editableValues.major == major && editableValues.year == year) {
      setEditState(false);
      return;
    }

    const data = {
      major: editableValues.major,
      year: editableValues.year,
      uid: uid,
    };
    axios
      .post("/api/setInfo", data)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });

    setEditState(false);
  };

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

          <p className="break-words text-acm-black text-2xl font-lexend h-fit w-fit">
            {name}
          </p>

          <p className="text-acm-black text-3xl font-lexend font-bold pt-3">
            major:
          </p>

          <select
            className="text-acm-black focus:border-black focus:ring-0 text-lg font-lexend pb-1 bg-gray-300 rounded-lg sm:w-full"
            onChange={handleMajorChange}
          >
            <option value="none" selected disabled hidden>
              Select a Major
            </option>
            <option value="Computer Science">Computer Science</option>
            <option value="Computer Science w/ Business App">
              Computer Science w/ Business App
            </option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Data Science">Data Science</option>
            <option value="Electrical Engineering">
              Electrical Engineering
            </option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Bioengineering">Bioengineering</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Environmental Engineering">
              Environmental Engineering
            </option>
            <option value="Material Science and Engineering">
              Material Science and Engineering
            </option>

            <option value="Robotics Engineering">Robotics Engineering</option>
            <option value="Other">Other</option>
          </select>

          <p className="text-acm-black text-3xl font-lexend font-bold pt-3">
            class of:
          </p>
          <select
            type="number"
            name="year"
            placeholder={editableValues.year}
            onChange={handleyearChange}
            className="text-acm-black focus:border-black focus:ring-0 text-lg font-lexend pb-1 bg-gray-300 rounded-lg sm:w-full"
          >
            <option value="none" selected disabled hidden>
              Select a Year
            </option>

            {years.map((year) => (
              <option key={year.index} value={year}>
                {year}
              </option>
            ))}
          </select>
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
          <p className="break-words text-acm-black text-2xl font-lexend h-fit w-fit">
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
      <Row className="w-full text-center">
        <Col xl={6} className="sm:text-center md:text-left">
          <p className="text-acm-black text-3xl font-lexend font-bold pb-1">
            name:
          </p>
          <p className="text-acm-black text-2xl font-lexend pb-1">{name}</p>

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
            {editableValues.year}
          </p>
        </Col>
        <Col xl={6} className="sm:text-center md:text-left">
          <p className="text-acm-black text-3xl font-lexend font-bold">
            netid:
          </p>
          <p className="text-acm-black text-2xl font-lexend">{netId}</p>

          <p className="text-acm-black text-3xl font-lexend font-bold pt-3">
            email:
          </p>
          <p className="break-words text-acm-black text-2xl font-lexend">
            {email}
          </p>

          <p className="text-acm-black text-3xl font-lexend font-bold pt-3">
            points:
          </p>
          <p className="text-acm-black text-2xl font-lexend">{points}</p>
        </Col>
        <Col xl={12} className="sm:text-left">
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
