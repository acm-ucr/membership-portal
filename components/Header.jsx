const Header = ({ title, color }) => {
  return (
    <div
      className={`w-full p-2 font-lexend font-semibold rounded-lg text-2xl ${color}  text-acm-white`}
    >
      {title}
    </div>
  );
};
export default Header;
