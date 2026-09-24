# Figma export (SVG)

Editable SVGs of the prototype, rendered at 1440×900 with real text (not
outlines), so text stays editable in Figma. Fonts: Lato and Libre
Baskerville (install Libre Baskerville if Figma swaps the headings).

**Import:** drag the files onto a Figma canvas. Each file becomes a frame
named after the file.

## Screens — by user flow

Each folder is one thing a pro does; files are numbered in the order they
happen.

| Flow | Screens |
|---|---|
| **1 Home** | 1.1 Home – 3 clients need you · 1.2 Home – Running workflows · 1.3 Home – Calm week · 1.4 Home – 2 clients · 1.5 Home – 200 clients · 1.6 Home – 200 clients, all who need you |
| **2 Find a client** | 2.1 Filter the client list · 2.2 Choose who the chat is about · 2.3 Choose a client by typing @ |
| **3 Work in a client** | 3.1 Client – First visit · 3.2 Client – Thread · 3.3 Client – Asking offers a workflow |
| **4 Run a workflow** | 4.1 Workflows – Open · 4.2 Workflows – Library · 4.3 Workflows – Picked, choose clients · 4.4 Workflows – Choosing clients · 4.5 Workflows – Already running |
| **5 Build a workflow** | 5.1 Build – Describe the work · 5.2 Build – Draft to review |
| **6 Follow a workflow** | 6.1 Workflow – Checklist · 6.2 Workflow – Into a client and back |

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
