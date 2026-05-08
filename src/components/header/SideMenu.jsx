"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';

function SideMenu({ isSidebarOpen, toggleSidebar }) {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuhome) => {
        setOpenMenu(openMenu === menuhome ? null : menuhome);
    };
    return (
        <div>
            <div id="side-bar" className={`side-bar ${isSidebarOpen ? 'show' : ''}`}>
                <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
                    <i className="far fa-times"></i>
                </button>
                {/* inner menu area desktop start */}
                <div className="rts-sidebar-menu-desktop">
                    <a className="logo-1" href="/">
                        <img
                            className="logo"
                            src="/assets/images/logo/lapDevLogo20266.svg"
                            alt="finbiz_logo"
                            width={200}
                        />
                    </a>
                    <a className="logo-2" href="/">
                        <img
                            className="logo"
                            src="/assets/images/logo/lapDevLogo20266.svg"
                            alt="finbiz_logo"
                            width={200}
                        />
                    </a>
                    <a className="logo-3" href="/">
                        <img
                            className="logo"
                            src="/assets/images/logo/lapDevLogo20266.svg"
                            alt="finbiz_logo"
                            width={200}
                        />
                    </a>
                    <a className="logo-4" href="/">
                        <img
                            className="logo"
                            src="/assets/images/logo/lapDevLogo20266.svg"
                            alt="finbiz_logo"
                            width={200}
                        />
                    </a>
                    <div className="body d-none d-xl-block">
                        <p className="disc">
                            Somos una empresa especializada en el desarrollo de software a medida, 
                            aplicaciones web y apps móviles diseñadas para potenciar el 
                            crecimiento digital de nuestros clientes.
                        </p>
                        <div className="get-in-touch">
                            {/* title */}
                            <div className="h6 title">Contáctanos</div>
                            {/* title End */}
                            <div className="wrapper">
                                {/* single */}
                               <div className="single">
                                  <i className="fas fa-phone-alt" />
                                  <a href="tel:+56936533804">+56 9 3653 3804</a>
                                </div>
                                {/* single ENd */}
                                {/* single */}
                               <div className="single">
                                  <i className="fas fa-envelope" />
                                  <a href="mailto:contacto@lapdev.cl">contacto@lapdev.cl</a>
                                </div>
                                {/* single ENd */}
                                {/* single */}
                                <div className="single">
                                    <i className="fas fa-globe" />
                                    <Link href="#">www.lapdev.cl</Link>
                                </div>
                                {/* single ENd */}
                                {/* single */}
                                <div className="single">
                                    <i className="fas fa-map-marker-alt" />
                                    <Link target='blank' href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.5991691101904!2d-70.56685688755269!3d-33.40762009521125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf07a0efeec9%3A0x8f3a6aa8900fe03!2sAv.%20Apoquindo%206410%2C%20Oficina%20212%2C%207550000%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1776705571005!5m2!1ses-419!2scl">Av. Apoquindo 6410, oficina 212, Las Condes, Santiago, Chile</Link>
                                </div>
                                <div className="single">
                                    <i className="fas fa-map-marker-alt" />
                                    <Link target='blank' href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.8296100935268!2d-70.6050486876818!3d-33.453745473277046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf96a2e950af%3A0x135e3959b6b3f185!2sAv.%20Ricardo%20Lyon%203521%2C%20Of.%2002%2C%207770562%20%C3%91u%C3%B1oa%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1776705690076!5m2!1ses-419!2scl">Av. Ricardo Lyon 3521, Of. 02 Ñuñoa, Santiago, Chile</Link>
                                </div>
                                {/* single ENd */}
                            </div>
                            <div className="social-wrapper-two menu">
                                <Link target='blank' href={'https://www.linkedin.com/company/lapdev/'}>
                                    <i className="fab fa-linkedin" />
                                </Link>
                                <Link href="#">
                                    <i className="fab fa-instagram" />
                                </Link>
                                <Link href="#">
                                    <i className="fab fa-facebook-f" />
                                </Link>     
                                <Link href="#">
                                    <i className="fab fa-whatsapp" />
                                </Link>
                                {/* <Link href="#"><i class="fab fa-linkedin"></i></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="body-mobile d-block d-xl-none">
                        <nav className="nav-main mainmenu-nav">
                            <ul className="mainmenu metismenu" id="mobile-menu-active">
                                <li className="menu-item">
                                    <Link className="menu-link" href="/" onClick={() => toggleMenu(1)}>
                                        Inicio
                                    </Link>
                                   {/*  <ul className={`submenu ${openMenu === 1 ? 'mm-collapse mm-show' : 'mm-collapse'}`} >
                                        <li>
                                            <ul>
                                                <Link href="#0" className="tag">
                                                    Homepages
                                                </Link>
                                                <li className="mobile-menu-link">
                                                    <Link href={'/'}>Main Home</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link href={'/home-two'}>Consulting Home</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link href={'/home-three'}>Corporate Home</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link href={'/home-four'}>Insurance Home</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link href={'/home-five'}>Marketing Home</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link href={'/home-six'}>Finance Home</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link href={'/home-seven'}>Human Resources</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link href={'/home-eight'}>IT Solutions</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link href={'/home-nine'}>Modern Agency</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link href={'/home-ten'}>Startup Agency</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul> */}
                                </li>
                               {/*  <li className="menu-item">
                                    <Link className="menu-link" href={'/about-us'}>
                                        Servicios
                                    </Link>
                                </li> */}
                                <li className="has-droupdown menu-item">
                                    <Link className="menu-link" href="/servicios" onClick={() => toggleMenu(2)}>
                                        Servicios
                                    </Link>
                                    <ul className={`submenu ${openMenu === 2 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                        <li>
                                            <Link href={'/service-details/desarrollo-web'}>Desarrollo Web (Next.js / React)</Link>
                                        </li>
                                        <li>
                                            <Link href={'/service-details/backend-apis'}>Backend & APIs</Link>
                                        </li>
                                        <li>
                                            <Link href={'/service-details/apps-mobile'}>Apps Mobile</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/service-details/ux-ui'}>UX/UI</Link>
                                        </li>
                                         <li className="mobile-menu-link">
                                            <Link href={'/service-details/devops'}>DevOps & Cloud</Link>
                                        </li>
                                         <li className="mobile-menu-link">
                                            <Link href={'/service-details/soporte'}>Mantenimiento / Soporte</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <Link className="menu-link" href="/blog-grid" onClick={() => toggleMenu(3)}>
                                        Blog
                                    </Link>
                                    {/* <ul className={`submenu ${openMenu === 3 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                        <li className="mobile-menu-link">
                                            <Link href={'/project'}>Project</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/project-details'}>Project Details</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/team'}>Team</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/team-details'}>Team Details</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/appoinment'}>appoinment</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/pricing-plane'}>Price Plan</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/404'}>404 Page</Link>
                                        </li>
                                    </ul> */}
                                </li>
                              {/*   <li className="has-droupdown menu-item">
                                    <Link className="menu-link" href="#" onClick={() => toggleMenu(4)}>
                                        Blog
                                    </Link>
                                    <ul className={`submenu ${openMenu === 4 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                        <li className="mobile-menu-link">
                                            <Link href={'/blog-list'}>Blog List</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/blog-grid'}>Blog Grid</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href={'/blog-details-default'}>Blog Details</Link>
                                        </li>
                                    </ul>
                                </li> */}
                                <li className="menu-item menu-item">
                                    <Link className="menu-link" href="/nosotros">
                                        Nosotros
                                    </Link>
                                </li>
                                <li className="menu-item menu-item">
                                    <Link className="menu-link" href="/contacto">
                                        Contacto
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="social-wrapper-two menu mobile-menu">
                            <Link  href={'https://www.linkedin.com/company/lapdev/'}>
                                 <i className="fab fa-linkedin" />
                            </Link>
                            <Link href="#">
                                 <i className="fab fa-instagram" />
                            </Link>
                            <Link href="#">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            <Link href="#">
                                <i className="fab fab fa-whatsapp" />
                            </Link>
                            {/* <Link href="#"><i class="fab fa-linkedin"></i></Link> */}
                        </div>
                        <Link
                            href="/contacto"
                            className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu"
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>
                {/* inner menu area desktop End */}
            </div>
        </div>
    )
}

export default SideMenu