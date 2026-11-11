// Photos live in /public/photos and are served from /photos/<name>.jpg
export const photo = (name) => `/photos/${name}.jpg`;

// Winter 26 indoor turf games, in gallery order
export const TURF = Array.from({ length: 22 }, (_, i) => `turf-${String(i + 1).padStart(2, "0")}`);

export const COURT = ["court-night", "court-night-2", "court-goal", "court-goal-2", "court-corner", "court-corner-2", "court-wide", "court-friends"];
export const YOUTH = ["youth-1", "youth-2"];

// Banner photo for pages built from pages.json
export const BANNERS = {
  events: "turf-09",
  culture: "court-wide",
  partners: "turf-09",
  advertise: "court-night-2",
  "our-team": "court-friends",
  "chicago-street-soccer-tournament": "court-night",
  "chicago-street-soccer-music-festival": "court-night-2",
  "1v1": "court-goal",
};
export const DEFAULT_BANNER = "turf-03";
