import React, { useState, useEffect } from "react";
import Announcement from "./Announcement";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

// const announcements = [
//   {
//     title: "lockpicking social",
//     date: "janruary, 2022 (wednesday)",
//     time: "9 am",
//     location: "wch 127",
//     background: "bg-acm-green",
//     text: "text-acm-green",
//   },

//   {
//     title: "lockpicking social",
//     date: "october 26, 2022 (wednesday)",
//     time: "11 am",
//     location: "wch 127",
//     background: "bg-acm-purple",
//     text: "text-acm-purple",
//   },
//   {
//     title: "lockpicking social",
//     date: "janruary, 2022 (wednesday)",
//     time: "9 am",
//     location: "wch 127",
//     background: "bg-acm-green",
//     text: "text-acm-green",
//   },

//   {
//     title: "lockpicking social",
//     date: "october 26, 2022 (wednesday)",
//     time: "11 am",
//     location: "wch 127",
//     background: "bg-acm-purple",
//     text: "text-acm-purple",
//   },
//   {
//     title: "lockpicking social",
//     date: "janruary, 2022 (wednesday)",
//     time: "9 am",
//     location: "wch 127",
//     background: "bg-acm-green",
//     text: "text-acm-green",
//   },

//   {
//     title: "lockpicking social",
//     date: "october 26, 2022 (wednesday)",
//     time: "11 am",
//     location: "wch 127",
//     background: "bg-acm-purple",
//     text: "text-acm-purple",
//   },
// ];

// const top5 = announcements.slice(0, 5);

const Announcements = () => {
  const [announcementsDB] = useState([]);
  const announcementsCollectionRef = collection(db, "announcements");

  useEffect(() => {
    const getAnnouncements = async () => {
      const snapshot = await getDocs(announcementsCollectionRef);
      snapshot.forEach((doc) => {
        announcementsDB.push({
          title: doc.id,
          data: doc.data(),
        });
      });

      console.log(announcementsDB);
    };

    getAnnouncements();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-11/12 flex justify-center items-center flex-col bg-acm-black rounded-3xl">
        <div className="w-11/12 felx justify-start">
          <p className="inline-block  py-2 px-3 rounded-full text-3xl font-semibold mb-3 mt-6 border-l-4 border-acm-black bg-acm-white text-acm-black board">
            announcements
          </p>
        </div>
        {announcementsDB.map((a) => {
          return (
            <Announcement
              key={a.id}
              title={a.id}
              location={a.location}
              background="bg-acm-green"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Announcements;
