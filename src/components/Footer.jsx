// src/components/Footer.jsx
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <span>
          © {year} European Care & Home Services. All rights reserved.
        </span>
        <span className="text-[11px]">
          Trusted cleaning, property care & senior support in Sarasota.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
