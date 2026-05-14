"use client";

import React, { useState } from "react";

const initialForm = {
  contactName: "",
  email: "",
  subject: "",
  message: "",
};

function ContactForm() {
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
        phone: "No informado",
        email: formData.email,
        companyName: "No informado",
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
    <div>
      <div className="rts-contact-area contact-one">
        <div className="container">
          <div className="row align-items-center g-0">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="contact-image-one">
                <img
                  className="shadow"
                  style={{ borderRadius: 20 }}
                  src="assets/images/contact/team21.png"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="contact-form-area-one">
                <div className="rts-title-area contact text-start">
                  <p className="pre-title">INICIEMOS UNA CONVERSACIÓN</p>
                  <h2 className="title">
                    Solicita una evaluación estratégica de tu proyecto
                  </h2>
                </div>

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
                      placeholder="Nombre y Apellido"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                    />

                    <input
                      type="email"
                      placeholder="Correo Electrónico"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Asunto"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />

                  <textarea
                    placeholder="Mensaje"
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
  );
}

export default ContactForm;