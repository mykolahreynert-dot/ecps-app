// netlify/functions/send-contact-email.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" }),
      };
    }

    const { name, phone, email, message } = JSON.parse(event.body);

    if (!name || !phone || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    // Construct email content
    const htmlContent = `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || "No email provided"}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `;

    const textContent = `
New Contact Request
--------------------
Name: ${name}
Phone: ${phone}
Email: ${email || "No email provided"}
Message:
${message}
    `;

    // Send using RESEND
    const { error } = await resend.emails.send({
      from: "European Care & Property Services <onboarding@resend.dev>",
      to: "info.europeancare@gmail.com", // ← Your business email
      reply_to: email || undefined,
      subject: `New contact form submission from ${name}`,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to send email via Resend" }),
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
