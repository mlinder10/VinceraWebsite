import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./sections/Home";
import Features from "./sections/Features";
import Header from "./components/Header";
import Contact from "./sections/Contact";

// pages:
// - home
//   - hero
//   - features
//   - about / mission
//   - reviews?
// - content

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <main>
      <Home />
      <Features />
      <Contact />
    </main>
  </StrictMode>
);
