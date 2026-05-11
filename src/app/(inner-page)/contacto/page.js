"use client";

import Link from "next/link";
import React, { useState } from "react";
import HeaderOne from "../../../components/header/HeaderOne";
import BackToTop from "../../../components/BackToTop";
import FooterOne from "../../../components/footer/FooterOne";
import Breadcrumb from "../../../components/Breadcrumb";

const initialForm = {
  contactName: "",
  email: "",
  phone: "",
  companyName: "",
  subject: "",
  message: "",
};

export default function Home() {
  const breadcrumbs = [
    { label: "Inicio", link: "/" },
    { label: "Contacto" },
  ];

  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const payload = {
        contactName: formData.contactName,
        phone: formData.phone || "No informado",
        email: formData.email,
        companyName: formData.companyName || "No informado",
        requirement: `
Asunto: ${formData.subject || "No informado"}

Mensaje:
${formData.message}
        `.trim(),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "No se pudo enviar el mensaje.");
      }

      setStatus({
        type: "success",
        message: "Mensaje enviado correctamente. Pronto nos comunicaremos contigo.",
      });

      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "danger",
        message: error.message || "Ocurrió un error al enviar el mensaje.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <HeaderOne />

      <Breadcrumb title="Contacto" breadcrumbs={breadcrumbs} />

      <div className="rts-contact-area rts-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-contact-one-inner">
                <div className="thumbnail">
                  <img src="assets/images/contact/contacto1.png" alt="" />
                </div>
                <div className="content">
                  <div className="icone">
                    <img src="assets/images/contact/shape/01.svg" alt="" />
                  </div>
                  <div className="info">
                    <span>Teléfono</span>
                    <a href="tel:+56936533804">
                      <h5>+56 9 3653 3804</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-contact-one-inner">
                <div className="thumbnail">
                  <img src="assets/images/contact/contacto2.png" alt="" />
                </div>
                <div className="content">
                  <div className="icone">
                    <img src="assets/images/contact/shape/02.svg" alt="" />
                  </div>
                  <div className="info">
                    <span>Correo electrónico</span>
                    <a href="mailto:contacto@lapdev.cl">
                      <h5>contacto@lapdev.cl</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-contact-one-inner">
                <div className="thumbnail">
                  <img src="assets/images/contact/contacto3.png" alt="" />
                </div>
                <div className="content">
                  <div className="icone">
                    <img src="assets/images/contact/shape/03.svg" alt="" />
                  </div>
                  <div className="info">
                    <span>Oficina</span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.8296100935268!2d-70.6050486876818!3d-33.453745473277046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf96a2e950af%3A0x135e3959b6b3f185!2sAv.%20Ricardo%20Lyon%203521%2C%20Of.%2002%2C%207770562%20%C3%91u%C3%B1oa%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1776705690076!5m2!1ses-419!2scl"
                    >
                      <h5>Av. Apoquindo 6410</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="rts-contact-map-area">
        <div className="contaciner-fluid">
          <div className="row">
            <div className="col-12">
              <div className="contact-map-area-fluid">
                <iframe
                  className="contact-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.6031765495604!2d-70.56707978768301!3d-33.407515573295626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cedd02bdc949%3A0x618b7b7c6f8a64!2sAv.%20Apoquindo%206410%2C%207550000%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1776209076311!5m2!1ses-419!2scl"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <img
                  className="location"
                  src="assets/images/contact/shape/location.svg"
                  alt="Business_map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-contact-form-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rts-contact-fluid rts-section-gap">
                <div className="rts-title-area contact-fluid text-center mb--50">
                  <p className="pre-title">Contáctanos</p>
                  <h2 className="title">
                    ¿Necesitas ayuda? Pongámonos en contacto
                  </h2>
                </div>

                <div className="form-wrapper">
                  {status.message && (
                    <div
                      className={`alert ${
                        status.type === "success" ? "alert-success" : "alert-danger"
                      }`}
                      role="alert"
                      style={{ marginBottom: "24px" }}
                    >
                      {status.message}
                    </div>
                  )}

                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="name-email">
                      <input
                        type="text"
                        name="contactName"
                        placeholder="Nombre y Apellido"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="name-email">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Teléfono"
                        value={formData.phone}
                        onChange={handleChange}
                      />

                      <input
                        type="text"
                        name="companyName"
                        placeholder="Nombre Empresa"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </div>

                    <input
                      type="text"
                      name="subject"
                      placeholder="Asunto"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />

                    <textarea
                      placeholder="Tu mensaje"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />

                    <button
                      type="submit"
                      className="rts-btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Enviando..." : "Enviar Mensaje"}
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterOne />
      <BackToTop />
    </div>
  );
}