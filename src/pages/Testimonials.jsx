// src/pages/Testimonials.jsx

function Testimonials() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Client feedback
        </h1>
        <p className="mt-2 text-slate-700 text-sm md:text-base">
          
        </p>
      </div>

      {/* Static testimonials */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-4 text-sm shadow-sm">
          <p className="text-slate-700 italic">
            “Reliable, detail-oriented and easy to communicate with. Our condo
            and guests are in good hands.”
          </p>
          <p className="mt-2 text-xs text-slate-500">— Airbnb host, Sarasota</p>
        </div>
        <div className="rounded-lg border bg-white p-4 text-sm shadow-sm">
          <p className="text-slate-700 italic">
            “Very helpful with my elderly mother – patient, respectful and able
            to explain things clearly.”
          </p>
          <p className="mt-2 text-xs text-slate-500">
            — Daughter of client, Lakewood Ranch
          </p>
        </div>
        <div className="rounded-lg border bg-white p-4 text-sm shadow-sm">
          <p className="text-slate-700 italic">
            “We live abroad and needed someone we can trust to check the house
            and coordinate basic things. It works very smoothly.”
          </p>
          <p className="mt-2 text-xs text-slate-500">
            — Snowbird homeowner, Bradenton
          </p>
        </div>
      </section>

      {/* Feedback form connected to Netlify Forms */}
      <section className="mt-4">
        <h2 className="text-lg font-semibold text-slate-900 mb-2">
          Leave feedback
        </h2>
        <p className="text-slate-700 text-sm mb-3">
          After deployment on Netlify, this form will send your feedback to the
          site owner and store it in the Netlify Forms dashboard.
        </p>

        <form
          name="feedback"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="grid gap-4 rounded-xl border bg-white p-6 shadow-sm text-sm"
        >
          {/* Netlify hidden fields */}
          <input type="hidden" name="form-name" value="feedback" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label className="text-slate-700 font-medium" htmlFor="fb-name">
                Name (optional)
              </label>
              <input
                id="fb-name"
                name="name"
                type="text"
                className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-slate-700 font-medium" htmlFor="fb-email">
                Email (optional, not shown publicly)
              </label>
              <input
                id="fb-email"
                name="email"
                type="email"
                className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-slate-700 font-medium" htmlFor="fb-rating">
              Rating
            </label>
            <select
              id="fb-rating"
              name="rating"
              className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Select…</option>
              <option value="5">5 – Excellent</option>
              <option value="4">4 – Very good</option>
              <option value="3">3 – OK</option>
              <option value="2">2 – Needs improvement</option>
              <option value="1">1 – Poor</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-slate-700 font-medium" htmlFor="fb-message">
              Feedback
            </label>
            <textarea
              id="fb-message"
              name="message"
              rows={4}
              className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="What worked well? What could be improved?"
            />
          </div>

          <div className="flex items-center justify-between gap-4 pt-2">
            <p className="text-xs text-slate-500">
              By submitting, you agree that your feedback may be used (anonymised
              or with first name only) on this site.
            </p>
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Send feedback
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Testimonials;
