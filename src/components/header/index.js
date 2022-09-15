import React from "react";
import Logo from "../../img/Logo.jpeg";
import MobileMenu from "../../components/MobileMenu";
import { Link } from "react-router-dom";

import "./style.css";

const Header = () => {
  // const [show, setShow] = useState(false);

  // const SubmitHandler = (e) => {
  //   e.preventDefault();
  // };

  // const onClick = (e) => {
  //   e.preventDefault();
  // };

  return (
    <header className="header">
      <div className="row">
        <div className="col-lg-12">
          <div className="header-inn">
            <div className="site-logo">
              <Link to="/">
                <img src={Logo} width="600px" alt="" />
              </Link>
            </div>
            <div className="header-navigation">
              <div className="mainmenu">
                <nav id="menu">
                  <ul className="dropdown">
                    <li>
                      <Link to="/">Inicio</Link>
                    </li>
                    <li>
                      <Link to="/acerca-de">Acerca de</Link>
                      <ul>
                        <li>
                          <Link to="/acerca-de">Quienes Somos</Link>
                        </li>
                        <li>
                          <Link to="/acerca-de">Que Hacemos</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/#nuestros-proyectos">
                        Proyectos
                      </a>
                    </li>
                    <li>
                      <a href="/#nuestros-servicios">
                        Servicios
                      </a>
                      <ul>
                        <li>
                          <Link to="/architecture">Arquitectura</Link>
                        </li>
                        <li>
                          <Link to="/construction">Construcción</Link>
                        </li>
                        <li>
                          <Link to="/project-management">Project Managment BIM</Link>
                        </li>
                        {/* <li>
                          <Link to="/service">Gestionamiento de planos</Link>
                        </li>
                        <li>
                          <Link to="/service-single">Detalles del Servicio</Link>
                        </li> */}
                      </ul>
                    </li>
                    {/* <li>
                      <Link to="/" onClick={onClick}>
                        Paginas
                      </Link>
                      <ul>
                        <li>
                          <Link to="/portfolio">Portafolio</Link>
                        </li>
                        <li>
                          <Link to="/team">Equipo</Link>
                        </li>
                        <li>
                          <Link to="/faq">Faq</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contacto</Link>
                        </li>
                        <li>
                          <Link to="/404">Error</Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link to="/contact">Contacto</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <div className="header-action">
                <button className="search-toggle" onClick={() => setShow(true)}>
                  <i className="fa fa-search"></i>
                </button>
                <Link to="/contact" className="header-btn">
                  <div className="icon-holder">
                    <i className="far fa-envelope"></i>
                  </div>
                  Contacto
                </Link>
              </div> */}
              {/* <div
                id="search-overlay"
                className={`block ${show ? "show" : ""}`}
              >
                <div className="centered">
                  <div id="search-box">
                    <i
                      id="close-btn"
                      onClick={() => setShow(false)}
                      className="fa fa-times fa-2x"
                    ></i>
                    <form id="search-form" onSubmit={SubmitHandler}>
                      <input
                        id="search-text"
                        name="q"
                        placeholder="Type here..."
                        type="text"
                      />
                      <button id="search-button" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div> */}
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
