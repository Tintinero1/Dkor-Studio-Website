import React from "react";
import CountUp from "react-countup";

import bg from "../../img/about-bg6.jpeg";
import img1 from "../../img/Empty.png";
import img2 from "../../img/dkor4.png";
// import bg from "../../img/about-bg.png";
// import img1 from "../../img/about-1.png";
// import img2 from "../../img/about-2.png";
import signature from "../../img/signature.png";

import "./style.css";

const About = () => {
  return (
    <section className="about-area" style={{ backgroundImage: `url(${bg})`}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="about-left background-text-black" data-aos="fade-right">
              <div className="site-heading">
                <h3 className="sub-title font-color-white" style={{color: "white"}}>SOBRE NOSOTROS</h3>
                <h2 className="section-title font-color-white" style={{color: "white"}}>
                  Pasión y diseño en cada detalle
                </h2>
              </div>
              <p className="font-color-white" style={{color: "white"}}>
                “La diferencia entre buena y mala arquitectura es el tiempo que pasas en ella.” -David Chipperfield.
              </p>
              <p className="font-color-white" style={{color: "white"}}>
                En Dkor Studio nos tomamos en serio cada uno de nuestros proyectos.
              </p>
              <div className="about-signature">
                <div className="signature-left">
                  <img src={signature} alt="signature" />
                </div>
                <div className="signature-right font-color-white">
                  <h3 style={{color: "white"}}>Carlos Ornelas</h3>
                  <p style={{color: "white"}}>Arquitecto en Jefe</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-6">
            <div className="about-counter">
              <div className="counter-box ">
                <h2 style={{color: "white"}}>
                  <span className="counter">
                    <CountUp start={0} end={40} duration={5} />
                  </span>
                </h2>
                <p>
                  Años de <br />
                  experiencia
                </p>
              </div>
              <div className="counter-box" >
                <h2 style={{color: "white"}}>
                  <span className="counter">
                    <CountUp start={0} end={100} duration={8} />
                  </span>
                  +
                </h2>
                <p>
                  Proyectos <br />
                  Completados
                </p>
              </div>
              <div className="counter-box">
                <h2 style={{color: "white"}}>
                  <span className="counter">
                    <CountUp start={0} end={100} duration={5} />
                  </span>
                  +
                </h2>
                <p>
                  Clientes <br />
                  Satisfechos
                </p>
              </div>
            </div>
            <div className="about-right" data-aos="fade-left">
              <img className="about_img_1" src={img2} style={{borderRadius: "25px"}} alt="img" />
              <img className="about_img_2" src={img1} style={{borderRadius: "25px"}} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
