import React from "react";
import "./style.css";

const Contactpage = () => {
  return (
    <section className="contact-page-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            {/* <div className="contact-form">
              <div className="site-heading" data-aos="fade-up">
                <h3 className="sub-title">Obten tu Cotización</h3>
                <h2 className="section-title">Contactanos</h2>
              </div>
              <div style={{height: "500px"}}>

              </div>
              <ContactForm />
            </div> */}
          </div>
          <div className="col-lg-5 col-sm-6">
            <div className="contact-page-left">
              <h3>Información de contacto</h3>
              <div className="contact-info">
                <div className="single-contact-info" data-aos="fade-down">
                  <div className="contact-info-icon">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="contact-info-text">
                    <h5>Dirección</h5>
                    <p>
                      Calle Decima #8351 I local C Zona Centro
                      <br />
                      Tijuana, Baja California, México​.
                    </p>
                  </div>
                </div>
                <div className="single-contact-info" data-aos="fade-down">
                  <div className="contact-info-icon">
                    <span className="fas fa-phone-alt" />
                  </div>
                  <div className="contact-info-text">
                    <h5>Teléfono</h5>
                    <p>+52 1 (812)-332-0973</p>
                    {/* <p>(+09) 123 4567 89</p> */}
                  </div>
                </div>
                <div className="single-contact-info" data-aos="fade-down">
                  <div className="contact-info-icon">
                    <span className="fas fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <h5>Email</h5>
                    <p>carlos.ornelas@dkorstudio67.com</p>
                    {/* <p>support@company.com</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-6">
            <div className="contact-page-right">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d841.0050589305207!2d-117.0332483!3d32.5256065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d949ad4406eca7%3A0x9b080c486d50ef3e!2sBrik%2010!5e0!3m2!1ses!2smx!4v1662951497172!5m2!1ses!2smx"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
