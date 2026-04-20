import nodemailer from "nodemailer";

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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.6;">
        <h2>Nuevo diagnóstico técnico solicitado</h2>
        <p>Se recibió una nueva solicitud desde el formulario del sitio web.</p>

        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse; width: 100%; max-width: 700px;">
          <tr>
            <td><strong>Nombre de contacto</strong></td>
            <td>${contactName}</td>
          </tr>
          <tr>
            <td><strong>Teléfono</strong></td>
            <td>${phone}</td>
          </tr>
          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>
          <tr>
            <td><strong>Empresa</strong></td>
            <td>${companyName}</td>
          </tr>
          <tr>
            <td><strong>Requerimiento o consulta</strong></td>
            <td>${requirement.replace(/\n/g, "<br/>")}</td>
          </tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: "ricardo@laparadoja.cl",
      replyTo: email,
      subject: `Nuevo lead web - ${companyName}`,
      html: htmlContent,
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

    return Response.json(
      { message: "Formulario enviado correctamente." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar correo:", error);

    return Response.json(
      { message: "Error interno al enviar el formulario." },
      { status: 500 }
    );
  }
}