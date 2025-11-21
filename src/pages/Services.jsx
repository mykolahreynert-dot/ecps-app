// src/pages/Services.jsx
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="space-y-4 max-w-3xl">
        <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary">
          Services
        </span>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Coordinated home, property &amp; senior support – without the noise.
        </h1>

        <p className="text-sm md:text-base text-slate-700">
          European Care &amp; Property Services provides discreet, consistent
          support around your home, property and elderly loved ones – from
          detailed cleaning and property watch to calm, non-medical assistance
          and digital help for seniors.
        </p>

        <p className="text-xs md:text-sm text-slate-600">
          We work with homeowners, seasonal residents and families in{" "}
          <span className="font-medium">
            Sarasota, Bradenton, Venice, Tampa Bay and surrounding areas
          </span>
          , focusing on long-term trust, clear communication and a calm,
          respectful presence in your home.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            to="/booking"
            className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primaryDark transition"
          >
            Start a booking request
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-brand-primary/40 bg-white px-5 py-2.5 text-sm font-semibold text-brand-primary hover:bg-brand-primary/5 transition"
          >
            Send a short message
          </Link>
        </div>
      </section>

      {/* CORE SERVICE AREAS */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Core service areas
        </h2>
        <p className="text-sm text-slate-700 max-w-3xl">
          Most clients combine two or more services over time. You can start
          with one area – for example, cleaning or property watch – and later
          add senior support or digital help when the situation changes.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Residential & Airbnb Cleaning */}
          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              Residential &amp; Airbnb Cleaning
            </h3>
            <p className="text-xs text-slate-600 mb-2.5">
              Detailed, consistent cleaning for primary homes and short-term
              rentals – with attention to order, calm and small “hotel-style”
              details.
            </p>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li>• Regular weekly, bi-weekly or monthly routines</li>
              <li>• One-time deep cleaning for arrivals or after guests</li>
              <li>
                • Turnover cleaning and preparation for Airbnb/short stays
              </li>
            </ul>
          </div>

          {/* Property Watch & Key-Holder */}
          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              Property Watch &amp; Key-Holder
            </h3>
            <p className="text-xs text-slate-600 mb-2.5">
              For seasonal and remote owners who need a trusted person to check
              on the property, not just a brief report.
            </p>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li>• Regular interior &amp; exterior visual checks</li>
              <li>• Basic airing, mail check and simple observations</li>
              <li>• Being on-site for vendors or deliveries by agreement</li>
            </ul>
          </div>

          {/* Non-medical Senior Support */}
          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              Non-medical Senior Support
            </h3>
            <p className="text-xs text-slate-600 mb-2.5">
              Calm, respectful assistance for elderly parents who need support
              with everyday organisation, routines and feeling less alone.
            </p>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li>• Light home support and organisation</li>
              <li>• Gentle structure for the day, companionship</li>
              <li>
                • Cooperation with family regarding preferences and limits
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ADDITIONAL & SPECIALISED SUPPORT */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Additional, specialised support
        </h2>
        <p className="text-sm text-slate-700 max-w-3xl">
          Life does not fit into simple categories. In addition to core
          services, we can help with digital life, outdoor coordination and
          individually designed support packages for your situation.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Digital Help for Seniors */}
          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              Digital Help for Seniors
            </h3>
            <p className="text-xs text-slate-600 mb-2.5">
              Practical, patient help with phones, tablets and basic online
              tasks so elderly parents feel more connected and less confused.
            </p>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li>• Phone and tablet basics, safe use</li>
              <li>• Keeping in touch with family by video or messaging</li>
              <li>• Simple step-by-step notes left for later</li>
            </ul>
          </div>

          {/* Patio & Outdoor Coordination */}
          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              Patio &amp; Outdoor Coordination
            </h3>
            <p className="text-xs text-slate-600 mb-2.5">
              Coordination around outdoor areas, small tasks and vendors – so
              the outside feels as looked after as the inside.
            </p>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li>• Light patio and outdoor organisation</li>
              <li>• Being present when third-party services visit</li>
              <li>• Visual checks after storms or strong weather</li>
            </ul>
          </div>

          {/* Custom Add-On Services */}
          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              Custom Add-On Services
            </h3>
            <p className="text-xs text-slate-600 mb-2.5">
              For situations that do not fit a standard list – we can design a
              simple, written plan together.
            </p>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li>• Support around visits from relatives or guests</li>
              <li>
                • Periods of more intensive help (within non-medical scope)
              </li>
              <li>• Combined plans for home, property and senior support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW VISITS WORK */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Visit patterns &amp; how we start
        </h2>
        <p className="text-sm text-slate-700 max-w-3xl">
          Some clients begin with a one-time visit or a short trial period;
          others start directly with a weekly or bi-weekly rhythm. We adjust the
          pattern after we both see how it feels in real life.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              One-time &amp; trial visits
            </h3>
            <p className="text-xs text-slate-600">
              Ideal if you want to start carefully, prepare for a visit, or see
              how a new routine feels for elderly parents before deciding on a
              regular schedule.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              Regular weekly / bi-weekly support
            </h3>
            <p className="text-xs text-slate-600">
              Most long-term clients choose weekly or bi-weekly visits for
              cleaning, property checks and senior support, with the option to
              add extra visits when needed.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              Seasonal &amp; travel-based rhythms
            </h3>
            <p className="text-xs text-slate-600">
              For seasonal residents and frequent travellers, visits are planned
              around arrivals, departures and quiet periods in between. Property
              watch and senior support can adapt accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* WHO EACH SERVICE IS FOR */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Matching services to your situation
        </h2>
        <p className="text-sm text-slate-700 max-w-3xl">
          You do not have to know exactly which services to choose before
          contacting us. The examples below can help you orient yourself, and we
          can refine the plan together.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              Seasonal homeowners
            </h3>
            <p className="text-xs text-slate-600 mb-2">
              You spend part of the year elsewhere and want the home to feel
              ready whenever you arrive – without managing multiple contacts.
            </p>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li>• Property Watch &amp; Key-Holder</li>
              <li>• Pre-arrival cleaning and preparation</li>
              <li>• Checks after storms or long absences</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              Families with elderly parents
            </h3>
            <p className="text-xs text-slate-600 mb-2">
              You want your parents to feel safe and respected, and you want a
              calm, reliable partner who can support the home and routine.
            </p>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li>• Non-medical Senior Support</li>
              <li>• Digital Help for Seniors</li>
              <li>• Light home support &amp; coordination with family</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              Busy professionals &amp; hosts
            </h3>
            <p className="text-xs text-slate-600 mb-2">
              You manage work, travel and guests, and want high-standard,
              reliable cleaning and preparation without micro-managing.
            </p>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li>• Residential &amp; Airbnb Cleaning</li>
              <li>• Occasional additional help before/after visits</li>
              <li>• Combined plans for repeat guests or stays</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="rounded-2xl bg-gradient-to-r from-brand-primary/10 via-white to-brand-secondary/10 border border-brand-primary/10 px-5 py-6 md:px-7 md:py-7 space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900">
          You do not have to decide everything today.
        </h2>
        <p className="text-xs md:text-sm text-slate-700 max-w-2xl">
          Many clients start with a simple trial visit or a limited set of
          tasks. From there we adjust together. Share where you are now – your
          home, your parents, your schedule – and we will suggest a calm,
          realistic next step.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            to="/booking"
            className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primaryDark transition"
          >
            Start a booking request
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-brand-primary/40 bg-white px-5 py-2.5 text-sm font-semibold text-brand-primary hover:bg-brand-primary/5 transition"
          >
            Send a short message
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
