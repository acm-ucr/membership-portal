import React from "react";
/* import { useState } from "react"; */
import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";

const Register = () => {
  return (
    <div>
      <Container className="w-4/5 m-auto font-bold pt-[16vh]">
        <h1 className="font-extrabold text-5xl pl-8 pb-2">become a member</h1>
        <form className="bg-acm-black text-acm-white rounded-[57px] px-16 pt-10 pb-20 text-2xl">
          <Row>
            <Col sm className="max-w-full">
              <label htmlFor="username" className="pl-3">
                name
              </label>
              <input
                type="text"
                id="username"
                className="rounded-full text-acm-black w-full mt-3 mb-4 text-2xl"
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
