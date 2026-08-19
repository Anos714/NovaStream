import { BrowserRouter, Route, Routes } from "react-router";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./pages/Features";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-400">
        Nova Stream · Built for the web.
      </footer>
    </BrowserRouter>
  );
}
