import { useEffect } from "react";
import { photo, TURF } from "../lib/photos.js";
import Gallery from "../components/Gallery.jsx";
import WinterTBA from "../components/WinterTBA.jsx";

export default function Winter() {
  useEffect(() => { document.title = "Winter 26 recap | Tekkerz"; }, []);
  return (
    <>
      <section className="hero hero-short">
        <img src={photo("turf-19")} alt="An indoor turf field full of players" />
        <div className="hero-copy">
          <h1>Winter 26 recap</h1>
          <p>Indoor turf, full fields and a lot of football.</p>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <Gallery names={TURF} alt="Winter 26 turf game" />
        </div>
      </section>

      <section className="band band-ink on-dark">
        <WinterTBA />
      </section>
    </>
  );
}
