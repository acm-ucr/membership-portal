import React from "react";
import {
  setPersistence,
  browserLocalPersistence,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const login = () => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      return signInWithPopup(auth, new GoogleAuthProvider())
        .then(() => {
          router.push("/user/dashboard");
        })
        .catch((error) => {
          router.push("/");
        });
    });
  };

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
