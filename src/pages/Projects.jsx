import React from 'react'
import ProjectsHero from '../components/ProjectsHero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-black border border-black">
        <Navbar />
        <ProjectsHero />
        <div className="w-full h-auto flex items-center justify-center">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Projects
