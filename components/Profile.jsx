import React from "react";

const Profile = ({ name, major, classOf, netId, email, points }) => {
  return (
    <div className="grid grid-cols-2 w-[450px] p-[142px]">
      <div>
        <h1 className="text-[36px] h-fit w-fit font-bold">name:</h1>
        <h1 className="text-[30px] h-min w-[370px] pb-[32px] 30">{name}</h1>
      </div>
      <div className="pl-[300px]">
        <h1 className="text-[36px] h-fit w-fit font-bold">netid:</h1>
        <h1 className="text-[30px] h-min w-[370px] pb-[32px] 30">{netId}</h1>
      </div>

      <div>
        <h1 className="text-[36px] h-fit w-fit font-bold">major:</h1>
        <h1 className="text-[30px] h-min w-[370px] pb-[32px] 30">{major}</h1>
      </div>
      <div className="pl-[300px]">
        <h1 className="text-[36px] h-fit w-fit font-bold">email:</h1>
        <h1 className="text-[30px] h-min w-[370px] pb-[32px] 30">{email}</h1>
      </div>

      <div>
        <h1 className="text-[36px] h-fit w-max font-bold">class of:</h1>
        <h1 className="text-[30px] h-min w-[370px] pb-[32px] 30">{classOf}</h1>
      </div>
      <div className="pl-[300px]">
        <h1 className="text-[36px] h-fit w-fit font-bold">points:</h1>
        <h1 className="text-[30px] h-min w-[370px] pb-[32px] 30">{points}</h1>
      </div>

      <button class="h-[94px] w-[359px] px-6 m-2 text-[36px] font-bold text-acm-black transition-colors duration-150 bg-[#C693EA] rounded-lg focus:shadow-outline hover:bg-indigo-500">
        edit profile
      </button>
    </div>
  );
};

export default Profile;
