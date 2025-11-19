// src/pages/About.jsx
function About() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">
        About European Care &amp; Property Services
      </h1>

      <p className="text-slate-700 text-sm md:text-base">
        European Care &amp; Property Services was created to provide reliable,
        trust-based support for homeowners, families, seniors and short-term
        rental owners in the Sarasota/Bradenton/Venice and Tampa Bay region.
      </p>

      <p className="text-slate-700 text-sm md:text-base">
        Clients choose us because we combine European precision with a warm,
        human-centered approach. We show up when we say we will, follow
        agreed-upon instructions carefully, and maintain transparent
        communication at every step. The goal is simple: dependable service,
        thoughtful care and peace of mind for every client we serve.
      </p>

      <p className="text-slate-700 text-sm md:text-base">
        Whether you are a snowbird who needs someone to watch over your
        property, an Airbnb host looking for a trustworthy turnover partner, a
        busy family that needs regular cleaning support, or an aging parent who
        would benefit from respectful assistance and digital help — we are here
        to help.
      </p>

      <div className="mt-4 rounded-lg border bg-white p-4 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900 mb-1">
          Languages
        </h2>
        <p>
          Communication is available in:
          <br />
          <span className="font-medium">
            English, German, Russian, Ukrainian
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
