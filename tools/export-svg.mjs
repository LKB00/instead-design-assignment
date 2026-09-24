// Renders prototype states in Chrome and converts the live DOM to SVG with real <text>
// (dom-to-svg), so screens and components stay editable after importing into Figma.
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';

const OUT = process.argv[2];
const CLEAN = fs.readFileSync(new URL('./figma-clean.js', import.meta.url), 'utf8');
const BASE = 'http://localhost:5173/';
const W = 1440, H = 900;
// Start from empty folders so renamed files don't leave old ones behind.
for (const dir of ['screens', 'components']) fs.rmSync(path.join(OUT, dir), { recursive: true, force: true });

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
  await page.addScriptTag({ content: CLEAN });
  await sleep(2600); // let the hero intro finish and settle into plain text
}

async function toSVG(selector, file, { fullPage = false } = {}) {
  const svg = await page.evaluate(async (sel, full) => {
    const { elementToSVG, inlineResources } = await import('https://esm.sh/dom-to-svg@0.12.2');
    const el = full ? document.documentElement : document.querySelector(sel);
    if (!el) return null;
    // Form fields aren't exported as text, typed or placeholder; stand in a real text node while converting.
    const swaps = [...document.querySelectorAll('textarea, input')].filter((t) => t.type !== 'file' && t.offsetParent && (t.value || t.placeholder)).map((t) => {
      const cs = getComputedStyle(t);
      const d = document.createElement('div');
      d.className = t.value ? 'typed' : 'placeholder';
      d.textContent = t.value || t.placeholder;
      Object.assign(d.style, { font: cs.font, padding: cs.padding, height: cs.height, color: t.value ? cs.color : '#919395', flex: cs.flex, boxSizing: 'border-box', whiteSpace: 'nowrap', overflow: 'hidden' });
      t.style.display = 'none';
      t.after(d);
      return [t, d];
    });
    // List markers aren't exported either; stand in a real bullet character.
    const bullets = [...document.querySelectorAll('.answer ul > li')].map((li) => {
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
    return window.figmaClean(doc); // tools/figma-clean.js: meaningful groups, readable names
  }, selector, fullPage);
  if (!svg) { console.log('  skipped (not found):', file, selector); return; }
  fs.mkdirSync(path.dirname(path.join(OUT, file)), { recursive: true });
  fs.writeFileSync(path.join(OUT, file), svg);
  console.log('  wrote', file, Math.round(svg.length / 1024) + 'KB');
}
// Screens are grouped by user flow and numbered in the order a pro goes through them;
// components are grouped by the part of the screen they belong to. File name = Figma frame name.
const screen = async (file) => { await page.mouse.move(W - 2, 2); await sleep(150); return toSVG(null, `screens/${file}.svg`, { fullPage: true }); };
const comp = (sel, file) => toSVG(sel, `components/${file}.svg`);
const mark = (fn) => page.evaluate(`(() => { document.querySelectorAll('[data-x]').forEach((e) => e.removeAttribute('data-x')); (${fn})().setAttribute('data-x', ''); })()`);
const clickText = (sel, re) => page.evaluate((s, r) => [...document.querySelectorAll(s)].find((e) => new RegExp(r).test(e.textContent)).click(), sel, re);
const send = async (text) => { await page.click('textarea'); await page.type('textarea', text); await page.keyboard.press('Enter'); await sleep(1600); };

// ---- 1 Home ----
await open('');
await screen('1 Home/1.1 Home – 3 clients need you');
await comp('.rail', 'Left panel/Left panel');
await comp('.toolbar', 'Left panel/Top buttons');
await comp('.row:has(.dot)', 'Left panel/Client row – Needs you');
await comp('.row:not(:has(.dot)):not(:has(.wf-count))', 'Left panel/Client row – Default');
await comp('.row:has(.wf-count)', 'Left panel/Client row – In a workflow');
await comp('.user-card', 'Left panel/User card');
await comp('.today-tray', 'Needs you list/Needs you list');
await comp('.today-row', 'Needs you list/Row');
await comp('.composer', 'Chat box/Chat box – Home');
await comp('.ctx-pill', 'Chat box/Client selector – All clients');
await page.click('.today-link');
await sleep(1400);
await screen('1 Home/1.2 Home – Running workflows');
await comp('.brief', 'Chat messages/Running workflows');
await open('scenario=calm');
await screen('1 Home/1.3 Home – Calm week');
await open('scenario=two');
await screen('1 Home/1.4 Home – 2 clients');
await open('scenario=large');
await screen('1 Home/1.5 Home – 200 clients');
await page.click('.today-more');
await sleep(1600);
await screen('1 Home/1.6 Home – 200 clients, all who need you');
await mark(`() => document.querySelector('.brief')`);
await comp('[data-x]', 'Chat messages/Who needs you – Top 3');
await comp('.brief:has(.count)', 'Chat messages/Who needs you – Grouped');

// ---- 2 Find a client ----
await open('');
await page.click('[aria-label="Filter clients"]');
await sleep(300);
await screen('2 Find a client/2.1 Filter the client list');
await comp('.filter-menu', 'Left panel/Filter menu');
await page.click('.filter-item');
await sleep(300);
await comp('.clients-pane', 'Left panel/Client list – Filtered to Needs you');
await page.click('[aria-label="Clear filter"]');
await sleep(200);
await page.hover('.row:not(:has(.dot)):not(:has(.wf-count))');
await sleep(200);
await comp('.row:not(:has(.dot)):not(:has(.wf-count))', 'Left panel/Client row – Hover');
await page.evaluate(() => { const r = [...document.querySelectorAll('.row')].find((x) => /Cho, Daniel/.test(x.textContent)); r.querySelector('.row-more').click(); });
await sleep(300);
await comp('.row-menu', 'Left panel/Client row – Menu');
await open('');
await page.click('.ctx-btn');
await sleep(400);
await screen('2 Find a client/2.2 Choose who the chat is about');
await comp('.ctx-picker', 'Chat box/Client selector menu');
await open('');
await page.click('textarea');
await page.type('textarea', "what's due for @as");
await sleep(400);
await screen('2 Find a client/2.3 Choose a client by typing @');
await comp('.ctx-picker', 'Chat box/Client selector menu – Typing @');

// ---- 3 Work in a client ----
await open('');
await clickText('.today-row', 'Meera');
await sleep(900);
await screen('3 Work in a client/3.1 Client – First visit');
await comp('.tooltip', 'Chat box/Tip – Chat is now about a client');
await open('scope=c1');
await screen('3 Work in a client/3.2 Client – Thread');
await comp('.client-shell', 'Client file/Client file');
await comp('.composer', 'Chat box/Chat box – In a client');
await comp('.ctx-pill', 'Chat box/Client selector – One client');
await comp('.answer', 'Chat messages/Reply');
await send('Can we file an extension?');
await screen('3 Work in a client/3.3 Client – Asking offers a workflow');
await comp('.offer', 'Chat messages/Buttons – Start or just answer');

// ---- 4 Run a workflow ----
await open('');
await page.click('[aria-label="Workflows"]');
await sleep(400);
await screen('4 Run a workflow/4.1 Workflows – Open');
await comp('.wf-tray', 'Workflows panel/Open');
await page.click('[aria-label="Expand the library"]');
await sleep(500);
await screen('4 Run a workflow/4.2 Workflows – Library');
await comp('.wf-preview', 'Workflows panel/Library preview');
await page.click('[aria-label="Collapse library"]');
await sleep(300);
await clickText('.wf-row', 'File an extension');
await sleep(300);
await screen('4 Run a workflow/4.3 Workflows – Picked, choose clients');
await comp('.wf-tray', 'Workflows panel/Workflow picked');
await page.click('.ctx-pill .ctx-btn');
await sleep(300);
await clickText('.run-picker .ctx-item', 'Needs you');
await sleep(200);
await screen('4 Run a workflow/4.4 Workflows – Choosing clients');
await comp('.run-picker', 'Chat box/Choose clients menu');
await open('');
await send('can we file an extension?');
await mark(`() => [...document.querySelectorAll('.answer')].pop().querySelector('.brief')`);
await comp('[data-x]', 'Chat messages/Which client');
await send('remind clients about their tax payment');
await screen('4 Run a workflow/4.5 Workflows – Already running');
await mark(`() => [...document.querySelectorAll('.answer')].pop().querySelector('.offer')`);
await comp('[data-x]', 'Chat messages/Buttons – Already running');

// ---- 5 Build a workflow ----
await open('');
await page.click('[aria-label="Workflows"]');
await sleep(300);
await clickText('.wf-action', 'Build a new');
await sleep(300);
await screen('5 Build a workflow/5.1 Build – Describe the work');
await comp('.wf-tray', 'Workflows panel/Build a new workflow');
await clickText('.wf-action', 'sign');
await sleep(200);
await page.click('.send');
await sleep(1600);
await screen('5 Build a workflow/5.2 Build – Draft to review');
await comp('.draft-card', 'Chat messages/Draft workflow');

// ---- 6 Follow a workflow ----
await open('');
await page.click('.threads-list .thread-row.wf');
await sleep(600);
await screen('6 Follow a workflow/6.1 Workflow – Checklist');
await comp('.brief', 'Chat messages/Workflow checklist');
await comp('.ctx-pill', 'Chat box/Client selector – In a workflow');
await clickText('.brief button', 'Meera');
await sleep(900);
await screen('6 Follow a workflow/6.2 Workflow – Into a client and back');
await comp('.cp-back-row', 'Client file/Back to workflow link');

await browser.close();
console.log('done');
