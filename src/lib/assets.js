// wp-content is the image/cloud storage. Set VITE_WP_CONTENT_URL to change the host
// (e.g. a CDN or bucket that mirrors wp-content). Absolute URLs pass through untouched.
const BASE = (import.meta.env.VITE_WP_CONTENT_URL || "https://tekkerz.co/wp-content").replace(/\/$/, "");
export const wp = (path) => (!path ? "" : /^(https?:)?\/\//.test(path) ? path : `${BASE}/${path.replace(/^\//, "")}`);
export const LOGO = "uploads/2026/10/tekkerz-logo.png";
