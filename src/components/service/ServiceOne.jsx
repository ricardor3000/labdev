"use client";

import React from "react";
import Link from "next/link";
import Services from "@/data/Services.json";

function ServiceOne() {
  const serviceClasses = ["one", "two", "three", "four", "five", "six"];

  return (
    <div>
      <>
        {/* rts service post area Start */}
        <div className="rts-service-area rts-section-gapBottom" id="service" style={{marginTop:90}}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="rts-title-area service text-center">
                  <p className="pre-title">LapDev Servicios</p>
                  <h2 className="title">Nuestros Servicios</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid service-main plr--120-service mt--50 plr_md--0 pl_sm--0 pr_sm--0">
            <div className="background-service row">
              {Services.map((service, index) => (
                <div
                  key={service.id}
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
                >
                  <div
                    className={`service-one-inner ${
                      serviceClasses[index] || "one"
                    }`}
                  >
                    <div className="thumbnail">
                      <img
                        src={`/assets/images/service/icon/${service.icon}`}
                        alt={service.title}
                      />
                    </div>

                    <div className="service-details">
                      <Link href={`/service-details/${service.slug}`}>
                        <h5 className="title">{service.title}</h5>
                      </Link>

                      <p className="disc">{service.summary}</p>

                      <Link
                        className="rts-read-more btn-primary"
                        href={`/service-details/${service.slug}`}
                      >
                        <i className="far fa-arrow-right" />
                        Más Información
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row">
              <div
                className="cta-one-bg col-12"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <div className="cta-one-inner">
                  <div className="cta-left">
                    <h3 className="title">
                      Creamos Soluciones Digitales que Transforman Negocios
                    </h3>
                  </div>
                  <div className="cta-right">
                    <Link className="rts-btn btn-white" href="/contacto">
                      Contáctanos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* rts service post area End */}
      </>
    </div>
  );
}

export default ServiceOne;