import React from "react";
import project1 from "../../Images/project1.png";
import project2 from "../../Images/project2.png";
import project3 from "../../Images/project3.png";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";


const Projects = () => {
  return (
    <>
      <div data-aos="slide-right" data-aos-delay="50">
        <div className="sm:m-0  lg:flex mt-20 mx-20 ">
          <div className="card w-96 bg-base-100 shadow-xl sm:m-0 lg:m-10 ">
            <figure>
              <img src={project1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Parts Station
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                A Manufacturing Company that provides products to buy
                online.Users can also pay for their products.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  <a href="https://parts-station.web.app/">
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <div className="badge badge-outline">
                  <a href="https://github.com/samiul1998/parts-station-client">
                    {" "}
                    <FaCode></FaCode>
                  </a>
                </div>
                <div className="badge badge-outline">
                  <a href="https://github.com/samiul1998/parts-station-server">
                    {" "}
                    <FaCode></FaCode>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl sm:m-0 lg:m-10 ">
            <figure>
              <img src={project2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Royal Trucking
                <div className="badge badge-secondary"></div>
              </h2>
              <p>
                This site allows you to register you as a user and add your item
                listings to the warehouse. User will be able to update
                stocks,deliver products,delete their products and many more.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  <a href="https://royal-truckings.web.app/">
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <div className="badge badge-outline">
                  <a href="https://github.com/samiul1998/royal-truckings-client">
                    {" "}
                    <FaCode></FaCode>
                  </a>
                </div>
                <div className="badge badge-outline">
                  <a href="https://github.com/samiul1998/royal-truckings-server">
                    {" "}
                    <FaCode></FaCode>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl sm:m-0 lg:m-10 ">
            <figure>
              <img src={project3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  <a href="https://the-doctor-lounge.web.app/">
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <div className="badge badge-outline">
                  <a href="https://github.com/samiul1998/the-doctor-lounge">
                    {" "}
                    <FaCode></FaCode>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
