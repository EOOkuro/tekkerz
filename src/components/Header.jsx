import { useState } from "react";
import { Link } from "react-router-dom";
import { MENU } from "../data/menu.js";
function Item({ item, close }) {
  return <li><Link to={item.to} onClick={close}>{item.label}</Link></li>;
}
export default function Header() {
  const [open, setOpen] = useState(false);
  const brand = import.meta.env.VITE_SITE_BRAND || "Tekkerz";
  return <header className="site-header">
    <Link to="/" className="wordmark" aria-label={brand+" home"}><span className="wordmark-mark">T</span><span>{brand}<small>CHICAGO · COMMUNITY SPORTS</small></span></Link>
    <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
    <nav className={open ? "nav is-open" : "nav"}><ul>{MENU.map(m => <Item key={m.to+m.label} item={m} close={() => setOpen(false)} />)}</ul></nav>
  </header>;
}
