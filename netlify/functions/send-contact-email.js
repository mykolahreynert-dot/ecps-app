import { Resend } from "resend";

export const handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, phone, email, message } = JSON.parse(event.body);

    const htmlContent = `
      <h2>New contact form message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || "N/A"}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    const { error } = await resend.emails.send({
      from: "European Care & Property Services <info.europeancare@gmail.com>",
      to: "nikolaygreinert@gmail.com", // <-- your business inbox
      subject: `New contact from ${name}`,
      html: htmlContent,
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return { statusCode: 500, body: JSON.stringify({ success: false }) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("FUNCTION ERROR:", err);
    return { statusCode: 500, body: JSON.stringify({ success: false }) };
  }
};
