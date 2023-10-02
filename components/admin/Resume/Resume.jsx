const Resume = ({ link, name, date, onClick }) => {
  return (
    <div className="flex flex-col p-2 rounded-xl bg-acm-marine">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-sm font-semibold text-acm-white">{date}</p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={onClick}
          className="w-fit px-3 py-2 font-lexend font-bold text-center text-acm-marine border-2 border-acm-marine text-sm bg-acm-black rounded-full hover:border-acm-white"
        >
          review
        </button>
      </div>
    </div>
  );
};

export default Resume;
