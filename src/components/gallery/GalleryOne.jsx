"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import ErrorBoundary from "@/components/ErrorBoundary";
function GalleryOne() {
    return (
        <ErrorBoundary>
        <div>
            {/* start gallery section */}
            <div className="rts-gallery-area rts-section-gap gallery-bg bg_image">
                <div className="container">
                    <div className="row">
                        <div className="rts-title-area gallery text-start pl_sm--20">
                            <p className="pre-title">PROYECTOS DESTACADOS</p>
                            <h2 className="title">Implementaciones tecnológicas de <br /> alto impacto</h2>
                        </div>
                    </div>
                    <div className="row mt--45">
                        <div className="col-12">
                            <div className="swiper mygallery mySwipers">
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="mySwipers"
                                    speed={1500}
                                    effect='fade'
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}

                                >
                                    <SwiperSlide>
                                        <   div className="row g-5 w-g-100">
                                            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                                                <div className="thumbnail-gallery">
                                                    <img
                                                        src="assets/images/gallery/well-plusDemo.png"
                                                        alt="business-images"
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
                                                    <Link href={'/project/Business-solution'}>
                                                        <h4 className="title">Lapdev</h4>
                                                    </Link>
                                                    <span>Proyectos tecnologícos de alto impacto</span>
                                                    <p className="disc">
                                                        Hemos desarrollado plataformas digitales, aplicaciones empresariales e infraestructuras tecnológicas para 
                                                        compañías que requieren soluciones sólidas, escalables y estratégicamente diseñadas.
                                                    </p>
                                                    <Link
                                                        className="rts-btn btn-primary"
                                                        href={'/project/Business-solution'}
                                                    >
                                                       Explorar proyectos →
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <   div className="row g-5 w-g-100">
                                            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                                                <div className="thumbnail-gallery">
                                                    <img
                                                        src="assets/images/gallery/well-plusDemo.png"
                                                        alt="business-images"
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
                                                    <Link href={'/project/Business-solution'}>
                                                        <h4 className="title">Wellplus</h4>
                                                    </Link>
                                                    <span>Ecommerce</span>
                                                    <p className="disc">
                                                        laboratorio pionero en Nutrición Celular. Ponemos especial énfasis en la 
                                                        bioacumulación y en la biodisponibilidad de los nutrientes
                                                    </p>
                                                    <Link
                                                        className="rts-btn btn-primary"
                                                        href={'/project/Business-solution'}
                                                    >
                                                       Ir a proyecto
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="row g-5 w-g-100">
                                            <div className="col-lg-7">
                                                <div className="thumbnail-gallery">
                                                    <img
                                                        src="assets/images/gallery/ChattarkDemo.png"
                                                        alt="business-images"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="bg-right-gallery">
                                                    <div className="icon">
                                                        <img
                                                            src="assets/images/gallery/icon/01.svg"
                                                            alt="Business-gallery"
                                                        />
                                                    </div>
                                                    <Link href={'/project/Invent-Workd'}>
                                                        <h4 className="title">Chattark</h4>
                                                    </Link>
                                                    <span>Revoluciona tu mensajería de WhatsApp hoy</span>
                                                    <p className="disc">
                                                        Envía múltiples campañas de WhatsApp, 
                                                        sumérgete en chats fluidos y colabora con tu 
                                                        equipo sin esfuerzo.
                                                    </p>
                                                    <Link
                                                        className="rts-btn btn-primary"
                                                        href={'/project/Invent-Workd'}
                                                    >
                                                        Ir a proyecto
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>  
                                </Swiper>


                                <div className="swiper-button-next" />
                                <div className="swiper-button-prev" />
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start gallery section */}

        </div>
        </ ErrorBoundary>
    )
}

export default GalleryOne