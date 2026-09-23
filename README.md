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
the dashed "Prototype" button in the bottom-right (or keys 1–4) previews the
home at 2, 12 and 200 clients and a calm week where nobody needs attention (or use `?scenario=two|grouped|large|calm`).

## The approach

Built inside Instead's real shell (trial banner, narrow rail, centered
question, one composer) so it reads as the actual product. The real app is
already chat-first; the work is in what the rail and the empty chat tell a
Pro in the first three seconds:

- **"Needs you", quietly** — clients needing attention float to the top of
  the rail under a small label, marked only by an amber dot; the reason
  shows on hover. Rows stay one line, exactly like Instead's.
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

## The brief's four questions

**1. Who needs something from me right now?**
Clients who need you float to the top of the rail, most urgent first, with a
two-word reason ("Unsigned 6d", "Due Friday") and an amber dot in place of the
form badge. Rows stay one line. Under the empty composer, one quiet line —
"3 clients need you today →" — asks Instead for the briefing: who, what's
wrong, and the next step, each one tap from their file. Nothing shows when
nobody needs you.

**2. Where do cross-client vs. single-client workflows live, and how do I move
between them?** A workflow lives where its work lives. Cross-client ones stay
at the firm level; single-client ones open inside their client's panel. The
Workflows tab indexes both. Every workflow is a chat thread that opens with
Instead's checklist (open items first, finished ones folded into one line).
Drilling from a workflow into a client keeps the workflow at the top of the
context picker's Recent list, one tap back; × always goes home with the
rail's tab and scroll intact.

**3. Chat and the client list: does selecting a client change context? Where
do workflows start?** Selecting a client scopes the chat to them, and the
context lives in the composer itself: a pill reading "All clients ⌄" or
"Alderwood LLC ⌄" that switches context without leaving the chat (search,
Recent, Needs you; or type `@`). The composer looks the same in every
state, and the same control scales from one client to a workflow. Workflows
start from both places, through one path: the composer's workflow menu, typing
`/`, plain language ("can we file an extension?" → Instead offers to start one
or just answer), or a client's ⋮ menu. The scope decides who it's for; a
single-client workflow started from the firm asks "which client?" in chat.
Starting one that's already running opens the existing one instead.

**4. What earns a spot on the home screen, and does it hold at 2 and 200?**
On the home screen: the composer, one line of "who needs you", and a rail
sorted by need. One level deeper: documents, per-client threads, workflow
detail, reasons in full. At 2 clients there are no labels or caps — just
rows. At 200, "Needs you" shows the five most urgent plus "Show 9 more",
everyone else is A–Z with a count, search opens inline, and the briefing
groups the rest by what's blocking them ("6 waiting on documents →
Request them all") so a group is one workflow, not six chats.

**Tradeoffs made:** the form badge gives way to the reason on rows that need
you; single-client workflows appear in two places (tab and client panel) on
purpose; Instead offers workflows instead of assuming, at the cost of one
click.

## Design system

Charcoal `#24282C`, Sand `#F7F6F0`, Lime `#C2EF72`, plus one deliberate
addition — a desaturated amber `#C97B4A`, reserved only for "needs
attention." Lato for UI text, Libre Baskerville for headings. 0.5px borders
throughout. Fully rounded / pill shapes only. Icons are hand-authored
Lucide-style inline SVG (stroke, round caps/joins) — person / building /
landmark for entity type, list-checks for workflows.
