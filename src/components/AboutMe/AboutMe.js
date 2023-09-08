import React from "react";
import samiul from "../../Images/samiul.png";
import { FaLinkedin, FaGithub, FaPhoneSquareAlt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              data-aos="fade-right"
              data-aos-offset="350"
              data-aos-easing="ease-in-sine"
              src={samiul}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div
              data-aos="fade-left"
              data-aos-offset="350"
              data-aos-easing="ease-in-sine"
            >
              <h1 className="text-5xl font-bold">Samiul Islam Talukdar</h1>
              <p className="py-6">
                I am a React JS developer, I recently completed my graduation on
                Computer Science Engineering from Southeast University. I have
                the Skills in developing Frontend and Backend web applications.
                I have done some projects on React js and MERN Stack technology.
                I have skills of working team-wise. Front-end: React JS, ES6,
                HTML, CSS, Bootstrap, Tailwind CSS Back-end: Node JS, Express
                JS, MongoDB, MySql
              </p>
              <div className="flex text-4xl font-bold">
                <a
                  className="mr-4 hover:text-sky-800 "
                  href="https://www.linkedin.com/in/samiul-it/"
                >
                  <FaLinkedin></FaLinkedin>
                </a>
                <a
                  className="hover:text-sky-800 mr-4"
                  href="https://github.com/samiul1998"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
