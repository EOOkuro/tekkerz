# Tekkerz

Independent Vite + React site extracted from the Tekkerz project.

## Run locally
```bash
npm install
npm run dev
npm run build
```

Deploy this folder as its own Vercel project. Set the project's root directory to `tekkerz` if deploying from the combined repository.

## Notes
- This site has its own homepage, navigation, visual identity and page collection.
- Original page content and WordPress-hosted media are retained where assigned to this brand.
- Some original WordPress widgets/forms were placeholders in the source export and may need to be rebuilt before launch.


## Tekkerz site update

The homepage now introduces Tekkerz as an independent street-soccer and culture organization, then provides a directory for former programs. The main MegCity destination is intentionally marked as coming soon because no URL was supplied. Add its confirmed URL to `destinations` in `src/pages/Home.jsx` when available. Dedicated `/pickups` and `/culture` pages have been added; the existing `/events` page is retained. Social links point to @tekkerzclub on Instagram and TikTok.
