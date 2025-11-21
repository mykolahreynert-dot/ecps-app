// src/pages/Contact.jsx
import { useState } from "react";

function formatPhoneUS(value) {
  // Keep only digits
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (digits.length <= 3) return digits;
  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneUS(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const response = await fetch("/.netlify/functions/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setSubmitSuccess(true);
      setFullName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Contact form error:", err);
      setSubmitError(
        "Sorry, something went wrong while sending your message. Please try again or contact us by phone or email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-emerald-50/40 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-emerald-950 tracking-tight">
            Contact European Care &amp; Property Services
          </h1>
          <p className="mt-3 text-base sm:text-lg text-emerald-900/80">
            Share a few details, and we’ll get back to you within{" "}
            <span className="font-medium">one business day</span> to discuss the
            best way to support your home, guests or loved ones.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
          {/* Contact info panel */}
          <section className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-emerald-950">
              Direct contact
            </h2>
            <p className="mt-2 text-sm sm:text-base text-emerald-900/80">
              If you prefer, you can also contact us directly by phone or email.
            </p>

            <dl className="mt-6 space-y-4 text-sm sm:text-base">
              <div>
                <dt className="text-emerald-900/70">Phone</dt>
                <dd className="font-medium text-emerald-950">
                  <a href="tel:+19412269305" className="hover:underline">
                    (941) 226-9305
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-emerald-900/70">Email</dt>
                <dd className="font-medium text-emerald-950 break-all">
                  <a
                    href="mailto:info.europeancare@gmail.com"
                    className="hover:underline"
                  >
                    info.europeancare@gmail.com
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-emerald-900/70">Service area</dt>
                <dd className="font-medium text-emerald-950">
                  Sarasota, Bradenton, Venice, Tampa Bay and surrounding areas.
                </dd>
              </div>
            </dl>

            <div className="mt-6 pt-6 border-t border-emerald-100 text-xs sm:text-sm text-emerald-900/70">
              <p>
                Typical response time:{" "}
                <span className="font-medium text-emerald-950">
                  within one business day
                </span>
                . For urgent schedule changes, calling is usually fastest.
              </p>
            </div>
          </section>

          {/* Contact form */}
          <section className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-emerald-950">
              Send us a message
            </h2>
            <p className="mt-2 text-sm sm:text-base text-emerald-900/80">
              Tell us briefly about your situation. We’ll review it personally
              and get back to you with a calm, practical proposal.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-emerald-950"
                >
                  Your name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-1 block w-full rounded-xl border border-emerald-200 bg-white px-3 py-2.5 text-sm sm:text-base text-emerald-950 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="First and last name"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-emerald-950"
                >
                  Phone number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  className="mt-1 block w-full rounded-xl border border-emerald-200 bg-white px-3 py-2.5 text-sm sm:text-base text-emerald-950 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="(941) 555-1234"
                />
                <p className="mt-1 text-xs text-emerald-900/70">
                  US format: <span className="font-mono">(###) ###-####</span>
                </p>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-emerald-950"
                >
                  Email (optional)
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-xl border border-emerald-200 bg-white px-3 py-2.5 text-sm sm:text-base text-emerald-950 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-emerald-950"
                >
                  How can we help? *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full rounded-xl border border-emerald-200 bg-white px-3 py-2.5 text-sm sm:text-base text-emerald-950 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="For example: regular cleaning for a condo in Sarasota, support for an elderly parent, preparing a home for seasonal guests, etc."
                />
              </div>

              {/* Submit button + status */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 sm:px-6 py-2.5 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending…" : "Send message"}
                </button>

                {submitSuccess && (
                  <p className="mt-3 text-sm text-emerald-800">
                    Thank you. Your message has been sent. We’ll contact you
                    within one business day.
                  </p>
                )}

                {submitError && (
                  <p className="mt-3 text-sm text-red-600">{submitError}</p>
                )}
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
