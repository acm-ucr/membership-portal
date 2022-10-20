import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Login = ({ handleLogin }) => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const onChangeHandler = (e) => {
    setFormInput(() => ({
      ...formInput,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formInput));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors.length === 0) && isSubmit) {
      console.log(formInput);
    }
  });

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z]{3,5}[0-9]{3}@ucr\.edu$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Enter valid UCR email!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };

  return (
    <form
      className=" bg-acm-black w-11/12 rounded-3xl flex justify-center flex-col items-center"
      onSubmit={onSubmitHandler}
    >
      <div className="w-10/12 flex justify-center items-top flex-col py-3">
        <label htmlFor="email" className="text-white text-4xl p-2">
          email
        </label>
        <input
          type="email"
          name="email"
          className="rounded-full text-3xl p-3"
          placeholder="netid@ucr.edu"
          onChange={onChangeHandler}
        />
      </div>
      <p className="text-red-300 font-bold">{formErrors.email}</p>
      <div className="w-10/12 flex justify-center items-top flex-col py-3">
        <label htmlFor="password" className="text-white text-4xl p-2">
          password
        </label>
        <input
          type="password"
          name="password"
          className="rounded-full text-3xl p-3"
          placeholder="password"
          onChange={onChangeHandler}
        />
      </div>
      <p className="text-red-300 font-bold">{formErrors.password}</p>
      <div className="w-10/12 flex justify-between items-center py-3">
        <button
          className="text-white bg-acm-blue rounded-full w-5/12 text-4xl p-3"
          type="submit"
          onClick={handleLogin(form.email, form.password)}
        >
          sign in
        </button>
        <Link href="/register" passHref>
          <button
            className="text-black bg-white rounded-full w-5/12 text-4xl p-3"
            type="button"
          >
            sign up
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Login;
