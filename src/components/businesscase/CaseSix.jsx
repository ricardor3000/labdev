"use client";

import React from "react";
import Link from "next/link";

function CaseSix() {
  return (
    <div>
      <div className="business-progress-area rts-section-gapBottom mt--120" id="goal">
        <div className="box">
          <img
            src="/assets/images/business-goal/icon/box.png"
            alt="box"
          />
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="thumbnail-progress-7">
                <img
                  src="/assets/images/business-goal/05.png"
                  alt="progress"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="title-area-style-six text-start">
                <div className="pre-title">
                  <img
                    src="/assets/images/banner/shape/pre-title.png"
                    alt="pre-title"
                  />

                  <span className="pre">Progreso Digital</span>

                  <img
                    className="two"
                    src="/assets/images/banner/shape/pre-title.png"
                    alt="pre-title"
                  />
                </div>

                <h2 className="title">
                  Desarrollamos soluciones que impulsan tu crecimiento digital
                </h2>
              </div>

              <div className="inner-goal-progress-7">
                <p className="disc">
                  Aplicamos tecnología moderna, buenas prácticas y un enfoque estratégico para entregar plataformas rápidas, escalables y oprientadas a resultados. 
                </p>

                <div className="row mb--50 g-5">
                  <div className="col-lg-6">
                    <div className="left-business-goal">
                      <div className="left">
                        <h4 className="title">98%</h4>
                        <p className="dsic">Proyectos entregados con éxito</p>
                      </div>

                      <div className="right">
                        <img
                          src="/assets/images/business-goal/icon/05.svg"
                          alt="optimization icon"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="left-business-goal">
                      <div className="left">
                        <h4 className="title">98%</h4>
                        <p className="dsic">Satisfacción de nuestros clientes.</p>
                      </div>

                      <div className="right">
                        <img
                          src="/assets/images/business-goal/icon/05.svg"
                          alt="solution icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="https://api.whatsapp.com/send?phone=+56936533800&text=Quiero%20informaci%C3%B3n"
                  target="_blank"
                  className="rts-btn btn-primary-5"
                >
                  Trabajemos juntos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseSix;