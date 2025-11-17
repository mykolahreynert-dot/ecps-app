// src/pages/Booking.jsx
import { useState } from "react";
import ServiceSelector from "../components/ServiceSelector.jsx";
import BookingForm from "../components/BookingForm.jsx";

function Booking() {
  const [selectedServices, setSelectedServices] = useState([]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">
        Request a quote or booking
      </h1>
      <p className="text-slate-700 text-sm md:text-base">
        Start by choosing the services that match your situation. Then share a
        few details about your property and preferred timing.
      </p>

      {/* Mini “wizard” for selecting services */}
      <ServiceSelector
        selectedServices={selectedServices}
        onChange={setSelectedServices}
      />

      {/* Booking form – receives selected services */}
      <BookingForm selectedServices={selectedServices} />
    </div>
  );
}

export default Booking;
