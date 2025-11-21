// src/pages/About.jsx
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="space-y-10">
      {/* HERO / INTRO */}
      <section className="space-y-4 max-w-3xl">
        <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary">
          About European Care &amp; Property Services
        </span>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          European-quality care for your home, guests &amp; loved ones.
        </h1>

        <p className="text-sm md:text-base text-slate-700">
          European Care &amp; Property Services was created for families,
          seasonal residents and elderly parents who want things handled
          quietly, reliably and with dignity – from detailed home cleaning and
          property watch to calm, non-medical support for seniors.
        </p>

        <p className="text-xs md:text-sm text-slate-600">
          We support homeowners and families in{" "}
          <span className="font-medium">
            Sarasota, Bradenton, Venice, Tampa Bay and surrounding areas
          </span>{" "}
          with a single, calmly coordinated point of contact who understands
          both European standards and Florida’s practical reality.
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

      {/* PHILOSOPHY / APPROACH */}
      <section className="grid gap-6 md:grid-cols-[3fr,2fr] items-start">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">
            A calm, European approach to practical care
          </h2>
          <p className="text-sm text-slate-700">
            Many services promise to “do everything”, but families quickly
            discover that coordination, communication and basic respect often
            slip through the cracks. Our focus is more specific:{" "}
            <span className="font-medium">
              to become a trusted, long-term partner around your home and your
              loved ones
            </span>
            , not a rotation of strangers.
          </p>
          <p className="text-sm text-slate-700">
            We bring a European sense of order, punctuality and discretion to
            everyday tasks – combined with the flexibility needed for seasonal
            living, travel and changing family situations in Florida.
          </p>
          <p className="text-sm text-slate-700">
            Whether you are a seasonal owner, an adult child arranging support
            for parents, or a professional managing guests and visitors, our
            goal is simple:{" "}
            <span className="font-medium">
              you should feel that things are handled properly, without drama
              and without constant reminders.
            </span>
          </p>
        </div>

        <aside className="rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm space-y-3 text-sm text-slate-700">
          <h3 className="text-sm font-semibold text-slate-900">
            Typical situations we quietly handle
          </h3>
          <ul className="space-y-2 text-xs md:text-sm">
            <li className="flex gap-2">
              <span className="mt-[3px] h-4 w-4 rounded-full bg-brand-primary/10 text-[10px] flex items-center justify-center text-brand-primary">
                ✓
              </span>
              <span>
                Seasonal owners who want a trusted key-holder and regular
                property checks between visits.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[3px] h-4 w-4 rounded-full bg-brand-primary/10 text-[10px] flex items-center justify-center text-brand-primary">
                ✓
              </span>
              <span>
                Adult children who live locally or abroad and want calm,
                respectful support around their parents’ home and daily
                routines.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[3px] h-4 w-4 rounded-full bg-brand-primary/10 text-[10px] flex items-center justify-center text-brand-primary">
                ✓
              </span>
              <span>
                Busy professionals and hosts who need high-standard cleaning and
                preparation for guests, visitors or short-term rentals.
              </span>
            </li>
          </ul>
          <p className="text-xs text-slate-500">
            Every family and property is different. The common point is a desire
            for quiet reliability and clear communication.
          </p>
        </aside>
      </section>

      {/* FOUNDER / BACKGROUND */}
      <section className="grid gap-6 md:grid-cols-[2.3fr,2fr] items-start">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Professional background with a personal understanding of care
          </h2>
          <p className="text-sm text-slate-700">
            European Care &amp; Property Services is led by a founder with over
            two decades of experience in HR, operations and working with people
            in demanding environments. That background shapes how we choose
            partners, how we communicate and how we design routines for homes
            and for elderly clients.
          </p>
          <p className="text-sm text-slate-700">
            At the same time, this is not an abstract “management concept”. The
            approach is deeply personal: it is informed by real experience of
            organising support for family, managing life across countries and
            understanding how important it is for older people to feel
            respected, not “handled”.
          </p>
          <p className="text-sm text-slate-700">
            The combination of structured thinking and personal empathy means
            you receive a service that is both{" "}
            <span className="font-medium">well-organised</span> and{" "}
            <span className="font-medium">human</span>. We pay attention to the
            details that many services consider “extra”.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-slate-50/70 px-5 py-4 text-sm text-slate-700 space-y-3">
          <h3 className="text-sm font-semibold text-slate-900">
            How this influences everyday work
          </h3>
          <ul className="space-y-2 text-xs md:text-sm">
            <li>
              • Clear expectations and written agreements where appropriate.
            </li>
            <li>
              • Respectful communication with elderly clients and their
              families.
            </li>
            <li>
              • Reliability in timing – and honest updates if something changes.
            </li>
            <li>• Continuous small improvements based on your feedback.</li>
          </ul>
          <p className="text-xs text-slate-500">
            The goal is not to promise perfection, but to build a relationship
            where you know who is responsible – and you feel comfortable asking
            for adjustments when life changes.
          </p>
        </div>
      </section>

      {/* HOW WE WORK / LINK TO PROCESS */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          A clear, gentle way of working
        </h2>
        <p className="text-sm text-slate-700 max-w-3xl">
          We follow a simple, three-step process that gives you clarity from the
          beginning: an initial calm conversation, a tailored proposal with a
          first visit, and then gentle adjustment as we learn your routines and
          preferences.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <div className="mb-2 text-xs font-semibold text-brand-primary">
              Step 1
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Calm, no-rush conversation
            </h3>
            <p className="text-xs text-slate-600">
              You share what is happening now – your home, your schedule, your
              parents’ situation. No pressure to decide everything in one call.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <div className="mb-2 text-xs font-semibold text-brand-primary">
              Step 2
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Tailored visits &amp; responsibilities
            </h3>
            <p className="text-xs text-slate-600">
              You receive a clear outline of how we can help: visit frequency,
              focus areas and communication lines – for cleaning, property watch
              and senior support.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <div className="mb-2 text-xs font-semibold text-brand-primary">
              Step 3
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Ongoing, thoughtful adjustment
            </h3>
            <p className="text-xs text-slate-600">
              As trust builds, we adjust visits and details so the support fits
              naturally into your life and, where relevant, your parents’
              comfort and dignity.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            to="/our-process"
            className="inline-flex items-center rounded-full border border-brand-primary/40 bg-white px-5 py-2.5 text-sm font-semibold text-brand-primary hover:bg-brand-primary/5 transition"
          >
            View full process
          </Link>
          <Link
            to="/booking"
            className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primaryDark transition"
          >
            Start a booking request
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
