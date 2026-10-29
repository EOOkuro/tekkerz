import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Tekkerz · Soccer brand for the next gen</p>
      <p><Link to="/contact">Contact</Link> · <Link to="/advertise">Advertise</Link> · <Link to="/partners">Partners &amp; Sponsors</Link></p>
    </footer>
  );
}
