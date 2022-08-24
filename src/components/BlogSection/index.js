import React from "react";
import { Link } from "react-router-dom";

import blog1 from "../../img/news-1.png";
import blog2 from "../../img/news-2.png";

import "./style.css";

const BlogSection = () => {
  return (
    <section className="latest-news-area" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="site-heading">
              <h3 className="sub-title">NUESTROS PLANES</h3>
              <h2 className="section-title">¿Qué estamos pensando?</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/#" className="news-box news-box-margin">
              <div className="news-img">
                <img src={blog1} alt="img" />
              </div>
              <div className="news-text">
                <p className="news-date">Planeación - 21.04.2023</p>
                <h3>Proyecto Onyx</h3>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/#" className="news-box">
              <div className="news-img">
                <img src={blog2} alt="img" />
              </div>
              <div className="news-text">
                <p className="news-date">Planeación - 18.04.2023</p>
                <h3>Casas de Lujo</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center news_more">
              {/* <Link to="/blog" className="cta-btn btn-fill">
              Explorar Más
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
