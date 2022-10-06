import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <Container className="font-bold">
        <form className="bg-black text-white rounded-[57px] px-16 pt-10 pb-20 text-2xl">
          <Row>
            <Col sm className="max-w-full">
              <label htmlFor="email" className="pl-3">
                email
              </label>
              <input
                type="email"
                id="email"
                className="rounded-full text-black mt-3 mb-4 py-3 px-4 text-xl w-full"
                placeholder="netid@ucr.edu"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm className="max-w-full">
              <label htmlFor="password" className="pl-3">
                password
              </label>
              <input
                type="password"
                id="password"
                className="rounded-full text-black mt-3 mb-4 py-3 px-4 text-xl w-full"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm className="">
              <button
                className="bg-acm-blue rounded-full w-full px-10 py-3 mb-4"
                type="submit"
              >
                Sign In
              </button>
            </Col>
            <Col sm className="content-center">
              <button
                className="bg-white text-black rounded-full w-full px-10 py-3"
                type="submit"
              >
                Sign Up
              </button>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default Login;
