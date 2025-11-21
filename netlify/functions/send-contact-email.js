// netlify/functions/send-contact-email.js
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { name, phone, email, message } = JSON.parse(event.body || "{}");

    if (!name || !phone || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    const htmlContent = `
      <h2>New contact from website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || "not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    const textContent = `
New contact from website

Name: ${name}
Phone: ${phone}
Email: ${email || "not provided"}

Message:
${message}
    `.trim();

    // MAIN Resend call
    const { data, error } = await resend.emails.send({
      from: "European Care & Property Services <onboarding@resend.dev>",
      to: "info.europeancare@gmail.com", // make sure this is added as Test Email in Resend
      subject: `New contact from ${name}`,
      html: htmlContent,
      text: textContent,
      reply_to: email || undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Resend API error",
          details: error, // temporary – helps debugging
        }),
      };
    }

    console.log("Email sent via Resend:", data);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Server error",
        details: err.message || String(err),
      }),
    };
  }
};
