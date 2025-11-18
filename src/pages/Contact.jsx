// src/pages/Contact.jsx

function Contact() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-slate-900">
          Contact
        </h1>
        <p className="text-slate-700 text-sm md:text-base">
          You can reach European Care &amp; Home Services easily using the
          contact information below. We are happy to answer questions, help you
          understand available services, and support you with bookings.
        </p>
      </div>

      {/* Main contact grid */}
      <div className="grid gap-4 md:grid-cols-2">
        
        {/* Address & service area */}
        <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700 space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            Business address &amp; service area
          </h2>
          <p>
            <span className="font-medium">Address:</span>
            <br />
            123 Palm Avenue
            <br />
            Florida, USA
          </p>
          <p>
            <span className="font-medium">Service area:</span>
            <br />
            Bradenton • Venice • North Port • Sarasota • Tampa Bay area
            <br />
            (expanded areas coming soon)
          </p>
          <p>
            <span className="font-medium">Preferred working hours:</span>
            <br />
            Monday – Friday, 9:00 – 18:00
            <br />
            Weekend visits available by agreement.
          </p>
        </section>

        {/* Phone & email */}
        <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700 space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            Phone &amp; email
          </h2>

          <p>
            <span className="font-medium">Phone (US):</span>
            <br />
            <a
              href="tel:+19415551234"
              className="text-brand-primary hover:underline"
            >
              (941) 555-1234
            </a>
          </p>

          <p>
            <span className="font-medium">WhatsApp:</span>
            <br />
            <a
              href="https://wa.me/19415551234"
              target="_blank"
              rel="noreferrer"
              className="text-brand-primary hover:underline"
            >
              +1 941 555 1234
            </a>
          </p>

          <p>
            <span className="font-medium">Email (all matters):</span>
            <br />
            <a
              href="mailto:info-europeancare@gmail.com"
              className="text-brand-primary hover:underline"
            >
              info.europeancare@gmail.com
            </a>
          </p>
        </section>

        {/* Social media */}
        <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700 space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            Social media
          </h2>

          <p>
            <span className="font-medium">Facebook:</span>
            <br />
            <a
              href="https://www.facebook.com/europeancare.services"
              target="_blank"
              rel="noreferrer"
              className="text-brand-primary hover:underline"
            >
              European Care &amp; Home Services
            </a>
          </p>

          <p>
            <span className="font-medium">Instagram:</span>
            <br />
            <a
              href="https://www.instagram.com/europeancare.services"
              target="_blank"
              rel="noreferrer"
              className="text-brand-primary hover:underline"
            >
              @europeancare.services
            </a>
          </p>
        </section>

        {/* Guidance block */}
        <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700 space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            How we recommend to contact us
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-medium">General questions:</span>{" "}
              email us at {" "}
              <span className="font-medium">
                info-europeancare@gmail.com
              </span>
              .
            </li>
            <li>
              <span className="font-medium">Bookings:</span> use the Booking
              page or send your message to the same email.
            </li>
            <li>
              <span className="font-medium">Quick questions:</span> call or send
              a WhatsApp message.
            </li>
            <li>
              <span className="font-medium">Updates:</span> follow our Facebook
              or Instagram for service news and helpful tips.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Contact;
