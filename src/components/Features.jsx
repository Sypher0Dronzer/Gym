import React from "react";
import {
  FiUserCheck,
  FiTrendingUp,
  FiStar,
  FiUsers,
  FiActivity,
} from "react-icons/fi";
import { BiCrown } from "react-icons/bi";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { IoIosNutrition } from "react-icons/io";

const features = [
  {
    feature: "Nutrition Guidance",
    description:
      "Personalized meal plans and expert advice to fuel your workouts.",
    icon: IoIosNutrition,
  },
  {
    feature: "Expert Trainers",
    description:
      "Certified trainers dedicated to helping you reach your goals.",
    icon: FiUserCheck,
  },
  {
    feature: "Progress Tracking",
    description:
      "Track your fitness journey with detailed analytics and reports.",
    icon: FiTrendingUp,
  },
  {
    feature: "Premium Membership",
    description: "Exclusive access to all facilities and special classes.",
    icon: BiCrown,
  },
  {
    feature: "Community Support",
    description: "Join a supportive community to stay motivated every day.",
    icon: FiUsers,
  },
  {
    feature: "Next-Level Fitness Space",
    description: "State-of-the-art gym equipment and spacious workout areas.",
    icon: MdOutlineFitnessCenter,
  },
];

const Features = () => {
  return (
    <div id="features" className="maxWidthForSections py-16 ">
      <h1 className="section-header text-white">Inspired to</h1>
      <h1 className="section-header text-lime">Inspire Your Best Self</h1>
      <p className="text-sm text-text-white/80 font-light text-center tracking-wider mt-1">
        We are your partner in Acvieving A Healthier, Stronger and More
        Confident YOU
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 mt-16 gap-4 gap-y-10 ">
        {features.map(({ feature, description, icon}, idx) => {
          const Icon=icon
          return(
          <div
            key={idx}
            className={`p-6 border rounded-2xl relative text-center
      ${
        idx % 2 === 0
          ? "bg-blackbg border-olive text-lime shadow-[0_4px_10px_rgb(87_102_9_/_0.4)]"
          : "bg-lime/90 border-olive text-blackbg shadow-[0_4px_10px_rgb(177_211_50_/_0.3)]"
      }
    `}
          >
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full
        ${
          idx % 2 === 0
            ? "bg-lime text-blackbg shadow-md shadow-[rgba(177,211,50,0.5)]"
            : "bg-blackbg text-lime border-1 border-lime shadow-sm shadow-[rgba(177,211,50,0.3)]"
        }
      `}
            >
              <Icon className="w-7 h-7" />
            </div>
            <h3 className="font-semibold text-xl mb-2">{feature}</h3>
            <p className="text-sm   ">
              {description}
            </p>
          </div>
        )})}
      </div>
    </div>
  );
};

export default Features;
