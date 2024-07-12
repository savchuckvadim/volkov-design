/* eslint-disable @next/next/no-img-element */
import React from "react";

const Services6 = () => {
  return (
    <section className="services-feat section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <img src="/assets/img/feat.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <div className="item">
                <span className="icon flaticon-home-1"></span>
                <div>
                  <h5>Architecture</h5>
                  <p>
                    Elevate your space with our architectural design expertise.
                  </p>
                </div>
              </div>
              <div className="item">
                <span className="icon flaticon-living-room"></span>
                <div>
                  <h5>Interior Design</h5>
                  <p>
                    From innovative concepts to precise blueprints, we craft spaces that inspire and endure.
                  </p>
                </div>
              </div>
              <div className="item">
                <span className="icon flaticon-interior-design"></span>
                <div>
                  <h5>3D Modeling</h5>
                  <p>
                    Immerse yourself in the future of design with our cutting-edge 3D visualization services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services6;