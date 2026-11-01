import { Link } from "react-router-dom";
import { wp } from "../lib/assets.js";

const isInternal = (u) => u && (u.startsWith("/") || u.startsWith("https://tekkerz.co"));
const path = (u) => u.replace("https://tekkerz.co", "") || "/";
function A({ href, className, children }) {
  return isInternal(href) ? <Link className={className} to={path(href)}>{children}</Link>
    : <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
}
const yt = (u) => { const m = (u || "").match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/); return m && `https://www.youtube.com/embed/${m[1]}`; };

export default function Block({ b }) {
  switch (b.t) {
    case "heading": { const T = b.tag || "h2"; return <T className="blk-heading">{b.url ? <A href={b.url}>{b.text}</A> : b.text}</T>; }
    case "html": return <div className="blk-text" dangerouslySetInnerHTML={{ __html: b.html }} />;
    case "button": return <p><A className="btn" href={b.url}>{b.text}</A></p>;
    case "image": return b.link ? <A href={b.link}><img className="blk-img" src={wp(b.src)} alt="" /></A> : <img className="blk-img" src={wp(b.src)} alt="" />;
    case "gallery": return <div className="blk-gallery">{b.images.map((s, i) => <img key={i} src={wp(s)} alt="" />)}</div>;
    case "cta": return (
      <section className="blk-cta" style={b.bg ? { backgroundImage: `url(${wp(b.bg)})` } : undefined}>
        <h3>{b.title}</h3><p>{b.text}</p>{b.button && <A className="btn" href={b.url}>{b.button}</A>}
      </section>);
    case "video": { const s = yt(b.url); return s ? <div className="blk-video"><iframe src={s} title="video" allowFullScreen /></div> : null; }
    case "map": return <iframe className="blk-map" title="map" src={`https://maps.google.com/maps?q=${encodeURIComponent(b.address)}&output=embed`} />;
    case "divider": return <hr />;
    case "raw": return /<html|<!doctype/i.test(b.html)
      ? <iframe className="blk-raw" title="embed" srcDoc={b.html} />
      : <div dangerouslySetInnerHTML={{ __html: b.html }} />;
    // Slider Revolution, HubSpot, WPForms, Stripe, LA-Kit widgets: rebuild by hand (see README).
    default: return <div className="blk-todo">TODO: rebuild “{b.widget}” widget {JSON.stringify(b.settings)}</div>;
  }
}
