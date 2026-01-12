"use client"
import React from 'react'
import Link from 'next/link';
function Nav() {
    return (
        <div>
            <nav className="nav-main mainmenu-nav d-none d-xl-block">
                <ul className="mainmenu">
                    <li className="has-droupdown">
                        <Link className="nav-link" href={'#'} >
                            Home
                        </Link>
                        <ul className="submenu menu-link1">
                            <li className="menu-item">
                                <Link className="tag" href={'#'} >
                                    Multi Pages
                                </Link>
                                <ul>
                                    <li>
                                        <Link href={'/'}>Main Home</Link>
                                    </li>
                                    <li>
                                        <Link href={'/home-two'}>Consulting Home</Link>
                                    </li>
                                    <li>
                                        <Link href={'/home-three'}>Corporate Home</Link>
                                    </li>
                                    <li>
                                        <Link href={'/home-four'}>Insurance Home</Link>
                                    </li>
                                    <li>
                                        <Link href={'/home-five'}>Marketing Home</Link>
                                    </li>
                                    <li>
                                        <Link href={'/home-six'}>Home finance</Link>
                                    </li>
                                    <li>
                                        <Link href={'/home-seven'}>Human Resources</Link>
                                    </li>
                                    <li>
                                        <Link href={'/home-eight'}>IT Solutions</Link>
                                    </li>
                                    <li>
                                        <Link href={'/home-nine'}>Modern Agency</Link>
                                    </li>
                                    <li>
                                        <Link href={'/home-ten'}>Startup Agency</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <Link className="tag" href={'#'} >
                                    One Page
                                </Link>
                                <ul>
                                    <li>
                                        <Link href={'/onepage-one'}>Main Home</Link>
                                    </li>
                                    <li>
                                        <Link href={'/onepage-two'}>Consulting Home</Link>
                                    </li>
                                    <li>
                                        <Link href={'/onepage-three'}>Corporate Home</Link>
                                    </li>
                                    <li>
                                        <Link href={'/onepage-four'}>Insurance Home</Link>
                                    </li>
                                    <li>
                                        <Link href={'/onepage-five'}>Marketing Home</Link>
                                    </li>
                                    <li>
                                        <Link href={'/onepage-six'}>Home finance</Link>
                                    </li>
                                    <li>
                                        <Link href={'/onepage-seven'}>Human Resources</Link>
                                    </li>
                                    <li>
                                        <Link href={'/onepage-eight'}>IT Solutions</Link>
                                    </li>
                                    <li>
                                        <Link href={'/onepage-nine'}>Modern Agency</Link>
                                    </li>
                                    <li>
                                        <Link href={'/onepage-ten'}>Startup Agency</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link className="nav-link" href={'#'}>
                            Services
                        </Link>
                        <ul className="submenu menu-link3">
                            <li className="sub-droupdown">
                                <Link className="sub-menu-link" href={'#'}>
                                    Our Service
                                </Link>
                                <ul className="submenu third-lvl">
                                    <li>
                                        <Link href={'/our-service'}>Service 1</Link>
                                    </li>
                                    <li>
                                        <Link href={'/service-2'}>Service 2</Link>
                                    </li>
                                    <li>
                                        <Link href={'/service-3'}>Service 3</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href={'/service-details'}>Service Details</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link className="nav-link" href={'#'}>
                            Pages
                        </Link>
                        <ul className="submenu menu-link">
                            <li className="menu-item">
                                <Link className="tag" href={'#'}>
                                    Pages
                                </Link>
                                <ul>
                                    <li>
                                        <Link href={'/appoinment'}>Appoinment</Link>
                                    </li>
                                    <li>
                                        <Link href={'/about-us'}>About Us</Link>
                                    </li>
                                    <li>
                                        <Link href={'/pricing-plane'}>Price Plans</Link>
                                    </li>
                                    <li>
                                        <Link href={'/our-service'}>Our Services</Link>
                                    </li>
                                    <li>
                                        <Link href={'/testimonial-style-1'}>Testimonial</Link>
                                    </li>
                                    <li>
                                        <Link href={'/404'}>404 Page</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <Link className="tag" href={'#'}>
                                    Portfolio
                                </Link>
                                <ul>
                                    <li>
                                        <Link href={'/project'}>Portfolio Style 1</Link>
                                    </li>
                                    <li>
                                        <Link href={'/portfolio-style-2'}>
                                            Portfolio Style 2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/portfolio-style-3'}>
                                            Portfolio Style 3
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/portfolio-style-4'}>
                                            Portfolio Style 4
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/portfolio-style-5'}>
                                            Portfolio Style 5
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/project-details'}>Portfolio Details</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <Link className="tag" href={'#'}>
                                    Our Teams
                                </Link>
                                <ul>
                                    <li>
                                        <Link href={'/team'}>Team Style 1</Link>
                                    </li>
                                    <li>
                                        <Link href={'/team-style-2'}>Team Style 2</Link>
                                    </li>
                                    <li>
                                        <Link href={'/team-style-3'}>Team Style 3</Link>
                                    </li>
                                    <li>
                                        <Link href={'/team-style-4'}>Team Style 4</Link>
                                    </li>
                                    <li>
                                        <Link href={'/team-style-5'}>Team Style 5</Link>
                                    </li>
                                    <li>
                                        <Link href={'/team-details'}>Team Details</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link className="nav-link" href={'#'}>
                            Blog
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link href={'/blog-list'}>Blog List</Link>
                            </li>
                            <li>
                                <Link href={'/blog-grid'}>Blog Grid</Link>
                            </li>
                            <li>
                                <Link href={'/blog-details-default'}>Blog Details</Link>
                            </li>
                        </ul>
                    </li>
                    <li >
                        <Link className="nav-item" href={'/pricing-plane'}>
                            Pricing Plan
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-item" href={'/contactus'}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav