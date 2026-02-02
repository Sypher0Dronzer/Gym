import React from "react";
import logo from "../assets/logo.png"

import { FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/yourusername",
  },
  {
    name: "X",
    icon: FaXTwitter,
    link: "https://x.com/yourusername",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/yourusername",
  },
];

const Footer = () => {
  return (
    <div className="bg-offblack py-16">
      <div className="maxWidthForSections grid sm:grid-cols-3 gap-6">
        <div className="text-text-white ">
          <a href="#home" className="flex justify-center w-full items-center gap-1">
                    <img src={logo} alt="LOGO" width={170} height={60} />
                  </a>
          <p className="capitalize mt-4 text-center sm:text-left">
            Your go-to for personalized workouts, meal plans and expert fitness
            advice
          </p>
        </div>

        {/* ------------------follow us ------------------------- */}
        <div className="">
          <p className="text-lime text-center text-lg font-semibold font-zalando">
            Follow Us On
          </p>

          <div className="flex gap-4 justify-center">
            {socials.map((e, idx) => {
              const Icon = e.icon;
              return (
                <div
                  key={idx}
                  className="shadow-sm shadow-lime rounded-xl b
                text-lime
                 hover:bg-lime transition-all duration-200 cursor-pointer hover:text-text-white p-2 mt-6"
                >
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={e.name}
                  >
                    <Icon className="size-7" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------contact ------------------------- */}

        <div className="sm:text-right text-center">
          <p className="text-lime  text-lg font-semibold font-zalando">
            Contact
          </p>

          <p className=" text-text-white mt-4">
            Monday - Sunday
            <br />
            8:00 AM to 9:00 PM
            <br />
            fitfusion@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
