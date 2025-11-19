// src/pages/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="space-y-10">
      {/* Luxury hero */}
      <section className="relative rounded-3xl bg-white shadow-md border border-brand-primary/10 overflow-hidden">
        {/* Soft background accent */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-primary/5 via-brand-secondary/5 to-transparent" />

        <div className="relative grid gap-8 md:grid-cols-[3fr,2fr] items-stretch px-6 py-8 md:px-10 md:py-10">
          {/* Left side: main message */}
          <div className="flex flex-col justify-center space-y-4">
            <span className="inline-flex items-center self-start rounded-full bg-brand-secondary/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-secondary uppercase">
              European-owned • Discreet • Detail-focused
            </span>

            <h1 className="text-lg md:text-xl font-semibold leading-snug text-brand-primary">
              European-quality care for your home, guests &amp; loved ones.
            </h1>

            <p className="text-slate-700 text-sm md:text-base max-w-xl">
              Discreet, reliable cleaning, property care and non-medical
              assistance for homeowners, snowbirds, seniors and rental hosts
              across Sarasota/Bradenton/Venice, Tampa Bay region and nearby
              areas.
            </p>

            {/* Key points */}
            <div className="grid gap-2 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <span className="mt-[2px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-primary text-[10px] text-white">
                  ✓
                </span>
                <span>Careful, European-standard attention to detail.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[2px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-primary text-[10px] text-white">
                  ✓
                </span>
                <span>Respectful support for seniors and their families.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[2px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-primary text-[10px] text-white">
                  ✓
                </span>
                <span>Clear communication and flexible arrangements.</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                to="/booking"
                className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primaryDark hover:shadow-md transition"
              >
                Book a service
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-brand-secondary/70 bg-brand-secondary/10 px-5 py-2.5 text-sm font-semibold text-brand-secondary hover:bg-brand-secondary/20 transition"
              >
                View services &amp; pricing
              </Link>
            </div>
          </div>

          {/* Right side: premium info card */}
          <div className="flex items-stretch">
            <div className="ml-auto w-full max-w-sm rounded-2xl border border-brand-secondary/30 bg-white/90 px-5 py-5 shadow-sm backdrop-blur-sm flex flex-col justify-between">
              <div className="space-y-3 text-sm text-slate-700">
                <h2 className="text-base font-semibold text-slate-900">
                  Designed for calm, not stress.
                </h2>
                <p>
                  Ideal for clients who value quiet professionalism, punctuality
                  and a trust-based relationship rather than a “rush job”.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl border border-brand-primary/20 bg-brand-primary/5 px-3 py-2">
                    <div className="text-[10px] font-medium uppercase text-slate-500">
                      Typical response
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      Within 1 business day
                    </div>
                  </div>
                  <div className="rounded-xl border border-brand-secondary/30 bg-brand-secondary/5 px-3 py-2">
                    <div className="text-[10px] font-medium uppercase text-slate-500">
                      Languages
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      EN • DE • RU • UK
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-500">
                  We start with a conversation, agree expectations in writing
                  where needed, and build long-term cooperation based on trust.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-dashed border-slate-200 text-xs text-slate-500">
                Prefer to speak directly?{" "}
                <span className="font-semibold text-brand-primary">
                  Use the call button in the corner to reach us.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service overview */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">
          Main service areas
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-white p-4 text-sm hover:border-brand-secondary hover:shadow-md transition">
            <h3 className="font-semibold text-slate-900 mb-1">
              Residential &amp; Airbnb Cleaning
            </h3>
            <p className="text-slate-700">
              Professional upkeep for homes, condos and short-term rentals —
              routine, deep cleaning and turnovers.
            </p>
          </div>

          <div className="rounded-lg border bg-white p-4 text-sm hover:border-brand-secondary hover:shadow-md transition">
            <h3 className="font-semibold text-slate-900 mb-1">
              Property Watch &amp; Concierge
            </h3>
            <p className="text-slate-700">
              Peace of mind while you are away: visual checks, key-holder
              service and basic coordination.
            </p>
          </div>

          <div className="rounded-lg border bg-white p-4 text-sm hover:border-brand-secondary hover:shadow-md transition">
            <h3 className="font-semibold text-slate-900 mb-1">
              Elderly Assistance (non-medical)
            </h3>
            <p className="text-slate-700">
              Respectful help for seniors with everyday tasks, companionship,
              organization and digital support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
