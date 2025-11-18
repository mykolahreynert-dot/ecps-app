// src/pages/Payment.jsx

function Payment() {
  const packages = [
    {
      name: "Airbnb Turnover – Standard",
      price: "$120–$160 per visit",
      description:
        "Cleaning after guest check-out, bed linen change, bathroom and kitchen reset, trash removal, basic staging.",
      stripeUrl: "https://example.com/stripe-airbnb-standard", // replace later
    },
    {
      name: "Move-in / Move-out Deep Cleaning",
      price: "from $250",
      description:
        "Detailed cleaning for empty properties before new tenants or owners move in.",
      stripeUrl: "https://example.com/stripe-deep-clean", // replace later
    },
    {
      name: "Elderly Assistance – 4 hours package",
      price: "$140",
      description:
        "Non-medical support visit (approx. 4 hours): light tasks, organization, conversation, help with phone/tablet.",
      stripeUrl: "https://example.com/stripe-elderly-4h", // replace later
    },
    {
      name: "Property Watch – Monthly plan",
      price: "from $120 / month",
      description:
        "Regular basic inspections for snowbirds or owners living abroad with simple reporting.",
      stripeUrl: "https://example.com/stripe-property-watch", // replace later
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Standard packages &amp; payment
        </h1>
        <p className="mt-2 text-slate-700 text-sm md:text-base">
          Below are example packages that can later be connected to Stripe
          Payment Links. For custom situations we will first confirm the scope,
          then send a tailored quote.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="rounded-xl border bg-white p-5 shadow-sm flex flex-col justify-between hover:border-brand-secondary hover:shadow-md transition"
          >
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                {pkg.name}
              </h2>
              <p className="mt-1 text-brand-secondary font-semibold text-sm">
                {pkg.price}
              </p>
              <p className="mt-2 text-sm text-slate-700">{pkg.description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={pkg.stripeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md bg-brand-secondary px-4 py-2 text-sm font-semibold text-white hover:bg-brand-secondaryDark disabled:opacity-50 transition"
              >
                Pay with Stripe (placeholder)
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-slate-500">
        Note: at this stage links are placeholders. After you create real
        Payment Links in your Stripe dashboard, you only need to replace the
        URLs in this file.
      </p>
    </div>
  );
}

export default Payment;
