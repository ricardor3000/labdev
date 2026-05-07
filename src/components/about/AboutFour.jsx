import React from 'react'
function AboutFour() {
    return (
        <div>
            {/* rts about area start */}
            <div className="rts-about-area rts-section-gap about-home-seven" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 about-four-image-mobile">
                            <div className="thumbnail">
                                <img src="assets/images/about/main/nosotros2.png" className='shadow-lg' style={{borderRadius:20}} alt="about_image" />
                                <img
                                    src="assets/images/about/main/about-02-sm.jpg"
                                    alt="small"
                                    className="small"
                                />
                               {/*  <div className="experience-area four">
                                    <h2 className="title">+5</h2>
                                    <span>Años de experiencia</span>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6 about-four-mobile-padding">
                            <div className="text-start home-seven-about">
                                <p className="pre-title">MÁS QUE CÓDIGO, CONSTRUIMOS PRODUCTOS</p>
                                <h3 className="title">
                                    Ingeniería de Software diseñada para escalar tu visión de negocio.
                                </h3>
                            </div>
                            <div className="inner-about-home-7">
                                <p className="disc">
                                    En LapDev, no solo desarrollamos aplicaciones; resolvemos cuellos de botella tecnológicos. 
                                    Nos especializamos en modernizar infraestructuras digitales utilizando ecosistemas 
                                    de alto rendimiento como React y Next.js. Ayudamos a empresas B2B a transformar 
                                    procesos complejos en experiencias de usuario fluidas, robustas y, sobre todo, rentables.
                                </p>
                               
                                {/* ingle about start */}
                                <div className="about-single-home-7">
                                    <div className="icon">
                                        <img src="assets/images/about/main/icon/02.svg" alt="" />
                                    </div>
                                    <div className="discription">
                                        <h6 className="title">Arquitectura Next.js & React de Alto Nivel</h6>
                                        <p className="disc">
                                            Implementamos soluciones con renderizado del lado del servidor (SSR) y 
                                            generación estática (SSG) para garantizar tiempos de carga instantáneos 
                                            y un SEO técnico impecable que posiciona tu marca.
                                        </p>
                                    </div>
                                </div>
                                {/* ingle about end */}
                                {/* ingle about start */}
                                <div className="about-single-home-7">
                                    <div className="icon">
                                        <img src="assets/images/about/main/icon/03.svg" alt="" />
                                    </div>
                                    <div className="discription">
                                        <h6 className="title">Diseño UI/UX Centrado en la Conversión</h6>
                                        <p className="disc">
                                             Nuestras interfaces no solo son atractivas; están diseñadas bajo principios 
                                             de usabilidad B2B para reducir la fricción en el funnel de ventas y 
                                             mejorar la retención de tus usuarios.
                                        </p>
                                    </div>
                                </div>
                                {/* ingle about end */}
                                 {/* ingle about start */}
                                <div className="about-single-home-7">
                                    <div className="icon">
                                        <img src="assets/images/about/main/icon/01.svg" alt="" />
                                    </div>
                                    <div className="discription">
                                        <h6 className="title">Integración y Escalabilidad Ágil </h6>
                                        <p className="disc">
                                            Desplegamos microservicios y APIs robustas que permiten que tu 
                                            software crezca al mismo ritmo que tu empresa, 
                                            sin deudas técnicas ni re-trabajos costosos.
                                        </p>
                                    </div>
                                </div>
                                {/* ingle about end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts about area end */}
        </div>
    )
}

export default AboutFour