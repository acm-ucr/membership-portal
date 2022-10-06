import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Register = () => {
  return (
    <div>
      <Container className="w-4/5 m-auto font-bold">
        <h1 className="font-extrabold text-5xl pl-8">become a member</h1>
        <form className="bg-black text-white rounded-[57px] px-16 pt-10 pb-20 text-2xl">
          <Row>
            <Col sm className="max-w-full">
              <label htmlFor="username" className="pl-3">
                name
              </label>
              <input
                type="text"
                id="username"
                className="rounded-full text-black w-full mt-3 mb-4 text-2xl"
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
                className="rounded-full text-black w-full mt-3 mb-4 text-2xl"
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
                className="rounded-full text-black w-full mt-3 mb-4 text-2xl"
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
                className="rounded-full text-black w-full mt-3 mb-4 text-2xl"
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
                className="rounded-full text-black w-full mt-3 mb-4 text-2xl"
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
                className="rounded-full text-black w-full mt-3 mb-4 text-2xl"
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
                className="rounded-full text-black w-full mt-3 mb-4 text-2xl"
                required
              />
            </Col>
            <Col sm className="text-base text-center mt-4">
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
                    <a>sign in</a>
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
