// src/pages/Booking.jsx
import { useState } from "react";
import ServiceSelector from "../components/ServiceSelector.jsx";
import BookingForm from "../components/BookingForm.jsx";

function Booking() {
  const [selectedServices, setSelectedServices] = useState([]);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-slate-900">
          Book a service
        </h1>
        <p className="text-slate-700 text-sm md:text-base">
          Tell us what you need and we will respond personally to confirm your
          booking time or ask a few short follow-up questions. Most clients hear
          back within a business day.
        </p>
      </div>

      {/* Quick selector controls the same state as the form */}
      <ServiceSelector
        selectedServices={selectedServices}
        onChange={setSelectedServices}
      />

      <div className="text-xs text-slate-500 mt-1">
        The services you select above will be reflected in the checkboxes in the
        form below, and you can still adjust them before submitting.
      </div>

      <BookingForm
        selectedServices={selectedServices}
        onServicesChange={setSelectedServices}
      />

      {/* New: What happens after you book */}
      <section className="mt-4 rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700 space-y-3">
        <h2 className="text-base font-semibold text-slate-900">
          What happens after you book
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <span className="font-medium">We receive your request.</span> Your
            booking request is sent directly to us. We review the details you
            provided about your home, services and preferred time.
          </li>
          <li>
            <span className="font-medium">We contact you to confirm details.</span>{" "}
            Within one business day, we reach out by phone, email or message to
            confirm the date, time window and approximate duration. If needed,
            we ask a few short clarifying questions so expectations are clear on
            both sides.
          </li>
          <li>
            <span className="font-medium">
              We agree on the visit and pricing before we come.
            </span>{" "}
            You always know what will be done and what it will cost before the
            visit. For more complex situations (for example, a first deep clean
            or special case), we may suggest a quick call or a short on-site
            assessment.
          </li>
          <li>
            <span className="font-medium">Day of service.</span> We arrive on
            time, follow the agreed checklist as closely as possible, and
            respect your home, privacy and routines. For seniors, we work at a
            calm pace and explain what we are doing if they wish.
          </li>
          <li>
            <span className="font-medium">Follow-up and next steps.</span> After
            the visit, you can share feedback or small adjustments for next
            time. If you would like regular support, we can agree on a recurring
            schedule that fits your life.
          </li>
        </ol>
      </section>
    </div>
  );
}

export default Booking;
