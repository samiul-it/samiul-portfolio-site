import React from "react";
import samiul from "../../Images/samiul.png";
import { FaLinkedin, FaGithub, FaPhoneSquareAlt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div>
      <div className="bg-[#1c1f28]">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="text-5xl text-center font-bold mb-5 "
        >
          About ME
        </h1>
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
                Hello there! 👋 I'm Samiul, a passionate and dedicated web
                developer with expertise in the MERN (MongoDB, Express.js,
                React.js, Node.js) stack. Crafting delightful and user-friendly
                web experiences is not just my job; it's my passion.I specialize
                in building robust and scalable web applications using the
                latest technologies. My toolkit includes React.js for building
                interactive and dynamic user interfaces, Express.js and Node.js
                for the backend, and MongoDB for database management. I'm a firm
                believer in clean, modular, and maintainable code.I love turning
                ideas into reality. From concept to deployment, I thrive on the
                creative process of problem-solving and creating efficient
                solutions. Whether it's developing a new feature, optimizing
                performance, or troubleshooting a bug, I enjoy the challenges
                that come with web development.I'm not just about coding; I'm
                about building connections. Let's collaborate, share ideas, and
                create something amazing together. Feel free to reach out for
                projects, collaborations, or just a chat about tech over a cup
                of coffee!
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
                  href="https://github.com/samiul-it"
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
