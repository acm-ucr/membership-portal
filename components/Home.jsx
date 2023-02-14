import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Home = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    name: "",
    start: "",
    points: 0,
  });

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState === null) {
        router.push("/");
      } else {
        console.log(currentState.displayName);
        axios
          .post("/api/profile/getInfo", { uid: currentState.uid })
          .then((response) => {
            const data = response.data.data;
            console.log(data);
            const date = new Date(data.start.seconds * 1000);
            data.start = date.getFullYear();
            setUserInfo({ ...data, name: currentState.displayName });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-10/12 mb-12">
        <div className="mb-4">
          <p className="flex text-center text-5xl md:text-6xl text-black font-bold">
            welcome‚ {userInfo.name}
          </p>
        </div>
        <div>
          <p className="flex text-center text-3xl text-acm-gray font-acm ">
            member since {userInfo.start} | {userInfo.points} points
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
