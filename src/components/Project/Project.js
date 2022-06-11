import React from "react";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const Project = ({project}) => {
    const navigate=useNavigate();

    const navigateToDetail = (name) => {
      navigate(`${name}`);
    };


  return (
    <div>
      
          <div className="card w-96 bg-base-100 shadow-xl sm:m-0 lg:m-10 ">
            <figure>
              <img src={project?.img1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {project?.project_name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{project?.project_description}</p>

              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  <a href={project?.live}>
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <div className="badge badge-outline">
                  <a href={project?.github_c}>
                    <FaCode></FaCode>
                  </a>
                </div>
                <div className="badge badge-outline">
                  <a href="">
                    {" "}
                    <FaCode></FaCode>
                  </a>
                </div>
              </div>
              <button onClick={()=>navigateToDetail(project?.id)} className="btn bg-orange-700 btn-ghost btn-sm">
                Epolre More
              </button>
            </div>
          </div>
       
    </div>
  );
};

export default Project;
