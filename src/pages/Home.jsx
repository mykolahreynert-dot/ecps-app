// src/pages/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-5">
          <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-primary">
            European Care &amp; Property Services
          </span>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Calm, European-quality care for your home, guests &amp; loved ones.
          </h1>

          <p className="text-sm md:text-base text-slate-700 max-w-xl">
            Discreet, reliable support for busy families, seasonal residents and
            elderly parents who deserve patient, respectful assistance – from
            detailed cleaning to property watch and non-medical senior support.
          </p>

          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="mt-[3px] h-4 w-4 rounded-full bg-brand-primary/10 text-[10px] flex items-center justify-center text-brand-primary">
                ✓
              </span>
              <span>
                Trusted key-holder &amp; property watch for seasonal homes.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[3px] h-4 w-4 rounded-full bg-brand-primary/10 text-[10px] flex items-center justify-center text-brand-primary">
                ✓
              </span>
              <span>
                Calm, non-medical senior assistance – practical help and patient
                company.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[3px] h-4 w-4 rounded-full bg-brand-primary/10 text-[10px] flex items-center justify-center text-brand-primary">
                ✓
              </span>
              <span>
                Tailored support for short-term rentals, Airbnb and visiting
                family.
              </span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              to="/booking"
              className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primaryDark transition"
            >
              Request a booking
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-brand-primary/40 bg-white px-5 py-2.5 text-sm font-semibold text-brand-primary hover:bg-brand-primary/5 transition"
            >
              Explore services
            </Link>
          </div>

          <p className="text-[11px] text-slate-500">
            Serving homeowners, seasonal residents and families with elderly
            parents in several Florida regions.
          </p>
        </div>

        {/* Right column: reassurance card */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand-primary/5 via-white to-brand-secondary/10 blur-2xl" />
          <div className="relative rounded-3xl border border-slate-100 bg-white/90 shadow-sm backdrop-blur px-6 py-5 md:px-7 md:py-6 space-y-4">
            <h2 className="text-base font-semibold text-slate-900">
              For families who want things handled quietly and properly
            </h2>
            <p className="text-xs md:text-sm text-slate-600">
              You don’t need another app or a noisy franchise. You need someone
              reliable who remembers how your home should look and how your
              loved ones like their routine – and then quietly takes care of it.
            </p>

            <dl className="grid grid-cols-2 gap-3 text-xs">
              <div className="space-y-1 rounded-2xl border border-slate-100 bg-slate-50/60 px-3 py-2.5">
                <dt className="text-[11px] font-medium text-slate-600">
                  Typical clients
                </dt>
                <dd className="text-slate-800">
                  Seasonal residents, adult children caring for parents,
                  traveling professionals.
                </dd>
              </div>
              <div className="space-y-1 rounded-2xl border border-slate-100 bg-slate-50/60 px-3 py-2.5">
                <dt className="text-[11px] font-medium text-slate-600">
                  Approach
                </dt>
                <dd className="text-slate-800">
                  European standards of cleanliness, punctuality and respect for
                  privacy.
                </dd>
              </div>
            </dl>

            <div className="flex flex-col gap-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <div className="flex items-center justify-between gap-3">
                <span>Not sure what you need yet?</span>
                <Link
                  to="/contact"
                  className="text-brand-primary font-medium hover:underline"
                >
                  Start with a calm conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT STRIP */}
      <section className="rounded-2xl bg-slate-50/80 border border-slate-100 px-4 py-4 md:px-6 md:py-5">
        <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-slate-500 mb-2">
          Who we typically support
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-xs md:text-sm text-slate-700">
          <div>
            <div className="font-semibold text-slate-900 mb-0.5">
              Seasonal &amp; remote owners
            </div>
            <p>
              Property watch, key-holder support, pre-arrival checks and
              post-departure care for homes that must always feel ready.
            </p>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-0.5">
              Families with elderly parents
            </div>
            <p>
              Non-medical assistance, calm company, practical help around the
              home and digital support for seniors.
            </p>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-0.5">
              Busy professionals &amp; hosts
            </div>
            <p>
              High-standard residential and Airbnb cleaning for people who want
              things handled properly, without micro-managing.
            </p>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Core service areas
            </h2>
            <p className="text-xs md:text-sm text-slate-600 max-w-2xl">
              A single, quietly coordinated point of contact for your home,
              property and non-medical support for elderly family members.
            </p>
          </div>
          <Link
            to="/services"
            className="hidden md:inline-flex items-center text-xs font-semibold text-brand-primary hover:underline"
          >
            View all services
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              Residential &amp; Airbnb Cleaning
            </h3>
            <p className="text-xs text-slate-600 mb-2.5">
              Detailed, consistent cleaning with an eye for order and calm
              atmosphere – for primary homes and short-term rentals.
            </p>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li>• Regular or one-time visits</li>
              <li>• Turnover cleaning for guests</li>
              <li>• Attention to small, “hotel-style” details</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              Property Watch &amp; Key-Holder
            </h3>
            <p className="text-xs text-slate-600 mb-2.5">
              For seasonal and remote owners who want a trusted person to check
              on the property, not just an automated report.
            </p>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li>• Scheduled interior &amp; exterior checks</li>
              <li>• Vendor coordination when needed</li>
              <li>• “Home is ready” preparation before you arrive</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              Non-medical Senior Support
            </h3>
            <p className="text-xs text-slate-600 mb-2.5">
              Calm, respectful help for elderly parents who need assistance with
              daily tasks, routines and digital life.
            </p>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li>• Light home support and organisation</li>
              <li>• Companionship and gentle structure</li>
              <li>• Help with phone, tablet, online tasks</li>
            </ul>
          </div>
        </div>

        <div className="md:hidden">
          <Link
            to="/services"
            className="inline-flex items-center text-xs font-semibold text-brand-primary hover:underline"
          >
            View all services
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Why families and owners choose European Care &amp; Property Services
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              European standards, Florida reality
            </h3>
            <p className="text-xs text-slate-600">
              A combination of European attention to detail with the flexibility
              needed for Florida’s seasonal and travel-heavy lifestyle.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              One point of contact
            </h3>
            <p className="text-xs text-slate-600">
              Instead of managing multiple cleaners, neighbours and helpers, you
              have one calm coordinator who understands the whole picture.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
              Respect for privacy &amp; dignity
            </h3>
            <p className="text-xs text-slate-600">
              Particular care is taken with elderly parents and personal spaces
              – things are done quietly, respectfully and without drama.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / OUR PROCESS */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              A calm, three-step process
            </h2>
            <p className="text-xs md:text-sm text-slate-600 max-w-2xl">
              Clear expectations and simple steps – for you and for your family
              members.
            </p>
          </div>
          <Link
            to="/our-process"
            className="hidden md:inline-flex items-center text-xs font-semibold text-brand-primary hover:underline"
          >
            View full process
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <div className="mb-2 text-xs font-semibold text-brand-primary">
              Step 1
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Calm, no-rush conversation
            </h3>
            <p className="text-xs text-slate-600">
              We listen to what is really needed – not just a list of tasks.
              This can be by phone, e-mail message, depending on what feels
              easiest.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <div className="mb-2 text-xs font-semibold text-brand-primary">
              Step 2
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Tailored proposal &amp; first visit
            </h3>
            <p className="text-xs text-slate-600">
              You receive a clear outline of visits and responsibilities. The
              first visit is treated as a practical trial to tune the routine.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
            <div className="mb-2 text-xs font-semibold text-brand-primary">
              Step 3
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Gentle, ongoing adjustment
            </h3>
            <p className="text-xs text-slate-600">
              After the first weeks we adjust frequency, focus areas and
              communications so the support fits naturally into your life.
            </p>
          </div>
        </div>

        <div className="md:hidden">
          <Link
            to="/our-process"
            className="inline-flex items-center text-xs font-semibold text-brand-primary hover:underline"
          >
            View full process
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="rounded-2xl bg-gradient-to-r from-brand-primary/10 via-white to-brand-secondary/10 border border-brand-primary/10 px-5 py-6 md:px-7 md:py-7 space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900">
          Ready when you are – even if it is just for an initial visit.
        </h2>
        <p className="text-xs md:text-sm text-slate-700 max-w-2xl">
          Whether you are organising help for yourself, your parents or a
          seasonal property, you do not have to have all the answers today.
          Share where you are now, and we will suggest a calm, realistic next
          step.
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
            Or send a short message
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
