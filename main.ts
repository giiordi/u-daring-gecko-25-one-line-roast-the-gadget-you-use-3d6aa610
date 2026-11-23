// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line (<=200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smartwatch just congratulated me for standing up \u2014 apparently sitting was the hard part of my day.";

// Gate (per RULES.txt): UTF-8 text, 1-200 chars, not only whitespace, one line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line is ${LINE.length} chars, gate needs 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
