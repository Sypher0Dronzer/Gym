import React from "react";
import heroPic from "../assets/heromuscle.png";
import AvatarStack from "./AvatarStack";
import StatPill from "./StatPill";

import { FaFireFlameCurved, FaPersonRunning } from "react-icons/fa6";
import { BiDumbbell } from "react-icons/bi";
import { BsFillStopwatchFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="h-screen ">
      <div className="maxWidthForSections h-full relative overflow-hidden  text-text-white pt-14">
        <h1 className="hero-header mt-6">
          Sculpt <span className="text-text-dark">your</span> body
        </h1>
        <h1 className="hero-header">
          Elevate <span className="text-text-dark">your</span> Spirit
        </h1>
        <img
          src={heroPic}
          alt="Company Logo"
          className="absolute top-36 left-1/2 -translate-x-1/2  h-[87%] z-10"
        />
        <div className="relative  h-full">
          <span className="size-[40vw] -top-5 bg-[radial-gradient(circle,#5D7110_0%,#ffffff00_70%)]  left-1/2 -translate-x-1/2   absolute rounded-full"/>

          <AvatarStack pos={"absolute left-[5%] top-[55%]"} />
          <button className="absolute btn btn-primary right-[5%] top-[55%]">
            Start Now &gt;&gt;
          </button>
          <div className="[writing-mode:vertical-rl] [text-orientation:upright] font-semibold absolute left-[10%] top-[25%] -translate-y-1/2 uppercase   text-3xl text-text-white/80 font-zalando tracking-widest">
            Begin
          </div>
          <div className="[writing-mode:vertical-rl] [text-orientation:upright] font-semibold absolute right-[10%] top-[25%] -translate-y-1/2 uppercase   text-3xl text-text-white/80 font-zalando tracking-widest">
            Journey
          </div>

          <StatPill
            position={"absolute top-[5%] left-[25%] -rotate-45"}
            icon={BsFillStopwatchFill}

            name={"Hours"}
            count={1.5}
          />

          <StatPill
            position={"absolute top-[5%] right-[25%] rotate-45"}
                        icon={FaPersonRunning}

            name={"Poses"}
            count={20}
          />

          <StatPill
            position={"absolute top-[42%] left-[22%] -rotate-45"}
            icon={FaFireFlameCurved}
            name={"Kcal"}
            count={550}
          />

          <StatPill
            position={"absolute top-[42%] right-[22%] rotate-45"}
            icon={BiDumbbell}
            name={"Sets"}
            count={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
