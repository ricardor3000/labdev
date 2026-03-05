"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ErrorBoundary from "@/components/ErrorBoundary";

function TestimonialOne() {
    return (
        <ErrorBoundary>
            <div>

                {/* start client feed back section */}
                <div className="rts-client-feedback">
                    <div className="container">
                        <div className="row">
                            {/* start testimonials area */}
                            <div className="col-lg-7">
                                <div className="rts-title-area reviews text-start pl--30 pt--70">
                                    <p className="pre-title">Testimonios de nuestros clientes</p>
                                    <h2 className="title">Clientes</h2>
                                    {/* swiper area start */}
                                    <div className="swiper mySwipertestimonial">
                                        <Swiper
                                            // install Swiper modules
                                            modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                            className="mySwipers"
                                            speed={500}
                                            slidesPerView={1}
                                            spaceBetween={0}
                                            loop={true}
                                            navigation={{
                                                nextEl: '.swiper-button-next',
                                                prevEl: '.swiper-button-prev',
                                            }}

                                        >
                                            <SwiperSlide>
                                                <div className="testimonial-inner">
                                                    <p className="disc text-start">
                                                        “Lapdev no solo desarrolló Chattark, construyó una arquitectura sólida que nos permitió integrar inteligencia 
                                                        artificial con WhatsApp y automatizaciones avanzadas de forma estable y escalable. 
                                                        El nivel técnico, la visión estratégica y la calidad del desarrollo marcaron la diferencia. 
                                                        Hoy contamos con una plataforma robusta preparada para crecer.”
                                                    </p>
                                                    <div className="testimonial-bottom-one">
                                                        <div className="thumbnail">
                                                            <img
                                                                src="assets/images/testimonials/02.png"
                                                                alt="business-testimonials"
                                                            />
                                                        </div>
                                                        <div className="details">
                                                            <a href="#">
                                                                <h5 className="title">Luciano Reyes</h5>
                                                            </a>
                                                            <span> </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial-inner">
                                                    <p className="disc text-start">
                                                        “Para el desarrollo de Vizta necesitábamos más que una aplicación funcional; requeríamos una plataforma SaaS sólida, 
                                                        escalable y preparada para crecer. Lapdev diseñó una arquitectura moderna, optimizó la experiencia de usuario y 
                                                        construyó una base tecnológica estable que hoy nos permite proyectar el producto a gran escala. 
                                                        Su enfoque estratégico fue clave en cada decisión.”
                                                    </p>
                                                    <div className="testimonial-bottom-one">
                                                        <div className="thumbnail">
                                                            <img
                                                                src="assets/images/testimonials/02.png"
                                                                alt="business-testimonials"
                                                            />
                                                        </div>
                                                        <div className="details">
                                                            <a href="#">
                                                                <h5 className="title">Elizabeth Quintanilla</h5>
                                                            </a>
                                                            <span> </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial-inner">
                                                    <p className="disc text-start">
                                                       “Para ATODOMOTOR necesitábamos más que desarrollo web: requeríamos arquitectura, integración y visión estratégica de crecimiento. 
                                                       Lapdev construyó una plataforma tecnológica preparada para alto tráfico, múltiples integraciones y evolución constante. 
                                                       Su enfoque técnico y estructural fue determinante para consolidar el proyecto.”
                                                    </p>
                                                    <div className="testimonial-bottom-one">
                                                        <div className="thumbnail">
                                                            <img
                                                                src="assets/images/testimonials/02.png"
                                                                alt="business-testimonials"
                                                            />
                                                        </div>
                                                        <div className="details">
                                                            <a href="#">
                                                                <h5 className="title">Agustin Araya</h5>
                                                            </a>
                                                            <span> </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                        <div className="swiper-button-next" />
                                        <div className="swiper-button-prev" />
                                    </div>
                                    {/* swiper area end */}
                                </div>
                            </div>
                            {/* end testimonials are */}
                            {/* images area */}
                            <div className="col-lg-5">
                             <div className="rts-test-one-image-inner">
                               <img
                                 src="assets/images/testimonials/Testimonios.png"
                                 alt="business_testimobials"
                                  style={{
                                    width: "80%",       // Cambia este valor (70%, 60%, etc.)
                                   height: "auto",
                                  display: "block",
                                   margin: "0 auto"    // Centra la imagen
                                 }}
                               />
                              </div>
                            </div>
                            {/* image area end */}
                        </div>
                    </div>
                </div>
                {/* start client feed back section End */}

            </div>
        </ErrorBoundary>
    )
}

export default TestimonialOne