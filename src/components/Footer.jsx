import { Link } from "react-router-dom";
export default function Footer() {
  const brand = import.meta.env.VITE_SITE_BRAND || "Tekkerz";
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {brand}</p>
      <p><Link to="/pickups">Pickups</Link> · <Link to="/events">Events</Link> · <Link to="/culture">Culture</Link> · <Link to="/partners">Partnerships</Link> · <a href="mailto:hello@tekkerz.co">Contact</a></p>
      <p className="footer-social"><a href="https://www.instagram.com/tekkerzclub/" target="_blank" rel="noreferrer">Instagram ↗</a> · <a href="https://www.tiktok.com/@tekkerzclub" target="_blank" rel="noreferrer">TikTok ↗</a></p>
    </footer>
  );
}
