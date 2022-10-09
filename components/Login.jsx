import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <form className=" bg-acm-black w-11/12 rounded-3xl flex justify-center flex-col items-center">
      <div className="w-10/12 flex justify-center items-top flex-col py-3">
        <label htmlFor="email" className="text-white text-4xl p-2">
          email
        </label>
        <input
          type="email"
          id="email"
          className="rounded-full text-3xl p-3"
          placeholder="netid@ucr.edu"
        />
      </div>
      <div className="w-10/12 flex justify-center items-top flex-col py-3">
        <label htmlFor="password" className="text-white text-4xl p-2">
          password
        </label>
        <input
          type="password"
          id="password"
          className="rounded-full text-3xl p-3"
          placeholder="password"
        />
      </div>
      <div className="w-10/12 flex justify-between items-center py-3">
        <button
          className="text-white bg-acm-blue rounded-full w-5/12 text-4xl p-3"
          type="submit"
        >
          sign in
        </button>
        <Link href="/register" passHref>
          <button
            className="text-black bg-white rounded-full w-5/12 text-4xl p-3"
            type="submit"
          >
            sign up
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Login;
