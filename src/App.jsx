import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Pickups from "./pages/Pickups.jsx";
import Winter from "./pages/Winter.jsx";
import Contact from "./pages/Contact.jsx";
import Page from "./pages/Page.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pickups" element={<Pickups />} />
        <Route path="/winter" element={<Winter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Page />} />
      </Route>
    </Routes>
  );
}
