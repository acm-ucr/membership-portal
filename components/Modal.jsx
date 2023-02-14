import React from "react";
import { FaCircle } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

const ListElement = ({ color, innerText }) => {
  return (
    <div className="flex items-center p-2">
      <FaCircle className={`${color} mr-2`} />
      <div className="md:text-2xl text-lg"> {innerText} </div>
    </div>
  );
};

const Modal = ({ event, setState }) => {
  if (!event) return event && <div>No Event</div>;
  const startTime = event.start.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
  const endTime = event.end.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div
      className={`font-lexend fixed top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 w-[75vw] md:w-[50vw] bg-acm-white border-4 ${event.border} rounded-2xl z-10`}
    >
      <div className={`flex justify-between items-center`}>
        <p
          className={`text-acm-black ${event.color} rounded-full m-0 font-bold py-2 md:py-3 px-3 md:px-4 text-lg md:text-3xl`}
        >
          {event.title}
        </p>
        <button className="p-0 m-2 text-5xl" onClick={() => setState(null)}>
          <AiOutlinePlus className="text-acm-black rotate-45 p-0 m-0 hover:text-acm-red" />
        </button>
      </div>
      {event.zoom == 0
        ? [
            event.start.toLocaleDateString(),
            `${startTime} - ${endTime}`,
            event.location,
          ].map((line, index) => (
            <ListElement key={index} color={event.textColor} innerText={line} />
          ))
        : [
            event.start.toLocaleDateString(),
            `${startTime} - ${endTime}`,
            <Link key={self} href={event.zoom} class="break-all">
              {event.zoom}
            </Link>,
          ].map((line, index) => (
            <ListElement key={index} color={event.textColor} innerText={line} />
          ))}
      <div className="md:text-2xl text-lg p-2"> {event.description} </div>
    </div>
  );
};

export default Modal;
