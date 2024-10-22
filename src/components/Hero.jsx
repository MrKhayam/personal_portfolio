import React from 'react'

const Hero = () => {
  return (
    <>
          <div className="hero w-full flex items-center justify-center flex-col gap-3">
              <h1 className='font-[Charley] text-white text-6xl md:text-9xl'>KHAYAM</h1>
              <div className="w-[300px] flex items-center overflow-hidden justify-center rounded-xl mx-auto h-[400px] bg-white md:hidden">
                  <img className='w-[100%] h-full rounded-xl' src="/dp.PNG" alt="" />
              </div>
          </div> 
    </>
  )
}

export default Hero
