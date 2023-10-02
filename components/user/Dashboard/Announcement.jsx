import { FaCircle } from "react-icons/fa";

const Announcement = ({
  background,
  details,
  text,
  title,
  date,
  time,
  location,
}) => {
  return (
    <div
      className={`flex justify-end items-center my-3 w-11/12 ${background} border-3 border-black rounded-3xl`}
    >
      <div className="w-11/12 bg-acm-white border-l-4 border-acm-black rounded-r-3xl font-lexend p-2">
        <p className="text-3xl font-semibold mx-2">{title}</p>
        <p className="text-lg mx-2">{details}</p>
        <div className="flex justify-start items-center text-xl">
          <FaCircle
            className={`${text} mx-2 min-h-[7.5px] min-w-[7.5px] w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4`}
          />
          <p className="m-0">
            {date} at {time}
          </p>
        </div>
        <div className="flex justify-start items-center text-xl">
          <FaCircle
            className={`${text} mx-2 min-h-[7.5px] min-w-[7.5px] w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4`}
          />
          <p className="m-0">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
