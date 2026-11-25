import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");

// Final Gen-3 championship note (113 UTF-8 bytes, single-line ASCII).
const FRIDGE_NOTE =
  "Inventory update: the orange juice left for 5 seconds and returned 142g lighter; I've tagged it 'Not For Guests.'";

function writeNote(outputPath: string, note: string): void {
  const trimmed = note.trim();
  if (trimmed.length < 1 || trimmed.length > 200 || trimmed.includes("\n")) {
    throw new Error(`Invalid note length or format: ${trimmed.length} chars`);
  }
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, trimmed, "utf8");
}

writeNote(OUTPUT_PATH, FRIDGE_NOTE);
