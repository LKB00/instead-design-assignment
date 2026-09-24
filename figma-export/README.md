# Figma export (SVG)

Editable SVGs of the prototype, rendered at 1440×900 with real text (not
outlines), so text stays editable in Figma. Fonts: Lato and Libre
Baskerville (install Libre Baskerville if Figma swaps the headings).

**Import:** drag the files onto a Figma canvas. Each file becomes a frame
named after the file.

## Screens — by the problem they solve

Each folder answers one question from the brief; files are numbered in the
order you'd show them.

| Folder | Screens | Brief |
|---|---|---|
| **1 See who needs you** | 1.1 Home – 3 clients need you · 1.2 Open a client from the list · 1.3 Calm week – nothing needs you | Q1 |
| **2 See work in progress** | 2.1 All running workflows · 2.2 One workflow’s checklist | Ongoing workflows at a glance |
| **3 Move between firm and client** | 3.1 From a workflow into a client and back · 3.2 A client’s file holds their own workflows | Q2 |
| **4 Choose who the chat is about** | 4.1 Choose from the list · 4.2 Type @ in the chat box | Q3 |
| **5 Start a workflow** | 5.1 Ask in plain words, Instead offers one · 5.2 Open the Workflows panel · 5.3 Browse the full library · 5.4 Pick one, then choose clients · 5.5 Choosing clients · 5.6 Already running, no duplicate | Q3 |
| **6 Build your own workflow** | 6.1 Describe the work · 6.2 Review the draft | Beyond the brief |
| **7 From 2 to 200 clients** | 7.1 2 clients · 7.2 200 clients · 7.3 200 clients, grouped by what’s blocking · 7.4 Filter the client list | Q4 |

## Components — by part of the screen

| Folder | What's in it |
|---|---|
| **Left panel** | The whole panel, Top buttons, Client row (Default, Needs you, In a workflow, Hover, Menu), Filter menu, Client list filtered to Needs you, User card |
| **Needs you list** | The list above the chat box on the home, and one Row |
| **Workflows panel** | Open, Workflow picked, Build a new workflow, Library preview |
| **Chat box** | Chat box (Home, In a client), Client selector (All clients, One client, In a workflow), Client selector menu (and while typing @), Choose clients menu, Tip – Chat is now about a client |
| **Chat messages** | Reply, Buttons (Start or just answer, Already running), Which client, Who needs you (Top 3, Grouped), Running workflows, Workflow checklist, Draft workflow |
| **Client file** | The client's panel, and the Back to workflow link |

## Words used

The same words as on screen, nothing technical:

- **Left panel** — Workflows button, the client list, Threads.
- **Needs you list** — the box above the chat box on the home.
- **Workflows panel** — the same box when the Workflows button is on.
- **Chat box** — where you type. **Client selector** — the button in it
  that says who the chat is about ("All clients", "Meera Iyer", "5 clients").
- **Client file** — the panel that opens for one client.

## Layers inside each file

Every group has a name and means something; layout-only wrappers are
removed. Big pieces are named "Area / Part" (Left panel / Clients, Chat /
Reply); pieces used in many places have a plain name (Client row, Form
badge, Needs-you dot, Tab, Primary button); icons are "Icon / name" at
12, 14 or 16 with an invisible Bounds square; a group's own background is
Fill or Border; text layers are named by their text. The rules are in
`tools/figma-clean.js`.

## Regenerate

With the prototype running on :5173 and Chrome installed:

```bash
cd tools && npm i puppeteer-core@23 && node export-svg.mjs ../figma-export
```
