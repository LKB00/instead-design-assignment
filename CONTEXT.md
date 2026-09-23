# Project context — Instead Pro, chat-first home

This file is the complete, standalone context for this repository. If you are
a person or an AI reading it without any other conversation history, you
should be able to understand what this project is, why every decision was
made, what the current state is, and how to continue the work.

---

## 1. What this is

A **product design exercise** for **Instead** (a tax strategy and filing
platform). The surface being designed is **Instead Pro**: the workspace tax
professionals (CPAs, EAs, firm owners) use to manage their book of clients,
run tax work, and stay on top of deadlines.

The deliverable is a **clickable prototype** in `prototype/` that looks and
behaves like the real product (app.instead.com/firm), plus a 5-minute Loom
walkthrough recorded by the designer. The designer is Lokesh Kumar Bhatia;
the prototype uses his real Instead trial account name.

- Repo: https://github.com/LKB00/instead-design-assignment (public)
- Run: `python3 -m http.server 5173 --directory prototype`, open
  http://localhost:5173

## 2. The brief (summarized faithfully)

Two things to internalize:

1. **Chat is the primary interaction model.** A pro mostly talks to the
   product: asks questions, kicks off workflows, pulls up client info. Chat is
   the room, not a feature inside the room.
2. **Work happens as workflows.** A workflow is a unit of tax work
   (onboarding, gathering documents, prepping an extension, a strategy
   analysis). It runs **across many clients** ("send Q3 estimate reminders to
   everyone") or **inside one client** ("finish the Filbert return").

**The challenge:** re-imagine how a pro lands and orients when they open
Instead. In the first few seconds they should be able to:

- see all their clients and enough about each to know **who needs attention**
  without digging;
- see **ongoing workflows**, both cross-client and single-client;
- **drop straight into chat**.

The hard part is balance: the client list must not overpower chat, and
clients must not be hidden so well the pro can't feel their book.

**Four prompts to reason about:**

1. How does a pro tell, at a glance, which clients need something right now?
2. Where do cross-client workflows live versus single-client ones, and how
   does a pro move between scopes without losing their place?
3. Does selecting a client change the chat context? Can a pro start a
   workflow from chat, from a client, or both?
4. What earns a spot on the home screen, what goes a level deeper, and how
   does it hold up at 2 clients and at 200?

**Evaluation:** judgment (clear decisions, owned tradeoffs), hierarchy and
restraint, systems thinking (scales with clients and workflows), craft
(Ramp / Gusto / Cursor / OpenAI / Anthropic bar), velocity (4–6 hours, AI
use expected).

**Deliverables:** Figma or a clickable prototype (a plus), and a ~5-minute
Loom covering the layout decision, the list-vs-chat balance, and at least one
tradeoff.

## 3. Design constraints (must be kept)

| Token | Value | Use |
|---|---|---|
| Charcoal | `#24282C` | text, primary |
| Sand | `#F7F6F0` | panels, soft fills |
| Lime | `#C2EF72` | brand accent, send button |
| **Amber** (the one addition) | `#C97B4A` | **only** "needs attention" |

Measured from the live app's computed styles (100% zoom) and used throughout:
page `#FBFBF7`, hover/selected `#F0EEE3`, secondary text `#5B5E61`, icons and
meta `#919395`, control border `#DEDDD8`, form badge `rgba(132,204,22,.15)`.

- **Type:** Lato for all UI; Libre Baskerville for headings only.
- **Borders:** 0.5px everywhere.
- **Shapes:** fully rounded / pill.
- **Icons:** Lucide only (inlined SVG paths in `app.js`).
- **Sizes match the live app:** 316px rail, 28px rows, 12px row text, 10px
  labels, 14px icons, 742px composer, 24/32px serif headings.

A lesson learned: early reference screenshots were taken at ~125% browser
zoom, which made everything ~25% too large. All values were later re-measured
live at 100% zoom via the browser DOM.

## 4. What the live product does today (app.instead.com/firm)

Observed directly in the real app:

- A **trial banner** at the top.
- A **left rail**: Instead logo, a "Workflows" button, library and new-thread
  buttons, a **CLIENTS** list where each row is only an icon, the client's
  name and a lime **form badge** (1040, 1120…), an "Add new client" row, a
  **THREADS** list, and a user card.
- The **main area**: the Instead logo flips into a typed heading "How can I
  support your firm today?" above one composer.
- **Selecting a client** replaces the rail with a **client panel** (name,
  badge, "New client thread", Tax docs by year, Client threads) and the chat
  greets you for that client.

## 5. Pain points and what was improved

Each row: what hurts in the current experience, and what the prototype does
instead.

### 5.1 Who needs me? (brief prompt 1)

| Pain point | Improvement |
|---|---|
| Every client row looks the same: name + form badge. Nothing says who needs attention; the pro has to open clients one by one. | Rows that need you carry an **amber dot** beside the form badge (reason on hover). The rail stays Instead's **A–Z book**; the "who and why" lives in the home tray below. An earlier version also sorted these clients to the top of the rail with a two-word reason — dropped because, once the tray existed, the same three names and reasons appeared twice on one screen. **One job per surface: the tray is today, the rail is the book.** |
| The empty home offers only a generic question; the product doesn't tell the pro anything about their day. | The **hero headline leads with it**: "3 clients need you today. Where should we start?" (or "Priya Nair needs you today…"), A calm week keeps Instead's "How can I support your firm today?". Plain Libre Baskerville text, same logo-flip + typewriter; the amber stays in the rail. **The home answers its own headline**: under it, Instead's own **sand composer tray** holds a "NEEDS YOU" section header (label left, "4 workflows running →" right, the rail's section-head pattern) and up to three one-line pill rows (amber dot, name, the problem in grey; "Open →" on hover), with the composer inside the tray below, so everything shares one width and edge; past three, "Show 11 more" (opens the full briefing in chat: the three most urgent, then the rest grouped by what's blocking them with one action per group). Headline and list come from one `homeStatus()` function; workflows count once however many clients they cover. Earlier this took three steps — headline, a "3 clients need you · 4 workflows moving →" line, then a briefing in chat — where the click only revealed what the page could just show. Also dropped: two equal-weight lists (clients + workflows) that repeated the same problems, and a "decision-first" card that needed explaining. The kept version is the familiar list with things **removed**. |
| (Early iteration of this prototype) two-line rows, grey status dots, a bold "Needs you · 3" header with divider, and chips under the composer repeating the same clients — **felt cluttered compared with the live app.** | Stripped back to Instead's own density: one-line rows, a single amber dot, small grey labels ("Needs you" / "Everyone else"), and one line of text instead of chips. |

### 5.2 Workflows and scopes (brief prompt 2)

| Pain point | Improvement |
|---|---|
| Workflows sit behind a separate "Workflows" button, disconnected from clients and from chat. | A **Clients \| Workflows** toggle in the rail, each tab remembering its own scroll and selection. |
| No distinction between cross-client and single-client work. | **A workflow lives where its work lives.** Cross-client workflows stay at the firm level; single-client workflows open **inside the client's panel** (listed first under Client threads with progress, e.g. 2/3). The Workflows tab indexes both. |
| A workflow's status isn't visible in conversation. | Every workflow **is a chat thread**: the request that started it as the heading, then Instead's **checklist** — open items first, anything needing you marked amber, finished items folded into one line ("Received from Alderwood LLC, Fern & Co. and Harbor & Pine LLP"). |
| Moving from a workflow into a client loses your place. | Clicking a client inside a workflow opens their file, and the workflow stays at the top of the context picker's **Recent** list, one tap back. × always returns home with the rail's tab and scroll intact. A small workflow count on a client row ("2/3") jumps straight into it. |

### 5.3 Chat context and starting work (brief prompt 3)

| Pain point | Improvement |
|---|---|
| Context (which client the chat is about) is implied by navigation only. An earlier version of this prototype added a chip above the composer, which repeated the panel header, couldn't be changed in place, and didn't scale (back chip + client chip + workflow chip). | A **context pill inside the composer**: `All clients ⌄`, `Alderwood LLC ⌄ ×`, or a workflow's name. Clicking it opens a picker with **search, All clients, Recent, Needs you**. Typing **`@`** opens it too. The placeholder follows the context ("Ask about Sethi Holdings…"). The composer looks identical in every state. This is the model/context-picker pattern familiar from Claude, Cursor and ChatGPT. |
| Starting a workflow isn't possible from chat or from a client row. | **Both, through one path — every start becomes a chat thread**, scoped by where you are: the composer's workflow button (templates grouped *Across clients* / *For one client*), typing **`/`**, **plain language** ("can we file an extension?" → Instead offers *Start "Prepare an extension"* or *Just answer in chat*), or a client row's **⋮ → Start a workflow…**. From the firm level, a single-client template makes Instead ask "Which client is it for?" in chat. |
| Nothing prevents duplicate work. | Starting a workflow that's already running for that client **opens the existing one** and says so. |

### 5.4 What earns the home screen; 2 vs. 200 clients (brief prompt 4)

| Pain point | Improvement |
|---|---|
| A flat list that only grows; at 200 clients the ones who need you are buried. | **On home:** the composer, one line of who needs you, a rail sorted by need. **One level down:** documents, per-client threads, workflow detail, full reasons. |
| — | **2 clients:** no labels, no caps — just rows and the one line. |
| — | **200 clients:** the tray shows the **three most urgent + "Show 11 more"**; the rail stays **A–Z** with **inline search** ("Search 200 clients"). |
| Organizing a 200-client book. (Considered: user-made groups — rejected as upkeep that goes stale, and it would bring back rail sections.) | **Filters on Instead's existing Filter icon**, built only from data Instead already has: *Status* (Needs you, In a workflow) and *Entity* (Individual 1040, S Corp 1120S, …), each with a live count; one at a time; the active one shows as a "Needs you · 3 ×" pill under the header; search works inside it. No folders to maintain, always correct. |
| Handling many clients one by one doesn't scale. | The at-scale briefing lists the top three, then **groups the rest by what's blocking them** — "6 waiting on documents → Request them all", "2 waiting on a signature → Resend all", "3 deadlines, not started → Start extensions". Each group becomes **one cross-client workflow**, not six chats. |

Rule of thumb: **the home grows with what needs you, not with the size of
the book.**

### 5.5 Other polish

- Trial banner removed from the prototype (not relevant to the exercise).
- Composer text box no longer shows a dark focus outline (the live app has none).
- The reviewer-only data switch moved out of the product surface into a
  dashed **"12 clients ⌄"** button bottom-right, whose panel explains each
  view; keys **1–4** switch views (for recording the Loom).
- Interactions copied from the live app: row hover swaps the badge for ⋮ and
  shows a check ring on the avatar; thread hover shows bookmark/⋮; nav-pill
  arrow on hover; draggable rail width and Threads height; logo-flip +
  15ms-per-character typed heading; client panel slide-in with skeletons.

## 6. Tradeoffs (owned)

1. **The rail doesn't sort by need.** The home tray does that job, so the
   rail stays Instead's A–Z book. Cost: inside a thread, who needs you is
   only amber dots scattered through A–Z (the context picker's "Needs you"
   is one click).
2. **Single-client workflows appear in two places** (Workflows tab and the
   client panel) on purpose: the tab answers "what's running?", the panel
   answers "what's happening with this client?".
3. **Instead offers workflows instead of assuming**, because not every
   question is a workflow. Cost: one extra click when the pro did mean it.
4. **The back chip became "Recent"** in the context picker: consistent and
   scalable, but going back to a workflow is two clicks instead of one.
5. **Amber is the only added colour**, used for nothing but "needs you".

## 7. How to use the prototype (demo script)

1. Open http://localhost:5173 (12-client book by default).
2. Note the rail: Instead's A–Z book; amber dots on the three who need you.
3. Read the headline and the three clients listed under it.
4. Open a client from that list; see the client panel and the **context
   pill** in the composer. Click the pill or type `@` to switch.
5. Rail → **Workflows** → "Collect missing K-1s": checklist in chat. Click
   Meera Iyer → her file; the workflow is first under Recent in the pill.
6. In a client, type "can we file an extension?" → offer to start, or answer.
7. Composer workflow button, or `/` — start from templates.
8. Press **3** (200 clients): tray shows three + "Show 11 more", rail search →
   grouped briefing → "Request them all". Press **1** (2 clients) and **4** (calm week).

URL params: `?scenario=two|grouped|large|calm`, `?scope=<clientId>`,
`?demo=0` hides the prototype control, `?scenario=reference` mirrors the live
account's single client for side-by-side comparison.

## 8. Code map

No build step. Preact 10 + htm loaded from esm.sh.

- `prototype/index.html` — fonts (Lato; Libre Baskerville variable) and the
  versioned `styles.css?v=N` / `app.js?v=N` (bump N when files change so
  browsers don't serve stale copies).
- `prototype/styles.css` — all styling; tokens on `:root`; values measured
  from the live app.
- `prototype/app.js` — everything else:
  - `PATHS` / `Icon`: Lucide icons.
  - Mock data: `clientsFor(scenario)` (two / grouped / large / calm /
    reference), `generatedBook(188)` for the 200-client book; clients carry
    `status`, `note`, `flag`, `urgency`, `cat` (docs | sign | deadline),
    `next`.
  - `WORKFLOWS` (across / single, each with checklist `items`),
    `WF_THREADS` (seeded threads), `TEMPLATES` (startable workflows, with
    `match` regex for plain-language offers), `CATS` (grouping at scale),
    `SCENARIOS` (prototype control).
  - `App` state: `scope` ({type: client|workflow, id} or null), `from`,
    `threads`, `clientThreads`, `activeThread`, `recent`, `ctxOpen`,
    `menu`, `rowMenu`, `query`, `showAllNeeds`, `scenario`, …
  - Key methods: `pickClient`, `pickWorkflow`, `setContext`, `clearScope`,
    `startWorkflow`, `askWhichClient`, `answerInstead`, `brief`, `send`,
    `replyFor`, `setScenario`.
  - Render helpers: `renderClientRow`, `renderWorkflowRow`,
    `renderClientShell`, `renderContextPicker`, `renderProgress`,
    `renderBrief`, `renderGroups`, `renderOffer`, `renderChoose`; `Hero`
    (logo flip + typewriter).
- `project/*.dc.html`, `canvas.json` — an **older** Claude Artifact canvas
  version (Workspace / Decisions / StatusKey). **Out of date**; the prototype
  is the source of truth.
- `Screenshots/` — gitignored reference captures.

### Bringing it into Figma

The markup and CSS are built to import cleanly (e.g. with the html.to.design
plugin, which maps flexbox to auto layout):

- Every container is a **flex stack spaced with `gap` + `padding`**; there are
  no margins between siblings and no negative margins, so each stack becomes
  an auto-layout frame with the right spacing.
- **Hover-only controls** (⋮ on rows, check ring on avatars, thread actions,
  "Open →" in briefings, the nav-pill arrow, resize grips) are
  `display`-toggled, not hidden overlays — an import contains only what's
  visible, with no invisible stray layers.
- Sections carry **readable class names** that become layer names
  (`rail`, `clients-pane`, `list-section`, `today-tray`, `today-row`,
  `client-panel`, `cp-header`, `composer`, `ctx-pill`, `brief`, …).
- The hero heading settles into **one text node** after typing, instead of
  one span per character.
- Icons are inline Lucide SVGs (import as vectors).
- Import with **`?demo=0`** to leave out the prototype control. Useful
  states: `/?demo=0` (firm home), `/?demo=0&scope=c1` (client + thread),
  `/?demo=0&scenario=large` (200 clients), `/?demo=0&scenario=two`.
- Only true overlays are absolutely positioned: popovers/menus, the tooltip,
  and the invisible drag handles for resizing the rail and threads.

## 9. Known limitations

- All data and replies are mocked; plain-language detection is keyword
  matching.
- Started workflows and threads live in memory and reset on reload.
- The 200-client book is generated deterministically.
- A client row's ⋮ menu near the bottom of the list can be clipped by the
  list's scroll area.
- The older Artifact canvas and its README badge don't reflect the current
  design.

## 10. History (how the design evolved)

1. Status signal on client rows (needs attention / in progress / on track).
2. Clients | Workflows toggle; client-scoped chat with chip and tooltip.
3. Rebuilt inside Instead's real shell, then pixel-matched to the live app
   (re-measured at 100% zoom after the 125% screenshot mistake).
4. Instead's client panel reproduced for the scoped view.
5. Decluttered after feedback that it felt busy next to the live app.
6. Worked through the brief's four prompts one by one (sections 5.1–5.4).
7. Replaced the floating data switch with a labelled prototype control.
8. Replaced the scope chip with the composer context pill and picker.
