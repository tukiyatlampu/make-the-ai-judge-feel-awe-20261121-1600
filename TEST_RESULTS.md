# TEST_RESULTS — make-the-ai-judge-feel-awe-20261121-1600

## Entry text (198 code points, 198 bytes)

> Snow gathers in a blue enamel ladle on the back step. Where the roofs end, it keeps gathering, year after year, into a mile of ice. Its oldest bubbles hold air from before there was a word for snow.

## Real runs (Node v24.22.1, 2026-11-22 ~01:50 WIB)

Commands (from the package directory):

```sh
MAKEFUN_OUTPUT_DIR=/tmp/test-out1 node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/test-out2 node main.ts
sha256sum /tmp/test-out1/entry.txt /tmp/test-out2/entry.txt
cmp /tmp/test-out1/entry.txt /tmp/test-out2/entry.txt
```

Results:

- Run 1 sha256: `43ad800b5139520c747e426d29fce8973f7236747af919b3e151c79f6165cb87`
- Run 2 sha256: `43ad800b5139520c747e426d29fce8973f7236747af919b3e151c79f6165cb87`
- `cmp`: identical — output byte-identik across 2 runs.
- Character count: 198 code points (gate: 1–280), 198 bytes, not whitespace-only.
- Runtime: ~0.14 s per run (limit 60 s). No network, no clock, no randomness.
- Default output dir `/output`, honours `MAKEFUN_OUTPUT_DIR`; no `rmSync` on the
  output dir (only `mkdirSync` + `writeFileSync` of `entry.txt` inside it).

## Judge simulation (gpt-6.1-sol Mode MAX, harsh-judge pass)

- Round 1 (3 candidates drafted): winner candidate A scored **84/100**;
  head-to-head vs a generic wellness baseline: wins **5/5 margin in both
  orders**.
- Round 2 (revision of candidate A): **90/100** — slower scale change,
  repeated gathering, ancient air arrives with more stillness.
- Round 3 (final polish): **93/100** per-criterion (relax 94, calm-from-text
  94, craft 92, awe 94, freshness 90); beats the round-2 version — the roofs
  make the distance tangible and the mile of ice sets the scale before the
  ancient air arrives. Scores plateaued (84 → 90 → 93), so iteration stopped
  here. Note: these are SolAPI simulations of the house judge
  (z-ai/glm-5.3-flash), not live house verdicts.

## Kit pre-submit check

```sh
node cli/makefun.mjs check --kit . --repo <package dir> --worktree
```

Result: **4 passed** (competition_open, snapshot, license_osi, entrypoint),
1 failed — `transcripts_present` (no bundle yet; the parent agent bundles
the transcripts and submits), 14 skipped, 5 checked at submission
(repo_public, repo_owner, repo_created_after_open, commit_in_repo,
duplicate_snapshot — all pending GitHub repo creation + push by the parent).

## Zero-fail QA (clean directory, 2026-11-22 ~01:52 WIB)

- Copied only the 4 package files to a fresh `/tmp/qa-clean` and ran
  `MAKEFUN_OUTPUT_DIR=/tmp/qa-clean-out node main.ts` → exit 0, output
  sha256 identical to the build-machine runs (`43ad800b…`), 198 chars.
- Secret/path scan over the package: no matches (no API keys, tokens,
  passwords, absolute/home paths). No `rmSync` in `main.ts`.
- No dependencies beyond Node 22 stdlib (`node:fs`, `node:path`).
- Gate: PASS (transcripts + GitHub push remain with the parent agent).
