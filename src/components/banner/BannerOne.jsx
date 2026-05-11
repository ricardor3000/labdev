"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import ErrorBoundary from "@/components/ErrorBoundary";
import TechnicalDiagnosisModal from "@/components/contact/TechnicalDiagnosisModal";

function BannerOne() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const mobileTitleClasses =
    "title !text-[34px] !leading-[1.05] !font-extrabold !tracking-[-0.03em] md:!text-[64px] md:!leading-[1.12] md:!font-bold md:!tracking-normal";

  const preTitleClasses =
    "pre-title !text-sm !leading-tight !font-semibold md:!text-base md:!leading-normal";

  const paragraphClasses =
    "disc banner-para !text-[15px] !leading-[1.35] !font-medium md:!text-base md:!leading-relaxed md:!font-normal";

  return (
    <ErrorBoundary>
      <div>
        <div className="rts-banner-area rts-banner-one" id="banner">
          <div className="swiper mySwiper banner-one">
            <Swiper
              modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
              className="rts-brand__slider"
              speed={900}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{ delay: 4000 }}
              effect="fade"
              breakpoints={{
                1200: { slidesPerView: 1 },
                900: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                580: { slidesPerView: 1 },
                450: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
            >
              <SwiperSlide>
                <div className="banner-one-inner text-start px-4 md:px-0">
                  <p className={preTitleClasses}>
                    <span>Desarrollo web & </span> apps a medida
                  </p>

                  <h1 className={mobileTitleClasses}>
                    <span>Impulsamos tu negocio</span>{" "}
                    <br className="hidden md:block" />
                    con tecnología que escala{" "}
                    <br className="hidden md:block" />
                    tu empresa
                  </h1>

                  <p className={paragraphClasses}>
                    En Lapdev diseñamos y desarrollamos plataformas web y
                    aplicaciones modernas,
                    <br className="hidden md:block" />
                    optimizadas para rendimiento, escalabilidad y conversión.
                  </p>

                  <a
                    href="#"
                    onClick={handleOpen}
                    className="rts-btn btn-primary color-h-black"
                  >
                    Solicitar Diagnóstico Técnico
                  </a>

                  <img
                    className="shape-img one"
                    src="assets/images/banner/shape/01.png"
                    alt="banner_business"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="banner-one-inner text-start px-4 md:px-0">
                  <p className={preTitleClasses}>
                    <span>Arquitectura moderna. Código limpio.</span> Resultados
                    reales.
                  </p>

                  <h1 className={mobileTitleClasses}>
                    Desarrollo Web y Apps <span>con tecnología</span>{" "}
                    <br className="hidden md:block" />
                    de alto rendimiento
                  </h1>

                  <p className={paragraphClasses}>
                    Creamos experiencias digitales rápidas, seguras y escalables
                    utilizando Next.js y React.
                    <br className="hidden md:block" />
                    Desde MVP hasta plataformas complejas, llevamos tu producto
                    al siguiente nivel.
                  </p>

                  <a
                    href="#"
                    onClick={handleOpen}
                    className="rts-btn btn-primary color-h-black"
                  >
                    Solicitar Diagnóstico Técnico
                  </a>

                  <img
                    className="shape-img one"
                    src="assets/images/banner/shape/01.png"
                    alt="banner_business"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="banner-one-inner text-start px-4 md:px-0">
                  <p className={preTitleClasses}>
                    <span>Tu idea merece una</span> ejecución profesional
                  </p>

                  <h1 className={mobileTitleClasses}>
                    Transformamos ideas <span>en productos digitales</span>{" "}
                    <br className="hidden md:block" />
                    que venden
                  </h1>

                  <p className={paragraphClasses}>
                    Desarrollamos páginas web y aplicaciones diseñadas para
                    convertir usuarios en clientes.
                    <br className="hidden md:block" />
                    Nos enfocamos en experiencia, velocidad y estrategia digital.
                  </p>

                  <a
                    href="#"
                    onClick={handleOpen}
                    className="rts-btn btn-primary color-h-black"
                  >
                    Solicitar Diagnóstico Técnico
                  </a>

                  <img
                    className="shape-img one"
                    src="assets/images/banner/shape/01.png"
                    alt="banner_business"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="animation-img">
            <img
              className="shape-img two"
              src="assets/images/banner/shape/02.png"
              alt="banner_business"
            />

            <img
              className="shape-img three"
              src="assets/images/banner/shape/03.png"
              alt="banner_business"
            />
          </div>
        </div>

        <TechnicalDiagnosisModal show={showModal} handleClose={handleClose} />
      </div>
    </ErrorBoundary>
  );
}

export default BannerOne;