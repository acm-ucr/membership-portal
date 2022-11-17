import React from "react";
import Link from "next/link";
import { useState, useContext } from "react";
import Snackbar from "./Snackbar";
import axios from "axios";
import RoleContext from "./RoleContext";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const { role, setRole } = useContext(RoleContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z]{3,5}[0-9]{3}@ucr\.edu$/i;
    if (!input.email) {
      setMessage("Email is required!");
      setVisible(true);
    } else if (!regex.test(input.email)) {
      setMessage("Enter valid UCR email!");
      setVisible(true);
    } else if (!input.password) {
      setMessage("Password is required!");
      setVisible(true);
    }
    if (visible) return;

    console.log("ATTEMPTING TO LOGIN");
    axios
      .post("/api/login", input)
      .then((response) => {
        console.log(response);
        setRole("member");
        console.log(role);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Snackbar visible={visible} setVisible={setVisible} message={message} />
      <form
        className=" bg-acm-black w-11/12 rounded-3xl flex justify-center flex-col items-center"
        onSubmit={onSubmitHandler}
      >
        <div className="w-10/12 flex justify-center items-top flex-col py-3">
          <label htmlFor="email" className="text-white text-4xl p-2">
            email
          </label>
          <input
            type="text"
            name="email"
            className="rounded-full text-3xl p-3"
            placeholder="netid@ucr.edu"
            onChange={(e) =>
              setInput({
                ...input,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="w-10/12 flex justify-center items-top flex-col py-3">
          <label htmlFor="password" className="text-white text-4xl p-2">
            password
          </label>
          <input
            type="password"
            name="password"
            className="rounded-full text-3xl p-3"
            placeholder="password"
            onChange={(e) =>
              setInput({
                ...input,
                [e.target.name]: e.target.value,
              })
            }
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
              type="button"
            >
              sign up
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
