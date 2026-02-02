import React from "react";

const StatPill = ({ icon, name, count ,position }) => {
  const Icon=icon
  return (
    <div className={ ` ${position} hidden sm:block -z-1 bg-linear-to-b  from-text-dark to-blackbg/20 flex flex-col items-center w-fit px-4 py-2  rounded-2xl text-center`}>

        <Icon className="size-10 text-lime" />
        <p className="font-thin">{name}</p>
        <p className="font-semibold text-lg ">{count}</p>
    </div>
  );
};

export default StatPill;
