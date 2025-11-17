// src/components/ServiceSelector.jsx
function ServiceSelector({ selectedServices, onChange }) {
  // Helper to toggle a service in the list
  const toggleService = (value) => {
    if (selectedServices.includes(value)) {
      onChange(selectedServices.filter((s) => s !== value));
    } else {
      onChange([...selectedServices, value]);
    }
  };

  const serviceOptions = [
    { value: "residential_cleaning", label: "Residential / house cleaning" },
    { value: "airbnb_cleaning", label: "Airbnb / short-term rental cleaning" },
    { value: "property_watch", label: "Property watch / snowbird support" },
    { value: "elderly_assistance", label: "Elderly assistance (non-medical)" },
    { value: "digital_help", label: "Digital help for seniors" },
    { value: "other", label: "Other / not sure yet" },
  ];

  return (
    <section className="rounded-xl border bg-white p-4 shadow-sm text-sm">
      <h2 className="text-base font-semibold text-slate-900 mb-2">
        Quick service selection
      </h2>
      <p className="text-slate-700 mb-3">
        Start by telling us what you need. Your choices will be reflected in the
        booking form below.
      </p>

      <div className="grid gap-2 md:grid-cols-2">
        {serviceOptions.map((option) => {
          const active = selectedServices.includes(option.value);
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => toggleService(option.value)}
              className={
                "flex items-center justify-between rounded-md border px-3 py-2 text-left " +
                (active
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100")
              }
            >
              <span className="text-sm">{option.label}</span>
              <span className="text-xs">
                {active ? "Selected" : "Tap to select"}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-xs text-slate-500">
        You can still adjust the detailed checkboxes in the form if needed.
      </p>
    </section>
  );
}

export default ServiceSelector;
