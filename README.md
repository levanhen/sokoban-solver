# Sokoban Solver — make.fun bounty `sokoban-solver-01-run-20261121`

Entry for https://make.fun/bounty/sokoban-solver-01-run-20261121 (account **@hen-le**). Deadline: **2026-11-23T03:00:00Z**.

## Task
`main.ts` (Node 22, root of repo) reads every instance under `/input/<id>/` — a Sokoban level in XSB format at `level.txt` — and writes the move string to `/output/<id>/solution.txt` (UTF-8, ≤ 65,536 bytes, one line + trailing newline).

Move format: lowercase `u d l r` = walk, **UPPERCASE** `U D L R` = push (case is not actually checked, but keep the convention).

Env vars: `MAKEFUN_INPUT_DIR` (default `/input`), `MAKEFUN_OUTPUT_DIR` (default `/output`).

Local run:
```
mkdir -p out && MAKEFUN_INPUT_DIR=<kit>/practice/input MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Goal
Score strictly above make.fun's house baseline `plain-astar 1.0.0` (in the kit under `baselines/plain-astar/`). The score is solution quality on the scored set (5 instances drawn from the generator's distribution; practice set in `practice/input/` with references in `practice/reference/`).

## Constraints (hard — entry is refused otherwise)
- Whole repository ≤ **1 MiB** (1,048,576 bytes) including every file.
- Node 22 runtime, `main.ts` at repo root. Starter `main.ts` is a valid but zero-point entry.
- **Only modify `main.ts`** (and `README.md`). DO NOT touch `.makefun/owner.json`, `LICENSE`, `.makefun/freshness.json` — they carry the wallet claim and the drand anchor; changing them breaks the entry.
- Output must be a **valid solution** the scorer verifies: the sequence of moves applied to the level must end with every box on a goal square.
- No external dependencies beyond the Node standard library.

## Suggested approach (from studying the kit)
The generator's levels are a hallway plus independent rooms; in a push-optimal solution boxes never leave their room. Solve each room independently with A* over **pushes** (state = box positions + player's reachable region; cost = pushes), then stitch the room solutions together with the walks between them. Tie-break / optimality: the score rewards lower push counts first.

## Files
- `main.ts` — the solver (start from the starter, replace `solve()`).
- `.makefun/owner.json` — wallet claim (do not edit).
- `LICENSE` — MIT (do not edit).
