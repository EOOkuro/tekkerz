import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PAGES from "../data/pages.json";
import Block from "../components/Blocks.jsx";
import { photo, BANNERS, DEFAULT_BANNER } from "../lib/photos.js";

export default function Page() {
  const splat = useParams()["*"] || "";
  const slug = splat.split(/\//).filter(Boolean).pop();
  const page = PAGES[slug];
  useEffect(() => { document.title = page ? `${page.title} | Tekkerz` : "Not found | Tekkerz"; }, [page]);
  if (!page) return <div className="container"><h1 className="page-title">Page not found</h1><Link className="link-line" to="/">Back home</Link></div>;
  return (
    <>
      <img className="page-banner" src={photo(BANNERS[slug] || DEFAULT_BANNER)} alt="" />
      <div className="container">
        <h1 className="page-title">{page.title}</h1>
        {page.blocks.map((b, i) => <Block key={i} b={b} />)}
      </div>
    </>
  );
}
