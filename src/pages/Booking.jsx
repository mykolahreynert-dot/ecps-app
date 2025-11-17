// src/pages/Booking.jsx
import { useState } from "react";
import ServiceSelector from "../components/ServiceSelector.jsx";
import BookingForm from "../components/BookingForm.jsx";

function Booking() {
  const [selectedServices, setSelectedServices] = useState([]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">
        Request a quote or book a service
      </h1>
      <p className="text-slate-700 text-sm md:text-base">
        Tell us what you need and we will respond personally with a confirmation,
        suggested timing or a few short follow-up questions. Most clients hear
        back within a business day.
      </p>

      <ServiceSelector
        selectedServices={selectedServices}
        onChange={setSelectedServices}
      />

      <div className="text-xs text-slate-500 mt-1">
        The services you select above will be pre-checked in the form, and you
        can still adjust them before submitting.
      </div>

      <BookingForm selectedServices={selectedServices} />
    </div>
  );
}

export default Booking;
