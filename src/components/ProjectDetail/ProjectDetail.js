import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProjects from "../../hooks/useProjects";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams();
  const [projects, projectsLoading] = useProjects();

  // console.log(projects);

  if (projectsLoading) {
    return <p> Loading....</p>;
  }

  const projectInfo = projects.filter((project) => project.id == id);
  // console.log(projectInfo[0].img2);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="max-w-md lg:max-w-2xl rounded-lg shadow-2xl">
            <div
              data-aos="fade-left"
              data-aos-offset="350"
              data-aos-easing="ease-in-sine"
              className="carousel  w-full "
            >
              <div id="slide1" className="carousel-item relative w-full">
                <img src={projectInfo[0].img1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href="#slide4"
                    className="btn bg-transparent rounded-none hover:bg-rose-600 hover:text-white"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide2"
                    className="btn bg-transparent rounded-none  hover:bg-rose-600 hover:text-white"
                  >
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img src={projectInfo[0].img2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href="#slide1"
                    className="btn bg-transparent rounded-none  hover:bg-rose-600 hover:text-white"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide3"
                    className="btn bg-transparent rounded-none  hover:bg-rose-600 hover:text-white"
                  >
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img src={projectInfo[0].img3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href="#slide2"
                    className="btn bg-transparent rounded-none  hover:bg-rose-600 hover:text-white"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide1"
                    className="btn bg-transparent rounded-none  hover:bg-rose-600 hover:text-white"
                  >
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-offset="350"
            data-aos-easing="ease-in-sine"
          >
            <h1 className="text-4xl lg:text-5xl font-bold">
              {projectInfo[0].project_name}
            </h1>
            <p className="py-6">{projectInfo[0].project_description}</p>
            <div className="lg:inline-flex mb-4 rounded-none">
              {projectInfo[0]?.technologies.map((usedTechnology, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className=" badge badge-lg py-4 rounded-none bg-rose-600 text-white"
                >
                  {usedTechnology?.techName}
                </div>
              ))}
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              class="inline-flex"
            >
              <button class="bg-rose-700 hover:bg-rose-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                <a href={projectInfo[0]?.live}> Live Site </a>
              </button>
              <button class="bg-rose-800 hover:bg-rose-400 text-gray-800 font-bold py-2 px-4 ">
                <a href={projectInfo[0]?.github_c}> Client Code </a>
              </button>
              <button class="bg-rose-500 hover:bg-rose-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                <a href={projectInfo[0]?.github_s}>Server Code</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
