import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


const ProjectCard = ({projectNo, pImg, projectPara}) => {
  return (
    <>
      <div className="w-[300px] min-h-[400px] bg-white rounded-lg cursor-pointer p-4">
        <div className="w-full h-auto p-1 flex justify-between items-center">
          <h1>Project {projectNo}</h1>
          <GoArrowUpRight size={20} />
        </div>
        <div className="image w-full h-[170px] bg-black overflow-hidden shadow-xl rounded-lg mt-3">
          <img className='w-full h-full object-cover' src={pImg} alt="" />
        </div>
        <p className="mt-3">{projectPara}</p>
        <div className="w-full flex flex-col gap-2 mt-3">
          <button className='w-full py-3 bg-black rounded-full text-white'>View Project</button>
          <button className='w-full py-3 bg-black rounded-full text-white'>Github</button>
        </div>
      </div>
    </>
  );
}

export default ProjectCard
