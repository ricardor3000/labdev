"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import HeaderOne from "@/components/header/HeaderOne";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import Posts from "@/data/Posts.json";


export default function Home() {
    const breadcrumbs = [
        { label: 'Inicio', link: '/' },
        { label: 'Blog Detalle' }
    ];


    const { slug } = useParams(); // Get the slug from URL parameters
    const blogPost = Posts.find(post => post.slug === slug);

    if (!blogPost) {
        return <div>Post no encontrado!</div>;
    }





    return (

        <div className="">
            <HeaderOne />
            <BackToTop />
            <Breadcrumb title="Blog Detalle" breadcrumbs={breadcrumbs} />




            {/* rts blog mlist area */}
            <div className="rts-blog-list-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        {/* rts blo post area */}
                        <div className="col-xl-8 col-md-12 col-sm-12 col-12">
                            {/* single post */}
                            <div className="blog-single-post-listing details mb--0">
                                <div className="thumbnail">
                                    <img src={`/assets/images/blog/${blogPost.bannerImg}`}
                                        alt={blogPost.title} />
                                </div>
                                <div className="blog-listing-content">
                                    <div className="user-info">
                                        {/* single info */}
                                        <div className="single">
                                            <i className="far fa-user-circle" />
                                            <span>by Lapdev</span>
                                        </div>
                                        {/* single infoe end */}
                                        {/* single info */}
                                        <div className="single">
                                            <i className="far fa-clock" />
                                            <span>by David Smith</span>
                                        </div>
                                        {/* single infoe end */}
                                        {/* single info */}
                                        <div className="single">
                                            <i className="far fa-tags" />
                                            <span>by David Smith</span>
                                        </div>
                                        {/* single infoe end */}
                                    </div>
                                    <h3 className="title">{blogPost.title}</h3>
                                    <p className="disc para-1">
                                        {blogPost.descripTion}
                                    </p>
                                    <p className="disc">
                                        {blogPost.description2}
                                    </p>
                                    {/* quote area start */}
                                   {/*  <div className="rts-quote-area text-center">
                                        <h5 className="title">
                                            “Placerat pretium tristique mattis tellus accuan metus
                                            dictumst vivamus odio nulla fusce auctor into suscipit
                                            habitasse class congue potenti iaculis”
                                        </h5>
                                        <a href="#" className="name">
                                            Daniel X. Horrar
                                        </a>
                                        <span>Author</span>
                                    </div> */}

                                    <h4 className="title mt--40 mt_sm--20">
                                        {blogPost.section1Title}
                                    </h4>

                                    {/* quote area end */}
                                    <p className="disc">
                                        {blogPost.section1description}
                                    </p>

                                    <h5 className="title mt--40 mt_sm--20">
                                        {blogPost.subtitleDescription}
                                    </h5>

                                    <p className="disc">
                                        {blogPost.section1description2}
                                    </p>

                                    <h5 className="title mt--40 mt_sm--20">
                                        {blogPost.subtitle2Description}
                                    </h5>

                                    <div className="row align-items-center mb--40">
                                        
                                        <div className="col-lg-12">
                                            <div className="check-area-details">
                                                {/* single check */}
                                                <div className="single-check">
                                                    {/* <i className="far fa-check-circle" /> */}
                                                    <span>{blogPost.listDescription1}</span>
                                                </div>
                                                {/* single check End */}
                                                {/* single check */}
                                                <div className="single-check">
                                                   {/*  <i className="far fa-check-circle" /> */}
                                                    <span>{blogPost.listDescription2}</span>
                                                </div>
                                                {/* single check End */}
                                                {/* single check */}
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row g-5">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="thumbnail details">
                                                <img
                                                    src="/assets/images/blog/details/01.jpg"
                                                    alt="finbiz_buseness"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="thumbnail details">
                                                <img
                                                    src="/assets/images/blog/details/02.jpg"
                                                    alt="finbiz_buseness"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="title mt--40 mt_sm--20">
                                        {blogPost.subtitleDescription3}
                                    </h4>
                                    <p className="disc mb--25">
                                         {blogPost.description3}
                                    </p>

                                    <h4 className="title mt--40 mt_sm--20">
                                        {blogPost.section2Title}
                                    </h4>
                                    
                                    <p className="disc mt--30">
                                        {blogPost.section2description}
                                    </p>

                                    <p className="disc mt--30">
                                        {blogPost.description4}
                                    </p>

                                    <div className="row align-items-center mb--40">
                                        
                                        <div className="col-lg-12">
                                            <div className="check-area-details">
                                                {/* single check */}
                                                <div className="single-check">
                                                   {/*  <i className="far fa-check-circle" /> */}
                                                    <span>{blogPost.section2Description2List1}</span>
                                                </div>
                                                {/* single check End */}
                                                {/* single check */}
                                                <div className="single-check">
                                                    {/* <i className="far fa-check-circle" /> */}
                                                    <span>{blogPost.section2Description2List2}</span>
                                                </div>
                                                {/* single check End */}
                                                {/* single check */}
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <p className="disc mt--30">
                                        {blogPost.description5}
                                    </p>

                                    <h4 className="title mt--40 mt_sm--20">
                                        {blogPost.section3Title}
                                    </h4>

                                    <p className="disc mt--30">
                                        {blogPost.section3description}
                                    </p>

                                    <h5 className="title mt--40 mt_sm--20">
                                        {blogPost.subtitle3Description3}
                                    </h5>

                                    <p className="disc mt--30">
                                        {blogPost.description6}
                                    </p>

                                    <div className="row align-items-center mb--40">
                                        
                                        <div className="col-lg-12">
                                            <div className="check-area-details">
                                                {/* single check */}
                                                <div className="single-check">
                                                   {/*  <i className="far fa-check-circle" /> */}
                                                    <span>{blogPost.section3Description3List1}</span>
                                                </div>
                                                {/* single check End */}
                                                {/* single check */}
                                                <div className="single-check">
                                                    {/* <i className="far fa-check-circle" /> */}
                                                    <span>{blogPost.section3Description3List2}</span>
                                                </div>
                                                {/* single check End */}
                                                {/* single check */}
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="title mt--40 mt_sm--20">
                                        {blogPost.section4Title}
                                    </h4>

                                    <p className="disc mt--30">
                                        {blogPost.description7}
                                    </p>

                                    <h6 className="title mt--40 mt_sm--20">
                                        {blogPost.subtitle1Description4}
                                    </h6>

                                    <p className="disc mt--30">
                                        {blogPost.description8}
                                    </p>

                                     <h6 className="title mt--40 mt_sm--20">
                                        {blogPost.subtitle2Description4}
                                    </h6>

                                    <p className="disc mt--30">
                                        {blogPost.description9}
                                    </p>

                                    <h4 className="title mt--40 mt_sm--20">
                                        {blogPost.section5Title}
                                    </h4>

                                    <p className="disc mt--30">
                                        {blogPost.description10}
                                    </p>

                                    <div className="row align-items-center mb--40">
                                        
                                        <div className="col-lg-12">
                                            <div className="check-area-details">
                                                {/* single check */}
                                                <div className="single-check">
                                                   {/*  <i className="far fa-check-circle" /> */}
                                                    <span>{blogPost.section5Description1List1}</span>
                                                </div>
                                                {/* single check End */}
                                                {/* single check */}
                                                <div className="single-check">
                                                    {/* <i className="far fa-check-circle" /> */}
                                                    <span>{blogPost.section5Description1List2}</span>
                                                </div>
                                                {/* single check End */}
                                                {/* single check */}
                                                <div className="single-check">
                                                    {/* <i className="far fa-check-circle" /> */}
                                                    <span>{blogPost.section5Description1List3}</span>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="title mt--40 mt_sm--20">
                                        {blogPost.conclusionTitle}
                                    </h4>

                                    <p className="disc mt--30">
                                        {blogPost.conclusion}
                                    </p>


                            

                                    <div className="row  align-items-center">
                                        <div className="col-lg-6 col-md-12">
                                            {/* tags details */}
                                            <div className="details-tag">
                                                <h6>Tags:</h6>
                                                <button>Servicios</button>
                                                <button>Business</button>
                                                <button>Growth</button>
                                            </div>
                                            {/* tags details End */}
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="details-share">
                                                <h6>Share:</h6>
                                                <button>
                                                    <i className="fab fa-facebook-f" />
                                                </button>
                                                <button>
                                                    <i className="fab fa-twitter" />
                                                </button>
                                                <button>
                                                    <i className="fab fa-instagram" />
                                                </button>
                                                <button>
                                                    <i className="fab fa-linkedin-in" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                   
                                
                                </div>
                            </div>
                            {/* single post End*/}
                        </div>
                        {/* rts-blog post end area */}

       {/*  SIDE BAR INICIO */}
        
                        {/*rts blog wizered area */}
                        <div className="col-xl-4 col-md-12 col-sm-12 col-12">
                            {/* single wizered start */}
                            <div className="rts-single-wized search">
                                <div className="wized-header">
                                    <h5 className="title">Buscar Post</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="rts-search-wrapper">
                                        <input
                                            className="Search"
                                            type="text"
                                            placeholder="Enter Keyword"
                                        />
                                        <button>
                                            <i className="fal fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized Categories">
                                <div className="wized-header">
                                    <h5 className="title">Categorias</h5>
                                </div>
                                <div className="wized-body">
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <a href="#">
                                                Business Solution <i className="far fa-long-arrow-right" />
                                            </a>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <a href="#">
                                                Strategy Growth
                                                <i className="far fa-long-arrow-right" />
                                            </a>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <a href="#">
                                                Finance Solution
                                                <i className="far fa-long-arrow-right" />
                                            </a>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <a href="#">
                                                Investment Policy
                                                <i className="far fa-long-arrow-right" />
                                            </a>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <a href="#">
                                                Tax Managment
                                                <i className="far fa-long-arrow-right" />
                                            </a>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                </div>
                            </div>
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized Recent-post">
                                <div className="wized-header">
                                    <h5 className="title">Post Recientes</h5>
                                </div>
                                <div className="wized-body">
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <a href="#">
                                                <img
                                                    src="/assets/images/blog/details/recent-post/01.png"
                                                    alt="Blog_post"
                                                />
                                            </a>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Jan, 2023</span>
                                            </div>
                                            <a className="post-title" href="#">
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <a href="#">
                                                <img
                                                    src="/assets/images/blog/details/recent-post/02.png"
                                                    alt="Blog_post"
                                                />
                                            </a>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Jan, 2023</span>
                                            </div>
                                            <a className="post-title" href="#">
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <a href="#">
                                                <img
                                                    src="/assets/images/blog/details/recent-post/03.png"
                                                    alt="Blog_post"
                                                />
                                            </a>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Jan, 2023</span>
                                            </div>
                                            <a className="post-title" href="#">
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <a href="#">
                                                <img
                                                    src="/assets/images/blog/details/recent-post/04.png"
                                                    alt="Blog_post"
                                                />
                                            </a>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Jan, 2023</span>
                                            </div>
                                            <a className="post-title" href="#">
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </a>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                </div>
                            </div>
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized Recent-post">
                                <div className="wized-header">
                                    <h5 className="title">Gallery Posts</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="gallery-inner">
                                        <div className="row-1 single-row">
                                            <a href="#">
                                                <img
                                                    src="/assets/images/blog/details/gallery/01.png"
                                                    alt="Gallery"
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="/assets/images/blog/details/gallery/02.png"
                                                    alt="Gallery"
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="/assets/images/blog/details/gallery/03.png"
                                                    alt="Gallery"
                                                />
                                            </a>
                                        </div>
                                        <div className="row-2 single-row">
                                            <a href="#">
                                                <img
                                                    src="/assets/images/blog/details/gallery/04.png"
                                                    alt="Gallery"
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="/assets/images/blog/details/gallery/05.png"
                                                    alt="Gallery"
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="/assets/images/blog/details/gallery/06.png"
                                                    alt="Gallery"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized">
                                <div className="wized-header">
                                    <h5 className="title">Popular Tags</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="tags-wrapper">
                                        <a href="#">Services</a>
                                        <a href="#">Business</a>
                                        <a href="#">Growth</a>
                                        <a href="#">Finance</a>
                                        <a href="#">UI/UX Design</a>
                                        <a href="#">Solution</a>
                                        <a href="#">Speed</a>
                                        <a href="#">Strategy</a>
                                        <a href="#">Technology</a>
                                    </div>
                                </div>
                            </div>
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized contact">
                                <div className="wized-header">
                                    <a href="#">
                                        <img src="/assets/images/logo/logo-2.svg" alt="Business_logo" />
                                    </a>
                                </div>
                                <div className="wized-body">
                                    <h5 className="title">Need Help? We Are Here To Help You</h5>
                                    <a className="rts-btn btn-primary" href="/contactus">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                            {/* single wizered End */}
                        </div>
                        {/* rts- blog wizered end area */}
                    </div>
                </div>
            </div>
            {/* rts blog mlist area End */}


            <FooterOne />
        </div>

    );
}
