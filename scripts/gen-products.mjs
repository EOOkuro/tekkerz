// Writes public/products.json for Snipcart's JSON crawler from src/data/products.js
import { writeFileSync } from "node:fs";
import { PRODUCTS } from "../src/data/products.js";
const out = PRODUCTS.map(({ id, price }) => ({ id, price }));
writeFileSync(new URL("../public/products.json", import.meta.url), JSON.stringify(out, null, 2) + "\n");
console.log(`products.json: ${out.length} products`);
