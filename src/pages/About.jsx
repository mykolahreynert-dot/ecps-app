export default function About() {
  return (
    <main className="bg-emerald-50/40">
      {/* Hero */}
      <section className="bg-white border-b">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr,1fr] lg:px-8 lg:py-16">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              European Care &amp; Property Services
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Premium cleaning, property watch and senior support you can depend
              on.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              We blend European precision with warm, human service for
              homeowners, snowbirds, Airbnb hosts and families in Sarasota,
              Bradenton, Venice and the greater Tampa Bay area. Every visit
              follows a clear process, so you always know what was done and what
              happens next.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                Thoroughly vetted, insured teams
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                Multilingual support: EN / DE / RU / UA
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                Designed for snowbirds, seniors &amp; hosts
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-700 via-emerald-500 to-teal-400 shadow-xl ring-1 ring-emerald-900/10">
              <div className="absolute inset-0 opacity-25 mix-blend-overlay">
                <div className="absolute -left-10 top-8 h-48 w-48 rounded-full bg-white/30 blur-3xl" />
                <div className="absolute right-0 bottom-4 h-40 w-40 rounded-full bg-emerald-900/20 blur-3xl" />
              </div>
              <div className="relative flex h-full items-center justify-center px-8 text-center text-white">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-50/80">
                    Peace of mind, documented
                  </p>
                  <p className="text-2xl font-semibold leading-snug">
                    Replace with your photo or hero image to showcase the ECPS
                    team and results.
                  </p>
                  <p className="text-sm text-emerald-50/90">
                    Clean, modern gradient placeholder sits flush with the
                    layout until you add an image.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value pillars */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-800">
              Icon
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Homeowners &amp; families
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Routine and deep cleaning, tidying and thoughtful home upkeep that
              keeps your spaces calm, hygienic and guest-ready with minimal
              disruption to your day-to-day life.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Clear updates and checklists ensure you always know what was
              handled.
            </p>
          </div>

          <div className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-800">
              Icon
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Snowbirds &amp; hosts
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Property watch, key holding and Airbnb turnovers with documented
              checklists, photo proofs and proactive alerts while you are away.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              We protect your standards, greet guests with care and safeguard
              your investment as if you were here.
            </p>
          </div>

          <div className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-800">
              Icon
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Seniors &amp; their families
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Respectful, non-medical companionship, errands and light household
              help tailored to personal preferences and safety.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Families receive transparent communication so loved ones feel
              supported and secure.
            </p>
          </div>
        </div>
      </section>

      {/* European approach / trust */}
      <section className="bg-emerald-900 py-12 text-emerald-50 lg:py-14">
        <div className="mx-auto grid max-w-5xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[1.35fr,1fr] lg:px-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
              European approach
            </p>
            <h2 className="text-2xl font-semibold leading-snug">
              Disciplined processes, attentive communication, reliable outcomes.
            </h2>
            <p className="text-sm leading-relaxed text-emerald-50/90 sm:text-base">
              With roots in European HR and operations, ECPS is built on
              structure: defined checklists, quality controls, respectful
              conduct and continual follow-up. That backbone lets us deliver
              warm, personable service while protecting your home, guests and
              loved ones.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-700/70 bg-emerald-800/70 p-6 shadow-lg">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-100">
              What you can expect
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-emerald-50/90">
              <li>Consistent scheduling and confirmation before each visit</li>
              <li>
                Photo documentation and notes for property watch or turnovers
              </li>
              <li>Respectful adherence to your house rules and privacy</li>
              <li>Services that adapt as your needs change season to season</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Languages and service area */}
      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-14">
        <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Languages</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Clear communication available in English, German, Russian and
            Ukrainian. We keep updates concise and professional so nothing is
            lost in translation.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">
            Service area
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Serving Sarasota, Bradenton, Venice, North Port and the wider Tampa
            Bay region. For special requests just beyond these areas, reach out
            and we will arrange support or connect you with a trusted partner.
          </p>
        </div>
      </section>
    </main>
  );
}
