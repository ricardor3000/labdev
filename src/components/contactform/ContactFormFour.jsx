import React from 'react'

function ContactFormFour() {
    return (
        <div>
            {/* start project with us section */}
            <div className="rts-project-area eight bg-project-three margin-controlerproject mt_sm--0">
                <div className="container controler">
                    <div className="row g-0 justify-content-center">
                        <div className="col-lg-7">
                            {/* project area left wrapper */}
                            <div className="title-area-project-w-in">
                                <span className="sub">lapdev</span>
                                <h2 className="title">
                                    ¿Hablamos sobre <br /> <span>tu infraestructura?</span>
                                </h2>
                                <p className="disc">
                                    Déjanos tus datos y nos pondremos en contacto para revisar {" "}
                                    <br /> cómo optimizar tus entornos de desarrollo.
                                </p>
                            </div>
                            {/* project area left wrapper end */}
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div className="bg-input-project">
                                <div className="product-form">
                                    <div id="form-messages" />
                                    <form id="contact-form" action="mailer.php" method="post">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input
                                                    type="text"
                                                    placeholder="Nombre"
                                                    name="name"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-lg-6 mt_md--20 mt_sm--20">
                                                <input
                                                    type="email"
                                                    placeholder="Correo electrónico"
                                                    name="email"
                                                    required=""
                                                />
                                            </div>

                                            <div className="col-lg-6 mt-4">
                                                <input
                                                    type="text"
                                                    placeholder="Nombre"
                                                    name="name"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-lg-6 mt_md--20 mt_sm--20 mt-4">
                                                <input
                                                    type="email"
                                                    placeholder="Nombre de la empresa"
                                                    name="company"
                                                    required=""
                                                />
                                            </div>
                                           
                                          <div className="col-12 mt--20">
                                             <select name="equipo" defaultValue=""  type="text" >
                                                 <option value="" disabled>
                                                     Tamaño del equipo de ingeniería
                                                 </option>
                                                 <option value="1-10">1-10</option>
                                                 <option value="11-50">11-50</option>
                                                 <option value="51-200">51-200</option>
                                                 <option value="200+">200+</option>
                                              </select>
                                          </div>
                                            <div className="col-12 mt--20">
                                                <input
                                                    type="text"
                                                    placeholder="¿Qué desafío buscas resolver?"
                                                    name="desafios"
                                                />
                                            </div>
                                            <div className="col-12 mt--20">
                                                <textarea
                                                    placeholder="Mensaje"
                                                    name="message"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="col-12 mt--35">
                                                <button
                                                    className="rts-btn btn-primary-3 color-h-black"
                                                    type="submit"
                                                >
                                                    Enviar
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start project with us section End */}
        </div>
    )
}

export default ContactFormFour