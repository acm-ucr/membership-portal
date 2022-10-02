import React from "react";
import Card from "react-bootstrap/Card";

const Announcement = ({ color, title, date, time, location }) => {
  return (
    <div>
      <Card
        className="w-fit h-fit !border-none !rounded-3xl font-lexend"
        style={{
          backgroundImage: `linear-gradient(to right,
         ${color} 0% 6%,
        black 6% 7.5%,
         white 7.5% 100%)`,
        }}
      >
        <Card.Body className="ml-8 flex-col justify-evenly">
          <p className="text-4xl font-bold text-acm-black">{title}</p>
          <div className="flex mb-2">
            <div
              className={`w-6 h-6 self-center flex-none rounded-full mr-2`}
              style={{ backgroundColor: `${color}` }}
            ></div>
            <div className="text-acm-black text-xl">date: {date}</div>
          </div>
          <div className="flex mb-2">
            <div
              className={`w-6 h-6 self-center flex-none rounded-full mr-2`}
              style={{ backgroundColor: `${color}` }}
            ></div>
            <div className="text-acm-black text-xl">time: {time}</div>
          </div>
          <div className="flex">
            <div
              className={`w-6 h-6 self-center flex-none rounded-full mr-2`}
              style={{ backgroundColor: `${color}` }}
            ></div>
            <div className="text-acm-black text-xl">location: {location}</div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Announcement;
