// src/components/BookingForm.jsx

function BookingForm({ selectedServices = [] }) {
  const isSelected = (value) => selectedServices.includes(value);

  return (
    <form
      name="booking"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="mt-6 grid gap-4 rounded-xl border bg-white p-6 shadow-sm text-sm"
    >
      {/* Required hidden fields for Netlify Forms */}
      <input type="hidden" name="form-name" value="booking" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-slate-700 font-medium" htmlFor="name">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-slate-700 font-medium" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-slate-700 font-medium" htmlFor="phone">
            Phone (mobile) *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-slate-700 font-medium" htmlFor="area">
            City / area *
          </label>
          <input
            id="area"
            name="area"
            type="text"
            placeholder="Sarasota, Bradenton, Lakewood Ranch..."
            required
            className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-slate-700 font-medium" htmlFor="address">
          Address (optional, can be confirmed later)
        </label>
        <input
          id="address"
          name="address"
          type="text"
          className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-slate-700 font-medium">
          Which services are you interested in?
        </span>
        <div className="grid gap-2 md:grid-cols-2">
          <label className="inline-flex items-center gap-2 text-slate-700">
            <input
              type="checkbox"
              name="services[]"
              value="residential_cleaning"
              defaultChecked={isSelected("residential_cleaning")}
            />
            <span>Residential / house cleaning</span>
          </label>
          <label className="inline-flex items-center gap-2 text-slate-700">
            <input
              type="checkbox"
              name="services[]"
              value="airbnb_cleaning"
              defaultChecked={isSelected("airbnb_cleaning")}
            />
            <span>Airbnb / short-term rental cleaning</span>
          </label>
          <label className="inline-flex items-center gap-2 text-slate-700">
            <input
              type="checkbox"
              name="services[]"
              value="property_watch"
              defaultChecked={isSelected("property_watch")}
            />
            <span>Property watch / snowbird support</span>
          </label>
          <label className="inline-flex items-center gap-2 text-slate-700">
            <input
              type="checkbox"
              name="services[]"
              value="elderly_assistance"
              defaultChecked={isSelected("elderly_assistance")}
            />
            <span>Elderly assistance (non-medical)</span>
          </label>
          <label className="inline-flex items-center gap-2 text-slate-700">
            <input
              type="checkbox"
              name="services[]"
              value="digital_help"
              defaultChecked={isSelected("digital_help")}
            />
            <span>Digital help for seniors</span>
          </label>
          <label className="inline-flex items-center gap-2 text-slate-700">
            <input
              type="checkbox"
              name="services[]"
              value="other"
              defaultChecked={isSelected("other")}
            />
            <span>Other / not sure yet</span>
          </label>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-slate-700 font-medium" htmlFor="date">
            Preferred date
          </label>
          <input
            id="date"
            name="preferred_date"
            type="date"
            className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-slate-700 font-medium" htmlFor="time">
            Preferred time window
          </label>
          <select
            id="time"
            name="preferred_time"
            className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select…</option>
            <option value="morning">Morning (8:00 – 11:00)</option>
            <option value="midday">Mid-day (11:00 – 15:00)</option>
            <option value="afternoon">Afternoon (15:00 – 18:00)</option>
            <option value="flexible">Flexible / please suggest</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-slate-700 font-medium" htmlFor="notes">
          Short description of the property / situation
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Example: 2-bed condo used as Airbnb, guests usually check-out at 11:00..."
          className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-slate-500">
          After deployment on Netlify, this form will send your request to the
          owner and appear in the Netlify Forms dashboard.
        </p>
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Submit request
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
