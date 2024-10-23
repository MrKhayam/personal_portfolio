import React from 'react'
import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutHero'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
          <div className="w-full min-h-screen bg-black border border-black">
              <Navbar />
              <AboutHero />
              <div className="w-full h-auto flex items-center justify-center">
                  <Footer />
              </div>
      </div>
    </>
  )
}

export default About
