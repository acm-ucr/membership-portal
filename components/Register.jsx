import React, { useState } from "react";
/* import { useState } from "react"; */
import { Row, Col, Container } from "react-bootstrap";
import Confirmation from "./Confirmation.jsx";
import Link from "next/link";

const Register = () => {
  //  State changes when the user has submitted form
  const [registered, registerUser] = useState(false);

  //  Handles form submit
  const onSignUp = (event) => {
    //  Prevents page refresh on submitting form
    event.preventDefault();

    //  Sets state to true when user registers
    registerUser(true);
  };

  //  Checks whether user has registered and renders the confirmation component
  if (registered)
    return (
      <div className="flex justify-center items-center flex-col pt-[25vh]">
        <Confirmation />
      </div>
    );
  else
    return (
      <div>
        <Container className="w-4/5 m-auto font-bold pt-[16vh]">
          <p className="font-extrabold text-5xl pl-8 pb-2">become a member</p>
          <form
            className="bg-acm-black text-acm-white rounded-[57px] px-16 pt-10 pb-20 text-2xl"
            onSubmit={onSignUp}
          >
            <Row>
              <Col sm className="max-w-full">
                <label htmlFor="username" className="pl-3">
                  name
                </label>
                <input
                  type="text"
                  id="username"
                  className="rounded-full text-acm-black w-full mt-3 mb-4 text-2xl"
                  placeholder="Scotty Highlander"
                  required
                />
              </Col>
              <Col sm className="">
                <label htmlFor="email" className="pl-3">
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  className="rounded-full text-acm-black w-full mt-3 mb-4 text-2xl"
                  placeholder="netid@ucr.edu"
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
                  id="major"
                  className="rounded-full text-acm-black w-full mt-3 mb-4 text-2xl"
                  placeholder="Computer Science"
                  required
                />
              </Col>
              <Col sm className="">
                <label htmlFor="graduatingYear" className="pl-3">
                  graduating year
                </label>
                <input
                  type="number"
                  min="2022"
                  max="2099"
                  step="1"
                  id="graduatingYear"
                  className="rounded-full text-acm-black w-full mt-3 mb-4 text-2xl"
                  placeholder="2023"
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
                  id="password"
                  className="rounded-full text-acm-black w-full mt-3 mb-4 text-2xl"
                  placeholder="at least 10 characters"
                  required
                />
              </Col>
              <Col sm className="">
                <label htmlFor="confirmPassword" className="pl-3">
                  confirm password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="rounded-full text-acm-black w-full mt-3 mb-4 text-2xl"
                  placeholder="must match password"
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
                  id="phone"
                  className="rounded-full text-acm-black w-full mt-3 mb-4 text-2xl"
                  placeholder="(xxx) xxx-xxx"
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
};

export default Register;
