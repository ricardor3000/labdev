"use client";

import React, { useMemo, useState } from "react";
import { Modal, Button, Form, Row, Col, Alert, Spinner } from "react-bootstrap";

const initialForm = {
  contactName: "",
  phone: "",
  email: "",
  companyName: "",
  requirement: "",
};

function TechnicalDiagnosisModal({ show, handleClose }) {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const isFormValid = useMemo(() => {
    return (
      formData.contactName.trim() &&
      formData.phone.trim() &&
      formData.email.trim() &&
      formData.companyName.trim() &&
      formData.requirement.trim()
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialForm);
    setStatus({ type: "", message: "" });
  };

  const onClose = () => {
    resetForm();
    handleClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "No se pudo enviar el formulario.");
      }

      setStatus({
        type: "success",
        message: "Tu solicitud fue enviada correctamente. Te contactaremos pronto.",
      });

      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "danger",
        message: error.message || "Ocurrió un error al enviar el formulario.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      backdrop="static"
      dialogClassName="lapdev-modal-dialog"
      contentClassName="lapdev-modal-content"
    >
      <Modal.Header closeButton className="lapdev-modal-header">
        <div className="lapdev-modal-header-content">
          <span className="lapdev-badge">Diagnóstico Técnico</span>
          <h3>¿Tienes un desafío técnico?</h3>
          <p>
            Analizamos tu arquitectura y te entregamos una hoja de ruta preliminar
            en menos de 24 horas.
          </p>
        </div>
      </Modal.Header>

      <Modal.Body className="lapdev-modal-body">
        {status.message && (
          <Alert variant={status.type} className="mb-4">
            {status.message}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Row className="g-3">
            <Col md={6}>
              <Form.Group controlId="contactName">
                <Form.Label className="lapdev-label">Nombre de contacto</Form.Label>
                <Form.Control
                  className="lapdev-input"
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="phone">
                <Form.Label className="lapdev-label">Teléfono</Form.Label>
                <Form.Control
                  className="lapdev-input"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ej: +56 9 1234 5678"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label className="lapdev-label">Mail</Form.Label>
                <Form.Control
                  className="lapdev-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ej: contacto@empresa.cl"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="companyName">
                <Form.Label className="lapdev-label">Nombre de la empresa</Form.Label>
                <Form.Control
                  className="lapdev-input"
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Ej: Mi Empresa SpA"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group controlId="requirement">
                <Form.Label className="lapdev-label">Requerimiento o consulta</Form.Label>
                <Form.Control
                  className="lapdev-input lapdev-textarea"
                  as="textarea"
                  rows={5}
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  placeholder="Cuéntanos brevemente qué necesitas, tu desafío técnico o el tipo de proyecto."
                  required
                />
              </Form.Group>
            </Col>
          </Row>

        {/*   <div className="lapdev-social-links">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="lapdev-social-link"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="lapdev-social-link"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="lapdev-social-link"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/56900000000"
              target="_blank"
              rel="noreferrer"
              className="lapdev-social-link"
            >
              Whatsapp
            </a>
          </div> */}

          <div className="lapdev-form-note">
            Te responderemos con una orientación inicial y próximos pasos sugeridos.
          </div>

          <div className="lapdev-modal-actions">
            <Button
              variant="outline-secondary"
              className="lapdev-close-btn"
              onClick={onClose}
              disabled={loading}
            >
              Cerrar
            </Button>

            <Button
              type="submit"
              disabled={!isFormValid || loading}
              className="lapdev-submit-btn"
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Enviando...
                </>
              ) : (
                "Solicitar Diagnóstico Técnico"
              )}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default TechnicalDiagnosisModal;