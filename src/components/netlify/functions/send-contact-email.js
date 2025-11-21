// netlify/functions/send-contact-email.js

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    const { fullName, phone, email, message } = data;

    if (!fullName || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Missing required fields: fullName and message.",
        }),
      };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY in environment");
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Email service not configured." }),
      };
    }

    const toEmail = "info.europeancare@gmail.com";

    const textBody = `
New contact form message from website:

Name:  ${fullName}
Phone: ${phone || "-"}
Email: ${email || "-"}

Message:
${message}
`.trim();

    // Call Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "European Care & Property Services <info.europeancare@gmail.com>",
        to: [toEmail],
        subject: `New contact message from ${fullName}`,
        text: textBody,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Resend error:", errText);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to send email." }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("send-contact-email function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Unexpected server error." }),
    };
  }
};
