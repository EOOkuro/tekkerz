import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
export default function Home() {
 useEffect(()=>{document.title="Tekkerz — Culture Moves the Game";document.body.classList.add("is-home");return()=>document.body.classList.remove("is-home")},[]);
 return <main className="brand-home tk-home">
   <section className="hero hero-tekkerz"><div className="hero-image tk-image"></div><div className="hero-shade"></div><div className="hero-content"><p className="eyebrow">Independent soccer culture · Chicago</p><h1>THE GAME<br/><em>BEYOND</em><br/>THE LINES.</h1><p className="hero-copy">Street soccer, tournaments, music, community and the next wave of the game.</p><div className="hero-actions"><Link className="hero-button" to="/events">Explore events <span>↗</span></Link><Link className="text-link" to="/chicago-street-soccer-tournament">Play with us</Link></div><div className="hero-index"><span>01 / CULTURE</span><span>CHICAGO, IL</span></div></div></section>
   <section className="feature-row"><div><span className="feature-number">01</span><h2>PLAY DIFFERENT.</h2><p>Small-sided formats, open runs and tournaments built around the joy of playing.</p><Link to="/1v1">Find your game ↗</Link></div><div><span className="feature-number">02</span><h2>MAKE A SCENE.</h2><p>Sport meets sound, art and neighborhood energy at Tekkerz events.</p><Link to="/chicago-street-soccer-music-festival">See the festival ↗</Link></div><div><span className="feature-number">03</span><h2>BUILD WHAT'S NEXT.</h2><p>A platform for players, creators, partners and people moving the culture forward.</p><Link to="/advertise">Partner with Tekkerz ↗</Link></div></section>
 </main>
}
