"use client"
import React from 'react'

function ContactForm() {
    return (
        <div>
            {/* contact area start */}
            <div className="rts-contact-area contact-one">
                <div className="container">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="contact-image-one">
                                <img src="assets/images/contact/01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="contact-form-area-one">
                                <div className="rts-title-area contact text-start">
                                    <p className="pre-title">INICIEMOS UNA CONVERSACIÓN</p>
                                    <h2 className="title">Solicita una evaluación estratégica de tu proyecto</h2>
                                </div>
                                <div id="form-messages" />
                                <form id="contact-form" action="mailer.php" method="post">
                                    <div className="name-email">
                                        <input
                                            type="text"
                                            placeholder="Nombre y Apellido"
                                            name="name"
                                            required=""
                                        />
                                        <input
                                            type="email"
                                            placeholder="Correo Electrónico"
                                            name="email"
                                            required=""
                                        />
                                    </div>
                                    <input type="text" placeholder="Asunto" name="subject" />
                                    <textarea
                                        placeholder="Mensaje"
                                        name="message"
                                        defaultValue={""}
                                    />
                                    <button type="submit" className="rts-btn btn-primary">
                                        Enviar Mensaje
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact area end */}
        </div>
    )
}

export default ContactForm