import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Home = ({ name, points, year }) => {
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
        axios
          .post("/api/profile/getInfo", { email: currentState.email })
          .then((response) => {
            const data = response.data;
            const date = new Date(data.start.seconds * 1000);
            data.start = date.getFullYear();
            setUserInfo(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }, []);

  return (
    <div className="ml-12">
      <div className="mb-4">
        <h1 className="text-8xl text-black font-bold h-min w-min">welcome‚</h1>
        <h1 className="text-8xl text-black font-bold">{userInfo.name}</h1>
      </div>

      <div>
        <h5 className="text-4xl text-acm-gray font-acm ">
          member since {userInfo.start} | {userInfo.points} points
        </h5>
      </div>
    </div>
  );
};

export default Home;
