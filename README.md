# Instead Pro — Chat-First Home (Design Exercise)

[![Open the prototype](https://img.shields.io/badge/Open-the%20prototype-C2EF72?style=flat-square&labelColor=24282C)](https://lkb00.github.io/instead-design-assignment/)

Instead's product design exercise: re-imagine how a Pro lands and orients
when they open Instead Pro. The brief is explicit that **chat is the room,
not a feature inside the room** — this reworks the home screen around that,
rather than placing a client list and a chat box side by side.

**Full context:** [CONTEXT.md](CONTEXT.md) explains the brief, the live
product's pain points, every improvement and tradeoff, and the code map —
readable on its own without any other history.

## View the design

The clickable prototype in `prototype/` is the current design and the source
of truth. **Open it in the browser:
https://lkb00.github.io/instead-design-assignment/** (redeployed from
`prototype/` on every push to `main`). Or run it locally:

```bash
python3 -m http.server 5173 --directory prototype
```

Then open http://localhost:5173 (Preact + htm from a CDN, no build step).
Things to try:

- Read the home: the headline and the "Needs you" tray answer who needs you
  today; click a client to open their file.
- Open "Request missing documents" under **Threads** in the rail: a cross-client
  workflow is a firm thread with a checklist. "4 workflows running →" in the
  home tray lists everything in progress.
- Click the **All clients ⌄** pill in the composer (or type `@`) to choose who
  the chat is about.
- Click the workflow button in the composer (or type `/`): the library opens
  in the sand tray above the chat box. Type to search, pick one, choose who
  it's for, send. The expand icon grows it into the full library with a
  preview; **Build a new workflow** and **Upload a workflow** sit at the
  bottom of the tray.
- Use the rail's **Filter** icon (Needs you, In a workflow, entity type).
- The dashed button bottom-right (or keys 1–4) previews the home at 2, 12
  and 200 clients and a calm week (or use `?scenario=two|grouped|large|calm`).

Static, editable SVGs of the main screens and components for Figma are in
[`figma-export/`](figma-export/).

> **Earlier iteration (superseded):** a first version was built as a Claude
> Artifact canvas (`project/*.dc.html`,
> [claude.ai/artifact/Adsgt9fgeTK3Fx6WBWRNiE](https://claude.ai/artifact/Adsgt9fgeTK3Fx6WBWRNiE)).
> It's kept for design history only and does not reflect the current design;
> the prototype above replaces it.

## The approach

Built inside Instead's real shell (narrow rail, centered question, one
composer) so it reads as the actual product. The real app is
already chat-first; the work is in what the rail and the empty chat tell a
Pro in the first three seconds:

- **One job per surface** — the home's tray says who needs you today and
  why; the rail stays Instead's A–Z book of clients, marking those clients
  with only an amber dot, so nothing is said twice on one screen.
- **No tabs in the rail.** It's Instead's own: the **Workflows** button at the
  top opens the library above the chat box, then Clients A–Z, then Threads.
  A workflow run is a thread, so it lives with threads.
- **Selecting is scoping** — clicking a client opens their panel and sets
  the composer's context pill ("Meera Iyer ×"); sending a message gets a
  mock reply.

Directions tried and dropped (a top strip + drawer instead of the rail;
sorting "Needs you" to the top of the rail; a decision-first briefing card;
user-made client groups) and the full reasoning behind each are in
[CONTEXT.md](CONTEXT.md), summarized below.

## What's here

- `prototype/` — the current design: a clickable prototype of the firm home
  (`index.html`, `app.js`, `styles.css`, `img/`). Mock books of 2, 12 and 200
  clients plus a calm week.
- `CONTEXT.md` — standalone context: the brief, the live product's pain
  points, every improvement and tradeoff, a demo script and the code map.
- `figma-export/` — editable SVGs of the main screens and components for
  Figma, with a README listing each file.
- `tools/export-svg.mjs` — regenerates `figma-export/` from the running
  prototype (Chrome + puppeteer-core); `tools/figma-clean.js` removes
  layout-only groups and names every layer.
- `project/` — the earlier Claude Artifact canvas (Workspace, Decisions,
  StatusKey artboards). Superseded by `prototype/`; kept for design history.

## The brief's four questions

**1. Who needs something from me right now?**
The home leads with it: "3 clients need you
today. Where should we start?" — and answers its own headline right below,
listing those clients (what's wrong, one tap from their file) above the
composer. A calm week keeps Instead's greeting and shows nothing extra.

**2. Where do cross-client vs. single-client workflows live, and how do I move
between them?** A workflow lives where its work lives. Cross-client ones stay
at the firm level; single-client ones open inside their client's panel. A run
is a thread, so it lives where its threads live: cross-client runs in the
rail's Threads (with progress, "3/5"), single-client runs in the client's
Client threads (with a "2/3" badge on their row). "4 workflows running →" on
the home lists them all in chat. Every workflow is a chat thread that opens with
Instead's checklist (open items first, finished ones folded into one line).
Drilling from a workflow into a client puts a "‹ Request missing documents" link at
the top of the client's panel, one tap back; × always goes home with the
rail's scroll intact.

**3. Chat and the client list: does selecting a client change context? Where
do workflows start?** Selecting a client scopes the chat to them, and the
context lives in the composer itself. At the firm level it's a switcher,
"All clients ⌄", that narrows the chat to a client or workflow without leaving
it (search, Recent, Needs you; or type `@`). Inside a thread it's a label
that says who the chat covers: "Alderwood LLC ×" in a client, "12 clients ×"
in a cross-client workflow (whose name is already the heading). Moving
elsewhere is the rail's job, and × goes home. The pill sits in the same place in every
state. Workflows
start from both places, through one path: the composer's workflow button,
typing `/`, plain language ("can we file an extension?" → Instead offers to
start one or just answer), or a client's ⋮ menu. The library opens in the same
sand tray as "Needs you", above the chat box, so starting work never leaves the
chat: pick a workflow and it sits there as a chip, with a line on what you'll
get, and the composer's pill becomes who it runs for (the current client, or
"5 clients ⌄" / "Choose clients", which opens the same popover as the context
picker, letting you pick several: groups like Needs you or S Corps, then
clients) — one "who" control, never two; add context and send. Nothing runs before
send. Run it for one client and it's a single-client run in their panel; for
many, it's a cross-client run with a row per client. Building is chat too:
describe the work or upload the checklist you already use, Instead drafts the
steps in the thread, you edit them in place and save to Mine or Firm. Starting
one that's already running opens the existing one instead.

**4. What earns a spot on the home screen, and does it hold at 2 and 200?**
On the home screen: a headline and a short list of who needs you, the
composer, and the rail as Instead's A–Z book with amber dots. One level deeper: documents, per-client threads, workflow
detail, reasons in full. At 2 clients there are no labels or caps — just
rows. At 200, the tray shows the three most urgent plus "Show 11 more",
the rail stays A–Z with inline search and filters on Instead's existing
Filter icon (Needs you, In a workflow, entity type — with counts; no
user-made folders to maintain), and the briefing
groups the rest by what's blocking them ("6 waiting on documents →
Request them all") so a group is one workflow, not six chats.

**Tradeoffs made:** the rail no longer sorts who needs you to the top (the
tray does that job; inside a thread they're amber dots in A–Z); single-client workflows appear in two places (tab and client panel) on
purpose; Instead offers workflows instead of assuming, at the cost of one
click; the workflow tray takes the place of "Needs you" while it's open (one
tray, one job at a time), so closing it brings today's list back.

## Design system

Charcoal `#24282C`, Sand `#F7F6F0`, Lime `#C2EF72`, plus one deliberate
addition — a desaturated amber `#C97B4A`, reserved only for "needs
attention." Lato for UI text, Libre Baskerville for headings. 0.5px borders
throughout. Fully rounded / pill shapes only. Icons are hand-authored
Lucide-style inline SVG (stroke, round caps/joins) — person / building /
landmark for entity type, list-checks for workflows.
