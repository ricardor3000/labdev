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
                                <p className="pre-title">IMPULSA TU CRECIMIENTO DIGITAL</p>
                                <h3 className="title feature-title">
                                    Tecnología diseñada para decisiones estratégicas
                                   
                                </h3>
                                <p>
                                    Lapdev trabaja con empresas que comprenden que la tecnología es un activo crítico de negocio. 
                                    Diseñamos e implementamos soluciones digitales con arquitectura sólida, 
                                    visión de largo plazo y estándares corporativos. <br />
                                    No buscamos volumen.
                                    Trabajamos con organizaciones que exigen excelencia técnica y compromiso estratégico.
                                </p>
                            </div>
                            <div className="feature-one-wrapper pl--30 mt--40 pl_sm--0">
                               {/*  <div className="single-feature-one">
                                    <i className="fal fa-check" />
                                    <p>Ventaja competitiva e innovación</p>
                                </div> */}
                                <div className="single-feature-one">
                                    <i className="fal fa-check" />
                                    <p>Arquitectura escalable y preparada para crecimiento</p>
                                </div>
                                <div className="single-feature-one">
                                    <i className="fal fa-check" />
                                    <p>Experiencia comprobada en proyectos empresariales</p>
                                </div>
                                <div className="single-feature-one">
                                    <i className="fal fa-check" />
                                    <p>Enfoque estratégico, no solo operativo</p>
                                </div>
                                <div className="single-feature-one">
                                    <i className="fal fa-check" />
                                    <p>Acompañamiento técnico continuo</p>
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