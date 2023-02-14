import React from "react";

const CustomEvent = ({ title, event }) => {
  return (
    <div className="font-lexend p-1">
      <p className="inline whitespace-nowrap">
        {title}
        <br />
        {event.location}
        &nbsp; - &nbsp;
        {event.start.toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
};

export default CustomEvent;
