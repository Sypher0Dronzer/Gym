import React from "react";
import heroPic from "../assets/heromuscle.png";
import AvatarStack from "./AvatarStack";
import StatPill from "./StatPill";

import { FaFireFlameCurved, FaPersonRunning } from "react-icons/fa6";
import { BiDumbbell } from "react-icons/bi";
import { BsFillStopwatchFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen ">
      <div className="maxWidthForSections h-full relative overflow-hidden  text-text-white pt-14">
        <h1 className="hero-header mt-6">
          Sculpt <span className="text-lime">your</span> body
        </h1>
        <h1 className="hero-header">
          Elevate <span className="text-lime">your</span> Spirit
        </h1>
       
        <div className="relative h-full mt-8 sm:mt-4">

          {/* --------------------blob------------ */}
          <span className="size-[40vmax] min-w-[370px] -z-5 top-0 bg-[radial-gradient(circle,#5D7110_0%,#ffffff00_70%)]  left-1/2 -translate-x-1/2   absolute rounded-full"/>

          <AvatarStack pos={"absolute left-[5%] bottom-[5%]"} />
          {/* <button className="absolute btn btn-primary right-[5%] bottom-[5%]">
            Start Now &gt;&gt;
          </button> */}

          <div className="[writing-mode:vertical-rl] [text-orientation:upright] font-semibold absolute left-[5%] top-[50%] -translate-y-1/2 uppercase   text-4xl md:block hidden text-text-white/80 font-zalando tracking-widest">
            Begin
          </div>
          <div className="[writing-mode:vertical-rl] [text-orientation:upright] font-semibold absolute right-[5%] top-[50%] -translate-y-1/2 uppercase   text-4xl md:block hidden text-text-white/80 font-zalando tracking-widest">
            Journey
          </div>

          <StatPill
            position={"absolute sm:top-[20%] top-0 left-1/5 sm:left-[25%] -rotate-45"}
            icon={BsFillStopwatchFill}

            name={"Hours"}
            count={1.5}
          />

          <StatPill
            position={"absolute sm:top-[20%] top-0 right-1/5 sm:right-[25%] rotate-45"}
                        icon={FaPersonRunning}

            name={"Poses"}
            count={20}
          />

          <StatPill
            position={"absolute bottom-[20%] left-[17%] -rotate-45"}
            icon={FaFireFlameCurved}
            name={"Kcal"}
            count={550}
          />

          <StatPill
            position={"absolute bottom-[20%] right-[17%] rotate-45"}
            icon={BiDumbbell}
            name={"Sets"}
            count={5}
          />
         <img
          src={heroPic}
          alt="Company Logo"
          className="sm:max-w-[500px] max-w-[250px] mx-auto w-full "
          />
          </div>

          <h1 className="font-zalando md:hidden text-center text-5xl mt-6">
          Begin <span className="text-lime">your</span> Journey
        </h1>
       
      </div>
    </div>
  );
};

export default Hero;
