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

const technologies = [
  {
    name: "",
    image: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.png  ",
  },
  {
    name: "",
    image: "https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.png",
  },
  {
    name: "",
    image: "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.png",
  },
  {
    name: "",
    image: "https://www.vectorlogo.zone/logos/javascript/javascript-ar21.png",
  },
  {
    name: "",
    image: "https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.png",
  },
  {
    name: "",
    image: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.png",
  },
  {
    name: "",
    image:
      "https://findlogovector.com/wp-content/uploads/2022/04/mongodb-logo-vector-2022.png",
  },
  {
    name: "",
    image: "https://www.vectorlogo.zone/logos/firebase/firebase-ar21.png",
  },
  {
    name: "",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.png",
  },
  {
    name: "",
    image: "https://www.vectorlogo.zone/logos/github/github-ar21.png",
  },
  {
    name: "",
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*fEyeESs-HxVR7Zlr-fdlvw.png",
  },
];

const Skills = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div
            data-aos="fade-right"
            data-aos-offset="350"
            data-aos-easing="ease-in-sine"
            className="grid lg:grid-cols-3 gap-4 lg:gap-5"
          >
            {technologies?.map((technology, index) => (
              <div className="card lg:w-96 bg-slate-100 hover:bg-slate-100 hover:opacity-90 shadow-xl shadow-cyan-500/50">
                <figure>
                  <img
                    className="transition duration-150 ease-in-out hover:scale-110"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    src={technology?.image}
                    alt="Shoes"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
