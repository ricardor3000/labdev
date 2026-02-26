"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ErrorBoundary from "@/components/ErrorBoundary";

function BannerOne() {
    return (
        <ErrorBoundary>
            <div>
                <div className="rts-banner-area rts-banner-one" id='banner'>
                    <div className="swiper mySwiper banner-one">

                        <Swiper
                            modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                            className="rts-brand__slider"
                            speed={900}
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            autoplay={{ delay: 4000 }}
                            effect='fade'
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
                                    <p className="pre-title">
                                        <span>Desarrollo web & </span> apps a medida
                                    </p>
                                    <h1 className="title">
                                        <span>Impulsamos tu negocio</span> <br />
                                        con tecnología que escala
                                    </h1>
                                    <p className="disc banner-para">
                                        En Lapdev diseñamos y desarrollamos plataformas web y aplicaciones modernas,
                                        optimizadas para rendimiento, escalabilidad y conversión.
                                        Construimos soluciones sólidas con React, Next.js y arquitecturas preparadas
                                        para crecer contigo.
                                    </p>
                                    <a href="#" className="rts-btn btn-primary color-h-black">
                                        Solicitar asesoría
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
                                    <p className="pre-title">
                                        <span>Arquitectura moderna. Código limpio.</span> Resultados reales.
                                    </p>
                                    <h1 className="title">
                                        Desarrollo Web y Apps <span>con tecnología</span> <br />
                                        de alto rendimiento
                                    </h1>
                                    <p className="disc banner-para">
                                        Creamos experiencias digitales rápidas, seguras y escalables utilizando Next.js y React.
                                        Desde MVP hasta plataformas complejas, llevamos tu producto al siguiente nivel.
                                    </p>
                                    <a href="#" className="rts-btn btn-primary color-h-black">
                                        Cotizar proyecto
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
                                    <p className="pre-title">
                                        <span>Tu idea merece una</span> ejecución profesional
                                    </p>
                                    <h1 className="title">
                                        Transformamos ideas <span>en productos digitales</span> <br />
                                        que venden
                                    </h1>
                                    <p className="disc banner-para">
                                        Desarrollamos páginas web y aplicaciones diseñadas para convertir usuarios en clientes.
                                        Nos enfocamos en experiencia, velocidad y estrategia digital
                                        para que tu proyecto no solo funcione… sino que crezca.
                                    </p>
                                    <a href="#" className="rts-btn btn-primary color-h-black">
                                        Empezar mi proyecto
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
            </div>
        </ErrorBoundary>
    )
}

export default BannerOne