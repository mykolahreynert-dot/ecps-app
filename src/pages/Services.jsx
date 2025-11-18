// src/pages/Services.jsx
function Services() {
  const services = [
    {
      title: "Residential & Airbnb Cleaning",
      description:
        "Standard, deep and turnover cleaning tailored to your home or rental schedule.",
      details:
        "One-time or recurring visits available. Ideal for condos, houses and short-term rentals.",
    },
    {
      title: "Property Watch & Key-Holder Service",
      description:
        "Basic visual inspections and key-holder support for owners living out of state or abroad.",
      details:
        "Photo updates, mail collection, simple checks and contractor access by arrangement.",
    },
    {
      title: "Elderly Assistance (Non-Medical)",
      description:
        "Supportive visits that provide light help, companionship and structure for seniors.",
      details:
        "Examples: light tasks, organization, conversation, reminders and simple daily routines.",
    },
    {
      title: "Digital Help for Seniors",
      description:
        "Friendly assistance with phones, tablets, video calls, email and online services.",
      details:
        "We focus on patience, clarity and repetition so seniors feel confident, not rushed.",
    },
    {
      title: "Patio & Outdoor Area Coordination",
      description:
        "Oversight or coordination of basic outdoor cleaning and simple maintenance tasks.",
      details:
        "Useful for snowbirds or busy owners who need someone to keep an eye on things.",
    },
    {
      title: "Custom Add-On Services",
      description:
        "Small, practical tasks that do not fit a standard category but make life easier.",
      details:
        "If you are not sure how to describe your situation, just tell us what you need.",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-4">
        Our services
      </h1>
      <p className="mb-6 text-slate-700 text-sm md:text-base">
        We support homeowners, landlords, snowbirds, seniors and Airbnb hosts
        across the Sarasota area. Every service is delivered with care,
        professionalism and European-standard attention to detail.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-lg border bg-white p-4 shadow-sm hover:border-brand-secondary hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {service.title}
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              {service.description}
            </p>
            <p className="mt-1 text-xs text-slate-500">{service.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
