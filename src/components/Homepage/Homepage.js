import React from "react";
import Background from "../../Images/samiul.png";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";

const Homepage = () => {
  return (
    <div>
      <div data-aos="zoom-in" data-aos-delay="50">
        <div
          className="hero min-h-screen "
          
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content ">
            <div className=" ">
              <h1 className="mb-5 text-5xl lg:text-7xl font-serif		  text-rose-600 font-bold">
                Samiul Islam Talukdar
              </h1>
              <div className="mb-5">
                <div className="mb-5 text-4xl text-yellow-400  ">
                  {
                    <Typewriter
                      options={{
                        strings: [
                          "Web Developer",
                          "Frontend Developer",
                          "MERN Stack Developer",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  }
                </div>
              </div>
              <a
                href="https://drive.google.com/file/d/1rv_Ptfg-xFPyFddhzgQcpgaJOY_UAyLU/view"
                className="btn btn-outline btn-error"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
