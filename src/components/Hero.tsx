
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
  id="hero"
  className=" min-h-screen bg-no-repeat bg-[url(/portfolio-profile-pic.jpg)] bg-cover"
  style={{ backgroundSize: "26%", backgroundPosition: "left 100px top 140px"}} 
>

      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>

        {/* Changes: Adjusted text size and centering */}
        <div className="text-[100px] sm:text-[100px] font-semibold leading-tight flex justify-center items-center text-white">
          <div>
            <p data-aos="zoom-in-up">I'am</p>
            <p data-aos="zoom-in-up">Nadia</p>
            <p data-aos="zoom-in-up">Rajpoot</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
