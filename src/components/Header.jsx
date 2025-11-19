// src/components/Header.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Our Process" },
  { to: "/booking", label: "Booking" },
  { to: "/payment", label: "Payment" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "block px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-50 transition";
  const activeClass = "text-brand-primary font-semibold";
  const inactiveClass = "text-slate-700";

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo only – no tagline to save space */}
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-1 items-center">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeClass : inactiveClass}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/booking"
            className="ml-2 inline-flex items-center rounded-md bg-brand-primary px-3 py-2 text-sm font-semibold text-white hover:bg-brand-primaryDark transition"
          >
            Book a Service
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 p-2 text-slate-700 hover:bg-slate-100 transition"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t bg-white shadow-sm">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeClass : inactiveClass}`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-brand-primary px-3 py-2 text-center text-sm font-semibold text-white hover:bg-brand-primaryDark transition"
            >
              Book a Service
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
