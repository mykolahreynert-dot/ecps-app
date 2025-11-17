// src/pages/Services.jsx
function Services() {
  const services = [
    {
      title: "Residential & Airbnb Cleaning",
      description:
        "Standard, deep and turnover cleaning tailored to your property and schedule.",
      details: "One-time or recurring visits. Checklists and reporting available.",
    },
    {
      title: "Property Watch & Concierge",
      description:
        "Basic inspections and coordination while you travel or live abroad.",
      details: "Visual checks, photo updates, contractor access, key-holding.",
    },
    {
      title: "Elderly Assistance (non-medical)",
      description:
        "Respectful support for seniors with everyday tasks and simple digital help.",
      details: "Companionship, light errands, organization, phone/tablet support.",
    },
    {
      title: "Patio & Outdoor Cleaning Coordination",
      description:
        "We help coordinate regular care for patios, entries and outdoor furniture.",
      details: "Scheduling and overseeing basic outdoor work with trusted partners.",
    },
    {
      title: "Digital Tech Help for Seniors",
      description:
        "Step-by-step assistance with smartphones, tablets and online services.",
      details: "Messaging, video calls, online appointments, basic security.",
    },
    {
      title: "Add-on Services",
      description:
        "Extra small tasks that can be added to visits when timing allows.",
      details: "We discuss options individually based on your needs.",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-4">
        Services overview
      </h1>
      <p className="mb-6 text-slate-700 text-sm md:text-base">
        Below is a high-level overview of what we offer. During booking we ask a
        few questions and propose the most efficient combination for your
        situation.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-lg border bg-white p-4 shadow-sm"
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
