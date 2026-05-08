import nodemailer from "nodemailer";

const BRAND_COLOR = "#DE0B0B";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://lapdev.cl";
/* const LOGO_URL = `${SITE_URL}/assets/images/logo/lapDevLogo20266.png`; */

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "ricardo@laparadoja.cl";

const esc = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

function createTransporter() {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const secure = String(process.env.SMTP_SECURE || "").toLowerCase() === "true";

  if (!host) throw new Error("SMTP_HOST no está definido.");
  if (!user) throw new Error("SMTP_USER no está definido.");
  if (!pass) throw new Error("SMTP_PASS no está definido.");

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

function buildAdminEmailHtml({ contactName, phone, email, companyName, requirement }) {
  return `
  <div style="margin:0;padding:0;background:#F3F4F6;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:760px;margin:0 auto;padding:28px 16px;">
      <div style="border-radius:18px;overflow:hidden;background:#ffffff;border:1px solid #E5E7EB;">
        <div style="background:${BRAND_COLOR};padding:30px 24px;text-align:center;">
          <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:900;">
            Nuevo diagnóstico técnico solicitado
          </h1>
          <p style="margin:12px 0 0;color:rgba(255,255,255,0.9);font-size:15px;">
            Se recibió una nueva solicitud desde el formulario del sitio web.
          </p>
        </div>

        <div style="padding:28px 24px;">
          <h2 style="margin:0 0 16px;color:#111827;font-size:20px;">
            Datos del cliente
          </h2>

          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #E5E7EB;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="padding:14px 16px;background:#F9FAFB;color:#6B7280;font-weight:700;width:220px;">Nombre</td>
              <td style="padding:14px 16px;color:#111827;">${esc(contactName)}</td>
            </tr>
            <tr>
              <td style="padding:14px 16px;background:#FFFFFF;color:#6B7280;font-weight:700;">Teléfono</td>
              <td style="padding:14px 16px;color:#111827;">${esc(phone)}</td>
            </tr>
            <tr>
              <td style="padding:14px 16px;background:#F9FAFB;color:#6B7280;font-weight:700;">Email</td>
              <td style="padding:14px 16px;color:#111827;">${esc(email)}</td>
            </tr>
            <tr>
              <td style="padding:14px 16px;background:#FFFFFF;color:#6B7280;font-weight:700;">Empresa</td>
              <td style="padding:14px 16px;color:#111827;">${esc(companyName)}</td>
            </tr>
            <tr>
              <td style="padding:14px 16px;background:#F9FAFB;color:#6B7280;font-weight:700;">Consulta</td>
              <td style="padding:14px 16px;color:#111827;line-height:1.6;">${esc(requirement).replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>

          <div style="margin-top:24px;padding:18px;border-radius:14px;background:#FEF2F2;border:1px solid #FECACA;">
            <p style="margin:0;color:#991B1B;font-size:15px;line-height:1.6;">
              Puedes responder directamente este correo para contactar a:
              <strong>${esc(email)}</strong>
            </p>
          </div>
        </div>

        <div style="padding:18px 24px;background:#111827;text-align:center;">
          <p style="margin:0;color:#CBD5E1;font-size:13px;">
            Correo generado automáticamente desde el sitio web de Lapdev.
          </p>
        </div>
      </div>
    </div>
  </div>
  `;
}

function buildClientEmailHtml({ contactName, requirement }) {
  return `
  <div style="margin:0;padding:0;background:#F3F4F6;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:720px;margin:0 auto;padding:28px 16px;">
      <div style="border-radius:18px;overflow:hidden;background:#ffffff;border:1px solid #E5E7EB;">
        <div style="background:${BRAND_COLOR};padding:30px 24px;text-align:center;">
          <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:900;">
            Hemos recibido tu solicitud
          </h1>
          <p style="margin:12px 0 0;color:rgba(255,255,255,0.9);font-size:15px;">
            Gracias por contactar a Lapdev.
          </p>
        </div>

        <div style="padding:28px 24px;">
          <p style="margin:0 0 18px;color:#111827;font-size:18px;line-height:1.6;">
            Hola <strong>${esc(contactName)}</strong>,
          </p>

          <p style="margin:0 0 18px;color:#374151;font-size:16px;line-height:1.7;">
            Hemos recibido correctamente tu información. Nuestro equipo revisará tu requerimiento y pronto nos comunicaremos contigo.
          </p>

          <div style="border-left:6px solid ${BRAND_COLOR};background:#F9FAFB;border-radius:12px;padding:18px;margin:22px 0;">
            <p style="margin:0 0 8px;color:#111827;font-size:15px;font-weight:700;">
              Resumen de tu consulta:
            </p>
            <p style="margin:0;color:#4B5563;font-size:15px;line-height:1.7;">
              ${esc(requirement).replace(/\n/g, "<br/>")}
            </p>
          </div>

          <p style="margin:0;color:#374151;font-size:16px;line-height:1.7;">
            Analizaremos tu caso y te entregaremos una orientación inicial para avanzar con una solución técnica adecuada.
          </p>

          <div style="text-align:center;margin-top:28px;">
            <a href="${SITE_URL}"
              style="display:inline-block;background:${BRAND_COLOR};color:#ffffff;text-decoration:none;padding:14px 24px;border-radius:12px;font-weight:800;font-size:15px;">
              Visitar Lapdev
            </a>
          </div>
        </div>

        <div style="padding:18px 24px;background:#111827;text-align:center;">
          <p style="margin:0;color:#CBD5E1;font-size:13px;">
            Lapdev — Tecnología estratégica para empresas que escalan.
          </p>
        </div>
      </div>
    </div>
  </div>
  `;
}

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      contactName = "",
      phone = "",
      email = "",
      companyName = "",
      requirement = "",
    } = body;

    if (!contactName || !phone || !email || !companyName || !requirement) {
      return Response.json(
        { message: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const transporter = createTransporter();

    const adminHtml = buildAdminEmailHtml({
      contactName,
      phone,
      email,
      companyName,
      requirement,
    });

    const clientHtml = buildClientEmailHtml({
      contactName,
      requirement,
    });

    const adminInfo = await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `Nuevo diagnóstico técnico solicitado - ${companyName}`,
      html: adminHtml,
      text: `
Nuevo diagnóstico técnico solicitado

Nombre de contacto: ${contactName}
Teléfono: ${phone}
Email: ${email}
Empresa: ${companyName}
Requerimiento o consulta:
${requirement}
      `,
    });

    const clientInfo = await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: email,
      subject: "Hemos recibido tu solicitud - Lapdev",
      html: clientHtml,
      text: `
Hola ${contactName},

Hemos recibido correctamente tu información.
Nuestro equipo revisará tu requerimiento y pronto nos comunicaremos contigo.

Resumen de tu consulta:
${requirement}

Lapdev
${SITE_URL}
      `,
    });

    console.log("Correos enviados:", {
      adminMessageId: adminInfo.messageId,
      clientMessageId: clientInfo.messageId,
    });

    return Response.json(
      { message: "Formulario enviado correctamente." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar correo:", error);

    return Response.json(
      { message: error.message || "Error interno al enviar el formulario." },
      { status: 500 }
    );
  }
}