import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MENU } from "../data/menu.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label="Tekkerz home" onClick={close}>tekkerz<i>✦✦</i></Link>
      <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
      <nav className={open ? "nav is-open" : "nav"} aria-label="Main">
        <ul>
          {MENU.map((m) => (
            <li key={m.to}>
              <NavLink to={m.to} end={m.to === "/"} onClick={close} className={({ isActive }) => (m.cta ? "nav-cta" : isActive ? "active" : "")}>{m.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
