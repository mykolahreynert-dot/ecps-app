// src/pages/Process.jsx

function Process() {
  const steps = [
    {
      title: "1. Initial contact",
      text: "You contact us by phone, email or through the booking form. We take a moment to understand your situation, the property type and what you would like help with.",
    },
    {
      title: "2. Short clarification",
      text: "If needed, we ask a few focused questions: size of the home, frequency, special needs for seniors, access details, preferred days and time windows.",
    },
    {
      title: "3. Transparent proposal",
      text: "You receive a clear description of what will be done, how long it is expected to take and the price or price range. For more complex cases, we may suggest a short on-site assessment first.",
    },
    {
      title: "4. First visit",
      text: "We arrive on time, introduce ourselves calmly and walk through the agreed tasks. During the first visit we pay special attention to your preferences and any small details that matter to you.",
    },
    {
      title: "5. Feedback & fine-tuning",
      text: "After the visit you can share what felt good and what you would like to adjust. We prefer honest, practical feedback so the service fits you exactly.",
    },
    {
      title: "6. Ongoing cooperation",
      text: "For regular clients, we keep a simple written record of preferences, schedules and key details. You always know who is coming, when, and for what purpose.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header block */}
      <section className="space-y-3">
        <h1 className="text-2xl font-bold text-slate-900">Our process</h1>
        <p className="text-slate-700 text-sm md:text-base max-w-2xl">
          We aim to make things calm and predictable – especially for seniors,
          families and clients who spend time abroad. Below you can see how we
          normally work, from the first contact to ongoing cooperation.
        </p>
      </section>

      {/* Timeline style steps */}
      <section className="rounded-2xl border bg-white p-5 md:p-7 shadow-sm">
        <ol className="relative border-l border-slate-200 pl-4 space-y-5">
          {steps.map((step, index) => (
            <li key={step.title} className="relative pl-4">
              {/* Dot on the line */}
              <span className="absolute -left-[9px] mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-white border border-brand-primary">
                <span className="h-2 w-2 rounded-full bg-brand-primary" />
              </span>
              <h2 className="text-sm md:text-base font-semibold text-slate-900">
                {step.title}
              </h2>
              <p className="mt-1 text-xs md:text-sm text-slate-700">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Reassurance blocks */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-brand-primary/20 bg-brand-primary/5 p-5 text-sm text-slate-700 space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            For seniors &amp; their families
          </h3>
          <p>
            We move at a calm pace, explain what we are doing if desired and
            respect existing routines. Family members can agree on tasks and
            communication preferences in advance.
          </p>
          <p className="text-xs text-slate-500">
            Communication can be in English, German, Russian or Ukrainian.
          </p>
        </div>

        <div className="rounded-xl border border-brand-secondary/30 bg-brand-secondary/5 p-5 text-sm text-slate-700 space-y-2">
          <h3 className="text-base font-semibold text-slate-900">
            For owners, snowbirds &amp; hosts
          </h3>
          <p>
            If you travel or live abroad part of the year, we can keep you
            updated in a structured way: short summaries, photos where
            appropriate and agreed checklists for each visit.
          </p>
          <p className="text-xs text-slate-500">
            Over time we build a stable routine so you spend less time managing
            and more time simply knowing things are under control.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Process;
