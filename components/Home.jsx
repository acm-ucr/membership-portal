import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  const date = new Date(session.user.start);

  return (
    session && (
      <div className="w-full flex justify-center items-center">
        <div className="w-full mb-12">
          <div className="mb-4">
            <p className="flex text-center text-5xl md:text-6xl text-black font-bold">
              welcome‚ {session.user.name}
            </p>
          </div>
          <div>
            <p className="flex text-center text-3xl text-acm-gray font-acm ">
              member since{" "}
              {date.toLocaleString("en-US", { month: "long" }) +
                " " +
                date.getFullYear()}
              |{session.user.points} points
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Home;
