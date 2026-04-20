"use client"
import React from 'react'
import Link from 'next/link';
function FooterOne() {
    return (
        <div>

            {/* rts footer area start */}
            <div className="rts-footer-area footer-one rts-section-gapTop bg-footer-one" id='f-contact'>
                <div className="container bg-shape-f1">
                    {/* footer call to action area */}
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-cta-wrapper">
                                <div className="background-cta">
                                    <div className="row">
                                        {/* cta-left */}
                                        <div className="col-lg-6">
                                            <div className="cta-left-wrapepr">
                                                <p className="cta-disc">Únete gratis y recibe valor real en cada edición</p>
                                                <h3 className="title">📩 Suscríbete y forma parte de nuestra comunidad tech</h3>
                                            </div>
                                        </div>
                                        {/* cta left end */}
                                        <div className="col-lg-6">
                                            {/* cta right */}
                                            <form className="cta-input-arae">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Ingresa tu E-mail"
                                                    required=""
                                                />
                                                <button type="submit" className="rts-btn btn-primary">
                                                   Suscríbete ahora
                                                </button>
                                            </form>
                                            {/* cta right End */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* footer call to action area End */}
                    {/* rts footer area */}
                    <div className="row pt--120 pt_sm--80 pb--80 pb_sm--40">
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                            <div className="footer-one-single-wized">
                                <div className="wized-title">
                                    <h5 className="title">Menú</h5>
                                    <img
                                        src="/assets/images/footer/under-title.png"
                                        alt="finbiz_footer"
                                    />
                                </div>
                                <div className="quick-link-inner">
                                    <ul className="links">
                                        <li>
                                            <Link href={'/'}>
                                                <i className="far fa-arrow-right" /> Inicio
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'#'}>
                                                <i className="far fa-arrow-right" /> Servicios
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'#'}>
                                                <i className="far fa-arrow-right" /> Desarrollo Web - Next.js
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'#'}>
                                                <i className="far fa-arrow-right" /> Backend & APIs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'#'}>
                                                <i className="far fa-arrow-right" /> Apps Mobile
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="links margin-left-70">
                                        <li>
                                            <Link href={'#'}>
                                                <i className="far fa-arrow-right" /> UX/UI
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'#'}>
                                                <i className="far fa-arrow-right" /> DevOps
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'#'}>
                                                <i className="far fa-arrow-right" />
                                                Soporte
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'#'}>
                                                <i className="far fa-arrow-right" />
                                                Blog
                                            </Link>
                                        </li>
                                         <li>
                                            <Link href={'#'}>
                                                <i className="far fa-arrow-right" />
                                                Contacto
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* footer mid area */}
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                            <div className="footer-one-single-wized mid-bg">
                                <div className="wized-title">
                                    <h5 className="title">Horarios</h5>
                                    <img
                                        src="/assets/images/footer/under-title.png"
                                        alt="finbiz_footer"
                                    />
                                </div>
                                <div className="opening-time-inner">
                                    <div className="single-opening">
                                        <p className="day">Lunes a Viernes</p>
                                        <p className="time">09.00 - 18:00</p>
                                    </div>
                                    <div className="single-opening">
                                        <p className="day">Sabados</p>
                                        <p className="time">09:00 - 01.00</p>
                                    </div>
                                  {/*   <div className="single-opening mb--30 mb_sm--10">
                                        <p className="day">Domingos</p>
                                        <p className="time">Day Off</p>
                                    </div> */}
                                    <Link href={'/contact0'} className="rts-btn btn-primary contact-us">
                                        Contáctanos
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* footer mid area end */}
                        {/* footer end area post */}
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                            <div className="footer-one-single-wized margin-left-65">
                                <div className="wized-title">
                                    <h5 className="title">Ultimas Noticias</h5>
                                    <img
                                        src="/assets/images/footer/under-title.png"
                                        alt="finbiz_footer"
                                    />
                                </div>
                                <div className="post-wrapper">
                                    {/* single post */}
                                    <div className="single-footer-post mb--30">
                                        <div className="left-thumbnail" style={{width:190}}>
                                            <img
                                                src="/assets/images/blog/APIREST2.png"
                                                alt="finbiz_business-post"
                                            />
                                        </div>
                                        <div className="post-right">
                                            <p>
                                                {" "}
                                                <i className="fal fa-clock" /> 15th April, 2024
                                            </p>
                                            <Link href={'/blog-grid/3'}>
                                                <h6 className="title">
                                                    APIs Seguras y Escalables para Integración
                                                </h6>
                                            </Link>
                                            <Link className="red-more" href={'/blog-grid/3'}>
                                               Seguir Leyendo
                                                <i className="far fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single post End */}
                                    {/* single post */}
                                    <div className="single-footer-post">
                                        <div className="left-thumbnail" style={{width:140}}>
                                            <img
                                                src="/assets/images/blog/backendEmpresas.webp"
                                                alt="finbiz_business-post"
                                            />
                                        </div>
                                        <div className="post-right">
                                            <p>
                                                {" "}
                                                <i className="fal fa-clock" /> 15th April, 2022
                                            </p>
                                            <Link href={'/blog-grid/2'}>
                                                <h6 className="title">
                                                    Desarrollo de Backend Robusto
                                                </h6>
                                            </Link>
                                            <Link className="red-more" href={'/blog-grid/2'}>
                                                Seguir Leyendo
                                                <i className="far fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single post End */}
                                </div>
                            </div>
                        </div>
                        {/* footer end area post end*/}
                    </div>
                    {/* rts footer area End */}
                </div>
                {/* copyright area start */}
                <div className="rts-copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center">
                                    <p>FINBIZ - Copyright 2022. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* copyright area end */}
            </div>
            {/* rts footer area end */}

        </div>
    )
}

export default FooterOne