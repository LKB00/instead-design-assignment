# Instead Pro — Chat-First Home (Design Exercise)

Instead's product design exercise: re-imagine how a Pro lands and orients
when they open Instead Pro. The brief is explicit that **chat is the room,
not a feature inside the room** — this reworks the home screen around that,
rather than placing a client list and a chat box side by side.

**Full context:** [CONTEXT.md](CONTEXT.md) explains the brief, the live
product's pain points, every improvement and tradeoff, and the code map —
readable on its own without any other history.

## View the design

The clickable prototype in `prototype/` is the current design and the source
of truth. Run it locally:

```bash
python3 -m http.server 5173 --directory prototype
```

Then open http://localhost:5173 (Preact + htm from a CDN, no build step).
Things to try:

- Read the home: the headline and the "Needs you" tray answer who needs you
  today; click a client to open their file.
- Switch the rail to **Workflows** and open "Collect missing K-1s".
- Click the **All clients ⌄** pill in the composer (or type `@`) to change who
  the chat is about; type `/` to start a workflow.
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
- **Clients | Workflows** as one toggle in the rail, each tab keeping its
  own scroll and selection.
- **Selecting is scoping** — clicking a client opens their panel and sets
  the composer's context pill ("Meera Iyer ⌄ ×"); sending a message gets a
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
  prototype (Chrome + puppeteer-core).
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
click.

## Design system

Charcoal `#24282C`, Sand `#F7F6F0`, Lime `#C2EF72`, plus one deliberate
addition — a desaturated amber `#C97B4A`, reserved only for "needs
attention." Lato for UI text, Libre Baskerville for headings. 0.5px borders
throughout. Fully rounded / pill shapes only. Icons are hand-authored
Lucide-style inline SVG (stroke, round caps/joins) — person / building /
landmark for entity type, list-checks for workflows.
