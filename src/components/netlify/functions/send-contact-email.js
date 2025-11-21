// netlify/functions/send-contact-email.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    const { name, phone, email, message } = data;

    if (!name || !phone || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Missing required fields",
        }),
      };
    }

    const htmlContent = `
      <h2>New contact request from website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || "not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    const textContent = `
New contact request from website

Name: ${name}
Phone: ${phone}
Email: ${email || "not provided"}

Message:
${message}
    `.trim();

    // IMPORTANT:
    // For now we send FROM Resend's test identity, TO your real address.
    const { error } = await resend.emails.send({
      from: "European Care & Property Services <onboarding@resend.dev>",
      to: "info.europeancare@gmail.com",
      reply_to: email || undefined,
      subject: `New contact from ${name}`,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Failed to send email via Resend",
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" }),
    };
  }
};
