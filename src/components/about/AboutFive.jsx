import React from 'react'

function AboutFive() {
    return (
        <div>
            {/* rts about area start */}
            <div className="rts-about-area-start rts-section-gapBottom" id="about">
                <div className="container">
                    <div className="row align-items-center"  style={{marginTop:100}}>
                        <div className="col-lg-6 pr--70 pr_md--0 pr_sm--0">
                            <div className="title-area-style-six text-start">
                                <div className="pre-title">
                                    <img
                                        src="assets/images/banner/shape/pre-title.png"
                                        alt="pre-title"
                                    />
                                    <span className="pre">NUESTROS SERVICIOS</span>
                                    <img
                                        className="two"
                                        src="assets/images/banner/shape/pre-title.png"
                                        alt="pre-title"
                                    />
                                </div>
                                <h2 className="title">
                                    Soluciones tecnológicas <br />
                                    diseñadas para escalar
                                </h2>
                            </div>
                            <div className="about-content-inner-style-six">
                                <p className="disc">
                                    En Lapdev desarrollamos plataformas digitales, aplicaciones y 
                                    sistemas a medida para empresas que requieren arquitectura sólida, 
                                    integración de sistemas y crecimiento sostenido.
                                </p>
                                <p className="disc">
                                    Nuestro enfoque combina desarrollo, UX/UI y visión estratégica para construir 
                                    soluciones preparadas para operar en entornos reales y evolucionar en el tiempo.
                                </p>
                                <div className="item-check-inner">
                                    <div className="single-col">
                                        <div className="single-check">
                                            <i className="fas fa-check-circle" style={{ marginRight:7 }} />
                                             Desarrollo de software a medida.
                                        </div>
                                        <div className="single-check">
                                            <i className="fas fa-check-circle" style={{ marginRight:7 }} />
                                            Aplicaciones web y móviles escalables
                                        </div>
                                        <div className="single-check">
                                            <i className="fas fa-check-circle" style={{ marginRight:7 }} />
                                            Arquitectura backend y APIs
                                        </div>
                                    </div>
                                    <div className="single-col">
                                        <div className="single-check">
                                            <i className="fas fa-check-circle" style={{ marginRight:7 }} />
                                            Diseño UX/UI orientado a negocio
                                        </div>
                                        <div className="single-check">
                                            <i className="fas fa-check-circle" style={{ marginRight:7 }} />
                                            Integración de sistemas y automatización
                                        </div>
                                        <div className="single-check">
                                            <i className="fas fa-check-circle" style={{ marginRight:7 }} />
                                            Soporte y evolución tecnológica
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="thumbnail-about-six">
                                <img src="assets/images/about/02.png" alt="about-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts about area end */}
        </div>
    )
}

export default AboutFive