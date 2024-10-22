import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen border border-black bg-black">
              <Navbar />
              <Hero />
      </div>
    </>
  );
};

export default Home;
