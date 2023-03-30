import React, { useContext } from "react";
import {
  setPersistence,
  browserLocalPersistence,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import UserContext from "./UserContext";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const fetchUser = async (result) => {
    const response = await axios.post("/api/profile/getInfo", {
      uid: result.user.uid,
    });
    const data = response.data.data;
    const date = new Date(data.start.seconds * 1000);
    data.start = date.getFullYear();
    setUser({
      ...data,
      name: result.user.displayName,
      uid: result.user.uid,
      email: result.user.email,
    });
  };

  const signin = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        fetchUser(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = () => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        signin();
        router.push("/dashboard");
      })
      .catch((error) => {
        router.push("/");
      });
  };

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
