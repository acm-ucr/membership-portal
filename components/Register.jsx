import React from "react";

const Register = () => {
  return (
    <div className="max-w-screen-2xl max-h-620 m-auto font-bold">
      <h1 className="pl-5 font-bold">become a member</h1>
      <form className="register-form bg-acm-black rounded-3xl p-10 grid grid-cols-2 gap-4">
        <div>
          <div className="register-div grid pt-3">
            <label htmlFor="username" className="text-white pl-4 pb-2">
              name
            </label>
            <input type="text" id="username" className="rounded-3xl" required />
          </div>
          <div className="register-div grid pt-3">
            <label htmlFor="graduatingYear" className="text-white pl-4 pb-2">
              graduating year
            </label>
            <input
              type="number"
              min="2023"
              max="2099"
              step="1"
              id="graduatingYear"
              className="rounded-3xl"
              required
            />
          </div>
          <div className="register-div grid pt-3">
            <label htmlFor="major" className="text-white pl-4 pb-2">
              major
            </label>
            <input type="text" id="major" className="rounded-3xl" required />
          </div>
          <div className="register-div grid pt-3">
            <label htmlFor="phone" className="text-white pl-4 pb-2">
              phone
            </label>
            <input type="tel" id="phone" className="rounded-3xl" required />
          </div>
        </div>
        <div>
          <div className="register-div grid pt-3">
            <label htmlFor="email" className="text-white pl-4 pb-2">
              email
            </label>
            <input
              type="email"
              id="email"
              className="rounded-3xl"
              placeholder="netid@ucr.edu"
              required
            />
          </div>
          <div className="register-div grid pt-3">
            <label htmlFor="password" className="text-white pl-4 pb-2">
              password
            </label>
            <input
              type="password"
              id="password"
              className="rounded-3xl"
              required
            />
          </div>
          <div className="register-div grid pt-3">
            <label htmlFor="confirmPassword" className="text-white pl-4 pb-2">
              confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="rounded-3xl"
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
