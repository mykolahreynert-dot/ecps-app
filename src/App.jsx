// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Booking from "./pages/Booking.jsx";
import Payment from "./pages/Payment.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
