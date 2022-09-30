import React from "react";

const Login = () => {
  return (
    <div className="font-bold w-[694px] h-[564px] m-10">
      <form className=" bg-acm-black rounded-[57px] grid">
        <div className="grid pt-3 w-[607px] m-auto">
          <label htmlFor="email" className="text-white pl-4 pb-6 text-4xl">
            email
          </label>
          <input
            type="email"
            id="email"
            className="rounded-full h-[76px] text-3xl"
            placeholder="netid@ucr.edu"
            required
          />
        </div>
        <div className="grid pt-3 w-[607px] m-auto">
          <label htmlFor="password" className="text-white pl-4 pb-6 text-4xl">
            password
          </label>
          <input
            type="password"
            id="password"
            className="rounded-full h-[76px] text-3xl"
            required
          />
        </div>
        <div className="grid grid-cols-2 w-[607px] m-auto py-14">
          <button
            className="text-white bg-acm-blue rounded-full w-[291px] h-[76px] text-4xl"
            type="submit"
          >
            sign in
          </button>
          <button
            className="text-black bg-white rounded-full w-[291px] h-[76px] text-4xl"
            type="submit"
          >
            sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
