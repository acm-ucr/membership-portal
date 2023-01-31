import React, { useState, useEffect } from "react";
import Announcement from "./Announcement";
import axios from "axios";

const Announcements = () => {
  const [announcementsDB, setAnnouncements] = useState([]);

  const colorMappings = {
    social: "bg-acm-green",
    "professional development": "bg-acm-purple",
    "technical workshop": "bg-acm-blue",
  };

  const colorMappingsText = {
    social: "text-acm-green",
    "professional development": "text-acm-purple",
    "technical workshop": "text-acm-blue",
  };

  const numToMonth = {
    1: "january ",
    2: "february ",
    3: "march ",
    4: "april ",
    5: "may ",
    6: "june ",
    7: "july ",
    8: "august",
    9: "september",
    10: "october",
    11: "november",
    12: "december",
  };

  useEffect(() => {
    axios
      .get("/api/get5Announcements")
      .then((response) => {
        setAnnouncements(response.data);
        console.log(announcementsDB[0].data.type);
        console.log(announcementsDB[1].data.type);
        console.log(announcementsDB[2].data.type);
        console.log(announcementsDB[3].data.type);
        console.log(announcementsDB[4].data.type);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-11/12 flex justify-center items-center flex-col bg-acm-black rounded-3xl content-start">
        <div className="w-11/12 felx justify-start">
          <p className="inline-block rounded-full text-3xl font-semibold p-1 px-4 w-fit mx-4 mt-4 mb-4 border-l-4 border-acm-black bg-acm-white text-acm-black board">
            announcements
          </p>
        </div>
        {announcementsDB.map((a) => {
          const [month, date, year] = new Date()
            .toLocaleDateString(a.data.time.seconds)
            .split("/");
          const dateString = numToMonth[month] + " " + date + " " + year;

          const newDate = new Date(a.data.time.seconds);
          return (
            <Announcement
              key={a.title}
              title={a.title}
              location={a.data.location}
              background={colorMappings[a.data.type]}
              text={colorMappingsText[a.data.type]}
              date={dateString}
              time={newDate.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Announcements;
