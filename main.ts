import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Fixed a bug where sleep stopped charging at 3 a.m. to check notifications; humans now wake up at 100%.";

// Guard: 1-160 chars, single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry must be 1-160 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
