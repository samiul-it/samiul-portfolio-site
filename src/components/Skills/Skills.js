import React from "react";
import Flip from "react-reveal/Flip";
import { SiFirebase, SiMongodb } from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="mb-5  text-8xl font-bold  lg:flex ">
              <div data-aos="slide-down" data-aos-delay="50">
                <div className="hover:text-sky-800 mr-4">
                  <FaHtml5 />
                </div>
                <div className="hover:text-sky-800 mr-4">
                  <FaCss3 />
                </div>
                <div className="hover:text-sky-800 mr-4">
                  <FaReact />
                </div>
                <div className="hover:text-sky-800 mr-4">
                  <FaNodeJs />
                </div>
                <div className="hover:text-sky-800 mr-4">
                  <SiFirebase />
                </div>
                <div className="hover:text-sky-800 mr-4">
                  <SiMongodb />
                </div>
                <div className="hover:text-sky-800 mr-4">
                  <FaBootstrap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
