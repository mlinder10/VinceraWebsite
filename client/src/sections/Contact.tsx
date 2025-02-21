import styles from "./contact.module.css";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

type SendStatus = "Send" | "Sending" | "Sent" | "Error";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sendStatus, setSendStatus] = useState<SendStatus>("Send");

  async function handleSend() {
    if (!name || !email || !message) return;
    setSendStatus("Sending");
    const templateVals = { name, email, message };
    setName("");
    setEmail("");
    setMessage("");
    try {
      await emailjs.send(
        "service_e6jvzcu",
        "template_soeiwjl",
        templateVals,
        "0GjINiaEuMIa7iOfQ"
      );
      setSendStatus("Sent");
    } catch (err: any) {
      setSendStatus("Error");
      console.log(err?.message);
    }
  }

  useEffect(() => {
    if (sendStatus !== "Send" && sendStatus !== "Sending") {
      setTimeout(setSendStatus.bind(null, "Send"), 3000);
    }
  }, [sendStatus]);

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.gradient} />
      <p className={styles.title}>Contact Us</p>
      <div className={styles.form}>
        <p>Your Name</p>
        <input
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Your Email</p>
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Your Message</p>
        <textarea
          placeholder="Hi, I wish Vincera would..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <span />
        <button
          disabled={sendStatus !== "Send"}
          className={styles.send}
          onClick={handleSend}
        >
          <span>{sendStatus}</span>
        </button>
      </div>
    </section>
  );
}
