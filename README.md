# Instead Pro — Chat-First Home (Design Exercise)

[![Open in Claude](https://img.shields.io/badge/Open%20in-Claude%20Artifact-C2EF72?style=flat-square&labelColor=24282C)](https://claude.ai/artifact/Adsgt9fgeTK3Fx6WBWRNiE)

Instead's product design exercise: re-imagine how a Pro lands and orients
when they open Instead Pro. The brief is explicit that **chat is the room,
not a feature inside the room** — this reworks the home screen around that,
rather than placing a client list and a chat box side by side.

## Live artifact

Interactive canvas (Claude Artifact — Design, clickable prototype):
**https://claude.ai/artifact/Adsgt9fgeTK3Fx6WBWRNiE**

Open it, then use Play on the `Workspace` artboard. Click an avatar chip
in the top strip, open "Book," start a workflow from the composer's `+`.

## The structural bet

A permanent client rail next to chat reads as an inbox with a chat panel
bolted on. Instead:

- **A pulse strip** across the top of the screen — small avatar + first-name
  chips, but *only* for clients needing attention right now. Calm clients
  never appear here at all.
- **A "Book" drawer** — the full client roster and workflow list (Clients /
  Workflows tabs), opened on demand, closes itself the moment you act on
  something inside it.
- **Chat fills the rest of the canvas** by default — no permanent sidebar
  competing with it.

Full reasoning, including the tradeoff this makes and what's deliberately
left unresolved, is written out on the `Decisions` artboard on the canvas
(and summarized below).

## What's here

- `project/Workspace.dc.html` — the interactive home screen: pulse strip,
  chat pane, composer, and the Book drawer (rail content moved into an
  overlay). A `scenario` tweak switches mock data between `grouped`
  (3+ clients need attention → grouped under a label),
  `few-attention` (1 client needs attention → no grouping), and `calm`
  (mostly on-track, pulse strip goes quiet).
- `project/Decisions.dc.html` — the design reasoning, written for a reviewer
  reading the canvas without a walkthrough.
- `project/StatusKey.dc.html` — the three client-status states and the one
  new colour, documented.
- `project/canvas.json` — layout index for the artboards above.

## End-to-end behavior implemented

- **Status at a glance**: needs-attention / in-progress / on-track per
  client, surfaced two ways — the pulse strip (macro, always visible) and a
  corner dot + note in the drawer's rows (detail, one tap away).
- **Client-scoped chat**: click a chip or a drawer row → chat scopes to that
  client, with a pinned, clearable pill above the composer and a persistent
  per-client message thread. A one-time tooltip explains scoping the first
  time it happens.
- **Workflow-scoped chat**: the composer's `+` opens a "Start a workflow"
  menu (cross-client and single-client workflows both listed) — answers the
  brief's question of whether a workflow can start from chat, from a client,
  or both, with "both."
- **Cross-client vs. single-client workflows**: split into two groups in the
  Book drawer; a client row also shows a small progress pill when a
  single-client workflow is running on them, so that's visible without
  switching tabs.
- **Scale (2 vs. 200 clients)**: the pulse strip is bounded by height, not
  client count — chips scroll horizontally instead of the layout growing.
  The drawer's "needs attention" grouping is the second-level answer once
  the book is actually open.

## Design system

Charcoal `#24282C`, Sand `#F7F6F0`, Lime `#C2EF72`, plus one deliberate
addition — a desaturated amber `#C97B4A`, reserved only for "needs
attention." Lato for UI text, Libre Baskerville for headings. 0.5px borders
throughout. Fully rounded / pill shapes only. Icons are hand-authored
Lucide-style inline SVG (stroke, round caps/joins) — person / building /
landmark for entity type, list-checks for workflows.
