import React from "react";
import { Link } from "react-router-dom";

import serviceImg1 from "../../img/interiores1.jpeg";
import serviceImg2 from "../../img/arquitectura1.jpeg";
import serviceImg3 from "../../img/obra1.jpeg";
import serviceIcon1 from "../../img/blueprint.png";
import serviceIcon2 from "../../img/architecture.png";
import serviceIcon3 from "../../img/construction.png";

// import serviceImg1 from "../../img/service-bg-1.png";
// import serviceImg2 from "../../img/service-bg-2.jpg";
// import serviceImg3 from "../../img/service-bg-3.jpg";
// import serviceIcon1 from "../../img/service-icon-1.png";
// import serviceIcon2 from "../../img/service-icon-2.png";
// import serviceIcon3 from "../../img/service-icon-3.png";

import "./style.css";

const ServiceSection = () => {
  return (
    <section id="nuestros-servicios" className="service-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{height: "450px"}}
            >
              <div className="service-icon">
                <img src={serviceIcon1} width="90px" alt="img" />
              </div>
              <div className="service-text">
                <h3>Project Management</h3>
                <p>
                  Desarrollamos el ciclo entero de documentación &amp; detalles completos.
                </p>
                <Link to="/project-management" className="cta-btn btn-border">
                  Leer más
                </Link>
              </div>
              <img src={serviceImg1} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="250"
              style={{height: "450px"}}
            >
              <div className="service-icon">
                <img src={serviceIcon2} alt="img" />
              </div>
              <div className="service-text">
                <h3>Arquitectura</h3>
                <br></br>
                <p>
                  Ofrecemos la máxima satisfacción a nuestros clientes.
                </p>
                <Link to="/architecture" className="cta-btn btn-border">
                  Leer más
                </Link>
              </div>
              <img src={serviceImg2} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="400"
              style={{height: "450px"}}
            >
              <div className="service-icon">
                <img src={serviceIcon3} alt="img" />
              </div>
              <div className="service-text">
                <h3>Construcción</h3>
                <p>
                  Aseguramos la totalidad de la obra, en tiempo y forma. Solo Calidad.
                </p>
                <Link to="/construction" className="cta-btn btn-border">
                  Leer más
                </Link>
              </div>
              <img src={serviceImg3} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
