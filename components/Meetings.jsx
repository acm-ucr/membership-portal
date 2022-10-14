import React from "react";
import Meeting from "./Meeting";
import MeetingsData from "./MeetingsData";

const Meetings = () => {
  const data = MeetingsData;
  if (data == 0) {
    return (
      <div className="flex flex-col font-lexend border-black border-2 rounded-3xl min-h-fit h-2/6">
        <div className="flex bg-black text-white text-2xl font-semibold rounded-3xl p-1 px-4 w-fit mx-4 mt-4 mb-4">
          scheduled meetings
        </div>
        <div className="flex font-lexend justify-center items-center py-16">
          {" "}
          currently no scheduled meetings{" "}
        </div>
      </div>
    );
  }
  {
    return (
      <div className="flex flex-col font-lexend border-black border-2 rounded-3xl">
        <div className="flex bg-black text-white text-2xl font-semibold rounded-3xl p-1 px-4 w-fit mx-4 mt-4 mb-4">
          scheduled meetings
        </div>
        {MeetingsData.map((meeting, value) => (
          <Meeting
            key={value}
            title={meeting.title}
            date={meeting.date}
            time={meeting.time}
            location={meeting.location}
            backgroundColor={meeting.backgroundColor}
          />
        ))}
      </div>
    );
  }
};

export default Meetings;
