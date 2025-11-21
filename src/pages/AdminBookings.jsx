// src/pages/AdminBookings.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

// Format "+19415551234" -> "(###) 555-1234"
const formatE164Phone = (phone) => {
  if (!phone) return "";
  const digits = phone.replace(/\D/g, "");

  // Expecting +1 + 10 digits => total 11 chars including country code
  if (!phone.startsWith("+1") || digits.length !== 11) {
    return phone;
  }

  const core = digits.slice(1);
  const area = core.slice(0, 3);
  const prefix = core.slice(3, 6);
  const line = core.slice(6, 10);

  return `(${area}) ${prefix}-${line}`;
};

const STATUS_FILTERS = ["all", "new", "contacted", "scheduled", "closed"];

function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Optional very-light passcode gate (NOT real security)
  const [unlocked, setUnlocked] = useState(false);
  const [passcode, setPasscode] = useState("");

  useEffect(() => {
    if (!unlocked) return;

    const fetchBookings = async () => {
      setLoading(true);
      setError("");

      const { data, error } = await supabase
        .from("bookings")
        .select(
          `
          id,
          created_at,
          service_type,
          visit_type,
          property_type,
          city,
          preferred_day,
          preferred_time_window,
          status,
          details,
          clients (
            full_name,
            phone,
            email
          )
        `
        )
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading bookings:", error);
        setError(
          "Could not load bookings from Supabase. Please check connection or permissions."
        );
      } else {
        setBookings(data || []);
      }

      setLoading(false);
    };

    fetchBookings();
  }, [unlocked]);

  const filteredBookings =
    statusFilter === "all"
      ? bookings
      : bookings.filter((b) => b.status === statusFilter);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (passcode === "ecps-admin-2025") {
      setUnlocked(true);
    } else {
      alert("Incorrect admin code.");
    }
  };

  if (!unlocked) {
    return (
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Admin - Bookings
        </h1>
        <p className="text-sm text-slate-600">
          This is an internal view for European Care &amp; Property Services to
          review booking requests.
        </p>
        <form
          onSubmit={handleUnlock}
          className="space-y-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
        >
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Admin access code
          </label>
          <input
            type="password"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            placeholder="Enter internal code"
          />
          <p className="text-[11px] text-slate-500">
            This is a light protection only. For real security we will later add
            proper login.
          </p>
          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white hover:bg-brand-primaryDark transition"
          >
            Enter admin view
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Admin - Bookings
          </h1>
          <p className="text-sm text-slate-600 max-w-xl">
            Internal overview of booking requests for European Care &amp;
            Property Services. Newest requests appear first.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-slate-700">
            Status filter:
          </label>
          <select
            className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {STATUS_FILTERS.map((status) => (
              <option key={status} value={status}>
                {status === "all"
                  ? "All"
                  : status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </header>

      {loading && (
        <div className="text-sm text-slate-600">Loading bookings...</div>
      )}

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </div>
      )}

      {!loading && !error && filteredBookings.length === 0 && (
        <div className="text-sm text-slate-500">
          No bookings found for this filter.
        </div>
      )}

      {!loading && !error && filteredBookings.length > 0 && (
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-xs md:text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-3 py-2 text-left font-medium">Created</th>
                <th className="px-3 py-2 text-left font-medium">Client</th>
                <th className="px-3 py-2 text-left font-medium">Contact</th>
                <th className="px-3 py-2 text-left font-medium">Service</th>
                <th className="px-3 py-2 text-left font-medium">
                  Property / City
                </th>
                <th className="px-3 py-2 text-left font-medium">
                  Preferred time
                </th>
                <th className="px-3 py-2 text-left font-medium">Status</th>
                <th className="px-3 py-2 text-left font-medium">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredBookings.map((b) => {
                const client = b.clients || {};
                return (
                  <tr key={b.id} className="align-top hover:bg-slate-50/60">
                    <td className="px-3 py-2 whitespace-nowrap text-slate-600">
                      {b.created_at
                        ? new Date(b.created_at).toLocaleString()
                        : ""}
                    </td>
                    <td className="px-3 py-2 text-slate-800">
                      <div className="font-medium">
                        {client.full_name || "-"}
                      </div>
                    </td>
                    <td className="px-3 py-2 text-slate-700">
                      <div>{formatE164Phone(client.phone)}</div>
                      {client.email && (
                        <div className="text-[11px] text-slate-500">
                          {client.email}
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-2 text-slate-700">
                      <div>{b.service_type || "-"}</div>
                      {b.visit_type && (
                        <div className="text-[11px] text-slate-500">
                          {b.visit_type}
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-2 text-slate-700">
                      <div>{b.property_type || "-"}</div>
                      {b.city && (
                        <div className="text-[11px] text-slate-500">
                          {b.city}
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-2 text-slate-700">
                      <div>{b.preferred_day || "-"}</div>
                      {b.preferred_time_window && (
                        <div className="text-[11px] text-slate-500">
                          {b.preferred_time_window}
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span
                        className={[
                          "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium",
                          b.status === "new"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : b.status === "contacted"
                            ? "bg-sky-50 text-sky-700 border border-sky-200"
                            : b.status === "scheduled"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-slate-50 text-slate-600 border border-slate-200",
                        ].join(" ")}
                      >
                        {b.status || "new"}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-slate-600 max-w-xs">
                      <div className="line-clamp-3 whitespace-pre-wrap">
                        {b.details || "-"}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminBookings;
