import React, { useState } from "react";
import { navText } from "../constants/navbar";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isNav, setIsNav] = useState(false);
  return (
    <>
      <div className="md:w-[90%] w-[95%] mx-auto mt-3 md:mt-5 text-white md:h-[50px] bg-transparent flex items-center justify-between font-['Poppins']">
        <h1 className="text-xl cursor-pointer">
          <NavLink to="/">{navText.home}</NavLink>
        </h1>
        <div className="mid hidden md:flex gap-8 items-center">
          <h1 className="text-xl cursor-pointer">
            <NavLink to="/about">{navText.about}</NavLink>
          </h1>
          <h1 className="text-xl cursor-pointer">{navText.projects}</h1>
        </div>
        <div className="end md:w-[230px] px-2 bg-transparent h-14 border rounded-full hidden md:flex justify-between items-center">
          <h1 className="text-xl cursor-pointer">{navText.contact}</h1>
          <h1 className="bg-white cursor-pointer py-3 px-6 rounded-full text-black">
            {navText.hire}
          </h1>
        </div>
        <div className="menu md:hidden">
          <HiMenuAlt4 onClick={() => setIsNav(true)} size={30} />
        </div>
      </div>

      <div
        className={`w-full overflow-x-hidden transition-all duration-300 h-screen md:hidden fixed flex flex-col items-center ${
          !isNav ? "translate-x-[100%]" : "translate-x-0"
        } bg-black z-20 top-0 `}
      >
        <div className="cross absolute top-5 right-5">
          <IoClose onClick={() => setIsNav(false)} color="white" size={30} />
        </div>
        <div className="flex flex-col w-full p-7 mt-32 gap-3">
          <h1 className="text-white text-5xl font-extrabold">{navText.home}</h1>
          <h1 className="text-white text-5xl font-extrabold">
            {navText.about}
          </h1>
          <h1 className="text-white text-5xl font-extrabold">
            {navText.projects}
          </h1>
          <h1 className="text-white text-5xl font-extrabold">
            {navText.contact}
          </h1>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
