import React from 'react'
import { navText } from '../constants/navbar'
import { HiMenuAlt4 } from "react-icons/hi";


const Navbar = () => {
  return (
    <>
          <div className="md:w-[90%] w-[95%] mx-auto mt-5 text-white md:h-[50px] bg-transparent flex items-center justify-between font-['Poppins']">
              <h1 className='text-xl cursor-pointer'>{navText.home}</h1>
              <div className="mid hidden md:flex gap-8 items-center">
                  <h1 className='text-xl cursor-pointer'>{navText.about}</h1>
                  <h1 className='text-xl cursor-pointer'>{navText.projects}</h1>
              </div>
              <div className="end md:w-[230px] px-2 bg-transparent h-14 border rounded-full hidden md:flex justify-between items-center">
                  <h1 className='text-xl cursor-pointer'>{ navText.contact }</h1>
                  <h1 className='bg-white cursor-pointer py-3 px-6 rounded-full text-black'>{ navText.hire }</h1>
              </div>
              <div className="menu">
                  <HiMenuAlt4 size={30} />
              </div>
      </div>
    </>
  )
}

export default Navbar
