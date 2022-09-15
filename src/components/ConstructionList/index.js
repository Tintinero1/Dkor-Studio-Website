import React from "react";

import projectImg1 from "../../img/construction-1.png";
import projectImg2 from "../../img/construction-2.png";
import projectImg3 from "../../img/construction-3.png";
import projectImg4 from "../../img/construction-4.jpeg";
import projectImg5 from "../../img/construction-5.jpeg";
import projectImg6 from "../../img/construction-6.jpeg";
// import projectImg7 from "../../img/construction-7.jpeg";
import projectImg8 from "../../img/construction-8.jpeg";
import projectImg9 from "../../img/construction-9.jpeg";
import projectImg10 from "../../img/construction-10.jpeg";
import projectImg11 from "../../img/construction-11.jpeg";
import projectImg12 from "../../img/construction-12.jpeg";

import Simulacion from "../Simulacion";
import ConstruccionVideo from "../ConstruccionVideo";

import "./style.css";

const ConstructionList = () => {
  window.scrollTo(0, 0);
  return (
    <section className="projects-area projects-page-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="site-heading text-center">
                  <h3 className="sub-title">PROYECTOS</h3>
                  <h2 className="section-title">Principal.</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-between">
              <div className="col-md-5  col-sm-6">
                <a href={projectImg2} target="blank">
                  <div className="project-box2">
                      <img src={projectImg1} alt="img" />
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
                  </div>
                </a>
              </div>
              <div className="col-md-5 col-sm-6">
                <a href={projectImg2} target="blank">
                  <div className="project-box2">
                      <img src={projectImg2} alt="img" />
                      {/* <h3>
                        MODERN INTERIOR
                        <br /> IN AUSTRALIA
                      </h3>
                      <p>INTERIOR</p> */}
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
                  </div>
                </a>
              </div>
              <div className="col-md-5 col-sm-6">
                <a href={projectImg3} target="blank">
                  <div className="project-box2">
                      <img src={projectImg3} alt="img" />
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
                  </div>
                </a>
              </div>
              <div className="col-md-5 col-sm-6">
                <a href={projectImg4} target="blank">
                  <div className="project-box2">
                      <img src={projectImg4} alt="img" />
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
                  </div>
                </a>
              </div>
              <div className="col-md-5 col-sm-6">
                <a href={projectImg5} target="blank">
                  <div className="project-box2">
                      <img src={projectImg5} alt="img" />
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
                  </div>
                </a>
              </div>
              <div className="col-md-5 col-sm-6">
                <a href={projectImg6} target="blank">
                  <div className="project-box2">
                      <img src={projectImg6} alt="img" />
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
                  </div>
                </a>
              </div>
              <div className="col-md-5 col-sm-6">
                <a href={projectImg8} target="blank">
                  <div className="project-box2">
                      <img src={projectImg8} alt="img" />
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
                  </div>
                </a>
              </div>
              <div className="col-md-5 col-sm-6">
                <a href={projectImg9} target="blank">
                  <div className="project-box2">
                      <img src={projectImg9} alt="img" />
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
                  </div>
                </a>
              </div>
              <div className="col-md-5 col-sm-6">
                <a href={projectImg10} target="blank">
                  <div className="project-box2">
                      <img src={projectImg10} alt="img" />
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
                  </div>
                </a>
              </div>
              <div className="col-md-5 col-sm-6">
                <a href={projectImg11} target="blank">
                  <div className="project-box2">
                      <img src={projectImg11} alt="img" />
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
                  </div>
                </a>
              </div>
              <div className="col-md-5 col-sm-6">
                <a href={projectImg12} target="blank">
                  <div className="project-box2">
                      <img src={projectImg12} alt="img" />
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
                  </div>
                </a>
              </div>
              {/* <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg4} alt="img" />
                    <h3>
                      SWIMMING POOL
                      <br /> IN ROMANIA
                    </h3>
                    <p>HOUSE PLANNING</p>
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
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg5} alt="img" />
                    <h3>
                      MODERN OFFICE
                      <br /> IN LOS ANGELS
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
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg6} alt="img" />
                    <h3>
                      MASTER KITCHEN
                      <br /> IN DHAKA
                    </h3>
                    <p>ARCHITECTURE</p>
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
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg7} alt="img" />
                    <h3>
                      MODERN RESTURENT
                      <br /> IN BAHRAIN
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
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg8} alt="img" />
                    <h3>
                      MODERN HALL ROOM
                      <br /> IN AUSTRALIA
                    </h3>
                    <p>ARCHITECTURE</p>
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
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg9} alt="img" />
                    <h3>
                      MODERN HOUSE
                      <br /> IN PARIS
                    </h3>
                    <p>ARCHITECTURE</p>
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
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg10} alt="img" />
                    <h3>
                      MODERN HOTEL
                      <br /> IN BAHRAIN
                    </h3>
                    <p>FURNITURE DESIGN</p>
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
                  </Link>
                </div>
              </div> */}
              <div>
                <ConstruccionVideo></ConstruccionVideo>
                <Simulacion></Simulacion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ConstructionList;
