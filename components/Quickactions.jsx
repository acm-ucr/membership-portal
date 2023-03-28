import React from "react";
import { BiUserCircle, BiCalendar, BiHome } from "react-icons/bi";
import Link from "next/link";
import { GrResources } from "react-icons/gr";
const Quickactions = () => {
  return (
    <div className="flex flex-col font-lexend border-black border-2 rounded-3xl min-h-fit ">
      <div className="inline-block bg-black text-white text-3xl font-semibold rounded-3xl py-2 px-3 w-fit mx-4 mt-4 mb-4">
        Quick Actions
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <Link href="/user/profile">
          <div className="my-2 hover:cursor-pointer w-11/12 rounded-3xl border-2 border-black flex flex-row items-center bg-acm-orange">
            <BiUserCircle className="text-black text-8xl mr-2" />
            <p className="text-black font-lexend font-semibold text-4xl mt-3">
              Profile
            </p>
          </div>
        </Link>
        <Link href="/user/resources">
          <div className="my-2 hover:cursor-pointer w-11/12 rounded-3xl border-2 border-black flex flex-row items-center bg-acm-marine">
            <GrResources className="text-black text-8xl mr-2" />
            <p className="text-black font-lexend font-semibold text-4xl mt-3">
              Resources
            </p>
          </div>
        </Link>
        <Link href="/user/calendar">
          <div className="my-2 hover:cursor-pointer w-11/12 rounded-3xl border-2 border-black flex flex-row items-center bg-acm-red">
            <BiCalendar className="text-black text-8xl mr-2" />
            <p className="text-black font-lexend font-semibold text-4xl mt-3">
              Calendar
            </p>
          </div>
        </Link>
        <Link href="/user/clubroom">
          <div className="my-2 hover:cursor-pointer w-11/12 rounded-3xl border-2 border-black flex flex-row items-center bg-acm-green">
            <BiHome className="text-black text-8xl mr-2" />
            <p className="text-black font-lexend font-semibold text-4xl mt-3">
              Clubroom
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Quickactions;
