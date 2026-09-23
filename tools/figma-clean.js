// Runs in the page after dom-to-svg. Turns its output into what a designer expects in Figma:
// only meaningful groups, each with a readable name, and no bookkeeping.
//
// Naming: "Area / Part" for the big pieces (Rail / Clients, Tray / Header, Chat / Reply),
// a plain noun for pieces that appear in many places (Client row, Tab, Icon button),
// and "Icon / name" for icons. Text layers keep their text as their name.
window.figmaClean = function figmaClean(doc) {
  const has = (g, c) => !!g.querySelector('.' + c);
  // Most specific first. A class that isn't listed is a layout wrapper and gets flattened.
  const NAMES = [
    // Rail
    ['rail', 'Rail'], ['rail-logo', 'Rail / Logo'], ['toolbar', 'Rail / Toolbar'], ['wf-nav', 'Rail / Workflows button'],
    ['clients-pane', 'Rail / Clients'], ['threads-pane', 'Rail / Threads'], ['user-card', 'Rail / User card'],
    ['filter-bar', 'Rail / Active filter'], ['add-row', 'Rail / Add client'], ['empty-threads', 'Rail / Empty threads'],
    ['row', 'Client row'], ['thread-row', 'Thread row'], ['avatar', 'Avatar'], ['wf-count', 'Workflow progress'],
    ['pill-xxs', 'Form badge'], ['dot', 'Needs-you dot'], ['initials', 'Initials'], ['round-btn', 'Round button'],
    ['filter-menu', 'Filter menu'], ['run-picker', 'Client picker'], ['ctx-picker', 'Context picker'], ['pick-foot', 'Picker footer'], ['menu-item', 'Menu item'], ['menu-foot', 'Menu tip'],
    ['filter-chip', 'Filter chip'], ['search-field', 'Search field'], ['section-head', 'Section header'],
    // Client panel
    ['client-shell', 'Client panel'], ['icon-col', 'Client panel / Nav'], ['client-panel', 'Client panel / Content'],
    ['cp-back-row', 'Client panel / Back link'], ['cp-header', 'Client panel / Header'], ['cp-actions', 'Client panel / Actions'],
    ['cp-docs', 'Client panel / Documents'], ['cp-threads', 'Client panel / Threads'], ['doc-row', 'Folder row'], ['nav-pill', 'Pill button'],
    // Chat
    ['hero-wrap', 'Headline'], ['chat-scroll', 'Chat'], ['user-turn', 'Chat / Your message'], ['answer', 'Chat / Reply'],
    ['msg-actions', 'Chat / Reply actions'], ['status-line', 'Chat / Status'], ['draft-card', 'Chat / Draft workflow'],
    ['offer', 'Chat / Buttons'], ['offer-go', 'Primary button'], ['offer-alt', 'Secondary button'],
    ['cl-row', 'Chat / Client line'], ['cl-summary', 'Chat / Done summary'],
    ['pg-row', (g) => (has(g, 'count') ? 'Chat / Group row' : 'Chat / Step')], ['brief', 'Chat / List'], ['brief-open', 'Open link'],
    // Tray above the composer
    ['wf-tray', 'Tray'], ['today-tray', 'Tray'],
    ['today', (g) => (/\bwf\b/.test(g.getAttribute('class')) ? 'Tray / Workflows' : 'Tray / Needs you')],
    ['today-head', 'Tray / Header'], ['today-rows', 'Tray / Rows'], ['wf-row', 'Tray / Workflow row'], ['today-row', 'Tray / Client row'],
    ['today-link', 'Tray / Link'], ['more-row', 'Show more'], ['today-open', 'Open link'], ['wf-foot', 'Tray / Actions'],
    ['wf-action', 'Action button'], ['wf-tabs', 'Tabs'], ['wf-tab', 'Tab'], ['wf-stage', 'Tray / Picked workflow'],
    ['wf-chip', 'Workflow chip'], ['wf-done', 'Done button'],
    // Library
    ['wf-lib', 'Library'], ['wf-lib-list', 'Library / List'], ['wf-lib-group', 'Library / Category'], ['wf-lib-row', 'Library / Row'],
    ['wf-preview', 'Library / Preview'], ['wf-preview-foot', 'Library / Preview footer'], ['wf-steps', 'Steps'], ['wf-step', 'Step'], ['step-n', 'Step number'],
    // Composer
    ['composer', 'Composer'], ['placeholder', 'Composer / Placeholder'], ['composer-controls', 'Composer / Controls'],
    ['controls-group', 'Control group'], ['ctx-pill', 'Context pill'], ['circ', 'Icon button'], ['send', 'Send button'],
    ['chip-x', 'Remove'], ['tooltip', 'Tooltip'],
  ];
  const nameOf = (g) => {
    const cls = (g.getAttribute('class') || '').split(/\s+/);
    const icon = cls.find((c) => c.startsWith('i-'));
    if (icon) return 'Icon / ' + icon.slice(2);
    const hit = NAMES.find(([c]) => cls.includes(c));
    return hit ? (typeof hit[1] === 'function' ? hit[1](g) : hit[1]) : null;
  };

  const root = document.importNode(doc.documentElement, true);
  Object.assign(root.style, { position: 'fixed', left: '0', top: '0', pointerEvents: 'none' });
  document.body.appendChild(root); // in the page, so bounding boxes can be measured
  const names = new Map([...root.querySelectorAll('g')].map((g) => [g, nameOf(g)]));

  // Masks only matter where content overflows its box (truncated text); drop the rest.
  root.querySelectorAll('[mask]').forEach((node) => {
    const id = (node.getAttribute('mask').match(/#([^)]+)/) || [])[1];
    const m = id && [...root.querySelectorAll('mask')].find((x) => x.id === id);
    const r = m && m.children.length === 1 && m.firstElementChild.tagName === 'rect' && m.firstElementChild;
    if (m) m.remove();
    // Clipped to nothing: a hover-only control that isn't showing. Not part of the design at rest.
    if (r && (+r.getAttribute('width') === 0 || +r.getAttribute('height') === 0)) { node.remove(); return; }
    let keep = false;
    if (r) {
      const bb = node.getBBox();
      const x = +r.getAttribute('x'), y = +r.getAttribute('y'), w = +r.getAttribute('width'), h = +r.getAttribute('height');
      // Overflows sideways (truncated text) or downward (a scrolling list): the clip is real.
      keep = bb.width > 0 && (bb.x < x - 1.5 || bb.x + bb.width > x + w + 1.5 || bb.y < y - 3 || bb.y + bb.height > y + h + 3);
    }
    if (keep) node.insertBefore(m, node.firstChild); else node.removeAttribute('mask');
  });
  root.remove();

  // Drop bookkeeping and default-valued attributes.
  const DEFAULTS = {
    'font-size-adjust': 'none', 'font-stretch': '100%', 'font-variant': 'normal', 'font-style': 'normal', direction: 'ltr',
    'letter-spacing': 'normal', 'text-decoration': 'none', 'text-anchor': 'start', 'text-rendering': 'auto', 'unicode-bidi': 'normal',
    'word-spacing': '0px', 'writing-mode': 'horizontal-tb', 'user-select': 'auto',
  };
  root.querySelectorAll('*').forEach((n) => [...n.attributes].forEach((a) => {
    const noise = /^(data-|aria-)/.test(a.name) || ['role', 'class', 'color'].includes(a.name) || (a.name === 'id' && n.tagName !== 'mask');
    if (noise || DEFAULTS[a.name] === a.value) n.removeAttribute(a.name);
  }));
  ['data-stacking-context', 'aria-owns', 'style'].forEach((a) => root.removeAttribute(a));
  names.forEach((n, g) => { if (n) g.setAttribute('id', n); });

  // Flatten every unnamed group with no mask, transform or opacity: it's only layout.
  [...root.querySelectorAll('g')].reverse().forEach((g) => { if (!g.attributes.length) g.replaceWith(...g.childNodes); });
  let empty;
  do { empty = [...root.querySelectorAll('g')].filter((g) => !g.children.length); empty.forEach((g) => g.remove()); } while (empty.length);

  // A group directly inside a group of the same name (icons come out this way) adds nothing.
  [...root.querySelectorAll('g[id]')].reverse().forEach((g) => {
    const p = g.parentElement;
    if (p && p.tagName === 'g' && p.id === g.id && p.children.length === 1 && p.attributes.length === 1) {
      [...g.attributes].forEach((a) => p.setAttribute(a.name, a.value)); // keeps the icon's scale
      g.replaceWith(...g.childNodes);
    }
  });
  // One sentence built from several parts comes out as several text layers; join same-style
  // text on the same line back into one.
  const style = (t) => [...t.attributes].map((a) => a.name + '=' + a.value).sort().join(';');
  [...root.querySelectorAll('text')].forEach((t) => {
    const prev = t.previousElementSibling;
    const lastY = prev && prev.tagName === 'text' && prev.lastElementChild && prev.lastElementChild.getAttribute('y');
    if (lastY && style(prev) === style(t) && t.firstElementChild && t.firstElementChild.getAttribute('y') === lastY) {
      [...t.children].forEach((ts) => { ts.removeAttribute('textLength'); ts.removeAttribute('lengthAdjust'); });
      prev.lastElementChild.removeAttribute('textLength'); prev.lastElementChild.removeAttribute('lengthAdjust');
      prev.append(...t.childNodes);
      t.remove();
    }
  });
  root.querySelectorAll('g[mask]:not([id])').forEach((g) => g.setAttribute('id', 'Clip'));
  // A named group around one shape: the shape carries the name.
  root.querySelectorAll('g[id]').forEach((g) => {
    const c = g.firstElementChild;
    if (g.children.length === 1 && g.attributes.length === 1 && !['g', 'text', 'mask'].includes(c.tagName) && !c.id) { c.setAttribute('id', g.id); g.replaceWith(c); }
  });
  root.querySelectorAll('g[id] > rect:not([id])').forEach((r) => r.setAttribute('id', !r.getAttribute('fill') || r.getAttribute('fill') === 'none' ? 'Border' : 'Fill'));
  root.querySelectorAll('style').forEach((x) => { if (!x.textContent.trim()) x.remove(); });
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_COMMENT);
  const comments = [];
  while (walker.nextNode()) comments.push(walker.currentNode);
  comments.forEach((c) => c.remove());
  return new XMLSerializer().serializeToString(root);
};
