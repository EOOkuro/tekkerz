import { useEffect } from "react";
import { Link } from "react-router-dom";
import { photo } from "../lib/photos.js";
import { PROGRAMS } from "../data/programs.js";
import { PICKUPS } from "../data/pickups.js";

export default function Home() {
  useEffect(() => { document.title = "Tekkerz | Free pick-up soccer in Chicago"; }, []);
  return (
    <>
      <section className="hero">
        <img src={photo("court-night")} alt="Two players on a floodlit court after rain" />
        <div className="hero-copy">
          <h1>The game beyond the lines.</h1>
          <p>Free pick-ups, street soccer, tournaments, music and community across Chicago.</p>
          <div className="hero-actions">
            <Link className="btn" to="/pickups">Find a pick-up</Link>
            <Link className="link-line" to="/winter">See Winter 26</Link>
          </div>
        </div>
      </section>

      <section className="band band-cream">
        <div className="split">
          <div>
            <h2>This is Tekkerz.</h2>
            <p className="lede">We create space for the culture around the game: open runs, street soccer, 1v1 battles, tournaments, festivals and stories from the community.</p>
            <p><Link className="link-line" to="/culture">Explore the culture</Link></p>
          </div>
          <div className="collage">
            <img src={photo("court-friends")} alt="Friends with soccer balls on a wet court" loading="lazy" />
            <img src={photo("turf-09")} alt="A Tekkerz team posing after a turf game" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="band band-ink on-dark">
        <div className="band-inner">
          <h2>Free weekly pick-ups</h2>
          <p className="lede">Five runs a week, May to October. Show up and play.</p>
          <ul className="sched">
            {PICKUPS.map((p) => (
              <li key={p.day + p.place}>
                <div className="sched-row">
                  <span className="sched-day">{p.day}</span>
                  <span className="sched-time">{p.time}</span>
                  <span className="sched-place">{p.place}{p.tag && <span className="tag">{p.tag}</span>}</span>
                </div>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 28 }}><Link className="btn btn-light" to="/pickups">See the map</Link></p>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <h2>Winter 26 recap</h2>
          <p className="lede">A winter of indoor turf. Here's how it looked.</p>
          <div className="strip">
            {["turf-08", "turf-03", "turf-12", "turf-14"].map((n) => (<img key={n} src={photo(n)} alt="Winter 26 turf game" loading="lazy" />))}
          </div>
          <p><Link className="link-line" to="/winter">All Winter 26 photos</Link></p>
        </div>
      </section>

      <section className="band band-cream" id="programs">
        <div className="band-inner">
          <h2>Looking for a former program?</h2>
          <p className="lede">Some programs that used to live on this website now have their own homes. Find the one you came for.</p>
          <ul className="programs">
            {PROGRAMS.map((p) => (
              <li key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <a className="link-line" href={p.url} target="_blank" rel="noreferrer">{p.action}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band-ink on-dark">
        <div className="split">
          <div>
            <h2>Stay in the mix.</h2>
            <p className="lede">Pick-up announcements, event drops and player moments.</p>
            <p><a className="btn btn-light" href="https://www.instagram.com/tekkerzclub/" target="_blank" rel="noreferrer">Instagram</a>{" "}<a className="link-line" href="https://www.tiktok.com/@tekkerzclub" target="_blank" rel="noreferrer">TikTok</a></p>
          </div>
          <div className="collage">
            <img src={photo("court-goal")} alt="A goalkeeper watching play on an outdoor court" loading="lazy" />
            <img src={photo("youth-2")} alt="Kids running a drill in a schoolyard" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
