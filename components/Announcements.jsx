import React from "react";
import Announcement from "./Announcement";

const announcements = [
  {
    title: "lockpicking social",
    date: "janruary, 2022 (wednesday)",
    time: "9 am",
    location: "wch 127",
    background: "bg-acm-green",
    text: "text-acm-green",
  },

  {
    title: "lockpicking social",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
    background: "bg-acm-purple",
    text: "text-acm-purple",
  },
  {
    title: "lockpicking social",
    date: "janruary, 2022 (wednesday)",
    time: "9 am",
    location: "wch 127",
    background: "bg-acm-green",
    text: "text-acm-green",
  },

  {
    title: "lockpicking social",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
    background: "bg-acm-purple",
    text: "text-acm-purple",
  },
  {
    title: "lockpicking social",
    date: "janruary, 2022 (wednesday)",
    time: "9 am",
    location: "wch 127",
    background: "bg-acm-green",
    text: "text-acm-green",
  },

  {
    title: "lockpicking social",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
    background: "bg-acm-purple",
    text: "text-acm-purple",
  },
];

const top5 = announcements.slice(0, 5);

const Announcements = () => {
  return (
    <div className="flex justify-center">
      <div className="w-11/12 flex justify-center items-center flex-col bg-acm-black rounded-3xl">
        <div className="w-11/12 felx justify-start">
        <p className = "inline-block  py-2 px-3 rounded-full text-3xl font-semibold mb-3 mt-6 border-l-4 border-acm-black bg-acm-white text-acm-black board">announcements</p></div>
        {top5.map((announcement, index) => (
          <Announcement
            key={index}
            title={announcement.title}
            date={announcement.date}
            location={announcement.location}
            time={announcement.time}
            background={announcement.background}
            text={announcement.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Announcements;
