// src/pages/About.jsx (or wherever your About page lives)

export default function About() {
  return (
    <main className="bg-emerald-50/40 min-h-screen">
      {/* HERO */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid gap-10 lg:grid-cols-[1.2fr,1fr] items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase mb-2">
              About European Care &amp; Property Services
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
              Premium cleaning, property watch and senior support you can depend
              on.
            </h1>
            <p className="text-base sm:text-lg text-slate-700 mb-4 max-w-xl">
              European Care &amp; Property Services was created to provide
              reliable, trust-based support for homeowners, families, seniors
              and short-term rental owners in the Sarasota / Bradenton / Venice
              and Tampa Bay region.
            </p>
            <p className="text-base text-slate-700 mb-4 max-w-xl">
              We combine European precision with a warm, human-centered
              approach. Our team shows up when we say we will, follows
              agreed-upon instructions carefully, and keeps you informed at
              every step. The result: dependable service, thoughtful care and
              genuine peace of mind.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-800">
                ✔ Fully vetted, insured contractors
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-800">
                ✔ Multilingual support (EN / DE / RU / UA)
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-800">
                ✔ Designed for snowbirds, seniors &amp; hosts
              </span>
            </div>
          </div>

          {/* Right side – hero image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 shadow-lg overflow-hidden flex items-center justify-center">
              {/* Replace this block with a real image later */}
              {/* Example: <img src="/images/about-hero.jpg" alt="Team supporting clients" className="w-full h-full object-cover" /> */}
              <div className="text-white text-center px-6">
                <p className="text-sm tracking-wide uppercase mb-2">
                  Your home. Your loved ones. Your peace of mind.
                </p>
                <p className="text-2xl font-semibold mb-2">
                  One trusted partner for cleaning, property watch &amp; senior
                  support.
                </p>
                <p className="text-sm text-emerald-50/90">
                  Placeholder visual — add a real photo of a tidy home, smiling
                  client or team member here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE-COLUMN VALUE SECTION */}
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 flex flex-col">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xl">
                {/* Icon placeholder */}
                🏠
              </div>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                For homeowners &amp; families
              </h2>
              <p className="text-sm text-slate-700">
                Regular residential cleaning, deep cleans and organizational
                help so your home always feels calm, safe and welcoming – even
                when life is busy.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 flex flex-col">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xl">
                {/* Icon placeholder */}
                🗝️
              </div>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                For snowbirds &amp; hosts
              </h2>
              <p className="text-sm text-slate-700">
                Property watch, key holding and Airbnb turnovers with
                checklists, photos and clear reporting — so you can be abroad
                while your property is cared for as if you were here.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 flex flex-col">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xl">
                {/* Icon placeholder */}
                👵
              </div>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                For seniors &amp; their families
              </h2>
              <p className="text-sm text-slate-700">
                Respectful, non-medical support: errands, companionship, light
                help at home and digital assistance, with clear boundaries and
                reliable communication for relatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY + TRUST SECTION */}
      <section className="py-10 lg:py-14 bg-emerald-900 text-emerald-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[1.4fr,1fr] items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              A European approach to care and reliability
            </h2>
            <p className="text-sm sm:text-base text-emerald-50/90 mb-3">
              Behind ECPS is a European management background in HR, operations
              and quality systems. We bring that same discipline into home and
              property services: clear processes, checklists, supervision and
              continuous improvement.
            </p>
            <p className="text-sm sm:text-base text-emerald-50/90 mb-3">
              Every contractor is carefully selected, oriented on our standards
              and monitored through feedback and photo documentation. You are
              never “just another job” — you are a long-term client we want to
              protect and support.
            </p>
          </div>

          <div className="bg-emerald-800/70 border border-emerald-600 rounded-2xl p-5">
            <h3 className="text-sm font-semibold tracking-wide uppercase mb-3 text-emerald-200">
              What you can expect
            </h3>
            <ul className="space-y-2 text-sm text-emerald-50/90">
              <li>• Clear communication before and after every visit</li>
              <li>• Photos on request for property watch and turnovers</li>
              <li>• Respect for your home, rules and privacy</li>
              <li>• Flexible services that adapt as your needs change</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LANGUAGES / SERVICE AREA */}
      <section className="py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 lg:grid-cols-2">
          <div className="bg-white rounded-2xl border border-emerald-100 p-6">
            <h2 className="text-base font-semibold text-slate-900 mb-2">
              Languages
            </h2>
            <p className="text-sm text-slate-700 mb-1">
              Communication is available in:
            </p>
            <p className="text-sm font-semibold text-slate-900">
              English, German, Russian, Ukrainian
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-emerald-100 p-6">
            <h2 className="text-base font-semibold text-slate-900 mb-2">
              Service area
            </h2>
            <p className="text-sm text-slate-700">
              We serve Sarasota, Bradenton, Venice, North Port and the wider
              Tampa Bay region. For special requests outside this area, please
              contact us — we&apos;ll do our best to help or recommend a trusted
              partner.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
