// src/pages/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <section className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            European-quality care for your home, guests & loved ones in Sarasota.
          </h1>
          <p className="mt-4 text-slate-700">
            We help homeowners, snowbirds, Airbnb hosts and seniors with
            reliable cleaning, property watch, and non-medical assistance
            throughout Sarasota, Bradenton and Lakewood Ranch.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Explore services
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
            >
              Request a quote
            </Link>
          </div>
        </div>

        {/* Trust / USPs */}
        <div className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700 space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            Why clients choose us
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>European attention to detail and reliability.</li>
            <li>Clear communication in English, German, Russian and Ukrainian.</li>
            <li>Flexible support for residents, snowbirds and short-term rental hosts.</li>
            <li>Trust-based service with consistent quality and clear expectations.</li>
          </ul>
        </div>
      </section>

      {/* Service overview */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">
          Main service areas
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-white p-4 text-sm">
            <h3 className="font-semibold text-slate-900 mb-1">
              Residential &amp; Airbnb Cleaning
            </h3>
            <p className="text-slate-700">
              Professional upkeep for homes, condos and short-term rentals —
              from routine cleaning to deep cleans and turnover service.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 text-sm">
            <h3 className="font-semibold text-slate-900 mb-1">
              Property Watch &amp; Concierge
            </h3>
            <p className="text-slate-700">
              Peace of mind while you are away: visual inspections, key-holder
              service and coordination of simple tasks or contractor access.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 text-sm">
            <h3 className="font-semibold text-slate-900 mb-1">
              Elderly Assistance (non-medical)
            </h3>
            <p className="text-slate-700">
              Respectful, patient help for seniors with everyday tasks,
              companionship and step-by-step digital assistance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
