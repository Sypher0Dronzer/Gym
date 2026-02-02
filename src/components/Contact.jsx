import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { HiCheck } from "react-icons/hi2";

const Contact = () => {
  const email = "fusionfitness@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="contact" className="py-12  text-text-white maxWidthForSections">
      <div className="border border-lime shadow-md shadow-lime/40 rounded-2xl  bg-lime ">
        <div className="px-6 text-lg  relative py-8">
          <h1 className="text-blackbg font-semibold [word-spacing:8px] text-3xl text-center font-zalando">
            Connect Engage Transform
          </h1>

          <p className="text-blackbg/90 sm:text-2xl text-lg text-center mt-4">
            Schedule a call or email us at
          </p>

          <div className="mt-4 flex justify-center">
            <div className="flex items-center border border-text-dark rounded-lg overflow-hidden bg-blackbg">
              <span className="px-4 py-2 text-text-white sm:text-base text-xs select-all">
                {email}
              </span>

              <div className="w-px bg-text-dark h-full" />

              <button
                onClick={handleCopy}
                className={`h-full py-2 px-4 transition hover:opacity-80
                  ${
                    copied
                      ? "bg-lime text-blackbg"
                      : "text-text-white"
                  }`}
                aria-label="Copy email"
              >
                {copied ? (
                  <HiCheck className="size-4" />
                ) : (
                  <FaRegCopy className="size-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
