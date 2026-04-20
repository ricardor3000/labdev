"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Link from "next/link";
import ErrorBoundary from "@/components/ErrorBoundary";
import TechnicalDiagnosisModal from "@/components/contact/TechnicalDiagnosisModal";

function GalleryOne() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <ErrorBoundary>
      <div>
        <div className="rts-gallery-area rts-section-gap gallery-bg bg_image">
          <div className="container">
            <div className="row">
              <div className="rts-title-area gallery text-start pl_sm--20">
                <p className="pre-title">PROYECTOS DESTACADOS</p>
                <h2 className="title">
                  Implementaciones tecnológicas de <br /> alto impacto
                </h2>
              </div>
            </div>

            <div className="row mt--45">
              <div className="col-12">
                <div className="swiper mygallery mySwipers">
                  <Swiper
                    modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                    className="mySwipers"
                    speed={1500}
                    effect="fade"
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                  >
                    <SwiperSlide>
                      <div className="row g-5 w-g-100">
                        <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                          <div className="thumbnail-gallery">
                            <img
                              src="assets/images/gallery/wellPlusBanner.png"
                              alt="Lapdev proyecto destacado"
                            />
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                          <div className="bg-right-gallery">
                            <div className="icon">
                              <img
                                src="assets/images/gallery/icon/01.svg"
                                alt="Business-gallery"
                              />
                            </div>

                            <Link href="/project/Business-solution">
                              <h4 className="title">Lapdev</h4>
                            </Link>

                            <span>Proyectos tecnológicos de alto impacto</span>

                            <p className="disc">
                              Hemos desarrollado plataformas digitales, aplicaciones
                              empresariales e infraestructuras tecnológicas para
                              compañías que requieren soluciones sólidas, escalables y
                              estratégicamente diseñadas.
                            </p>

                            <div
                              style={{
                                display: "flex",
                                gap: "12px",
                                flexWrap: "wrap",
                                marginTop: "20px",
                              }}
                            >
                              <a
                                href="#"
                                onClick={handleOpen}
                                className="rts-btn btn-primary color-h-black"
                              >
                                Solicitar Diagnóstico Técnico
                              </a>

                             {/*  <Link
                                className="rts-btn btn-primary"
                                href="/project/Business-solution"
                              >
                                Ver proyecto →
                              </Link> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="row g-5 w-g-100">
                        <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                          <div className="thumbnail-gallery">
                            <img
                              src="assets/images/gallery/ChattarkDemo.png"
                              alt="Chattark proyecto destacado"
                            />
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                          <div className="bg-right-gallery">
                            <div className="icon">
                              <img
                                src="assets/images/gallery/icon/01.svg"
                                alt="Business-gallery"
                              />
                            </div>

                            <Link href="/project/Invent-Workd">
                              <h4 className="title">Chattark</h4>
                            </Link>

                            <span>Revoluciona tu mensajería de WhatsApp hoy</span>

                            <p className="disc">
                              Envía múltiples campañas de WhatsApp, sumérgete en chats
                              fluidos y colabora con tu equipo sin esfuerzo.
                            </p>

                            <div
                              style={{
                                display: "flex",
                                gap: "12px",
                                flexWrap: "wrap",
                                marginTop: "20px",
                              }}
                            >
                              <a
                                href="#"
                                onClick={handleOpen}
                                className="rts-btn btn-primary color-h-black"
                              >
                                Solicitar Diagnóstico Técnico
                              </a>

                              {/* <Link
                                className="rts-btn btn-primary"
                                href="/project/Invent-Workd"
                              >
                                Ver proyecto →
                              </Link> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <TechnicalDiagnosisModal
                    show={showModal}
                    handleClose={handleClose}
                  />

                  <div className="swiper-button-next" />
                  <div className="swiper-button-prev" />
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default GalleryOne;