import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <span className="wordmark">tekkerz<i>✦✦</i></span>
      <p className="foot-links">
        <Link to="/pickups">Pick-ups</Link>
        <Link to="/winter">Winter 26</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/events">Events</Link>
        <Link to="/culture">Culture</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/contact">Contact</Link>
      </p>
      <p className="foot-links">
        <a href="https://www.instagram.com/tekkerzclub/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.tiktok.com/@tekkerzclub" target="_blank" rel="noreferrer">TikTok</a>
      </p>
      <p>© {new Date().getFullYear()} Tekkerz. Chicago.</p>
    </footer>
  );
}
