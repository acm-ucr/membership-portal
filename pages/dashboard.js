import React from "react";
import Announcement from "../components/Announcement";
// temporary array until backend

const announcements = [
  {
    title: "lockpicking social",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },

  {
    title: "Ruining Your Christmas",
    date: "december 25, 2022 (wednesday)",
    time: "8 am",
    location: "wch 127",
  },

  {
    title: "web development workshop",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },
  {
    title: "cs day",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },

  {
    title: "7leaves fundraiser",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },

  {
    title: "lockpicking social",
    date: "march 28, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },
  {
    title: "lockpicking social",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },

  {
    title: "lockpicking social",
    date: "janruary, 2022 (wednesday)",
    time: "9 am",
    location: "wch 127",
  },

  {
    title: "lockpicking social",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },
];

const top5 = announcements.slice(0, 5);
const dashboard = () => {
  return (
    <div>
      <div id="AnnouncementsArea"></div>
      {top5.map((announcement) => (
        <Announcement
          key={announcement.title}
          title={announcement.title}
          date={announcement.date}
          location={announcement.location}
          time={announcement.time}
          color="purple"
        />
      ))}
    </div>
  );
};

export default dashboard;
