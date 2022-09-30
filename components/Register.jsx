import React from "react";

const Register = () => {
  return <div className="w-9/12 m-auto">
    <h1 className="pl-5">become a member</h1>
    <form className="register-form bg-acm-red rounded-3xl p-10 grid grid-cols-2 gap-4">
      <div>
        <div className="register-div grid pt-3">
          <label htmlFor="username" className="text-white">name</label>
          <input type="text" id="username" className="rounded-3xl" required/>
        </div>
        <div className="register-div grid pt-3">
          <label htmlFor="graduatingYear" className="text-white">graduating year</label>
          <input type="number" min="2023" max="2099"step="1" id="graduatingYear" className="rounded-3xl" required/>
        </div>
        <div className="register-div grid pt-3">
          <label htmlFor="major" className="text-white">major</label>
          <input type="text" id="major" className="rounded-3xl" required/>
        </div>
        <div className="register-div grid pt-3">
          <label htmlFor="phone" className="text-white">phone</label>
          <input type="tel" id="phone" className="rounded-3xl" required/>
        </div>
      </div>
      <div>
        <div className="register-div grid pt-3">
          <label htmlFor="email" className="text-white">email</label>
          <input type="email" id="email" className="rounded-3xl" required/>
        </div>
        <div className="register-div grid pt-3">
          <label htmlFor="password" className="text-white">password</label>
          <input type="password" id="password" className="rounded-3xl" required/>
        </div>
        <div className="register-div grid pt-3">
          <label htmlFor="confirmPassword" className="text-white">confirm password</label>
          <input type="password" id="confirmPassword" className="rounded-3xl" required/>
        </div>
        <div className="register-div grid pt-3">
          <button className="text-white bg-acm-blue rounded-3xl w-20" type="submit">Sign Up</button>
        </div>
      </div>
       
    </form>
</div>;

};

export default Register;
