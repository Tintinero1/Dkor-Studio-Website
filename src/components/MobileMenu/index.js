import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

const menus = [
  {
    id: 1,
    title: "Inicio",
    link: "/home",
  },

  {
    id: 2,
    title: "Acerca De",
    link: "/about",
  },

  {
    id: 3,
    title: "Proyectos",
    link: "/projects",
    submenu: [
      {
        id: 31,
        title: "Proyectos",
        link: "/projects",
      },
      {
        id: 32,
        title: "Detalles",
        link: "/projects-single",
      },
    ],
  },
  {
    id: 4,
    title: "Servicios",
    link: "/service",
    submenu: [
      {
        id: 41,
        title: "Gestionamiento de Planos",
        link: "/service",
      },
      {
        id: 42,
        title: "Detalles del Servicio",
        link: "/service-single",
      },
    ],
  },
  {
    id: 7,
    title: "Paginas",
    link: "/",
    submenu: [
      {
        id: 71,
        title: "Portafolio",
        link: "/portfolio",
      },
      {
        id: 75,
        title: "Equipo",
        link: "/team",
      },
      // {
      //   id: 76,
      //   title: "",
      //   link: "/faq",
      // },

      {
        id: 79,
        title: "Contacto",
        link: "/contact",
      },
      {
        id: 70,
        title: "Error",
        link: "/404",
      },
    ],
  },
  {
    id: 88,
    title: "Contacto",
    link: "/contact",
  },
];

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;
    return (
      <div className="responsiveMenu">
        <nav
          id="mobileMenu"
          className={`mobileMenu ${isMenuShow ? "active" : ""}`}
        >
          <ul className="responsivemenu">
            {menus.map((item) => {
              return (
                <li key={item.id}>
                  {item.submenu ? (
                    <p
                      onClick={this.setIsOpen(item.id)}
                      aria-expanded={isMenuShow}
                    >
                      {item.title}
                      {item.submenu ? "" : ""}
                    </p>
                  ) : (
                    <Link to={item.link}>{item.title}</Link>
                  )}

                  {item.submenu ? (
                    <Collapse in={item.id === isOpen}>
                      <ul className="sub-menu">
                        {item.submenu.map((submenu) => (
                          <li key={submenu.id}>
                            <Link className="active" to={submenu.link}>
                              {submenu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Collapse>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={`spinner-master ${isMenuShow ? "active" : ""}`}
          onClick={this.menuHandler}
        >
          <div id="spinner-form" className="spinner-spin">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
          </div>
        </div>
      </div>
    );
  }
}
