# Tekkerz – React rebuild of tekkerz.co (WordPress / Yorn + Elementor)

    npm install && npm run dev      # local
    npm run build                   # Vercel: framework Vite, output dir dist (vercel.json handles SPA routing)

## Images / wp-content as storage
All images go through `src/lib/assets.js` → `wp("uploads/2026/10/tekkerz-logo.png")`.
Base URL comes from `VITE_WP_CONTENT_URL` (default `https://tekkerz.co/wp-content`). Copy `.env.example` to `.env`, or set it in Vercel project settings
to point at a bucket/CDN that mirrors wp-content. Keep WordPress hosting (or a mirror) alive for those files.

## Structure
- `src/data/pages.json` – 32 published pages extracted from the DB (Elementor → blocks). `src/data/menu.js` – nav tree from `wp_nav_menu_item`.
- `src/pages/Home.jsx` – the split "Tekkerz / MegCity Soccer / MegCity Hoops" landing page (your custom HTML, ported).
- `src/pages/Page.jsx` + `src/components/Blocks.jsx` – render any page by slug; unsupported widgets show a dashed TODO box.

## Not carried over (needs rebuilding)
Slider Revolution, HubSpot forms, WPForms/CF7, Stripe button, LA-Kit events/team/banner widgets, WooCommerce (shop/cart/checkout), the 6 `la_event` posts, Yorn theme CSS/footer template.
