import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ name, points, year }) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios
      .get("/api/profile/getInfo")
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ml-12">
      <div className="mb-4">
        <h1 className="text-8xl text-black font-bold h-min w-min">welcome‚</h1>
        <h1 className="text-8xl text-black font-bold">
          {userInfo.name ? userInfo.name : name}
        </h1>
      </div>

      <div>
        <h5 className="text-4xl text-acm-gray font-acm ">
          member since {year} | {points} points
        </h5>
      </div>
    </div>
  );
};

Home.defaultProps = {
  name: "User",
  points: 0,
  year: 2022,
};
export default Home;
