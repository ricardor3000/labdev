"use client"
import React from 'react'

function Feature() {
    return (
        <div>
            {/* rts features area start */}
            <div className="rts-feature-area rts-section-gap">
                <div className="container-fluid padding-controler plr--120">
                    <div className="row bg-white-feature  pt--120 pb--120">
                        <div className="col-xl-6 col-lg-12">
                            <div className="feature-left-area">
                                <img src="assets/images/feature/tablet2211.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="rts-title-area feature text-start pl--30 pl_sm--0">
                                <p className="pre-title">Escalabilidad sin límites</p>
                                <h2 className="title feature-title">
                                    Transforma tu empresa, <br /> optimiza tus servicios 
                                   
                                </h2>
                                <p>
                                    Un Sistema SaaS (Software as a Service) es un modelo de negocio donde una 
                                    empresa desarrolla una plataforma digital accesible desde la nube, permitiendo 
                                    a sus clientes usar el software mediante suscripción, sin necesidad de 
                                    instalaciones locales ni infraestructura compleja.
                                </p>
                            </div>
                            <div className="feature-one-wrapper pl--30 mt--40 pl_sm--0">
                               {/*  <div className="single-feature-one">
                                    <i className="fal fa-check" />
                                    <p>Ventaja competitiva e innovación</p>
                                </div> */}
                                <div className="single-feature-one">
                                    <i className="fal fa-check" />
                                    <p>Automatización de procesos internos</p>
                                </div>
                                <div className="single-feature-one">
                                    <i className="fal fa-check" />
                                    <p>Accesibilidad 24/7 desde cualquier lugar</p>
                                </div>
                                <div className="single-feature-one">
                                    <i className="fal fa-check" />
                                    <p>Mejora continua del servicio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts features area end */}
        </div>
    )
}

export default Feature