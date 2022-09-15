import React from "react";

// import partnerImg1 from "../../img/partner-1.png";
// import partnerImg2 from "../../img/partner-2.png";
import partnerImg3 from "../../img/partner-3.jpeg";
import partnerImg4 from "../../img/partner-4.png";
// import partnerImg5 from "../../img/partner-5.png";
import partnerImg6 from "../../img/partner-6.png";
import partnerImg7 from "../../img/partner-7.png";
// import partnerImg8 from "../../img/partner-8.png";
import partnerImg9 from "../../img/partner-9.png";
import partnerImg10 from "../../img/partner-10.jpg";

// import partnerImg1 from "../../img/partner-1.png";
// import partnerImg2 from "../../img/partner-2.png";
// import partnerImg3 from "../../img/partner-3.png";
// import partnerImg4 from "../../img/partner-4.png";
// import partnerImg5 from "../../img/partner-5.png";
// import partnerImg6 from "../../img/partner-6.png";
// import partnerImg7 from "../../img/partner-7.png";

import "./style.css";

const Partners = () => {
  return (
    <section className="partners-area pt-0" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="partner-inn">
              <ul>
                {/* <li>
                  <img src={partnerImg1} width="250px" alt="Aries" />
                </li>
                <li>
                  <img src={partnerImg2} width="150px" alt="Punta Azul" />
                </li> */}
                <li>
                  <img src={partnerImg3} width="80px" alt="koinox" />
                </li>
                <li>
                  <img src={partnerImg7} width="120px" alt="Stiva" />
                </li>
                <li>
                  <img src={partnerImg9} width="120px" alt="Urbi Villa Residencial" />
                </li>
                <li>
                  <img src={partnerImg10} alt="Casapia" />
                </li>
                <li>
                  <img src={partnerImg6} alt="Hyundai" />
                </li>
                <li>
                  <img src={partnerImg4} alt="Copresa" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
