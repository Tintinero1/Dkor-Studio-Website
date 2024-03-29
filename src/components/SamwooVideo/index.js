import React from "react";
import VideoModal from "../../components/ModalVideo";

import tourBG from "../../img/samwoo.png";

import "./style.css";

const SamwooVideo = () => {
  return (
    <section className="tour-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6 col-md-8 offset-md-4">
            <div className="site-heading">
              <h3 className="sub-title">Video SAMWOO</h3>
              {/* <h2 className="section-title">Hacemos las cosas mejor</h2> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-11 mx-auto">
            <div className="tour-inn" data-aos="fade-up">
              <img src={tourBG} alt="img" />
              <div className="video-main">
                <div className="tour_video_waves">
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1" />
                      <div className="waves wave-2" />
                      <div className="waves wave-3" />
                    </div>
                  </div>
                  <VideoModal videoId="8ZDk55mh6hE" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SamwooVideo;
