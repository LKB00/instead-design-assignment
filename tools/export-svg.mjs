// Renders prototype states in Chrome and converts the live DOM to SVG with real <text>
// (dom-to-svg), so screens and components stay editable after importing into Figma.
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';

const OUT = process.argv[2];
const BASE = 'http://localhost:5173/';
const W = 1440, H = 900;
fs.mkdirSync(path.join(OUT, 'screens'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'components'), { recursive: true });

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--no-first-run', '--hide-scrollbars'],
});
const page = await browser.newPage();
await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function open(query) {
  await page.goto(BASE + '?demo=0' + (query ? '&' + query : ''), { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await sleep(2600); // let the hero intro finish and settle into plain text
}

async function toSVG(selector, file, { fullPage = false } = {}) {
  const svg = await page.evaluate(async (sel, full) => {
    const { elementToSVG, inlineResources } = await import('https://esm.sh/dom-to-svg@0.12.2');
    const el = full ? document.documentElement : document.querySelector(sel);
    if (!el) return null;
    // Placeholders aren't exported as text; stand in a real text node while converting.
    const swaps = [...document.querySelectorAll('textarea, input')].filter((t) => !t.value && t.placeholder).map((t) => {
      const cs = getComputedStyle(t);
      const d = document.createElement('div');
      d.className = 'placeholder';
      d.textContent = t.placeholder;
      Object.assign(d.style, { font: cs.font, padding: cs.padding, height: cs.height, color: '#919395', flex: cs.flex, boxSizing: 'border-box', whiteSpace: 'nowrap', overflow: 'hidden' });
      t.style.display = 'none';
      t.after(d);
      return [t, d];
    });
    // List markers aren't exported either; stand in a real bullet character.
    const bullets = [...document.querySelectorAll('li')].map((li) => {
      const b = document.createElement('span');
      b.className = 'bullet';
      b.textContent = '•';
      Object.assign(b.style, { position: 'absolute', left: '-16px', top: '0' });
      li.style.position = 'relative'; li.style.listStyle = 'none';
      li.prepend(b);
      return [li, b];
    });
    const doc = elementToSVG(el);
    await inlineResources(doc.documentElement);
    swaps.forEach(([t, d]) => { d.remove(); t.style.display = ''; });
    bullets.forEach(([li, b]) => { b.remove(); li.style.position = ''; li.style.listStyle = ''; });
    return new XMLSerializer().serializeToString(doc);
  }, selector, fullPage);
  if (!svg) { console.log('  skipped (not found):', file, selector); return; }
  fs.writeFileSync(path.join(OUT, file), svg);
  console.log('  wrote', file, Math.round(svg.length / 1024) + 'KB');
}
const screen = async (name) => { await page.mouse.move(W - 2, 2); await sleep(150); return toSVG(null, `screens/${name}.svg`, { fullPage: true }); };
const comp = (sel, name) => toSVG(sel, `components/${name}.svg`);

// ---- Screens ----
console.log('screens');
await open('');
await screen('01-firm-home');
await comp('.rail', 'rail-firm-12-clients');
await comp('.composer', 'composer-firm');
await comp('.today-tray', 'today-tray-with-composer');
await comp('.today-row', 'today-row');
await comp('.row:has(.dot)', 'client-row-needs-you');
await comp('.row:not(:has(.dot)):not(:has(.wf-count))', 'client-row-default');
await comp('.row:has(.wf-count)', 'client-row-with-workflow');
await comp('.user-card', 'user-card');
await comp('.toolbar', 'rail-toolbar-toggle');
await page.click('[aria-label="Filter clients"]');
await sleep(300);
await screen('02-filter-menu');
await comp('.filter-menu', 'filter-menu');
await page.click('.filter-item');
await sleep(300);
await comp('.clients-pane', 'rail-filtered-needs-you');
await page.click('[aria-label="Clear filter"]');
await sleep(200);
await page.hover('.row:not(:has(.dot)):not(:has(.wf-count))');
await sleep(200);
await comp('.row:not(:has(.dot)):not(:has(.wf-count))', 'client-row-hover');
await page.mouse.move(W - 10, H - 10);

await page.click('[aria-label="Start a workflow"]');
await sleep(400);
await screen('03-start-workflow-menu');
await comp('.popover.menu', 'workflow-menu');
await page.keyboard.press('Escape');

await open('scope=c1');
await screen('04-client-thread');
await comp('.client-shell', 'client-panel');
await comp('.composer', 'composer-client');
await comp('.ctx-pill', 'context-pill-client');
await comp('.answer', 'assistant-answer');

await page.click('.ctx-btn');
await sleep(400);
await screen('05-context-picker');
await comp('.ctx-picker', 'context-picker');
await page.keyboard.press('Escape');

await page.type('textarea', 'Can we file an extension?');
await page.keyboard.press('Enter');
await sleep(1600);
await screen('06-workflow-offer');
await comp('.offer', 'workflow-offer-buttons');

await open('');
await page.click('.toggle button:nth-child(2)');
await sleep(300);
await comp('.rail', 'rail-workflows-tab');
await page.click('.list-section.across-clients .row');
await sleep(600);
await screen('07-workflow-checklist');
await comp('.brief', 'workflow-checklist');
await comp('.ctx-pill', 'context-pill-workflow');

await open('scenario=large');
await screen('08-200-clients');
await page.click('.today-more');
await sleep(1600);
await screen('09-200-clients-grouped-briefing');
await comp('.brief', 'briefing-list');
await comp('.brief:has(.count)', 'briefing-grouped-by-reason');

await open('scenario=two');
await screen('10-two-clients');

await open('scenario=calm');
await screen('11-calm-week');
await comp('.ctx-pill', 'context-pill-firm');

await browser.close();
console.log('done');
