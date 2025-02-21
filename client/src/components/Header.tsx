import { useState } from "react";
import styles from "./header.module.css";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className={styles.header}>
      <nav>
        <a href="#" className={styles.title}>
          <h1>Vincera</h1>
        </a>
        <div className={`${styles.links} ${showLinks ? styles.show : ""}`}>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <a href="/privacy.html">Privacy Policy</a>
        </div>
        <button
          className={styles.hamburger}
          onClick={setShowLinks.bind(null, !showLinks)}
        >
          {showLinks ? <FaXmark /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}
