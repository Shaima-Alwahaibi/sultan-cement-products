import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const output = new URL("./pages-dist/", import.meta.url);
const files = [
  "index.html",
  "styles.css",
  "script.js",
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "site.webmanifest",
  "logo.png",
  "catalog-interlock.jpeg",
  "catalog-kerbstone.jpeg",
  "catalog-cover.jpeg",
  "factory-quality-control.jpeg",
  "og.png"
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await Promise.all(files.map((file) => cp(new URL(`./${file}`, import.meta.url), new URL(file, output))));
await writeFile(new URL(".nojekyll", output), "", "utf8");

console.log(`Prepared ${files.length} files for GitHub Pages.`);
