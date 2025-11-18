// src/components/Layout.jsx
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import FloatingCallButton from "./FloatingCallButton.jsx";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F9F8]">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
        {children}
      </main>
      <Footer />
      {/* Floating call button appears on all pages */}
      <FloatingCallButton />
    </div>
  );
}

export default Layout;
