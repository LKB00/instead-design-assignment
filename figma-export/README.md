# Figma export (SVG)

Editable SVGs of the prototype's major screens and components, rendered at
1440×900 from `prototype/` with real `<text>` (not outlined), so text stays
editable after import. Fonts: Lato and Libre Baskerville (both built into
Figma).

**Import:** drag the `.svg` files onto a Figma canvas (or File → Import).
Each file becomes a frame; text layers stay text, icons are vectors.

## Screens (`screens/`)

| File | State |
|---|---|
| 01-firm-home | Firm home: headline, the 3 clients who need you, composer |
| 02-filter-menu | Rail filter menu open (Status / Entity, with counts) |
| 03-workflow-tray | Workflow library in the composer tray |
| 04-client-thread | Client panel + thread (Meera Iyer) |
| 05-context-picker | Context pill picker open at the firm level |
| 06-workflow-offer | Plain-language request → offer to start a workflow |
| 07-workflow-checklist | Cross-client workflow as a chat checklist |
| 08-200-clients | 200-client book: tray with top 3 + Show 11 more, A–Z rail |
| 09-200-clients-grouped-briefing | "Show 11 more" → briefing grouped by what's blocking clients |
| 10-two-clients | 2-client book |
| 11-calm-week | Nobody needs you |
| 12-workflow-library | Tray expanded into the full library with a preview |
| 13-workflow-draft | A workflow drafted in chat, editable before saving |

## Components (`components/`)

File names are `area-part-variant`, matching the layer names inside.

| Area | Files |
|---|---|
| Rail | `rail`, `rail-toolbar`, `rail-client-row-default`, `-needs-you`, `-with-workflow`, `-hover`, `rail-filter-menu`, `rail-filtered-needs-you`, `rail-user-card` |
| Tray (above the composer) | `tray-needs-you`, `tray-client-row`, `tray-workflows-browse`, `-picked`, `-build` |
| Composer | `composer-firm`, `composer-client`, `composer-context-pill-firm`, `-client`, `-workflow`, `composer-context-picker`, `composer-client-picker` |
| Chat | `chat-reply`, `chat-buttons`, `chat-client-checklist`, `chat-briefing-list`, `chat-briefing-groups`, `chat-draft-workflow` |
| Library | `library-preview` |
| Client panel | `client-panel`, `client-panel-back-link` |

## Layers

Every group means something and has a name; layout-only wrappers are
flattened away. One naming scheme throughout:

- **Area / Part** for the big pieces: `Rail / Clients`, `Rail / Threads`,
  `Tray / Header`, `Tray / Client row`, `Chat / Reply`, `Library / Preview`,
  `Client panel / Header`.
- **A plain noun** for pieces used in many places: `Client row`,
  `Thread row`, `Form badge`, `Needs-you dot`, `Tab`, `Icon button`,
  `Primary button`, `Workflow chip`.
- **Icon / name** for icons (`Icon / workflow`, `Icon / x`).
- **Fill** and **Border** for a group's own background shapes.
- Text layers are named by their text.

Masks are kept only where something is really clipped (a scrolling list,
truncated text) and are named `Clip`. Hover-only controls that aren't
showing are left out. The rules live in `tools/figma-clean.js`.

## Regenerate

With the prototype running on :5173 and Chrome installed:

```bash
cd tools && npm i puppeteer-core@23 && node export-svg.mjs ../figma-export
```

(`export-svg.mjs` loads `figma-clean.js` from the same folder.)
