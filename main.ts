import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The image is pre-rendered: this program only places it in the output dir.
// Both runs write the same bytes, since the copy is byte-for-byte.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
