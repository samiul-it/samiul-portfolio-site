import React from "react";
import Background from "../../Images/samiul.png";
import Typewriter from "typewriter-effect";


const Homepage = () => {
  return (
    <div>
      <div
        class="hero min-h-screen"
      >
        <div class="hero-overlay bg-opacity-80"></div>
        <div class="hero-content text-center text-neutral-content ">
          <div class="max-w-lg ">
            <h1 class="mb-5 text-5xl text-orange-600  font-bold">
              Samiul Islam Talukdar
            </h1>
            <p class="mb-5">
              <h1 class="mb-5 text-4xl text-yellow-400  ">
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
              </h1>
            </p>
            <a
              href="https://drive.google.com/file/d/1rv_Ptfg-xFPyFddhzgQcpgaJOY_UAyLU/view"
              class="btn btn-primary "
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
