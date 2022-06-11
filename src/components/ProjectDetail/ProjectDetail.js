import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProjects from "../../hooks/useProjects";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams();
  const [projects, projectsLoading] = useProjects();

  if (projectsLoading) {
    return <p> Loading....</p>;
  }

  const projectInfo = projects.filter((project) => project.id == id);
  console.log(projectInfo[0].img2);

  return (
    <div className="hero-content">
      <div className="card w-96  bg-base-100 shadow-xl sm:m-0 lg:m-10">
        <div className="">
          <figure data-aos="fade-right" className="m-4 ">
            <img src={projectInfo[0].img1} alt="Album" />
          </figure>
          <figure data-aos="fade-left" className="m-4">
            <img src={projectInfo[0].img2} alt="Album" />
          </figure>
          <figure data-aos="fade-right" className="m-4">
            <img src={projectInfo[0].img3} alt="Album" />
          </figure>
        </div>
        <div data-aos="zoom-in" className="card-body">
          <h2 className="card-title">{projectInfo[0].project_name}</h2>
          <p>{projectInfo[0].project_description}</p>
          <div className="card-actions justify-end">
            <div
              data-aos="flip-up"
              className="badge badge-outline hover:bg-orange-700"
            >
              <a href={projectInfo[0].live}>
                <FaExternalLinkAlt />
              </a>
            </div>
            <div
              data-aos="flip-up"
              className="badge badge-outline hover:bg-orange-700"
            >
              <a href={projectInfo[0].github_c}>
                <FaCode></FaCode>
              </a>
            </div>
            <div
              data-aos="flip-up"
              className="badge badge-outline hover:bg-orange-700"
            >
              <a href={projectInfo[0].github_s}>
                {" "}
                <FaCode></FaCode>
              </a>
            </div>
            <div data-aos="zoom-out" className="alert alert-success shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span>{projectInfo[0].technologies}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
