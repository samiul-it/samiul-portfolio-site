import React from "react";
import { FaLinkedinIn, FaGithub, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-rose-600 text-primary-content">
      <aside>
        <img
          width="150"
          height="150"
          src="https://i.ibb.co/QbxrWdj/Red-Minimalist-Video-Game-Developer-Studio-Logo.png"
          alt=""
        />

        <p className="font-bold">
          Samiul-2023
          <br />
          Professional Web Developer
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/samiul-it/"
            className="text-2xl hover:text-slate-600"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/samiul-it"
            className="text-2xl  hover:text-slate-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/samiulit/"
            className="text-2xl  hover:text-slate-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/samiul-it/"
            className="text-2xl  hover:text-slate-600"
          >
            <FaYoutube />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
