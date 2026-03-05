"use client"
import React, { useEffect } from 'react';
// import WOW from 'wow.js';


function AboutOne() {

    return (
        <div>

            {/* rts about us section start */}
            <div className="rts-about-area rts-section-gap bg-about-sm-shape" id="about">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        {/* about left */}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-md-2 order-sm-2 order-2 mt_md--50 mt_sm--50">
                            <div className="rts-title-area">
                                <p className="pre-title">ACERCA DE LAPDEV</p>
                                <h2 className="title">Desarrollamos Tecnología Estratégica para Empresas que Escalan</h2>
                            </div>
                            <div className="about-inner">
                                <p className="disc">
                                    En Lapdev diseñamos y desarrollamos soluciones digitales de alto impacto para empresas medianas y 
                                    grandes que buscan evolucionar con tecnología sólida, segura y preparada para el crecimiento. <br />

                                    Combinamos desarrollo a medida, arquitectura moderna, experiencia UX/UI estratégica y visión de negocio 
                                    para construir plataformas robustas que optimizan procesos, aumentan eficiencia y generan ventaja competitiva. <br />

                                    No construimos sitios web.
                                    Construimos infraestructura digital preparada para escalar. <br />

                                    Con más de 10 años de experiencia liderados por Adolfo Aliste, 
                                    trabajamos con foco en excelencia técnica, rendimiento y resultados 
                                    sostenibles en el tiempo.
                                </p>
                                {/* start about success area */}
                                <div className="row about-success-wrapper">
                                    {/* left wrapper start */}
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Desarrollo de Software Empresarial a Medida</p>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Aplicaciones Web de Alta Performance</p>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Apps Móviles Corporativas (iOS & Android)</p>
                                        </div>
                                    </div>
                                    {/* left wrapper end */}
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Arquitectura Moderna (React, Next.js, APIs escalables)</p>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Diseño UX/UI Estratégico orientado a negocio</p>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Mantenimiento, optimización y evolución continua</p>
                                        </div>
                                    </div>
                                </div>
                                {/* start about success area */}
                                {/* about founder & get in touch start */}
                                <div className="row about-founder-wrapper align-items-center mt--40">
                                    {/* left area start */}
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="author-inner">
                                            <a className="thumbnail" href="#">
                                                <img
                                                    src="assets/images/about/sm-01.png"
                                                    alt="finbiz_founder"
                                                />
                                            </a>
                                            <div className="founder-details">
                                                <a href="team-details.html">
                                                    <h6 className="title">Adolfo Aliste</h6>
                                                </a>
                                                <span>CEO & Founder</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* left area end */}
                                    {/* right founder area */}
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_sm--20">
                                        <div className="author-call-option">
                                            <img
                                                className="authore-call"
                                                src="assets/images/about/call.svg"
                                                alt="call_founder"
                                            />
                                            <div className="call-details">
                                                <span>Contáctanos</span>
                                                <a href="tel:+18475555555">
                                                    <h6 className="title">📞 +569 3653 3804</h6>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* left founder area */}
                                </div>
                                {/* about founder & get in touch end */}
                            </div>
                        </div>
                        {/* about right */}
                        {/* about-right Start*/}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-md-1 order-sm-1 order-1">
                            <div className="about-one-thumbnail">
                                <img
                                    src=" assets/images/about/main/about-01.png"
                                    alt="about-finbiz"
                                />
                                <img
                                    className="small-img"
                                    src="assets/images/about/main/devOps.png"
                                    alt="finbiz-small"
                                />
                                <div className="experience ">
                                    <div className="left single">
                                        <h2 className="title">5+</h2>
                                        <p className="time">Años</p>
                                    </div>
                                    <div className="right single">
                                        <p className="disc">Experiencia en desarrollo y Proyectos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* about-right end */}
                    </div>
                </div>
            </div>
            {/* rts about us section end */}

        </div >
    )
}

export default AboutOne