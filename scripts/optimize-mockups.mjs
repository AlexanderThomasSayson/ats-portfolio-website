// Converts the large source renders in design-source/mockups (gitignored) into
// cropped, single-encode WebPs under public/images/mockups, and records each
// image's size in src/data/mockupSizes.json so <img> can reserve its space.
// Run: npm run optimize:mockups
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SRC = "design-source/mockups";
const OUT = "public/images/mockups";
const SIZES = "src/data/mockupSizes.json";
const PAD = 40;
const WIDTH = 1600;

const bounds = async (file) => {
  const { data, info } = await sharp(file)
    .ensureAlpha()
    .extractChannel(3)
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = info;
  let x0 = W, y0 = H, x1 = 0, y1 = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (data[y * W + x] > 8) {
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
    }
  }
  x0 = Math.max(0, x0 - PAD);
  y0 = Math.max(0, y0 - PAD);
  x1 = Math.min(W - 1, x1 + PAD);
  y1 = Math.min(H - 1, y1 + PAD);
  return { left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 };
};

const sizes = {};
for (const dir of [SRC, path.join(SRC, "projects")]) {
  const rel = path.relative(SRC, dir);
  for (const f of fs.readdirSync(dir).filter((n) => n.endsWith(".png"))) {
    const name = f.replace(/\.png$/, ".webp");
    const outDir = path.join(OUT, rel);
    fs.mkdirSync(outDir, { recursive: true });
    const { data, info } = await sharp(path.join(dir, f))
      .extract(await bounds(path.join(dir, f)))
      .resize({ width: WIDTH })
      .webp({ quality: 82, alphaQuality: 90 })
      .toBuffer({ resolveWithObject: true });
    fs.writeFileSync(path.join(outDir, name), data); // written as-is: one encode only
    const url = "/" + path.posix.join("images/mockups", rel.split(path.sep).join("/"), name);
    sizes[url] = { width: info.width, height: info.height };
    console.log(url, info.width, info.height, data.length);
  }
}
fs.writeFileSync(SIZES, JSON.stringify(sizes, null, 2) + "\n");
