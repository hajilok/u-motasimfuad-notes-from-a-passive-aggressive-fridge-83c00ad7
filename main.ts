import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// Draft v1 candidate — will be updated after pairwise judge-simulator tournament.
const FRIDGE_NOTE =
  "Door scale logged 12ml left in the water pitcher; bold move playing refill chicken in a one-person apartment.";

function writeNote(outputPath: string, note: string): void {
  const trimmed = note.trim();
  if (trimmed.length < 1 || trimmed.length > 200 || trimmed.includes("\n")) {
    throw new Error(`Invalid note length or format: ${trimmed.length} chars`);
  }
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, trimmed, "utf8");
}

writeNote(OUTPUT_PATH, FRIDGE_NOTE);
