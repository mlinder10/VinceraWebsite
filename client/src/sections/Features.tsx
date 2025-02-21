import styles from "./features.module.css";
import activeFeatureImage from "../assets/iphone16-active.jpeg";
import historyFeatureImage from "../assets/iphone16-history.jpeg";
import listFeatureImage from "../assets/iphone16-list.jpeg";
import exerciseFeatureImage from "../assets/iphone16-exercise.jpeg";
export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles["text-container"]}>
        <p className={styles.title}>Track Your Progress</p>
        <p className={styles.description}>
          Stay on top of your fitness journey with detailed workout logs,
          performance insights, and progress tracking over time.
        </p>
      </div>
      <div className={styles["img-container"]}>
        <img src={activeFeatureImage} alt="" />
        <img src={historyFeatureImage} alt="" />
      </div>
      <div className={styles["img-container"]}>
        <img src={listFeatureImage} alt="" />
        <img src={exerciseFeatureImage} alt="" />
      </div>
      <div className={styles["text-container"]}>
        <p className={styles.title}>Learn New Exercises</p>
        <p className={styles.description}>
          Expand your training with expert-guided exercises, complete with
          instructions, demonstrations, and tips to perfect your form.
        </p>
      </div>
    </section>
  );
}
