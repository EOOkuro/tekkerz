import { useState } from "react";
import { Link } from "react-router-dom";
import { MENU } from "../data/menu.js";
import { wp, LOGO } from "../lib/assets.js";

function Item({ item, close }) {
  return (
    <li className={item.children.length ? "has-sub" : ""}>
      <Link to={item.to} onClick={close}>{item.label}</Link>
      {item.children.length > 0 && (
        <ul className="sub">{item.children.map((c) => <Item key={c.to + c.label} item={c} close={close} />)}</ul>
      )}
    </li>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link to="/" className="logo"><img src={wp(LOGO)} alt="Tekkerz Logo" /></Link>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
      <nav className={open ? "nav is-open" : "nav"}>
        <ul>{MENU.map((m) => <Item key={m.to} item={m} close={() => setOpen(false)} />)}</ul>
      </nav>
    </header>
  );
}
