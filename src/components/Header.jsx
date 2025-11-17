// src/components/Header.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/booking", label: "Booking" },
  { to: "/payment", label: "Payment" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/about", label: "About" },
];

function Header() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "block px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition";
  const activeClass = "text-blue-700 font-semibold";
  const inactiveClass = "text-slate-700";

  return (
    <header className="border-b bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-slate-900">
            European Care &amp; Property Services
          </span>
          <span className="text-xs text-slate-500">
            Sarasota • Bradenton • Lakewood Ranch
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-2 items-center">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/booking"
            className="ml-2 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            Get a Quote
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 p-2 text-slate-700 hover:bg-slate-100 transition"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="md:hidden border-t bg-white shadow-inner">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive ? activeClass : inactiveClass
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
