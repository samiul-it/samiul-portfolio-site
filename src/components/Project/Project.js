import React from "react";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const Project = ({ project }) => {
  const navigate = useNavigate();

  const navigateToDetail = (name) => {
    navigate(`${name}`);
  };

  return (
    <div className="card w-96 bg-base-100  rounded-none shadow-2xl shadow-rose-500/50 hover:shadow-rose-700/50 sm:m-0 lg:m-10 transition duration-380 ease-in-out hover:scale-110 ">
      <figure>
        <img
          data-aos="fade-up"
          data-aos-duration="3000"
          src={project?.img1}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title  text-2xl">
          {project?.project_name}
          <div className="badge badge-accent rounded-none">HOT</div>
        </h2>
        <p>{project?.project_description?.substring(0, 250)}</p>

        <div className="card-actions justify-end mb-2">
          <div className="badge badge-outline hover:bg-red-700">
            <div className="tooltip" data-tip="Live Site">
              <a href={project?.live}>
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <div className="badge badge-outline hover:bg-amber-700">
            <div className="tooltip" data-tip="Client Code">
              <a href={project?.github_c}>
                <FaCode></FaCode>
              </a>
            </div>
          </div>
          <div className="badge badge-outline hover:bg-lime-700">
            <div className="tooltip" data-tip="Server Code">
              <a href={project?.github_s}>
                <FaCode></FaCode>
              </a>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigateToDetail(project?.id)}
          className="btn bg-rose-700 btn-ghost btn-md rounded-none hover:bg-rose-800"
        >
          Epolre More
        </button>
      </div>
    </div>
  );
};

export default Project;
