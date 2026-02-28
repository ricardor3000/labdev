"use client"
import React from 'react'
import Link from 'next/link';
function ServiceOne() {
    return (
        <div>
            <>
                {/* rts service post area  Start*/}
                <div className="rts-service-area rts-section-gapBottom" id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="rts-title-area service text-center">
                                    <p className="pre-title">LapDev Servicios</p>
                                    <h2 className="title">Nuestros Servicios</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid service-main plr--120-service mt--50 plr_md--0 pl_sm--0 pr_sm--0">
                        <div className="background-service row">
                            {/* start single Service */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner one">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/01.svg"
                                            alt="finbiz_service"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link href={'/service-details'}>
                                            <h5 className="title">Desarrollo Web (Next.js/React)</h5>
                                        </Link>
                                        <p className="disc">
                                            Creamos aplicaciones web modernas, rápidas y escalables utilizando Next.js y React. 
                                            Desarrollamos experiencias optimizadas para rendimiento, SEO y usabilidad, con 
                                            arquitecturas limpias y mantenibles.
                                        </p>
                                        <Link
                                            className="rts-read-more btn-primary"
                                            href={'/service-details'}
                                        >
                                            <i className="far fa-arrow-right" />
                                           Más Información
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* end single Services */}
                            {/* start single Service */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner two">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/02.svg"
                                            alt="finbiz_service"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link href={'/service-details'}>
                                            <h5 className="title">Backend & APIs</h5>
                                        </Link>
                                        <p className="disc">
                                            Diseñamos y desarrollamos backends robustos y APIs seguras que garantizan rendimiento,
                                            escalabilidad e integración eficiente con otros sistemas. Trabajamos con arquitecturas modernas 
                                            y bases de datos optimizadas.
                                        </p>
                                        <Link
                                            className="rts-read-more btn-primary"
                                            href={'/service-details'}
                                        >
                                            <i className="far fa-arrow-right" />
                                            Más Información
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* end single Services */}
                            {/* start single Service */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner three">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/03.svg"
                                            alt="finbiz_service"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link href={'/service-details'}>
                                            <h5 className="title">Apps Mobile</h5>
                                        </Link>
                                        <p className="disc">
                                            Construimos aplicaciones móviles nativas o multiplataforma con enfoque en rendimiento, experiencia de usuario y estabilidad. 
                                            Desde el diseño hasta la publicación en stores, acompañamos todo el proceso.
                                        </p>
                                        <Link
                                            className="rts-read-more btn-primary"
                                            href={'/service-details'}
                                        >
                                            <i className="far fa-arrow-right" />
                                            Más Información
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* end single Services */}
                            {/* start single Service */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner four">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/04.svg"
                                            alt="finbiz_service"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link href={'/service-details'}>
                                            <h5 className="title">UX/UI & Product Design</h5>
                                        </Link>
                                        <p className="disc">
                                            Diseñamos productos digitales centrados en el usuario, combinando investigación, estrategia y diseño visual. 
                                            Creamos experiencias intuitivas que alinean objetivos de negocio con necesidades reales de los usuarios.
                                        </p>
                                        <Link
                                            className="rts-read-more btn-primary"
                                            href={'/service-details'}
                                        >
                                            <i className="far fa-arrow-right" />
                                            Más Información
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* end single Services */}
                            {/* start single Service */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner five">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/05.svg"
                                            alt="finbiz_service"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link href={'/service-details'}>
                                            <h5 className="title">DevOps/Cloud</h5>
                                        </Link>
                                        <p className="disc">
                                            Implementamos infraestructuras en la nube seguras y escalables. Automatizamos procesos de despliegue, 
                                            integración continua y monitoreo para garantizar eficiencia, estabilidad y crecimiento sostenible.
                                        </p>
                                        <Link
                                            className="rts-read-more btn-primary"
                                            href={'/service-details'}
                                        >
                                            <i className="far fa-arrow-right" />
                                            Más Información
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* end single Services */}
                            {/* start single Service */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner six">
                                    <div className="thumbnail">
                                        <img
                                            src="assets/images/service/icon/06.svg"
                                            alt="finbiz_service"
                                        />
                                    </div>
                                    <div className="service-details">
                                        <Link href={'/service-details'}>
                                            <h5 className="title">Mantenimiento / Soporte / Evolutivos</h5>
                                        </Link>
                                        <p className="disc">
                                            Ofrecemos soporte continuo, mejoras evolutivas y optimización constante de sistemas existentes. Aseguramos estabilidad, 
                                            actualización tecnológica y adaptación a nuevas necesidades del negocio.
                                        </p>
                                        <Link
                                            className="rts-read-more btn-primary"
                                            href={'/service-details'}
                                        >
                                            <i className="far fa-arrow-right" />
                                            Más Información
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* end single Services */}
                        </div>
                        <div className="row">
                             <div
                               className="cta-one-bg col-12"
                               style={{
                                 borderRadius: "20px",
                                 overflow: "hidden"
                            }}
                             >
                            <div className="cta-one-inner">
                                <div className="cta-left">
                                  <h3 className="title">
                                     Creamos Soluciones Digitales que Transforman Negocios
                                  </h3>
                                </div>
                                 <div className="cta-right">
                                   <Link className="rts-btn btn-white" href="appoinment.html">
                                     Contáctanos
                                   </Link>
                                </div>
                               </div>
                             </div>
                        </div>
                    </div>
                </div>
                {/* rts service post area ENd */}
            </>

        </div>
    )
}

export default ServiceOne