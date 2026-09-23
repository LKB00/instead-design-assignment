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
| 03-start-workflow-menu | Composer workflow menu open |
| 04-client-thread | Client panel + thread (Meera Iyer) |
| 05-context-picker | Context pill picker open |
| 06-workflow-offer | Plain-language request → offer to start a workflow |
| 07-workflow-checklist | Cross-client workflow as a chat checklist |
| 08-200-clients | 200-client book: tray with top 3 + Show 11 more, A–Z rail |
| 09-200-clients-grouped-briefing | "Show 11 more" → briefing grouped by what's blocking clients |
| 10-two-clients | 2-client book |
| 11-calm-week | Nobody needs you |

## Components (`components/`)

Rail (firm, workflows tab, toolbar toggle, filtered to Needs you), filter menu, client rows (default, needs you,
with workflow, hover), user card, composer (firm,
client), context pill (firm, client, workflow), context picker, workflow
menu, "Needs you" tray with composer, today row, briefing list, grouped briefing, workflow checklist,
workflow offer buttons, assistant answer, client panel.

## Regenerate

With the prototype running on :5173 and Chrome installed:

```bash
cd tools && npm i puppeteer-core@23 && node export-svg.mjs ../figma-export
```
