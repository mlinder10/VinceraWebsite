import styles from "./home.module.css";
import heroImage from "../assets/weights.webp";
import { FaArrowDown, FaList } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className={styles.section}>
      <img src={heroImage} alt="" className={styles["hero-img"]} />
      <div className={styles["hero-text-container"]}>
        <h3>Conquer the Gym</h3>
        <h1>Vincera</h1>
        <div className={styles["hero-btn-container"]}>
          <button className={styles["btn-download"]}>
            <FaArrowDown />
            <span>Download</span>
          </button>
          <a href="#features" className={styles["btn-features"]}>
            <FaList />
            <span>Features</span>
          </a>
        </div>
      </div>
    </section>
  );
}
