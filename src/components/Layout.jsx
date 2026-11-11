import { Outlet, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const el = hash && document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView(); else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return (
    <>
      <div className="banner">
        <Link to="/#programs">Looking for a past program? Find it here</Link>
      </div>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}
