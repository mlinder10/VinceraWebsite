import styles from "./home.module.css";
import img from "../assets/deadlift.jpg";
import { FaArrowDown, FaList } from "react-icons/fa";

// pages:
// - home
//   - hero
//   - features
//   - about / mission
//   - reviews?
// - content
// - legal
// - privacy

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <span>Vincera</span>
          <div>
            <span>Features</span>
            <span>About</span>
            <span>Contact</span>
            <span>Legal</span>
          </div>
        </nav>
      </header>
      <main>
        <section className={styles.hero}>
          <img src={img} alt="" className={styles["hero-img"]} />
          <div className={styles["hero-text-container"]}>
            <h1>Vincera</h1>
            <h3>Conquer the Gym</h3>
            <div className={styles["hero-btn-container"]}>
              <button className={styles["btn-features"]}>
                <FaList />
                <span>Features</span>
              </button>
              <button className={styles["btn-download"]}>
                <FaArrowDown />
                <span>Download</span>
              </button>
            </div>
          </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
      </main>
    </>
  );
}
