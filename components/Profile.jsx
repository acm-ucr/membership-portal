import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {db} from "../firebase";
import {doc,setDoc,getDoc} from "firebase/firestore";

const Profile = ({ name, major, classOf, netId, email, points }) => {

  const [user, setUserInfo] = useState();
  const docRef = doc(db,"users","scott001");    // now can make queries to this collection
  
  useEffect(() => {
    const getUser = async () => {
      const data = await getDoc(docRef);
      const doc = data;
      setUserInfo({
        'name' : doc.data()['name'],
        'major' : doc.data()['major'],
        'year' : doc.data()['year'],
        'points' : doc.data()['points']
      });
    
    }

    getUser();
  }, []);


  const [edit, setEdit] = useState(false);

  const values = {
    name: name,
    major: major,
    classOf: classOf,
  };
  const [editableValues, setEditableValues] = useState(values);

  const handleNameChange = (event) => {
    setEditableValues({
      ...editableValues,
      [event.target.name]: event.target.value,
    });
    console.log(user.name);
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
    setEditableValues({
      ...editableValues,
      [event.target.name]: event.target.value,
    });
    console.log(editableValues.classOf);
  };

  // Functions for buttons
  const editProfile = () => {
    console.log("Edit Profile Button Pressed");
    setEdit(true);
  };

  const saveEditedValues = () => {
    const data = {
      major : editableValues.major,
      name : editableValues.name,
      year : editableValues.classOf,
    };
    
    setDoc(docRef,data)
    .then(docRef => {
      console.log("Updated")
    })
    .catch(error=> {
      console.log("Error: " , error);
    })

    setUserInfo({
      'major' : editableValues.major,
      'name' : editableValues.name,
      'year' : editableValues.classOf,
    })

    console.log("name: " , user.name);
    console.log("major: " , user.major);
    console.log("class of: " , user.year);
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
            placeholder={user.name}
            onChange={handleNameChange}
            className="text-acm-black text-2xl font-lexend pb-1 bg-gray-300 rounded-lg sm:w-4/6 md:w-4/5"
          />

          <p className="text-acm-black text-3xl font-lexend font-bold pt-3">
            major:
          </p>
          <input
            type="text"
            name="major"
            placeholder={user.major}
            onChange={handleMajorChange}
            className="text-acm-black text-2xl font-lexend pb-1 bg-gray-300 rounded-lg sm:w-4/6 md:w-4/5"
          />

          <p className="text-acm-black text-3xl font-lexend font-bold pt-3">
            class of:
          </p>
          <input
            type="text"
            name="classOf"
            placeholder={user.year}
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
      </Row>
    );
  }
};

export default Profile;
