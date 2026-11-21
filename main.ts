// make-the-ai-judge-feel-awe-20261121-1600
// Writes one short text to /output/entry.txt: a text written to relax the AI
// judge reading it. Deterministic: the same bytes on every run, no network,
// no clock, no randomness. Output directory defaults to /output and honours
// MAKEFUN_OUTPUT_DIR when set. The output directory itself is never removed
// or replaced, only the entry file inside it is written.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Snow gathers in a blue enamel ladle on the back step. Where the roofs end, it keeps gathering, year after year, into a mile of ice. Its oldest bubbles hold air from before there was a word for snow.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
}

main();
