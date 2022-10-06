import React from "react";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

const Login = () => {
  const inputVal = { email: "", password: "" };
  const [formValues, setFormValues] = useState(inputVal);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
    validateForm(formValues);
  };

  const validateForm = (values) => {
    console.log(formValues);
  };

  return (
    <div>
      <Container className="font-bold">
        <form
          className="bg-black text-white rounded-[57px] px-16 pt-10 pb-20 text-2xl"
          onSubmit={handleSubmit}
        >
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
                value={formValues.email}
                onChange={handleChange}
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
                value={formValues.password}
                onChange={handleChange}
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
