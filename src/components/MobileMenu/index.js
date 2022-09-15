import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

const menus = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
  },

  {
    id: 2,
    title: "Acerca De",
    link: "/acerca-de",
  },

  {
    id: 3,
    title: "Proyectos",
    link: "/#nuestros-proyectos",
  },
  {
    id: 4,
    title: "Servicios",
    link: "/#nuestros-servicios",
    submenu: [
      {
        id: 41,
        title: "Arquitectura",
        link: "/architecture",
      },
      {
        id: 42,
        title: "Construcción",
        link: "/construction",
      },
      {
        id: 43,
        title: "Project Managment BIM",
        link: "/project-management",
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
              var redirect = <Link to={item.link}>{item.title}</Link>;
              if(item.link.includes("#")){
                redirect = <a href={item.link}>{item.title}</a>
              }

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
                    redirect
                    // <Link to={item.link}>{item.title}</Link>
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
