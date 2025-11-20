// src/pages/Booking.jsx
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const SERVICE_OPTIONS = [
  "Residential & Airbnb Cleaning",
  "Property Watch & Key-Holder",
  "Elderly Assistance (non-medical)",
  "Digital Help for Seniors",
  "Patio & Outdoor Coordination",
  "Custom Add-On Services",
];

const VISIT_TYPES = [
  "One-time visit",
  "Weekly",
  "Bi-weekly",
  "Monthly",
  "Other",
];

const PROPERTY_TYPES = [
  "Single-family home",
  "Condo / Apartment",
  "Townhouse",
  "Vacation / Seasonal home",
  "Other",
];

const TIME_WINDOWS = ["Morning", "Afternoon", "Evening", "Flexible"];

function Booking() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [visitType, setVisitType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [city, setCity] = useState("");
  const [preferredDay, setPreferredDay] = useState("");
  const [preferredTimeWindow, setPreferredTimeWindow] = useState("");
  const [details, setDetails] = useState("");
  const [consent, setConsent] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("idle"); // 'idle' | 'success' | 'error'

  async function handleSubmit(e) {
    e.preventDefault();

    setStatusMessage("");
    setStatusType("idle");

    if (!fullName || !phone || !serviceType) {
      setStatusType("error");
      setStatusMessage(
        "Please fill in at least your name, phone number and choose a service."
      );
      return;
    }

    if (!consent) {
      setStatusType("error");
      setStatusMessage(
        "Please confirm that we may contact you about your request."
      );
      return;
    }

    setSubmitting(true);

    try {
      // 1) Insert client
      const { data: clientData, error: clientError } = await supabase
        .from("clients")
        .insert([
          {
            full_name: fullName,
            phone,
            email,
            preferred_contact_method: "phone",
          },
        ])
        .select()
        .single();

      if (clientError) {
        throw clientError;
      }

      // 2) Insert booking linked to client
      const { error: bookingError } = await supabase.from("bookings").insert([
        {
          client_id: clientData.id,
          service_type: serviceType,
          visit_type: visitType,
          property_type: propertyType,
          city,
          preferred_day: preferredDay,
          preferred_time_window: preferredTimeWindow,
          details,
          status: "new",
        },
      ]);

      if (bookingError) {
        throw bookingError;
      }

      setStatusType("success");
      setStatusMessage(
        "Thank you. Your booking request has been received. We will contact you within one business day."
      );

      // Clear form
      setFullName("");
      setPhone("");
      setEmail("");
      setServiceType("");
      setVisitType("");
      setPropertyType("");
      setCity("");
      setPreferredDay("");
      setPreferredTimeWindow("");
      setDetails("");
      setConsent(false);
    } catch (error) {
      console.error("Booking submission error:", error);
      setStatusType("error");
      setStatusMessage(
        "Sorry, something went wrong while sending your request. Please try again or contact us directly by phone or email."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-8">
      {/* Header / intro */}
      <section className="space-y-3">
        <h1 className="text-2xl font-bold text-slate-900">Booking</h1>
        <p className="text-sm md:text-base text-slate-700 max-w-3xl">
          Please share a few details about your home, preferred days and the
          type of support you are looking for. We will review your request and
          contact you personally to confirm details and timing.
        </p>
        <p className="text-xs text-slate-500 max-w-2xl">
          This form is not a final contract. It is a structured way to start a
          calm, clear conversation about your needs.
        </p>
      </section>

      {/* Main content: form + sidebar */}
      <section className="grid gap-6 md:grid-cols-[3fr,2fr] items-start">
        {/* Form card */}
        <div className="rounded-2xl border border-brand-primary/15 bg-white shadow-sm px-5 py-5 md:px-7 md:py-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Contact details */}
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-1">
                Your contact details
              </h2>
              <p className="text-xs text-slate-500 mb-3">
                We use this only to follow up on your request. No marketing
                lists or spam.
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="block text-xs font-medium text-slate-700">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-medium text-slate-700">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-1 md:col-span-2">
                  <label className="block text-xs font-medium text-slate-700">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="If you prefer to be contacted by email."
                  />
                </div>
              </div>
            </div>

            {/* Service details */}
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-1">
                Service details
              </h2>
              <p className="text-xs text-slate-500 mb-3">
                If you are unsure, choose the closest option and describe your
                situation in the notes.
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="block text-xs font-medium text-slate-700">
                    Service type <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm bg-white focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    required
                  >
                    <option value="">Select service…</option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-medium text-slate-700">
                    Visit type
                  </label>
                  <select
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm bg-white focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    value={visitType}
                    onChange={(e) => setVisitType(e.target.value)}
                  >
                    <option value="">Select…</option>
                    {VISIT_TYPES.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-medium text-slate-700">
                    Property type
                  </label>
                  <select
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm bg-white focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option value="">Select…</option>
                    {PROPERTY_TYPES.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-medium text-slate-700">
                    City / area
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Bradenton, Venice, North Port"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-medium text-slate-700">
                    Preferred day(s)
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    placeholder="e.g. Monday mornings, flexible, etc."
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-medium text-slate-700">
                    Preferred time window
                  </label>
                  <select
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm bg-white focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    value={preferredTimeWindow}
                    onChange={(e) => setPreferredTimeWindow(e.target.value)}
                  >
                    <option value="">Select…</option>
                    {TIME_WINDOWS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-1">
                Notes and context
              </h2>
              <p className="text-xs text-slate-500 mb-2">
                You can briefly describe your situation, special preferences or
                anything important for us to know before we call you.
              </p>
              <textarea
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Example: Two-bedroom condo, non-smoking, cat in the home. Prefer the same person each time. My mother is 78 and needs calm, patient assistance."
              />
            </div>

            {/* Consent & status */}
            <div className="space-y-3">
              <label className="flex items-start gap-2 text-xs text-slate-700">
                <input
                  type="checkbox"
                  className="mt-[2px] h-4 w-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <span>
                  I agree that European Care &amp; Property Services may contact
                  me by phone or email to discuss this request. My details will
                  not be shared with third parties for marketing purposes.
                </span>
              </label>

              {statusMessage && (
                <div
                  className={`text-xs rounded-md px-3 py-2 ${
                    statusType === "success"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : statusType === "error"
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : "bg-slate-50 text-slate-700 border border-slate-200"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primaryDark disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {submitting ? "Sending request..." : "Submit booking request"}
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar: reassurance */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-brand-secondary/30 bg-white px-5 py-4 text-sm text-slate-700 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900 mb-2">
              What happens after you book
            </h2>
            <ol className="space-y-2 text-xs md:text-sm list-decimal list-inside">
              <li>We review your request and check basic availability.</li>
              <li>
                We contact you personally to clarify details and expectations.
              </li>
              <li>
                If both sides feel comfortable, we confirm a first visit or
                trial period.
              </li>
              <li>
                After the first visit, we adjust the routine based on your
                feedback.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-xs text-slate-600">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Prefer to speak first?
            </h3>
            <p>
              If you are not ready to book yet, you can simply call us using the
              call button on the website or send a short message via the contact
              page. We are happy to start with a conversation.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Booking;
