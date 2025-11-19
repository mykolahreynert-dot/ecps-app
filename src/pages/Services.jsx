// src/pages/Services.jsx

function Services() {
  const services = [
    {
      category: "Home & rentals",
      title: "Residential & Airbnb Cleaning",
      short:
        "Calm, reliable cleaning for homes, condos and short-term rentals.",
      details:
        "Standard upkeep, deep cleans and guest changeovers. Ideal for owners who prefer a consistent person in their home, not a different team each time.",
      note: "Available as one-time or recurring visits.",
      highlight: true,
    },
    {
      category: "Owners & snowbirds",
      title: "Property Watch & Key-Holder",
      short:
        "Discreet visual checks and basic coordination while you are away.",
      details:
        "Key-holder support, simple inspections, photo updates where appropriate and access for contractors by arrangement.",
      note: "Especially useful if you live out of state or abroad.",
    },
    {
      category: "Seniors & family",
      title: "Elderly Assistance (non-medical)",
      short: "Respectful, patient support for seniors with everyday tasks.",
      details:
        "Light help at home, structure for the day, conversation, reading, organizing papers or belongings, and practical support with small tasks.",
      note: "Non-medical only; we do not replace professional nursing care.",
    },
    {
      category: "Digital confidence",
      title: "Digital Help for Seniors",
      short:
        "Step-by-step assistance with phones, tablets, email and online services.",
      details:
        "We focus on repetition and calm explanations so seniors can confidently use video calls, messaging, online appointments and basic apps.",
      note: "Sessions can be combined with light assistance visits.",
    },
    {
      category: "Property & surroundings",
      title: "Patio & Outdoor Coordination",
      short:
        "Light oversight and coordination for outdoor areas and simple tasks.",
      details:
        "Ensuring patios, entry areas and small outdoor spaces stay presentable. Coordination with specialized contractors where necessary.",
      note: "We do not perform heavy landscaping or technical repairs ourselves.",
    },
    {
      category: "Tailored support",
      title: "Custom Add-On Services",
      short:
        "Small, practical tasks that reduce stress but do not fit a standard package.",
      details:
        "Examples: simple preparations before guests arrive, small organizational projects, or helping set up a more comfortable routine at home.",
      note: "Tell us your situation; we will say clearly what we can and cannot do.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Intro block */}
      <section className="space-y-3">
        <h1 className="text-2xl font-bold text-slate-900">Services</h1>
        <p className="text-slate-700 text-sm md:text-base max-w-3xl">
          European Care &amp; Property Services is designed for clients who
          value quiet professionalism, trust and consistency. Below you will
          find the main areas where we help homeowners, snowbirds, seniors and
          rental hosts across Sarasota/Bradenton, Venice, North Port, the wider
          Tampa Bay region and nearby areas.
        </p>
        <p className="text-xs text-slate-500 max-w-2xl">
          Each cooperation starts with a short conversation. We agree on what
          will be done, how often, and how information will be shared, so that
          expectations are clear on both sides.
        </p>
      </section>

      {/* Luxury-style service cards */}
      <section className="space-y-4">
        <div className="rounded-3xl border border-brand-primary/10 bg-white shadow-sm p-4 md:p-6">
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className={`flex flex-col justify-between rounded-2xl border bg-white/90 px-4 py-4 text-sm text-slate-700 shadow-sm transition hover:shadow-md hover:border-brand-secondary/60 ${
                  service.highlight
                    ? "border-brand-secondary/60 bg-brand-secondary/5"
                    : "border-slate-200"
                }`}
              >
                <header className="space-y-1">
                  <div className="text-[11px] font-semibold tracking-wide uppercase text-brand-secondary">
                    {service.category}
                  </div>
                  <h2 className="text-base font-semibold text-slate-900">
                    {service.title}
                  </h2>
                  <p className="text-[13px] text-slate-700">{service.short}</p>
                </header>

                <div className="mt-3 text-[13px] text-slate-700">
                  {service.details}
                </div>

                <footer className="mt-3 pt-2 border-t border-dashed border-slate-200 text-[11px] text-slate-500">
                  {service.note}
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gentle reassurance strip */}
      <section className="rounded-2xl border border-brand-primary/15 bg-brand-primary/5 px-5 py-4 text-sm text-slate-700 shadow-sm">
        <div className="grid gap-3 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Unsure which service fits your situation?
            </h3>
            <p className="text-xs md:text-sm text-slate-700 mt-1">
              Many clients start with a short, no-pressure call or message
              describing their home, family or travel pattern. Together we can
              decide whether you need a one-time visit, a trial period, or a
              regular schedule.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="/booking"
              className="inline-flex items-center rounded-full bg-brand-primary px-4 py-2 text-xs md:text-sm font-semibold text-white hover:bg-brand-primaryDark transition"
            >
              Book a service
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-full border border-brand-secondary/70 bg-white px-4 py-2 text-xs md:text-sm font-semibold text-brand-secondary hover:bg-brand-secondary/10 transition"
            >
              Contact us with questions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
