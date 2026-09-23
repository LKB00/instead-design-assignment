# Instead Pro — Chat-First Home (Design Exercise)

[![Open in Claude](https://img.shields.io/badge/Open%20in-Claude%20Artifact-C2EF72?style=flat-square&labelColor=24282C)](https://claude.ai/artifact/Adsgt9fgeTK3Fx6WBWRNiE)

Instead's product design exercise: re-imagine how a Pro lands and orients
when they open Instead Pro. The brief is explicit that **chat is the room,
not a feature inside the room** — this reworks the home screen around that,
rather than placing a client list and a chat box side by side.

## Live artifact

Interactive canvas (Claude Artifact — Design, clickable prototype):
**https://claude.ai/artifact/Adsgt9fgeTK3Fx6WBWRNiE**

Open it, then use Play on the `Workspace` artboard. Click a client (or a
"Needs you today" chip), send a message, switch Clients | Workflows, and
start a workflow from the composer's workflow button.

## Run it locally

```bash
python3 -m http.server 5173 --directory prototype
```

Then open http://localhost:5173. The standalone prototype in `prototype/`
(Preact + htm from a CDN, no build step) mirrors the `Workspace` artboard;
the "Data" switch in the top-right swaps between the 12-client, 5-client and
calm scenarios.

## The approach

Built inside Instead's real shell (trial banner, narrow rail, centered
question, one composer) so it reads as the actual product. The real app is
already chat-first; the work is in what the rail and the empty chat tell a
Pro in the first three seconds:

- **"Needs you" at two depths** — clients needing attention float to the
  top of the rail with a one-line reason; the same people appear as chips
  under the empty composer, one tap from a scoped chat.
- **Clients | Workflows** as one toggle in the rail, each tab keeping its
  own scroll and selection.
- **Selecting is scoping** — clicking a client pins a chip above the
  composer (Instead's existing pattern, now with ×) and opens their own
  thread; sending a message gets a mock reply.

An earlier iteration replaced the rail with a top strip + drawer; it's
described on the `Decisions` artboard as a direction tried and dropped.

Full reasoning, including the tradeoff this makes and what's deliberately
left unresolved, is written out on the `Decisions` artboard on the canvas
(and summarized below).

## What's here

- `project/Workspace.dc.html` — the interactive firm home (1440×900):
  banner, rail, chat, composer. A `scenario` tweak switches mock data between `grouped`
  (3+ clients need attention → grouped under a label),
  `few-attention` (1 client needs attention → no grouping), and `calm`
  (mostly on-track, no "Needs you" signal at all).
- `project/Decisions.dc.html` — the design reasoning, written for a reviewer
  reading the canvas without a walkthrough.
- `project/StatusKey.dc.html` — the three client-status states and the one
  new colour, documented.
- `project/canvas.json` — layout index for the artboards above.

## End-to-end behavior implemented

- **Status at a glance**: needs-attention / in-progress / on-track per
  client — amber dot + one-line reason for clients who need you, a muted
  dot for work in progress, nothing for calm clients.
- **Client-scoped chat**: click a client row or a "Needs you today" chip →
  chip pinned above the composer with ×, heading and thread switch to that
  client, and each client keeps its own history. One-time tooltip on the
  first selection.
- **Workflows**: Clients | Workflows toggle in the rail (per-tab scroll and
  selection memory), cross-client vs. single-client groups, a progress pill
  on client rows with a running single-client workflow, and workflows
  startable from the composer too.
- **Scale (2 vs. 200 clients)**: "Needs you" grouping only appears at 3+;
  the top of the rail is always the short list that matters, and the chat
  chips cap at three.

## Design system

Charcoal `#24282C`, Sand `#F7F6F0`, Lime `#C2EF72`, plus one deliberate
addition — a desaturated amber `#C97B4A`, reserved only for "needs
attention." Lato for UI text, Libre Baskerville for headings. 0.5px borders
throughout. Fully rounded / pill shapes only. Icons are hand-authored
Lucide-style inline SVG (stroke, round caps/joins) — person / building /
landmark for entity type, list-checks for workflows.
