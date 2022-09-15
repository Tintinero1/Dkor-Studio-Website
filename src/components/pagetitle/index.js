import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const PageTitle = (props) => {
  return (
    <section
      className="breadcrumb-area"
      style={{ backgroundImage: `url(${props.bg})` }}
    >
      <div className="hero-social">
        <ul>
            <li>
              <div></div>
            </li>
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
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inn">
              <h1>{props.pageTitle}</h1>
              <ul>
                <li className="home">
                  <Link to="/">
                    <span className="fas fa-home" />
                  </Link>
                </li>
                <li>{props.pagesub}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
