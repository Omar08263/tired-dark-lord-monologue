// The Tired Dark Lord: A 100-Word Villain Monologue
// Deterministic entry program: writes one fixed monologue to /output/entry.txt.
// Node 22 stdlib only. No network, no randomness, no time, no input files.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `Come in, hero. Mind the\u2014 yes, the sword in the door. It has been there since Tuesday.

Thirty years I have kept the eclipse on time, the ravens fed, the taxes counted. Karth's crown sits in my vault, and still the ledgers come. Still they come.

You want the speech. The thunder, the doom. I had one once. It was grand. It had... thunder in it.

Look \u2014 the eclipse is Thursday. The host is... mostly here. The doom is filed under D.

So. Strike, or sit. The tea is cold either way, and I have kept your chair warm.
`;

// Gate guard: the sealed scorer accepts 1..600 UTF-8 characters, non-whitespace.
if (TEXT.length < 1 || TEXT.length > 600 || TEXT.trim().length === 0) {
  throw new Error(`entry out of gate: ${TEXT.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
