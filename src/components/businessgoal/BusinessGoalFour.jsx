"use client"
import React from 'react'
import  Link  from 'next/link';
function BusinessGoalFour() {
    return (
        <div>
            {/* rts service area start */}
            <div className="rts-service-area home-seven rts-section-gap" id='service'>
                <div className="shape-business-service">
                    <img src="assets/images/service/icon/shape-1.png" alt="shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-area-with-btn-home-6">
                                <div className="title-area-style-six text-start">
                                    <div className="pre-title">
                                        <img
                                            src="assets/images/banner/shape/pre-title.png"
                                            alt="pre-title"
                                        />
                                        <span className="pre">NUESTRA METODOLOGÍA</span>
                                        <img
                                            className="two"
                                            src="assets/images/banner/shape/pre-title.png"
                                            alt="pre-title"
                                        />
                                    </div>
                                    <h2 className="title">
                                        Estrategia, Arquitectura y <br /> Ejecución con Estándar Corporativo
                                    </h2>
                                </div>
                                <Link href={'/capacidades'} className="rts-btn btn-primary-5">
                                    Ver todas nuestras capacidades → <i className="fal fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--80">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="service-single-style-six">
                                <div className="icon">
                                    <img src="assets/images/service/icon/22.svg" alt="service_icon" />
                                </div>
                                <h5 className="title">Discovery Estratégico</h5>
                                <p className="disc">
                                    Antes de escribir una sola línea de código, analizamos el negocio, procesos, objetivos y proyección de crecimiento.<br />
                                    Definimos arquitectura, alcance y roadmap tecnológico con visión a largo plazo.<br />
                                  <strong>No improvisamos proyectos. Diseñamos sistemas.</strong> 
                                </p>
                             
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="service-single-style-six">
                                <div className="icon">
                                    <img src="assets/images/service/icon/23.svg" alt="service_icon" />
                                </div>
                                <h5 className="title">Arquitectura & Desarrollo</h5>
                                <p className="disc">
                                    Construimos soluciones con arquitecturas modernas, escalables y seguras.<br />
                                    Aplicamos buenas prácticas, estándares de calidad y metodologías ágiles que 
                                    garantizan eficiencia y control.<br />
                                    <strong>Cada decisión técnica tiene un propósito estratégico.</strong> 
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="service-single-style-six">
                                <div className="icon">
                                    <img src="assets/images/service/icon/24.svg" alt="service_icon" />
                                </div>
                                <h5 className="title">Evolución Continua</h5>
                                <p className="disc">
                                    Una plataforma empresarial no termina en el lanzamiento.<br />
                                    Implementamos monitoreo, optimización, mejoras evolutivas y soporte estratégico para garantizar estabilidad y crecimiento sostenido.<br />
                                    <strong>Nos convertimos en partner tecnológico, no en proveedor puntual.</strong> 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service area end */}
        </div>
    )
}

export default BusinessGoalFour