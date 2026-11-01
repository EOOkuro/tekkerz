import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const destinations = [
  {
    number: "01",
    name: "MegCity Futbol Training",
    description: "Player development, high-performance training, camps and personal training.",
    url: "https://megcityfutboltraining.vercel.app/",
    action: "Visit training"
  },
  {
    number: "02",
    name: "MegCity",
    description: "A social-good organization growing soccer access for everyone, from first kick to last.",
    url: null,
    action: "Website coming soon"
  },
  {
    number: "03",
    name: "Chicago Soccer Ecosystem",
    description: "The full Chicago soccer ecosystem, for every age.",
    url: "https://chicagosuperleague.com/",
    action: "Visit Chicago Super League"
  },
  {
    number: "04",
    name: "Chicago Futsal League",
    description: "Chicago's futsal ecosystem for every age.",
    url: "https://chicagofutsaleague.vercel.app/",
    action: "Visit futsal league"
  },
  {
    number: "05",
    name: "SMESL",
    description: "Elementary and middle school soccer league.",
    url: "https://smesl.vercel.app/",
    action: "Visit SMESL"
  },
  {
    number: "06",
    name: "Chicago Basketball League",
    description: "The full Chicago basketball ecosystem, for every age.",
    url: "https://chicagobasketballleague.vercel.app/",
    action: "Visit basketball league"
  }
];

export default function Home() {
  useEffect(() => {
    document.title = "Tekkerz — Independent Soccer Culture";
    document.body.classList.add("is-home");
    return () => document.body.classList.remove("is-home");
  }, []);

  return (
    <main className="brand-home tk-home">
      <section className="hero hero-tekkerz">
        <div className="hero-image tk-image"></div>
        <div className="hero-shade"></div>
        <div className="hero-content">
          <p className="eyebrow">Independent soccer culture · Chicago</p>
          <h1>THE GAME<br/><em>BEYOND</em><br/>THE LINES.</h1>
          <p className="hero-copy">Street soccer, pickups, tournaments, music, community and the next wave of the game.</p>
          <div className="hero-actions">
            <Link className="hero-button" to="/events">Explore events <span>↗</span></Link>
            <Link className="text-link" to="/pickups">Find a pickup <span>↗</span></Link>
          </div>
          <div className="hero-index"><span>01 / CULTURE</span><span>CHICAGO, IL</span></div>
        </div>
      </section>

      <section className="former-programs" id="former-programs">
        <div className="section-heading">
          <p className="eyebrow">A note for returning visitors</p>
          <h2>LOOKING FOR A FORMER PROGRAM?</h2>
          <p>Some programs that were previously featured on this website now have their own homes. Find the organization or league you came here for below.</p>
        </div>
        <div className="destination-grid">
          {destinations.map((item) => (
            <article className="destination-card" key={item.number}>
              <span className="destination-number">{item.number}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              {item.url
                ? <a href={item.url} target="_blank" rel="noreferrer">{item.action} <span>↗</span></a>
                : <span className="destination-soon">{item.action}</span>}
            </article>
          ))}
        </div>
      </section>

      <section className="tekkerz-intro">
        <p className="eyebrow">Separate organization · Same love of the game</p>
        <h2>THIS IS <em>TEKKERZ.</em></h2>
        <p>We create space for the culture around the game: open runs, street soccer, 1v1 battles, tournaments, festivals, creative collaborations and stories from the community.</p>
        <div className="tekkerz-actions">
          <Link className="hero-button" to="/pickups">Explore pickups <span>↗</span></Link>
          <Link className="text-link" to="/culture">Explore the culture <span>↗</span></Link>
        </div>
      </section>

      <section className="feature-row">
        <div><span className="feature-number">01</span><h2>PLAY DIFFERENT.</h2><p>Open runs, neighborhood meetups and small-sided formats built around the joy of playing.</p><Link to="/pickups">Find your game ↗</Link></div>
        <div><span className="feature-number">02</span><h2>MAKE A SCENE.</h2><p>Sport meets sound, art and neighborhood energy at Tekkerz events.</p><Link to="/events">See what's happening ↗</Link></div>
        <div><span className="feature-number">03</span><h2>MOVE THE CULTURE.</h2><p>1v1 battles, tournaments, creative projects and stories from the people shaping the game.</p><Link to="/culture">Explore culture ↗</Link></div>
      </section>

      <section className="social-home">
        <p className="eyebrow">Stay in the mix</p>
        <h2>FOLLOW THE CULTURE.</h2>
        <p>Pickup announcements, event drops, player moments and everything happening around the game.</p>
        <div className="social-actions">
          <a href="https://www.instagram.com/tekkerzclub/" target="_blank" rel="noreferrer">Instagram <span>@tekkerzclub ↗</span></a>
          <a href="https://www.tiktok.com/@tekkerzclub" target="_blank" rel="noreferrer">TikTok <span>@tekkerzclub ↗</span></a>
        </div>
      </section>
    </main>
  );
}
