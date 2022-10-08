import React from "react";

const Home = ({ name, points, year }) => {
  return (
    <div className="ml-12 mt-20">
      <div className="mb-4">
        <h1 className="text-8xl text-black font-bold h-min w-min">welcome‚</h1>
        <h1 className="text-8xl text-black font-bold">{name}</h1>
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
