import React from "react";

const Register = () => {
  return (
    <div className="font-bold m-10">
      <h1 className="pl-5 font-bold text-8xl">become a member</h1>
      <form className=" bg-acm-black rounded-[57px] p-10 grid grid-cols-2 gap-4">
        <div>
          <div className="grid pt-3">
            <label htmlFor="username" className="text-white text-3xl pl-4 pb-2">
              name
            </label>
            <input
              type="text"
              id="username"
              className="rounded-full h-[61px] text-3xl"
              required
            />
          </div>
          <div className="grid pt-3">
            <label
              htmlFor="graduatingYear"
              className="text-white text-3xl pl-4 pb-2"
            >
              graduating year
            </label>
            <input
              type="number"
              min="2023"
              max="2099"
              step="1"
              id="graduatingYear"
              className="rounded-full h-[61px] text-3xl"
              required
            />
          </div>
          <div className="grid pt-3">
            <label htmlFor="major" className="text-white text-3xl pl-4 pb-2">
              major
            </label>
            <input
              type="text"
              id="major"
              className="rounded-full h-[61px] text-3xl"
              required
            />
          </div>
          <div className="grid pt-3">
            <label htmlFor="phone" className="text-white text-3xl pl-4 pb-2">
              phone
            </label>
            <input
              type="tel"
              id="phone"
              className="rounded-full h-[61px] text-3xl"
              required
            />
          </div>
        </div>
        <div>
          <div className="grid pt-3">
            <label htmlFor="email" className="text-white text-3xl pl-4 pb-2">
              email
            </label>
            <input
              type="email"
              id="email"
              className="rounded-full h-[61px] text-3xl"
              placeholder="netid@ucr.edu"
              required
            />
          </div>
          <div className="grid pt-3">
            <label htmlFor="password" className="text-white text-3xl pl-4 pb-2">
              password
            </label>
            <input
              type="password"
              id="password"
              className="rounded-full h-[61px] text-3xl"
              required
            />
          </div>
          <div className="grid pt-3">
            <label
              htmlFor="confirmPassword"
              className="text-white text-3xl pl-4 pb-2"
            >
              confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="rounded-full h-[61px] text-3xl"
              required
            />
          </div>
          <div className="register-div pt-10 grid grid-cols-2">
            <button
              className="text-white bg-acm-blue rounded-3xl w-12/12"
              type="submit"
            >
              Sign Up
            </button>
            <div className="text-center text-white">
              <span>already a member?</span>
              <br></br>
              <a>sign in</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
