import { useEffect, useState } from "react";
import { photo } from "../lib/photos.js";

// Submissions are emailed to this address through FormSubmit (formsubmit.co).
const TO = "eookuro@tekkerz.co";
const TOPICS = ["Pick-ups", "Events", "Partnerships and sponsors", "Press and media", "Something else"];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | err
  useEffect(() => { document.title = "Contact | Tekkerz"; }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = Object.fromEntries(new FormData(form));
    if (f.company) return; // honeypot: bots fill this in
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${TO}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: f.name,
          email: f.email,
          topic: f.topic,
          message: f.message,
          _subject: `Tekkerz website: ${f.topic} from ${f.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json();
      if (!res.ok || data.success === "false" || data.success === false) throw new Error("send failed");
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  }

  return (
    <div className="container">
      <h1 className="page-title">Contact</h1>
      <div className="contact-grid">
        <form className="form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Your email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="topic">What is this about?</label>
            <select id="topic" name="topic" defaultValue={TOPICS[0]}>
              {TOPICS.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>
          <div className="hp" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" tabIndex={-1} autoComplete="off" />
          </div>
          <div>
            <button className="btn" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"}</button>
          </div>
          <div role="status" aria-live="polite">
            {status === "ok" && <p className="form-note ok">Message sent. We'll get back to you soon.</p>}
            {status === "err" && <p className="form-note err">That didn't send. Try again, or message us on Instagram @tekkerzclub.</p>}
          </div>
        </form>
        <aside>
          <img src={photo("turf-08")} alt="A Tekkerz team posing together on turf" loading="lazy" />
          <p>Questions about pick-ups, events, partnerships or press? Send a note and we'll reply by email.</p>
        </aside>
      </div>
    </div>
  );
}
