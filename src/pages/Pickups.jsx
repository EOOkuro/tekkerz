import { useEffect, useState } from "react";
import { photo } from "../lib/photos.js";
import { PICKUPS } from "../data/pickups.js";
import WinterTBA from "../components/WinterTBA.jsx";

export default function Pickups() {
  const [sel, setSel] = useState(0);
  const cur = PICKUPS[sel];
  useEffect(() => { document.title = "Free weekly pick-ups | Tekkerz"; }, []);
  return (
    <>
      <section className="hero hero-short">
        <img src={photo("court-night-2")} alt="Players on a floodlit outdoor court at night" />
        <div className="hero-copy">
          <h1>Free weekly pick-ups</h1>
          <p>Five runs a week across Chicago. No sign-up, just show up.</p>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="season">
            <h2>May to October</h2>
            <span>Outdoor season</span>
          </div>
          <div className="pickup-grid">
            <ul className="sched">
              {PICKUPS.map((p, i) => (
                <li key={p.day + p.place}>
                  <button type="button" className="sched-row" aria-pressed={i === sel} onClick={() => setSel(i)}>
                    <span className="sched-day">{p.day}</span>
                    <span className="sched-time">{p.time}</span>
                    <span className="sched-place">{p.place}{p.tag && <span className="tag">{p.tag}</span>}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="map-wrap">
              <iframe
                className="map-frame"
                title={`Map of ${cur.place}`}
                loading="lazy"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(cur.query)}&output=embed`}
              />
              <div className="map-meta">
                <span>{cur.day}, {cur.time}: {cur.place}</span>
                <a className="link-line" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cur.query)}`} target="_blank" rel="noreferrer">Open in Maps</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band band-cream">
        <div className="collage" style={{ maxWidth: 760, margin: "0 auto", gridTemplateColumns: "repeat(3, 1fr)" }}>
          <img src={photo("court-goal")} alt="A goalkeeper at an outdoor goal" loading="lazy" />
          <img src={photo("court-friends")} alt="Friends with soccer balls on a wet court" loading="lazy" />
          <img src={photo("court-wide")} alt="A pick-up game under the lights" loading="lazy" />
        </div>
      </section>

      <section className="band band-ink on-dark">
        <WinterTBA />
      </section>
    </>
  );
}
