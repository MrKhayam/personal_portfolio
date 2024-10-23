import React from 'react'

const AboutHero = () => {
  return (
    <>
      <div className="text-white hero md:w-[90%] md:p-0 p-3 gap-3 w-[95%] mx-auto justify-center items-center md:items-start md:gap-5 flex flex-col">
        <h1 className='md:text-8xl text-5xl font-["Charley"] text-center'>About Me</h1>
        <h2 className='md:text-3xl text-center text-lg font-light md:w-[70vw] md:text-start'>
          A passionate Fullstack Web Developer, UI/UX Designer, and Graphic
          Designer with a deep focus on delivering impactful digital
          experiences. With my expertise in web development, I craft responsive,
          high-performance websites that merge seamless functionality with
          intuitive design. I take pride in translating ideas into clean code
          and user-friendly interfaces that not only meet but exceed
          expectations.
        </h2>
      </div>
    </>
  );
}

export default AboutHero
