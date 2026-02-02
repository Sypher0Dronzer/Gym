import React, { useState } from "react";
import { IoMenu,IoClose } from "react-icons/io5";
import logo from "../assets/logo.png"
const Navbar = () => {
    const [isNavOpen, setIsOpenNav] = useState(false);

  function toggleNav() {
    setIsOpenNav(!isNavOpen);
  }
  const navLinks = [
    { name: "Courses", href: "#courses" },
    { name: "Features", href: "#features" },
    { name: "Trainers", href: "#trainers" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <div className="px-2 py-3 fixed z-20 top-0 w-full bg-blackbg/50 backdrop-blur-md  text-text-white">

        {/* ---------------------- For mobile 0--------------------- */}
      <div className="maxWidthForSections  sm:hidden flex justify-between items-center">
        {/*logo */}
        <a href="#home" className="flex items-center gap-1">
          <img src={logo} alt="LOGO" width={120} height={60} />
        </a>
        <IoMenu className="size-7" onClick={toggleNav} />

        {/*  Nav Items  */}
        <div
          className={`fixed z-12 left-0 right-0  h-screen w-full top-0 flex justify-end transition-transform duration-300 ${
            isNavOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={toggleNav}
        >
          <div
            className="h-full px-[3vw]  w-2/3 max-w-75 flex flex-col bg-blackbg/90   items-end justify-start py-3 "
            onClick={toggleNav}
          >
            <IoClose
              className={`close-itemMobile  ${
                isNavOpen ? "icon-is-visible" : "icon-is-hidden"
              } hover:text-(--goldtext) size-9 `}
              onClick={toggleNav}
              style={{ "--i-nav": 0.5 } }
            />
            <ul
              className={` flex flex-col items-center gap-y-6 text-lg w-full mt-6`}
            >
              {navLinks.map((item, index) => (
                <li
                  onClick={toggleNav}
                  key={index}
                  className={`nav-itemMobile nav-item ${
                    isNavOpen ? "is-visible" : "is-hidden"
                  }`}
                  style={{ "--i-nav": index + 1 } }
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
              <li
                onClick={toggleNav}
                key={3}
                className={`nav-itemMobile nav-item ${
                  isNavOpen ? "is-visible" : "is-hidden"
                }`}
                style={
                  { "--i-nav": navLinks.length + 1 } 
                }
              >
                <a
                  className="btn btn-primary"
                  target="blank"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li
                onClick={toggleNav}
                key={4}
                className={`nav-itemMobile nav-item ${
                  isNavOpen ? "is-visible" : "is-hidden"
                }`}
                style={
                  { "--i-nav": navLinks.length + 2 } 
                }
              >
                <a
                  className="btn btn-outline"
                  target="blank"
                  href="#"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*  For Desktop Screens */}
      <div className="maxWidthForSections hidden sm:flex  flex justify-between items-center">
        <img src={logo} alt="" width={140}  />

        {/* NavItems */}
        <div className="flex items-center">
          <ul className="flex font-semibold  uppercase gap-3 ">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-lime transition-all duration-300"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-primary">Contact Us</button>
          <button className="btn btn-outline">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
