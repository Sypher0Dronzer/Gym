import React from "react";

import pilaties from "./../assets/pilaties.jpg";
import cardio from "./../assets/cardio.jpg";
import hypertrophy from "./../assets/hypertrophy.jpg";
import squat from "./../assets/squat.jpg";
import yoga from "./../assets/yoga.jpg";
import rtx from "./../assets/rtx.jpg";

const programs = [
  {
    name: "Cardio ", 
    pic: cardio,
  },
  {
    name: "Pilaties",
    pic: pilaties,
  },
  {
    name: "Hypertrophy",
    pic: hypertrophy,
  },
  {
    name: "Yoga",
    pic: yoga,
  },
  {
    name: "TRX Suspension",
    pic: rtx,
  },
  {
    name: "Barbell Basics",
    pic: squat,
  },
];

const Courses = () => {
  return (
    <div id="courses" className="maxWidthForSections py-16">
      <h1 className="section-header text-white">Train Smarter </h1>
      <h1 className="section-header text-lime">Unleash Your Potential</h1>
      <p className="text-sm text-text-white/80 font-light text-center tracking-wider mt-1">
        Unlock your full potential with our expertly designed courses Tailored
        to help you maximize results in less time
      </p>
      <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-4  mt-8">
        {programs.map((pgm, idx) => {
          return (
            <div
              key={idx}
              className="  shadow-sm shadow-olive  rounded-xl overflow-hidden "
            >
              <div
                className=" aspect-square"
              >
                <img src={pgm.pic} className="object-contain h-full" />
              </div>
              <div className="p-4 flex flex-col items-center">
                <h1 className="sm:text-base font-zalando text-lime text-sm font-semibold text-center line-clamp-1">
                  {pgm.name}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
