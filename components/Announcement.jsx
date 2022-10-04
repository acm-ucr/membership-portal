import React from "react";
import Card from "react-bootstrap/Card";

const announcements = [
  {
    title: "lockpicking social",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },

  {
    title: "general meeting",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
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
    date: "october 26, 2022 (wednesday)",
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
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },

  {
    title: "lockpicking social",
    date: "october 26, 2022 (wednesday)",
    time: "11 am",
    location: "wch 127",
  },
];

const Announcement = ({ color, title, date, time, location }) => {
  const top5 = announcements.slice(0, 5);

  return (
    <div>
      {top5.map((announcement) => {
        return (
          <div key={announcement.title}>
            <Card
              className="w-[40.8vw] h-fit !border-none !rounded-3xl font-lexend"
              style={{
                backgroundImage: `linear-gradient(to right,
             ${color} 0% 6%,
            black 6% 7.5%,
             white 7.5% 100%)`,
              }}
            >
              <Card.Body className="ml-8 flex-col justify-evenly">
                <p className="text-4xl font-bold text-acm-black">
                  {announcement.title}
                </p>
                <div className="flex mb-2">
                  <div
                    className={`w-6 h-6 self-center flex-none rounded-full mr-2`}
                    style={{ backgroundColor: `${color}` }}
                  ></div>
                  <div className="text-acm-black text-xl">
                    date: {announcement.date}
                  </div>
                </div>
                <div className="flex mb-2">
                  <div
                    className={`w-6 h-6 self-center flex-none rounded-full mr-2`}
                    style={{ backgroundColor: `${color}` }}
                  ></div>
                  <div className="text-acm-black text-xl">
                    time: {announcement.time}
                  </div>
                </div>
                <div className="flex">
                  <div
                    className={`w-6 h-6 self-center flex-none rounded-full mr-2`}
                    style={{ backgroundColor: `${color}` }}
                  ></div>
                  <div className="text-acm-black text-xl">
                    location: {announcement.location}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Announcement;
