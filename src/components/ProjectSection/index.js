import React from "react";
// import { Link } from "react-router-dom";

import projectImg1 from "../../img/otro1.png";
import projectImg2 from "../../img/colinas1.jpeg";
import projectImg3 from "../../img/mazatlan1.jpg";

// import projectImg1 from "../../img/project-1.png";
// import projectImg2 from "../../img/project-2.png";
// import projectImg3 from "../../img/project-3.png";

import "./style.css";

const ProjectSection = () => {
  return (
    <section className="projects-area pt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="site-heading">
              <h3 id="nuestros-proyectos" className="sub-title">PROYECTOS</h3>
              <h2 className="section-title">En Proceso.</h2>
            </div>
            <div className="project-box" data-aos="fade-up">
              <a href={projectImg1} target={"_blank"} rel="noreferrer">
                <img src={projectImg1} alt="img" />
                <h3>
                  OTRO
                </h3>
                <p>EXTERIOR</p>
                <div className="project-zoom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-eye"
                  >
                    <path
                      stroke="#ffffff"
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    />
                    <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                  </svg>
                </div>
              </a>
            </div>
            {/* <div className="text-center mt-5 d-lg-block d-none">
              <Link to="/projects" className="cta-btn btn-fill">
                Ver Proyectos
              </Link>
            </div> */}
          </div>
          <div className="col-sm-6">
            <div className="project-box" data-aos="fade-up">
              <a href={projectImg3} target={"_blank"} rel="noreferrer">
                <img src={projectImg3} alt="img" />
                <h3>
                  DEPARTAMENTOS
                  <br /> MAZATLAN
                </h3>
                <p>EXTERIOR</p>
                <div className="project-zoom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-eye"
                  >
                    <path
                      stroke="#ffffff"
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    />
                    <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                  </svg>
                </div>
              </a>
            </div>
            <div className="project-box" data-aos="fade-up">
              <a href={projectImg2} target={"_blank"} rel="noreferrer">
                <img src={projectImg2} alt="img" />
                <h3>
                  COLINAS
                </h3>
                <p>INTERIOR</p>
                <div className="project-zoom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-eye"
                  >
                    <path
                      stroke="#ffffff"
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    />
                    <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
