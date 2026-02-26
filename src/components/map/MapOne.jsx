"use client"
import React from 'react'
import Link from 'next/link';
function MapOne() {
    return (
        <div>
            {/* map area start */}
            <div className="rts-map-area bg-light-white" id='address'>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/* map area left */}
                            <div className="mapdetails-inner-one">
                                <div className="left-area single-wized">
                                    <h5 className="title">Contacto Ejecutivo</h5>
                                    <div className="details">
                                        <p>Proyectos tecnológicos empresariales</p>
                                        <Link className="number" href={'#'}>
                                            📞 +56 9 3653 3804
                                        </Link>
                                        <p className="time-header">Horario de atención</p>
                                        <p className="time">
                                            Lunes a viernes <br /> 09:00 – 18:00 hrs
                                        </p>
                                    </div>
                                </div>
                                <div className="right-area single-wized">
                                    <h5 className="title">Oficinas</h5>
                                    <div className="details">
                                        <p>Oficina Las Condes</p>
                                        <Link href={'#'}>
                                            Av. Apoquindo 6410, oficina 212, <br />
                                            CLas Condes, Santiago, Chile
                                        </Link>
                                        <p className="headoffice">Oficina Ñuñoa</p>
                                        <Link href={'#'}>
                                            Av. Ricardo Lyon 3521, Of. 02 <br />
                                            Ñuñoa, Santiago, Chile
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* map area right */}
                        </div>
                        <div className="col-lg-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.594082124474!2d-70.56684032325394!3d-33.40775277340649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cedd02bdc949%3A0x618b7b7c6f8a64!2sAv.%20Apoquindo%206410%2C%207560903%20Las%20Condes%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1772139591249!5m2!1ses-419!2scl"
                                width={600}
                                height={450}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* map area end */}
        </div>
    )
}

export default MapOne