"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import HeaderOne from "@/components/header/HeaderOne";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import BlogListMain from "./BlogListMain";
import Posts from "@/data/Posts.json";


export default function Home() {
    const breadcrumbs = [
        { label: 'Inicio', link: '/' },
        { label: 'Blog Lapdev' }
    ];
    return (

        <div className="">
            <HeaderOne />

           {/*  <Breadcrumb title="Blog Lapdev" breadcrumbs={breadcrumbs} /> */}

            <BackToTop />

            {/* rts blog grid area */}
            <div className="rts-blog-grid-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-8 col-md-12 col-sm-12 col-12 pr--40 pr_md--0 pr_sm-controler--0">
                            <div className="row g-5">

                                {Posts.map((data, index) => {
                                    return (
                                        <div key={index} className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="blog-grid-inner">
                                                {
                                                    <BlogListMain
                                                        blogCategory={data.category}
                                                        Slug={data.slug}
                                                        blogImage={`${data.image}`}
                                                        authorImg={`${data.authorImg}`}
                                                        blogTitle={data.title}
                                                        blogAuthor={data.author}
                                                        blogPublishedDate={data.publishedDate}
                                                    />
                                                }
                                            </div>

                                        </div>
                                    )
                                }).slice(1, 5)}

                            </div>
                            {/* pagination area */}
                            <div className="row mt--30">
                                <div className="col-12">
                                    <div className="text-center">
                                        <div className="pagination">
                                            <button className="active">01</button>
                                            <button>02</button>
                                            <button>03</button>
                                            <button>04</button>
                                            <button>
                                                <i className="fal fa-angle-double-right" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* pagination area End */}
                        </div>
                        {/*rts blog wized area */}
                        <div className="col-xl-4 col-md-12 col-sm-12 col-12">
                            {/* single wized start */}
                            <div className="rts-single-wized search">
                                <div className="wized-header">
                                    <h5 className="title">Buscar</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="rts-search-wrapper">
                                        <input
                                            className="Search"
                                            type="text"
                                            placeholder="Buscador"
                                        />
                                        <button>
                                            <i className="fal fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* single wized End */}
                            {/* single wized start */}
                            <div className="rts-single-wized Categories">
                                <div className="wized-header">
                                    <h5 className="title">Categorias</h5>
                                </div>
                                <div className="wized-body">
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Tecnología <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Desarrollo
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Devops
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Apps
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link href={'#'}>
                                                Diseño web
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                </div>
                            </div>
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized Recent-post">
                                <div className="wized-header">
                                    <h5 className="title">Ùltimas Noticias</h5>
                                </div>
                                <div className="wized-body">
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/backendEmpresas.webp"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 feb, 2025</span>
                                            </div>
                                            <Link className="post-title" href={'#'}>
                                                <h6 className="title">
                                                    Desarrollo de Backend Robusto para Plataformas Empresariales
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail" style={{width:"490px"}}>
                                            <Link href={'#'}>
                                                <img
                                                     src="assets/images/blog/APIREST2.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Feb, 2025</span>
                                            </div>
                                            <Link className="post-title" href={'#'}>
                                                <h6 className="title">
                                                    APIs Seguras y Escalables para Integración de Sistemas: El Cimiento de la Agilidad Empresarial
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/desarrollo-backend.jpg"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Feb, 2025</span>
                                            </div>
                                            <Link className="post-title" href={'#'}>
                                                <h6 className="title">
                                                   Infraestructura Backend para Operaciones Digitales Complejas
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                               {/*      <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/recent-post/04.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Feb, 2026</span>
                                            </div>
                                            <Link className="post-title" href={'#'}>
                                                <h6 className="title">
                                                    Infraestructura Backend para Operaciones Digitales Complejas
                                                </h6>
                                            </Link>
                                        </div>
                                    </div> */}
                                    {/* recent-post End */}
                                </div>
                            </div>
                            {/* single wized End */}
                            {/* single wized start */}
                          {/*   <div className="rts-single-wized Recent-post">
                                <div className="wized-header">
                                    <h5 className="title">Recent Posts</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="gallery-inner">
                                        <div className="row-1 single-row">
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/01.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/02.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/03.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                        </div>
                                        <div className="row-2 single-row">
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/04.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/05.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                            <Link href={'#'}>
                                                <img
                                                    src="assets/images/blog/details/gallery/06.png"
                                                    alt="Gallery"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* single wized End */}
                            {/* single wized start */}
                          {/*   <div className="rts-single-wized">
                                <div className="wized-header">
                                    <h5 className="title">Enlaces</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="tags-wrapper">
                                        <Link href={'#'}>Servicios</Link>
                                        <Link href={'#'}>Contacto</Link>
                                        <Link href={'#'}>Noticias</Link>
                                        <Link href={'#'}>Inicio</Link>
                                        
                                    </div>
                                </div>
                            </div> */}
                            {/* single wized End */}
                            {/* single wized start */}
                            <div className="rts-single-wized contact" style={{backgroundColor:"#f2f2f2"}}>
                                <div className="wized-header">
                                    <Link target='blank' href="https://api.whatsapp.com/send?phone=+56936533800&text=Quiero%20informaci%C3%B3n">
                                        <img src="assets/images/logo/lapDevLogo20266.svg" alt="Business_logo" width={240} />
                                    </Link>
                                </div>
                                <div className="wized-body">
                                    <h5 className="title" style={{color:"#1D2539"}}>Necesitas ayuda. Tenemos la solución que necesitas.?</h5>
                                    <Link className="rts-btn btn-primary" href="/contacto">
                                        Contáctanos
                                    </Link>
                                </div>
                            </div>
                            {/* single wized End */}
                        </div>
                        {/* rts- blog wized end area */}
                    </div>
                </div>
            </div>
            {/* rts blog grid area end */}


            <FooterOne />
        </div>

    );
}
