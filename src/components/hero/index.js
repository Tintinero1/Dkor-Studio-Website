import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import VideoModal from "../../components/ModalVideo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from "../../img/colinas2.jpeg";
import hero2 from "../../img/colinas3.jpeg";

import "./style.css";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: false,
      arrows: false,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
    };

    return (
      <section className="hero-area">
        <div className="hero-social">
          <ul>
            {/* <li>
              <Link to="/">
                <i className="fab fa-linkedin-in" />
              </Link>
            </li> */}
            <li>
              <a href="https://www.facebook.com/DkorStudio" target={"_blank"} rel="noreferrer">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dkorstudio/" target={"_blank"} rel="noreferrer">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCxFJNzrlZSgXtU9_gVI90Gw/featured" target={"_blank"} rel="noreferrer">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
          {/* <p>Síguenos en redes sociales</p> */}
        </div>

        <div className="hero-slider">
          <div className="hero_arrows">
            <button className="button" onClick={this.previous}>
              <i className="fas fa-angle-left"></i>
            </button>
            <button className="button" onClick={this.next}>
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div className="slide">
              <div
                className="hero-slide-item"
                style={{ backgroundImage: `url(${hero1})` }}
              >
                <div className="container">
                  <div className="hero-text">
                    <h2>
                      Dkor Studio <br />
                      <span>Arquitectura + Construcción</span> 
                    </h2>
                    <div className="hero-action">
                      <a href="/#nuestros-proyectos" className="cta-btn btn-fill">
                        Ver proyectos
                      </a>
                      <Link to="/contact" className="cta-btn btn-border">
                        Contáctanos
                      </Link>
                    </div>
                  </div>
                  <div className="video-main">
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1" />
                        <div className="waves wave-2" />
                        <div className="waves wave-3" />
                      </div>
                    </div>
                    <VideoModal videoId="wIHun9n07jw" />
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div
                className="hero-slide-item"
                style={{ backgroundImage: `url(${hero2})` }}
              >
                <div className="container">
                  <div className="hero-text">
                    <h2>
                      Dkor Studio <br />
                      <span>Arquitectura + Construcción</span> 
                    </h2>
                    <div className="hero-action">
                      <a href="/#nuestros-proyectos" className="cta-btn btn-fill">
                          Ver proyectos
                      </a>
                      <Link to="/contact" className="cta-btn btn-border">
                        Contáctanos 
                      </Link>
                    </div>
                  </div>
                  <div className="video-main">
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1" />
                        <div className="waves wave-2" />
                        <div className="waves wave-3" />
                      </div>
                    </div>
                    <VideoModal videoId="wIHun9n07jw" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default Hero;
