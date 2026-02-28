"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ErrorBoundary from "@/components/ErrorBoundary";
function BusinessGoalOne() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    // Function to open the video overlay
    const openVideo = (e) => {
        e.preventDefault();
        setIsVideoOpen(true);
    };

    // Function to close the video overlay
    const closeVideo = (e) => {
        e.preventDefault();
        setIsVideoOpen(false);
    };

    // Effect to handle the escape key for closing the video overlay
    useEffect(() => {
        const handleKeyUp = (e) => {
            if (e.keyCode === 27) {
                setIsVideoOpen(false);
            }
        };

        // Add event listener for keyup
        document.addEventListener('keyup', handleKeyUp);

        // Cleanup function to remove event listener on component unmount
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);


    return (
        <ErrorBoundary>
            <div>
                {/* business goal area */}
                <div className="rts-business-goal mt--0 rts-section-gapBottom" id='goal'>
                    <div className="container">
                        <div className="row">
                            {/* business goal left */}
                            <div className="col-lg-6">
                                <div className="business-goal-one">
                                    <img src="assets/images/business-goal/App334.jpg" alt="Business_Goal" />
                                    <img
                                        className="small"
                                        src="assets/images/business-goal/appPhone.png"
                                        alt="Business_Goal"
                                    />
                                </div>
                            </div>
                            {/* business goal right */}
                            {/* right area business */}
                            <div className="col-lg-6 mt--35 mt_md--70 mt_sm--70">
                                <div className="business-goal-right">
                                    <div className="rts-title-area business text-start pl--30">
                                        <p className="pre-title">Desarrollo de Aplicaciones Móviles Modernas</p>
                                        <h2 className="title">Aplicaciones móviles multiplataforma</h2>
                                    </div>
                                    <div className="rts-business-goal pl--30">
                                        <div className="single-goal">
                                            <img
                                                src="assets/images/business-goal/icon/01.svg"
                                                alt="business_Icone"
                                                className="thumb"
                                            />
                                            <div className="goal-wrapper">
                                                <h6 className="title">Diseño UX/UI centrado en el usuario</h6>
                                                <p className="disc">
                                                    En Lapdev, entendemos que una aplicación exitosa no solo debe funcionar bien, 
                                                    sino también sentirse intuitiva y fácil de usar.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="single-goal">
                                            <img
                                                src="assets/images/business-goal/icon/02.svg"
                                                alt="business_Icone"
                                                className="thumb"
                                            />
                                            <div className="goal-wrapper">
                                                <h6 className="title">Desarrollo con Expo y React Native</h6>
                                                <p className="disc">
                                                    Ofrecemos servicios integrales de desarrollo de aplicaciones móviles, 
                                                    desde la idea inicial hasta el lanzamiento y mantenimiento.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="goal-button-wrapper mt--70">
                                            <Link
                                                href={'/contactus'}
                                                className="rts-btn btn-primary color-h-black"
                                            >
                                                Contáctanos
                                            </Link>
                                            <div className="vedio-icone">
                                                {/* Video Play Button */}
                                                <Link id="play-video" className="video-play-button" href={'#'} onClick={openVideo}>
                                                    <span />
                                                    <span className="outer-text">Play Video</span>
                                                </Link>

                                                {/* Video Overlay */}
                                                {isVideoOpen && (
                                                    <div id="video-overlay" className="video-overlay open">
                                                        {/* Close button for the video overlay */}
                                                        <Link className="video-overlay-close" href={'#'} onClick={closeVideo}>
                                                            ×
                                                        </Link>
                                                        {/* Video iframe */}
                                                        <iframe
                                                            width="560"
                                                            height="315"
                                                            src="https://www.youtube.com/embed/6stlCkUDG_s"
                                                            title="YouTube video player"
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* right area business ENd */}
                        </div>
                    </div>
                </div>
                {/* business goal area End */}

            </div>
        </ ErrorBoundary>
    )
}

export default BusinessGoalOne