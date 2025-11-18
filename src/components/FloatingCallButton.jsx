// src/components/FloatingCallButton.jsx

function FloatingCallButton() {
  return (
    <a
      href="tel:+19415551234"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 inline-flex items-center justify-center rounded-full bg-brand-primary text-white shadow-lg w-14 h-14 hover:bg-brand-primaryDark focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2"
      aria-label="Call European Care & Home Services"
    >
      <span className="text-xl">📞</span>
    </a>
  );
}

export default FloatingCallButton;
