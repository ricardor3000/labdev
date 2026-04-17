"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";

export default function Home() {
    const breadcrumbs = [
        { label: 'Inicio', link: '/' },
        { label: 'Contacto' }
    ];
    return (

        <div className="">
            <HeaderOne />

            <Breadcrumb title="Contacto" breadcrumbs={breadcrumbs} />


            {/* contact single area start */}
            <div className="rts-contact-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        {/* single contact area */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/contacto1.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/01.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Teléfono</span>
                                        <Link href={'tel:+56936533804'}>
                                            <h5>+56 9 3653 3804</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                        {/* single contact area */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/contacto2.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/02.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Correo electrónico</span>
                                        <Link href={'mailto:contacto@lapdev.cl'}>
                                            <h5>contacto@lapdev.cl</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                        {/* single contact area */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/contacto3.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/03.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Oficina</span>
                                        <Link href={'#'}>
                                            <h5>Av. Apoquindo 6410</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                    </div>
                </div>
            </div>
            {/* conact single area end */}
            {/* bizup map area start */}
            <div className="rts-contact-map-area">
                <div className="contaciner-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-map-area-fluid">
                                <iframe
                                    className="contact-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.6031765495604!2d-70.56707978768301!3d-33.407515573295626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cedd02bdc949%3A0x618b7b7c6f8a64!2sAv.%20Apoquindo%206410%2C%207550000%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1776209076311!5m2!1ses-419!2scl"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <img
                                    className="location"
                                    src="assets/images/contact/shape/location.svg"
                                    alt="Business_map"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bizup map area end */}
            {/* conact us form fluid start */}
            <div className="rts-contact-form-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-contact-fluid rts-section-gap">
                                <div className="rts-title-area contact-fluid text-center mb--50">
                                    <p className="pre-title">Contáctanos</p>
                                    <h2 className="title">¿Necesitas ayuda? Pongámonos en contacto</h2>
                                </div>
                                <div className="form-wrapper">
                                    <div id="form-messages" />
                                    <form id="contact-form">
                                        <div className="name-email">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Nombre y Apellido"
                                                required=""
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Correo Electrónico"
                                                required=""
                                            />
                                        </div>
                                        <input type="text" name="subject" placeholder="Nombre EMPRESA" />
                                        <input type="text" name="subject" placeholder="Asunto" />
                                        <textarea
                                            placeholder="Tu mensaje"
                                            name="message"
                                            defaultValue={""}
                                        />
                                        <button type="submit" className="rts-btn btn-primary">
                                            Enviar Mensaje
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* conact us form fluid end */}


            <FooterOne />
            <BackToTop />
        </div>

    );
}
