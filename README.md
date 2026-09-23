# Instead Design Assignment — Client List Status Signal

Adds a live status indicator to each client row in the left-rail client list,
so a Pro can tell at a glance which clients need attention — without opening
anything.

## Live artifact

Interactive design (Claude Artifact — Design canvas):
https://claude.ai/artifact/Adsgt9fgeTK3Fx6WBWRNiE

## What's here

- `project/ClientList.dc.html` — the row component, wired to a mock `status`
  field (`needs_attention` / `in_progress` / `on_track`). A `scenario` tweak
  switches between three data sets to demonstrate:
  - `grouped` — 8 clients, 3 needing attention → grouped under a
    "Needs attention" label at the top
  - `few-attention` — 4 clients, 1 needing attention → no grouping, since
    scrolling wouldn't be needed to find it
  - `calm` — mostly on-track clients, to confirm the quiet state stays quiet
- `project/StatusKey.dc.html` — a small key documenting each state and the
  new colour.
- `project/canvas.json` — layout index for the two artboards above.

## Design decisions

- **Placement**: the signal is a small dot overlaid on the avatar's corner —
  the opposite end of the row from the entity badge (e.g. "1040"), so the two
  never visually compete.
- **Colour**: added `#C97B4A`, a desaturated warm amber/terracotta in the same
  low-saturation family as Sand (`#F7F6F0`) and Charcoal (`#24282C`), clearly
  distinct from Lime (`#C2EF72`). Used **only** for "needs attention."
  "In progress" reuses Charcoal at reduced opacity; "on track" shows no dot
  at all.
- **Shape**: fully rounded, matching the pill language already used for the
  entity badge.
- **Grouping threshold**: needs-attention clients group under a top label
  only once there are 3 or more of them — enough that scrolling would be
  needed to find them. At 1–2, rows stay in place with just the corner dot.
