import React, { useState } from "react";
/* import { useState } from "react"; */
import { Row, Col, Container } from "react-bootstrap";
import Confirmation from "./Confirmation.jsx";
import Link from "next/link";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  //  State changes when the user has submitted form
  // const [registered, registerUser] = useState(false);

  // By using both event.target.name and event.target.value property, you can group multiple <input> elements
  // value in one object state and use one handleChange() function to properly update the state value.

  const [submit, setSubmit] = useState(false);

  const [formVal, setFormVal] = useState({
    name: "",
    email: "",
    major: "",
    gradYear: "",
    password: "",
    confirmPass: "",
    phone: "",
  });

  const { name, email, major, gradYear, password, confirmPass, phone } =
    formVal;

  // const [name, setName] = useState(""); // default value for name is null

  const handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormVal((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  //  Handles form submit
  //  Sets state to true when user clicks submit


  const handleSubmit = (event) => {
    event.preventDefault();
    const phoneNumberCheckRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    // Checks if phone number is in format
    //     (123) 456-7890 / (123)456-7890 / 123-456-7890 / 1234567890
    if (
      name == "" ||
      email == "" ||
      major == "" ||
      gradYear == "" ||
      password == "" ||
      confirmPass == "" ||
      phone == ""
    ) {
      setSubmit(false);
    } else if (!email.includes("@ucr.edu")) {
      alert("Error: Please enter a valid UCR email");
      setSubmit(false);
    } else if (password != confirmPass) {
      alert("Error: Passwords do not match");
      setSubmit(false);
    } else if (!phoneNumberCheckRegex.test(phone)) {
      alert("Error: Please enter a valid phone number");
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  };

  //  Checks whether user has registered and renders the confirmation component
  if (submit) {
    return (
      <div className="flex justify-center items-center flex-col pt-[25vh]">
        <Confirmation />
        {/* checks if it saves properly */}
        {/* <p>Name Inputted: {name}</p>
        <p>Email Inputted: {email}</p>
        <p>Major Inputted: {major}</p>
        <p>Graduation Year Inputted: {gradYear}</p>
        <p>Password Inputted: {password}</p>
        <p>Confirm Password Inputted: {confirmPass}</p>
        <p>Phone Inputted: {phone}</p> */}
      </div>
    );
  }
  if (!submit) {
    return (
      <div>
        <Container className="w-4/5 m-auto font-bold pt-[16vh]">
          <p className="font-extrabold text-5xl pl-8 pb-2">become a member</p>
          <form
            className="bg-acm-black text-acm-white rounded-[57px] px-16 pt-10 pb-20 text-2xl"
            onSubmit={handleSubmit}
          >
            <Row>
              <Col sm className="max-w-full">
                <label htmlFor="username" className="pl-3">
                  name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name} // save name of the user
                  id="username"
                  className="rounded-full text-acm-black w-full mt-3 mb-4 text-2xl"
                  placeholder="Scotty Highlander"
                  onChange={handleInput}
                  required
                />
              </Col>
              <Col sm className="">
                <label htmlFor="email" className="pl-3">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  id="email"
                  className="rounded-full text-acm-black w-full mt-3 mb-4 text-2xl"
                  placeholder="netid@ucr.edu"
                  onChange={handleInput}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col sm className="">
                <label htmlFor="major" className="pl-3">
                  major
                </label>
                <input
                  type="text"
                  name="major"
                  value={major}
                  id="major"
                  className="rounded-full text-acm-black w-full mt-3 mb-4 text-2xl"
                  placeholder="Computer Science"
                  onChange={handleInput}
                  required
                />
              </Col>
              <Col sm className="">
                <label htmlFor="graduatingYear" className="pl-3">
                  graduating year
                </label>
                <input
                  type="number"
                  name="gradYear"
                  value={gradYear}
                  min="2022"
                  max="2099"
                  step="1"
                  id="graduatingYear"
                  className="rounded-full text-acm-black w-full mt-3 mb-4 text-2xl"
                  placeholder="2023"
                  onChange={handleInput}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col sm className="">
                <label htmlFor="password" className="pl-3">
                  password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  id="password"
                  className="rounded-full text-acm-black w-full mt-3 mb-4 text-2xl"
                  placeholder="at least 10 characters"
                  onChange={handleInput}
                  required
                />
              </Col>
              <Col sm className="">
                <label htmlFor="confirmPassword" className="pl-3">
                  confirm password
                </label>
                <input
                  type="password"
                  name="confirmPass"
                  value={confirmPass}
                  id="confirmPassword"
                  className="rounded-full text-acm-black w-full mt-3 mb-4 text-2xl"
                  placeholder="must match password"
                  onChange={handleInput}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col sm className="">
                <label htmlFor="phone" className="pl-3">
                  phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  id="phone"
                  className="rounded-full text-acm-black w-full mt-3 mb-4 text-2xl"
                  placeholder="(xxx) xxx-xxxx"
                  onChange={handleInput}
                  required
                />
              </Col>
              <Col
                sm
                className="text-base text-center mt-4 border-t-8 border-transparent"
              >
                <Row>
                  <Col sm>
                    <button
                      className="bg-acm-blue rounded-full min-w-full text-2xl mb-4 px-10 py-3"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </Col>
                  <Col sm>
                    <div className="text-2xl">
                      <span>already a member?</span>
                      <br></br>
                      <Link href="/" passHref>
                        <span className="hover:text-acm-blue cursor-pointer">
                          sign in
                        </span>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    );
  }
};

export default Register;
