import { Link } from "react-router-dom";
export default function Footer() {
 const brand = import.meta.env.VITE_SITE_BRAND || "Tekkerz";
 return <footer className="site-footer"><p>© {new Date().getFullYear()} {brand}</p><p><Link to="/events">Explore</Link> · <Link to="/advertise">Partnerships</Link> · <a href="mailto:hello@tekkerz.co">Contact</a></p></footer>;
}
