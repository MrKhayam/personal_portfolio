import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <>
      <div className="md:w-[90%] w-[95%] flex items-center fixed bottom-3 md:bottom-6 justify-end md:justify-end h-auto">
        <div className="right transition-all duration-300 hover:scale-110 hover:bg-white group hover:text-black md:w-28 cursor-pointer md:h-28 bg-transparent border flex items-center justify-center rounded-full">
          <GoArrowUpRight className="md:text-7xl transition-all duration-300 text-5xl text-white group-hover:text-black" />
        </div>
      </div>
    </>
  );
};

export default Footer;
