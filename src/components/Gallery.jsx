import { useEffect, useState } from "react";
import { photo } from "../lib/photos.js";

// Masonry gallery with a simple lightbox. `names` are files in /public/photos.
export default function Gallery({ names, alt }) {
  const [i, setI] = useState(null);
  const n = names.length;
  useEffect(() => {
    if (i === null) return;
    const key = (e) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") setI((x) => (x + 1) % n);
      if (e.key === "ArrowLeft") setI((x) => (x - 1 + n) % n);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [i, n]);
  return (
    <>
      <div className="masonry">
        {names.map((name, k) => (
          <button key={name} onClick={() => setI(k)} aria-label={`Open photo ${k + 1} of ${n}`}>
            <img src={photo(name)} alt={`${alt} ${k + 1}`} loading="lazy" />
          </button>
        ))}
      </div>
      {i !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setI(null)}>
          <button className="lb-close" aria-label="Close" onClick={() => setI(null)}>×</button>
          <button className="lb-prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); setI((i - 1 + n) % n); }}>‹</button>
          <img src={photo(names[i])} alt={`${alt} ${i + 1}`} onClick={(e) => e.stopPropagation()} />
          <button className="lb-next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); setI((i + 1) % n); }}>›</button>
        </div>
      )}
    </>
  );
}
