import React from "react";

const Experience = () => {
  return (
    <div className="bg-[#1c1f28]">
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="text-5xl text-center font-bold mb-5  "
      >
        Experience
      </h1>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <ul
              data-aos="fade-left"
              data-aos-offset="350"
              data-aos-easing="ease-in-sine"
              className="steps steps-vertical"
            >
              <li className="step step-secondary  ">
                <div className="stats shadow mb-2">
                  <div className="stat">
                    <div className="stat-title">
                      Digitally WOW Media Solution
                    </div>
                    <div className="stat-value text-rose-700">
                      MERN Stack Developer Intern
                    </div>
                    <div className="stat-desc">December,2022</div>
                  </div>
                </div>
              </li>
              <li className="step step-secondary ">
                <div className="stats shadow mb-2">
                  <div className="stat">
                    <div className="stat-title">Fiverr</div>
                    <div className="stat-value text-rose-700">
                      Full Stack Web Developer
                    </div>
                    <div className="stat-desc">*Present</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
