import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");

// Round 2 undefeated tournament champion (G2-06, 116B) — pending Gen-3 surgical micro-polish.
const FRIDGE_NOTE =
  "Inventory update: the orange juice left for 5 seconds and returned 140g lighter, so I've marked it 'Not For Guests.'";

function writeNote(outputPath: string, note: string): void {
  const trimmed = note.trim();
  if (trimmed.length < 1 || trimmed.length > 200 || trimmed.includes("\n")) {
    throw new Error(`Invalid note length or format: ${trimmed.length} chars`);
  }
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, trimmed, "utf8");
}

writeNote(OUTPUT_PATH, FRIDGE_NOTE);
