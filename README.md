# Tekkerz

Vite + React site for tekkerz.co.

## Run locally
```bash
npm install
npm run dev
npm run build
```

## What's where
- `src/pages/Pickups.jsx` + `src/data/pickups.js`: free weekly pick-ups (May to October) with a map that follows the selected row. Edit times and places in `pickups.js`.
- `src/pages/Winter.jsx`: Winter 26 recap gallery. `src/components/WinterTBA.jsx`: Winter 26/27 (Dec to Mar) locations TBA block, shown on the pick-ups and winter pages.
- `src/pages/Contact.jsx`: contact form that emails eookuro@tekkerz.co through FormSubmit. The first submission after deploy sends an activation email to that address; click the link in it once and every message after that is delivered.
- `src/data/programs.js`: links to MegCity, MegCity Futbol Training, the club, Chicago Futsal League, Chicago Super League, SMESL and Chicago Basketball League.
- `public/photos/`: all site photos. `src/lib/photos.js` lists them and picks the banner photo for each generic page.
- Colors live in `:root` at the top of `src/styles/global.css` (cream, paper/off-white, grey, ink/black, purple).

## Shop (Snipcart)
- Products are in `src/data/products.js`. Set a real `price` (0 means "Coming soon") and add `image: "/photos/file.jpg"` when you have photos.
- `npm run dev` and `npm run build` regenerate `public/products.json`, which Snipcart reads to verify prices (the site is a single-page app, so Snipcart can't crawl the buttons directly).
- Add your Snipcart public API key as `VITE_SNIPCART_KEY` (Vercel project settings, and a `.env` file locally). Create the key in test mode first.
- In the Snipcart dashboard, set your domain and make sure the products JSON is reachable at `/products.json`.
