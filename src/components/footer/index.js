import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Footer = () => {
  // const NewsletterHandler = (e) => {
  //   e.preventDefault();
  // };
  var today = new Date()
  var date =  today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 order-lg-1 order-1">
              <div className="single-footer">
                <h3>Acerca de</h3>
                <p>
                    Somos una Empresa que pone a tu disposición la mas avanzada tecnología para la administración y ejecución de tus proyectos.
                </p>
                <ul className="footer-contact">
                  <li>
                    <i className="fas fa-phone-square-alt" /> +52 1 (812)-332-0973
                  </li>
                  <li>
                    <i className="fas fa-envelope" /> carlos.ornelas@dkorstudio67.com
                  </li>
                  <li>
                    <i className="fas fa-map" /> <a href="https://goo.gl/maps/yKiRxwjaS8Ww4wcT7" target={"_blank"} rel="noreferrer">Calle Decima #8351 I local C Zona Centro. Tijuana, Baja California, México.</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 order-lg-2 order-3">
              <div className="single-footer">
                <h3>Links Rápidos</h3>
                <ul>
                  <li>
                    <Link to="/acerca-de">Acerca De</Link>
                  </li>
                  {/* <li>
                    <Link to="/projects">Nuestros Proyectos</Link>
                  </li> */}
                  {/* <li>
                    <Link to="/service">Nuestros Servicios</Link>
                  </li> */}
                  {/* <li>
                    <Link to="/team">Conoce al Equipo</Link>
                  </li> */}
                  <li>
                    <Link to="/contact">Contáctanos</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-2 col-sm-6 order-lg-3 order-4">
              <div className="single-footer">
                <h3>Exlore</h3>
                <ul>
                  <li>
                    <Link to="/">Case Study</Link>
                  </li>
                  <li>
                    <Link to="/">Latest News</Link>
                  </li>
                  <li>
                    <Link to="/">Help Center</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Terms & Condition</Link>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div className="col-lg-4 col-sm-6 order-lg-4 order-2">
              <div className="single-footer">
                <h3>Newsletter</h3>
                <p>Sign up now for weekly news & updates.</p>
                <div className="newsletter_form">
                  <form onSubmit={NewsletterHandler}>
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">
                      <i className="fas fa-long-arrow-alt-right" />
                    </button>
                  </form>
                </div>
                <ul className="footer-social">
                  <li>
                    <Link to="/">
                      <i className="fab fa-pinterest-p" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fade_rule" />
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>&copy; Derechos Reservados {date} por AzuraDevs</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
