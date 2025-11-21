// src/pages/Process.jsx
import React from "react";

const steps = [
  {
    number: 1,
    title: "Initial contact",
    description:
      "You contact us by phone, email or through the booking form. We take a moment to understand your situation, the property type and what you would like help with.",
  },
  {
    number: 2,
    title: "Short clarification",
    description:
      "If needed, we ask a few focused questions: size of the home, frequency, special needs for seniors, access details, preferred days and time windows.",
  },
  {
    number: 3,
    title: "Transparent proposal",
    description:
      "You receive a clear description of what will be done, how long it is expected to take and the price or price range. For more complex cases, we may suggest a short on-site assessment first.",
  },
  {
    number: 4,
    title: "First visit",
    description:
      "We arrive on time, introduce ourselves calmly and walk through the agreed tasks. During the first visit we pay special attention to your preferences and any small details that matter to you.",
  },
  {
    number: 5,
    title: "Feedback & fine-tuning",
    description:
      "After the visit you can share what felt good and what you would like to adjust. We prefer honest, practical feedback so the service fits you exactly.",
  },
  {
    number: 6,
    title: "Ongoing cooperation",
    description:
      "For regular clients, we keep a simple written record of preferences, schedules and key details. You always know who is coming, when, and for what purpose.",
  },
];

const reassurance = [
  {
    title: "For seniors & families",
    body: "Calm, respectful presence in the home. We adapt to energy levels, medical routines and communication style, and we never rush conversations.",
  },
  {
    title: "For seasonal owners & hosts",
    body: "Reliable oversight while you are away: property checks, key-holder service, organizing tradespeople, preparing homes before arrival and closing them after departure.",
  },
  {
    title: "For relatives abroad",
    body: "Clear communication, written updates when needed, and a single point of contact you can trust when you are in another state or country.",
  },
];

const Process = () => {
  return (
    <div className="bg-emerald-50/40 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <header className="max-w-3xl mb-10">
          <p className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-900/80">
            Our process · Calm, predictable cooperation
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-emerald-950 tracking-tight">
            Our process – from first contact to ongoing care
          </h1>
          <p className="mt-3 text-base sm:text-lg text-emerald-900/80">
            We aim to make things calm and predictable – especially for seniors,
            families and clients who spend time abroad. Below you can see how we
            normally work, from the first contact to ongoing cooperation.
          </p>
        </header>

        {/* Steps */}
        <section className="bg-white border border-emerald-100 rounded-2xl shadow-sm p-6 sm:p-8 mb-10">
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-4 border-b border-emerald-100 pb-5 last:border-b-0 last:pb-0"
              >
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-xs font-semibold text-white">
                  {step.number}
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-semibold text-emerald-950">
                    {step.title}
                  </h2>
                  <p className="mt-1 text-sm text-emerald-900/80">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reassurance / who this is for */}
        <section className="grid gap-6 lg:grid-cols-3 mb-10">
          {reassurance.map((item) => (
            <article
              key={item.title}
              className="bg-white border border-emerald-100 rounded-2xl shadow-sm p-5 sm:p-6"
            >
              <h3 className="text-sm sm:text-base font-semibold text-emerald-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-emerald-900/80">{item.body}</p>
            </article>
          ))}
        </section>

        {/* How we start */}
        <section className="bg-emerald-900 rounded-2xl text-emerald-50 p-6 sm:p-7 lg:p-8">
          <h2 className="text-lg sm:text-xl font-semibold">
            How we usually start
          </h2>
          <div className="mt-3 grid gap-6 lg:grid-cols-2 text-sm sm:text-base">
            <p className="text-emerald-50/90">
              Many clients start with a{" "}
              <span className="font-medium">short phone call</span> or a{" "}
              <span className="font-medium">first visit</span> to see how the
              cooperation feels. You are always free to adjust the scope or
              frequency after the first visit – or to stop if it doesn’t feel
              like the right match.
            </p>
            <div className="space-y-2 text-emerald-50/90">
              <p>
                We believe in{" "}
                <span className="font-medium">clear agreements</span>, realistic
                expectations and respectful communication. It should be easy to
                understand who is coming, what will be done and what it will
                cost.
              </p>
              <p className="mt-3">
                When you are ready, you can{" "}
                <span className="font-medium">
                  send a booking request or a simple message
                </span>{" "}
                via the website or contact us directly by phone or email.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Process;
