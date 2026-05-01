"use client"
import React, { useState } from 'react';
import { Tabs, Tab, TabContent } from 'react-bootstrap';

function AboutCompany() {
    const [activeKey, setActiveKey] = useState('home');
    return (
        <div>
            {/* start about our company */}
            <div className="rts-about-our-company-h2 eight rts-section-gap" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt_sm--30 about-company-mobile-padding">
                            <div className="title-area about-company">
                                <span>SECTORES ESTRATÉGICOS</span>
                                <h2 className="title">
                                    Industrias donde la arquitectura digital <br />
                                    es un activo crítico
                                </h2>
                            </div>
                            <div className="about-company-wrapper">
                                <p className="disc">
                                    En Lapdev desarrollamos soluciones tecnológicas empresariales para 
                                    organizaciones que requieren <br /> sistemas sólidos, escalables 
                                    y preparados para crecimiento sostenido.
                                    Trabajamos en industrias donde la infraestructura<br /> digital impacta directamente en operaciones, eficiencia y competitividad.
                                    Nuestra experiencia combina arquitectura moderna, <br /> desarrollo a medida, integración de sistemas y visión estratégica de largo plazo.
                                </p>
                            
                                <div className="rts-tab-style-one">
                                    <div className="d-flex align-items-start contoler-company">
                                        <div className="nav flex-column nav-pills me-3 button-area" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <Tabs
                                                activeKey={activeKey}
                                                onSelect={(k) => setActiveKey(k)}
                                                id="controlled-tab-example"
                                                className="mb-3">
                                                <Tab eventKey="home" title="Logística & Transporte" />
                                                <Tab eventKey="two" title="Industria & Manufactura" />
                                                <Tab eventKey="three" title="Salud Privada & Clínicas" />
                                                <Tab eventKey="four" title="Energía & Utilities" />
                                                <Tab eventKey="five" title="Alimentos & Bebidas (Industrial y Comercial)" />
                                                <Tab eventKey="six" title="Fintech & Servicios Financieros" />
                                            </Tabs>
                                        </div>
                                        <div className="tab-content-wrapper">
                                            {activeKey === 'home' && (
                                                <TabContent>
                                                    {/* start tab content */}
                                                    <div className="rts-tab-content-one">
                                                        <p>
                                                            <img style={{ borderRadius: 20 }} src="https://trdsf.com/cdn/shop/articles/transportation-logistics.png?v=1704913187" alt="image" />
                                                        </p>
                                                        <p className="disc">
                                                            La industria logística requiere trazabilidad en tiempo real, integración entre sistemas y control operativo constante. En Lapdev desarrollamos plataformas digitales que centralizan información, automatizan procesos críticos y permiten visualizar operaciones desde un entorno unificado y escalable.
                                                        </p>
                                                        <p className="disc">
                                                            Diseñamos arquitecturas backend robustas, dashboards ejecutivos y sistemas integrados con ERP, GPS y plataformas externas, preparados para soportar alto volumen de datos y crecimiento sostenido.
                                                        </p>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Gestión de flotas
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Trazabilidad en tiempo real
                                                            </p>
                                                        </div>
                                                         <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Integraciones con ERP y bodegas
                                                            </p>
                                                        </div>
                                                         <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Dashboards operativos
                                                            </p>
                                                        </div>
                                                         <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Automatización de procesos logísticos
                                                            </p>
                                                        </div>
                                                        <a
                                                            className="rts-btn btn-primary-2 color-h-black"
                                                            href="/contacto"
                                                        >
                                                            Contáctanos
                                                        </a>
                                                    </div>
                                                    {/* start tab content End */}
                                                </TabContent>
                                            )}
                                            {activeKey === 'two' && (
                                                <TabContent>
                                                    {/* start tab content */}
                                                    <div className="rts-tab-content-one">
                                                        <p>
                                                            <img
                                                                style={{ borderRadius: 20 }}
                                                                src="https://www.plaremesa.net/wp-content/uploads/2020/12/SISTEMAS-VISION-AUTOMOTRIZ-FANUC-GR.jpg.webp"
                                                                alt="image"
                                                            />
                                                        </p>
                                                        <p className="disc">
                                                            Las empresas industriales enfrentan desafíos de control productivo, trazabilidad y digitalización de procesos. Construimos plataformas internas que conectan áreas operativas, automatizan reportes y mejoran la eficiencia productiva bajo estándares empresariales.
                                                        </p>
                                                        <p className="disc">
                                                            Desarrollamos soluciones integradas con maquinaria, ERP y sistemas internos, diseñadas para soportar operaciones complejas y escalar con la compañía.
                                                        </p>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                               Sistemas de trazabilidad productiva
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Plataformas internas de control
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Integración con maquinaria y ERP
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Reportes en tiempo real
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Digitalización de procesos operativos
                                                            </p>
                                                        </div>
                                                        <a
                                                            className="rts-btn btn-primary-2 color-h-black"
                                                            href="/contacto"
                                                        >
                                                            Contáctanos
                                                        </a>
                                                    </div>
                                                    {/* start tab content End */}
                                                </TabContent>
                                            )}
                                            {activeKey === 'three' && (
                                                <TabContent>
                                                    {/* start tab content */}
                                                    <div className="rts-tab-content-one">
                                                        <p>
                                                            <img
                                                                style={{ borderRadius: 20 }}
                                                                src="https://www.vitalseguro.com/wp-content/uploads/2022/02/centros-de-salud-privados.png"
                                                                alt="image"
                                                            />
                                                        </p>
                                                        <p className="disc">
                                                            El sector salud requiere estabilidad, seguridad y continuidad operativa. Diseñamos plataformas que optimizan la gestión de pacientes, digitalizan procesos internos y mejoran la experiencia tanto para usuarios como para equipos clínicos.
                                                        </p>
                                                         <p className="disc">
                                                            Desarrollamos sistemas seguros y escalables, preparados para integrarse con laboratorios, sistemas médicos y herramientas administrativas.
                                                        </p>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Sistemas de agenda avanzada
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Portales de pacientes
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Integración con sistemas clínicos
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Automatización de comunicación
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Gestión interna y reportes operativos
                                                            </p>
                                                        </div>
                                                        <a
                                                            className="rts-btn btn-primary-2 color-h-black"
                                                            href="/contacto"
                                                        >
                                                            Contáctanos
                                                        </a>
                                                    </div>
                                                    {/* start tab content End */}
                                                </TabContent>
                                            )}
                                            {activeKey === 'four' && (
                                                <TabContent>
                                                    {/* start tab content */}
                                                    <div className="rts-tab-content-one">
                                                        <p>
                                                            <img
                                                                style={{ borderRadius: 20 }}
                                                                src="assets/images/faq/steel-factory.webp"
                                                                alt="image"
                                                            />
                                                        </p>
                                                        <p className="disc">
                                                            Las empresas del sector energético operan con infraestructuras críticas que requieren monitoreo constante e integración de múltiples sistemas. Diseñamos plataformas que centralizan información operativa, automatizan reportes y permiten análisis en tiempo real bajo arquitecturas de alta disponibilidad.
                                                        </p>
                                                        <p className="disc">
                                                            Nuestras soluciones están preparadas para operar 24/7, integrarse con sistemas industriales y soportar grandes volúmenes de datos.
                                                        </p>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Plataformas de monitoreo en tiempo real
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Dashboards ejecutivos
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Integración con sistemas industriales
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Automatización de reportes regulatorios
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Gestión técnica interna
                                                            </p>
                                                        </div>
                                                        <a
                                                            className="rts-btn btn-primary-2 color-h-black"
                                                            href="/contacto"
                                                        >
                                                            Contáctanos
                                                        </a>
                                                    </div>
                                                    {/* start tab content End */}
                                                </TabContent>
                                            )}
                                            {activeKey === 'five' && (
                                                <TabContent>
                                                    {/* start tab content */}
                                                    <div className="rts-tab-content-one">
                                                        <p>
                                                            <img
                                                                style={{ borderRadius: 20 }}
                                                                src="https://img.interempresas.net/fotos/3285929.jpeg"
                                                                alt="image"
                                                            />
                                                        </p>
                                                        <p className="disc">
                                                            Las empresas del sector alimentos y bebidas gestionan procesos productivos, trazabilidad, inventario y distribución bajo estándares exigentes. En Lapdev desarrollamos plataformas que integran producción, logística y canales comerciales en un ecosistema digital escalable.
                                                        </p>
                                                        <p className="disc">
                                                            Diseñamos soluciones que mejoran la visibilidad operativa y permiten tomar decisiones basadas en datos en tiempo real.
                                                        </p>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                               Sistemas de trazabilidad de producción
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Gestión de inventario y distribución
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Integración con ERP
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Dashboards comerciales
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Ecommerce B2B/B2C integrado
                                                            </p>
                                                        </div>
                                                        <a
                                                            className="rts-btn btn-primary-2 color-h-black"
                                                            href="/contacto"
                                                        >
                                                            Contáctanos
                                                        </a>
                                                    </div>
                                                    {/* start tab content End */}
                                                </TabContent>
                                            )}
                                            {activeKey === 'six' && (
                                                <TabContent>
                                                    {/* start tab content */}
                                                    <div className="rts-tab-content-one">
                                                        <p>
                                                            <img
                                                                style={{ borderRadius: 20 }}
                                                                src="https://unidadlatina.org/wp-content/uploads/2024/04/fintech_america-960x540.jpg"
                                                                alt="image"
                                                            />
                                                        </p>
                                                        <p className="disc">
                                                            La industria financiera exige arquitectura segura, alto rendimiento y capacidad de integración avanzada. Desarrollamos plataformas transaccionales, sistemas de análisis y APIs robustas bajo estándares empresariales de seguridad y disponibilidad.
                                                        </p>
                                                        <p className="disc">
                                                            Cada solución se diseña con enfoque en escalabilidad, gobernanza técnica y sostenibilidad tecnológica.
                                                        </p>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Plataformas financieras
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Sistemas de scoring y análisis
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Integraciones con APIs bancarias
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Automatización de procesos financieros
                                                            </p>
                                                        </div>
                                                        <div className="check-area">
                                                            <i className="fas fa-check-circle" />
                                                            <p className="disc">
                                                                Dashboards ejecutivos
                                                            </p>
                                                        </div>
                                                        <a
                                                            className="rts-btn btn-primary-2 color-h-black"
                                                            href="/contacto"
                                                        >
                                                            Contáctanos
                                                        </a>
                                                    </div>
                                                    {/* start tab content End */}
                                                </TabContent>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start about our company End */}
        </div>
    )
}

export default AboutCompany