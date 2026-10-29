import { useEffect } from "react";
import { Link } from "react-router-dom";
import { wp } from "../lib/assets.js";
import "../styles/home.css";

export default function Home() {
  useEffect(() => {
    document.title = "Tekkerz | MegCity";
    document.body.classList.add("is-home");
    return () => document.body.classList.remove("is-home");
  }, []);
  return (
    <>

<div className="split">
  <div className="choose"><span>CHOOSE YOUR PATH</span></div>

  
  <div className="side side-t">
    <div className="t-imgwrap">
      <img src={wp("uploads/2026/03/52e50f6d-adcf-433a-8c2e-a6314cb60598.jpg")} alt="Tekkerz" />
      <img src="https://res.cloudinary.com/zuywi9ih/image/upload/v1787265313/Gemini_Generated_Image_sm5xchsm5xchsm5x.jpg" alt="Tekkerz" />
    </div>
    <div className="t-overlay"></div>
    <div className="grain"></div>
    <div className="content">
      <div className="tag"><div className="tagbar t"></div><span className="tagtext t">Tekkerz · Chicago</span></div>
      <h1 className="title">CULTURE</h1>
      <div className="pills">
        <span className="pill">Street Soccer</span>
        <span className="pill">Festivals</span>
        <span className="pill">Pick Up</span>
        <span className="pill">Events</span>
      </div>
      <p className="desc">Chicago's soccer culture. Tournaments, events and the brand behind next soccer gen.</p>
      <Link to="/events" className="cta t">Enter Tekkerz →</Link>
    </div>
  </div>

  
  <div className="side side-m">
    <img className="side-img" src="https://res.cloudinary.com/zuywi9ih/image/upload/v1787265313/bbcf6854-2f12-4bdb-aead-fcdcb802d6ee.jpg" alt="MegCity Soccer" />
    <div className="m-overlay"></div>
    <div className="grain"></div>
    <div className="content">
      <div className="tag"><div className="tagbar m"></div><span className="tagtext m">MegCity · South Side</span></div>
      <h1 className="title">SOCCER</h1>
      <div className="pills">
        <span className="pill">Community Clubs</span>
        <span className="pill">Futsal</span>
        <span className="pill">Youth &amp; Adult</span>
        <span className="pill">Pro Pathways</span>
      </div>
      <p className="desc">From youth to adult leagues. Affordable, accessible soccer for every generation on the South Side.</p>
      <Link to="/megcityfc" className="cta m">Enter MegCity Soccer →</Link>
    </div>
  </div>

  
  <div className="side side-h">
    <img className="side-img" src="https://res.cloudinary.com/zuywi9ih/image/upload/f_auto,q_auto/african-american-teenage-boy-concentrated-playing-basketball" alt="MegCity Hoops" />
    <div className="h-overlay"></div>
    <div className="grain"></div>
    <div className="content">
      <div className="tag"><div className="tagbar h"></div><span className="tagtext h">MegCity · South Side</span></div>
      <h1 className="title">HOOPS</h1>
      <div className="pills">
        <span className="pill">Community Leagues</span>
        <span className="pill">Skills Training</span>
        <span className="pill">Youth &amp; Adult</span>
        <span className="pill">Runs & Tournaments</span>
      </div>
      <p className="desc">Basketball built for the South Side. Leagues, runs, and player development for every generation.</p>
      <Link to="/outsouth-basketball-league/" className="cta h">Enter MegCity Hoops →</Link>
    </div>
  </div>

</div>


    </>
  );
}
