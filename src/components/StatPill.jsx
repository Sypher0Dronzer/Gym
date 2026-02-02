import React from "react";

const StatPill = ({ icon:Icon, name, count ,position }) => {
  return (
    <div className={ ` ${position} bg-linear-to-b  from-text-dark to-blackbg/20 flex flex-col items-center w-fit px-4 py-2  rounded-2xl `}>

        <Icon className="size-10 text-lime" />
        <p className="font-thin">{name}</p>
        <p className="font-semibold text-lg">{count}</p>
    </div>
  );
};

export default StatPill;
