import { h, render, Component } from 'https://esm.sh/preact@10.24.3';
import htm from 'https://esm.sh/htm@3.1.1';

const html = htm.bind(h);

// ---------- Lucide icons ----------
const PATHS = {
  circle: html`<circle cx="12" cy="12" r="9" />`,
  circleCheck: html`<circle cx="12" cy="12" r="9" /><path d="m9 12 2 2 4-4" />`,
  userRound: html`<path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" />`,
  building: html`<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" />`,
  landmark: html`<path d="M3 22h18" /><path d="M6 18v-7" /><path d="M10 18v-7" /><path d="M14 18v-7" /><path d="M18 18v-7" /><path d="m12 2 8 5H4z" />`,
  library: html`<path d="m16 6 4 14" /><path d="M12 6v14" /><path d="M8 8v12" /><path d="M4 4v16" />`,
  messagePlus: html`<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M12 7v6" /><path d="M9 10h6" />`,
  search: html`<circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />`,
  archiveX: html`<rect width="20" height="5" x="2" y="3" rx="1" /><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" /><path d="m9.5 17 5-5" /><path d="m9.5 12 5 5" />`,
  arrowUpDown: html`<path d="m21 16-4 4-4-4" /><path d="M17 20V4" /><path d="m3 8 4-4 4 4" /><path d="M7 4v16" />`,
  listFilter: html`<path d="M3 6h18" /><path d="M7 12h10" /><path d="M10 18h4" />`,
  plus: html`<path d="M5 12h14" /><path d="M12 5v14" />`,
  workflow: html`<rect width="8" height="8" x="3" y="3" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect width="8" height="8" x="13" y="13" rx="2" />`,
  messages: html`<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />`,
  userPlus: html`<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6" /><path d="M22 11h-6" />`,
  settings2: html`<path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" />`,
  paperclip: html`<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />`,
  mic: html`<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><path d="M12 19v3" />`,
  arrowUp: html`<path d="m5 12 7-7 7 7" /><path d="M12 19V5" />`,
  x: html`<path d="M18 6 6 18" /><path d="m6 6 12 12" />`,
  users: html`<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />`,
  thumbsUp: html`<path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />`,
  thumbsDown: html`<path d="M17 14V2" /><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />`,
  filePen: html`<path d="M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />`,
  chevronDown: html`<path d="m6 9 6 6 6-6" />`,
  chevronLeft: html`<path d="m15 18-6-6 6-6" />`,
  moreVertical: html`<circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" />`,
  timerReset: html`<path d="M10 2h4" /><path d="M12 14v-4" /><path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" /><path d="M9 17H4v5" />`,
  panelLeftClose: html`<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18" /><path d="m16 15-3-3 3-3" />`,
  folderOpen: html`<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />`,
  moveRight: html`<path d="M18 8L22 12L18 16" /><path d="M2 12H22" />`,
  check: html`<path d="M20 6 9 17l-5-5" />`,
  bookmark: html`<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />`,
  fileText: html`<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />`,
  folder: html`<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />`,
  maximize2: html`<path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="m21 3-7 7" /><path d="m3 21 7-7" />`,
  minimize2: html`<path d="M4 14h6v6" /><path d="M20 10h-6V4" /><path d="m14 10 7-7" /><path d="m3 21 7-7" />`,
  upload: html`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m17 8-5-5-5 5" /><path d="M12 3v12" />`,
  sparkles: html`<path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0l1.58 6.14a2 2 0 0 0 1.44 1.44l6.14 1.58a.5.5 0 0 1 0 .96l-6.14 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z" />`,
};

// Three icon sizes on a 2-pt grid: 12 small (inline: ×, chevrons, checks, arrows, pill icons),
// 14 default (rows and buttons, as in Instead), 16 large (folders, header actions).
const Icon = ({ name, size = 14, stroke = 1.5 }) => html`
  <svg class=${`i-${name}`} width=${size} height=${size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width=${stroke} stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PATHS[name]}</svg>`;

// ---------- Mock data ----------
const ENTITY = { '1040': 'Individual', '1120': 'C Corp', '1120S': 'S Corp', '1065': 'Partnership', '1041': 'Trust & Estate' };

// A deterministic 188-client book so the 200-client state is the same on every load.
const FIRSTS = ['Aarav', 'Beth', 'Carlos', 'Dana', 'Elena', 'Farid', 'Grace', 'Hiro', 'Isla', 'Jonah', 'Kavya', 'Liam', 'Maya', 'Noah', 'Olivia', 'Pedro', 'Quinn', 'Rhea', 'Sam', 'Tara', 'Uma', 'Victor', 'Wen', 'Yusuf', 'Zoe'];
const LASTS = ['Abbott', 'Bose', 'Chen', 'Duarte', 'Ellis', 'Fischer', 'Gupta', 'Hale', 'Ibarra', 'Jansen', 'Kaur', 'Lindqvist', 'Mehta', 'Novak', 'Okafor', 'Park', 'Reyes', 'Sato', 'Tan', 'Varga', 'Walsh', 'Young'];
const FIRMS = ['Bluebird Bakery', 'Cedar Row Dental', 'Driftwood Studios', 'Eastline Logistics', 'Foxglove Farms', 'Granite Peak', 'Hollis & Mercer', 'Ironbark Holdings', 'Juniper Health', 'Kestrel Media', 'Lantern Coffee', 'Marlow Trust'];
const GEN_ISSUES = [
  { cat: 'docs', note: 'Missing documents, return due in 5 days', flag: 'Due in 5 days', urgency: 5 },
  { cat: 'docs', note: 'Documents 9 days late', flag: '9 days late', urgency: 4 },
  { cat: 'sign', note: 'Signature pending for 3 days', flag: 'Unsigned 3 days', urgency: 4 },
  { cat: 'deadline', note: 'Extension due next week', flag: 'Due next week', urgency: 6 },
];
function generatedBook(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const isFirm = i % 9 === 4;
    const entity = isFirm ? ['1120S', '1065', '1120', '1041'][i % 4] : '1040';
    const c = isFirm ? { id: `g${i}`, name: `${FIRMS[i % FIRMS.length]} ${['', 'II', 'East', 'West'][Math.floor(i / FIRMS.length) % 4]}`.trim(), entity }
      : { id: `g${i}`, first: FIRSTS[i % FIRSTS.length], last: LASTS[(i * 7) % LASTS.length], entity };
    const issue = i % 17 === 3 ? GEN_ISSUES[i % GEN_ISSUES.length] : null;
    out.push(issue ? { ...c, status: 'needs_attention', ...issue } : { ...c, status: i % 5 === 0 ? 'in_progress' : 'on_track' });
  }
  return out;
}

function clientsFor(scenario) {
  // Same data as the real app.instead.com/firm capture, for side-by-side comparison.
  if (scenario === 'reference') return [{ id: 'ref-ashish', first: 'Ashish', last: 'Khoshya', entity: '1040', status: 'on_track' }];
  const ashish = { id: 'ashish', first: 'Ashish', last: 'Khoshya', entity: '1040', status: 'in_progress', note: 'Return in review' };
  if (scenario === 'two') return [
    ashish,
    { id: 'c2', first: 'Priya', last: 'Nair', entity: '1040', status: 'needs_attention', cat: 'sign', note: 'Signature pending for 4 days', flag: 'Unsigned 4 days', urgency: 1 },
  ];
  if (scenario === 'large') return clientsFor('grouped').concat(generatedBook(188));
  if (scenario === 'calm') return [
    ashish,
    { id: 'c6', first: 'Daniel', last: 'Cho', entity: '1040', status: 'on_track' },
    { id: 'c8', first: 'Sana', last: 'Kapoor', entity: '1040', status: 'on_track' },
    { id: 'c7', name: 'Fern & Co.', entity: '1120S', status: 'on_track' },
  ];
  return [
    { id: 'c1', first: 'Meera', last: 'Iyer', entity: '1040', status: 'needs_attention', cat: 'docs', note: 'Missing a tax form, return due in 2 days', flag: 'Due in 2 days', urgency: 2 },
    { id: 'c2', name: 'Sethi Holdings', entity: '1120', status: 'needs_attention', cat: 'sign', note: 'Signature pending for 6 days', flag: 'Unsigned 6 days', urgency: 1 },
    { id: 'c3', name: 'Whitfield Family Trust', entity: '1041', status: 'needs_attention', cat: 'deadline', note: 'Extension due Friday, needs last year’s return', flag: 'Due Friday', urgency: 3 },
    ashish,
    { id: 'c5', name: 'Alderwood LLC', entity: '1065', status: 'in_progress', note: 'Collecting documents' },
    { id: 'c6', first: 'Daniel', last: 'Cho', entity: '1040', status: 'on_track' },
    { id: 'c7', name: 'Fern & Co.', entity: '1120S', status: 'on_track' },
    { id: 'c8', first: 'Sana', last: 'Kapoor', entity: '1040', status: 'on_track' },
    { id: 'c9', first: 'Owen', last: 'Brecker', entity: '1040', status: 'on_track' },
    { id: 'c10', name: 'Northgate Dental', entity: '1120S', status: 'on_track' },
    { id: 'c11', first: 'Lena', last: 'Ortiz', entity: '1040', status: 'on_track' },
    { id: 'c12', name: 'Harbor & Pine', entity: '1065', status: 'on_track' },
  ];
}

// A workflow is a thread with a checklist. Cross-client items are clients; single-client items are steps.
const WORKFLOWS = {
  across: [
    { id: 'w1', tid: 't-docs', name: 'Request missing documents', ask: 'Ask for the missing tax forms', clients: 5, done: 3, total: 5, items: [
      { clientId: 'c1', label: 'Meera Iyer', state: 'attn', note: 'No reply in 5 days, return due in 2' },
      { clientId: 'c9', label: 'Owen Brecker', state: 'open', note: 'Reminder sent yesterday' },
      { clientId: 'c5', label: 'Alderwood LLC', state: 'done', note: 'Received' },
      { clientId: 'c7', label: 'Fern & Co.', state: 'done', note: 'Received' },
      { clientId: 'c12', label: 'Harbor & Pine', state: 'done', note: 'Received' },
    ], doneSummary: 'Received from Alderwood LLC, Fern & Co. and Harbor & Pine' },
    { id: 'w2', tid: 't-remind', name: 'Send payment reminders', ask: 'Remind clients about the September tax payment', clients: 12, done: 7, total: 12, items: [
      { clientId: 'c2', label: 'Sethi Holdings', state: 'open', note: 'Scheduled for Monday' },
      { clientId: 'c6', label: 'Daniel Cho', state: 'open', note: 'Scheduled for Monday' },
      { clientId: 'c8', label: 'Sana Kapoor', state: 'open', note: 'Scheduled for Monday' },
      { clientId: 'c10', label: 'Northgate Dental', state: 'open', note: 'Scheduled for Monday' },
      { clientId: 'c11', label: 'Lena Ortiz', state: 'open', note: 'Scheduled for Monday' },
    ], doneSummary: '7 reminders sent', doneIds: ['c1', 'c3', 'ashish', 'c5', 'c7', 'c9', 'c12'] },
  ],
  single: [
    { id: 'w3', tid: 'i-review', name: 'Review a tax return', ask: 'Review Ashish’s return', clientId: 'ashish', clientName: 'Ashish Khoshya', done: 1, total: 3, items: [
      { label: 'Match his income to his documents', state: 'done' },
      { label: 'Check deductions against receipts', state: 'open', note: 'Working on it now' },
      { label: 'Final review with you', state: 'open', note: 'After the deductions check' },
    ] },
    { id: 'w4', tid: 't-ext', name: 'File an extension', ask: 'File the Whitfield extension', clientId: 'c3', clientName: 'Whitfield Family Trust', done: 0, total: 2, items: [
      { label: 'Estimate the tax owed', state: 'open', note: 'Needs last year’s return' },
      { label: 'Prepare and file the extension', state: 'open', note: 'Due Friday' },
    ] },
  ],
};
const ALL_WF = WORKFLOWS.across.concat(WORKFLOWS.single);
const coveredBy = (w) => new Set(w.items.map((it) => it.clientId).filter(Boolean).concat(w.doneIds || []));
const wfKey = (id) => `wf:${id}`;

// What a pro can start. Scope decides the shape: across clients (a checklist of clients) or for one (a checklist of steps).
const TEMPLATES = [
  { id: 't-remind', answer: 'The next tax payment is due September 15. I can draft the reminder for you to send yourself, if you’d rather not track it.', scope: 'across', name: 'Send payment reminders', icon: 'users', match: /remind|payment|estimate/i,
    targets: (cs) => cs.filter((c) => c.entity === '1040').slice(0, 6), note: 'Scheduled for Monday' },
  { id: 't-docs', answer: 'I can list what’s missing for each client from what they’ve uploaded and last year’s return, without sending anything yet.', scope: 'across', name: 'Request missing documents', icon: 'fileText', match: /missing|document|form/i,
    targets: (cs) => cs.filter((c) => c.status !== 'on_track'), note: 'Request drafted' },
  { id: 't-ext', answer: 'Yes. An extension gives more time to file, but any tax owed is still due on the original date. Want me to estimate what’s owed?', scope: 'one', name: 'File an extension', icon: 'timerReset', match: /extension/i,
    steps: ['Estimate the tax owed', 'Prepare the extension', 'File it and confirm it was accepted'] },
  { id: 't-strategy', answer: 'I can look at last year’s return and point out savings worth a closer look.', scope: 'one', name: 'Find tax savings', icon: 'library', match: /\bsav(e|es|ing|ings)\b|strateg/i,
    steps: ['Read last year’s return', 'Look for savings that apply', 'Write up what each is worth'] },
  { id: 't-onboard', answer: 'I can draft the engagement letter and a first list of documents for you to send.', scope: 'one', name: 'Onboard a client', icon: 'userPlus', match: /onboard|engagement/i,
    steps: ['Send the engagement letter', 'Collect last year’s return', 'Set up the client’s folders'] },
];
// Bulk versions used by the at-scale briefing; not in the start menu.
TEMPLATES.push(
  { id: 't-sign', scope: 'across', hidden: true, name: 'Resend signature requests', icon: 'filePen', note: 'Resent today', answer: '' },
  { id: 't-exts', scope: 'across', hidden: true, name: 'File extensions', icon: 'timerReset', note: 'Estimating tax owed', answer: '' },
);
// The library: everything a pro can run. A workflow is a playbook; whether a run covers one
// client or many is decided when it's started, by who it's run for.
const FIRM_META = {
  't-remind': { cat: 'Reminders', desc: 'Reminds clients about their next tax payment and tracks who has paid.', output: 'A reminder for each client and a list of who has paid', steps: ['Work out what each client owes', 'Draft the reminder for your review', 'Send it and track replies'] },
  't-docs': { cat: 'Documents', desc: 'Checks what each client has uploaded against last year and asks for the rest.', output: 'One request per client, tracked until everything arrives', steps: ['Compare uploads with last year', 'Draft a request for each client', 'Send it and check items off as they arrive'] },
  't-ext': { cat: 'Filing', desc: 'Estimates the tax owed and files an extension.', output: 'A filed extension and an estimate of what’s owed' },
  't-strategy': { cat: 'Planning', desc: 'Looks at last year’s return for ways to save.', output: 'A short list of savings and what each is worth' },
  't-onboard': { cat: 'Onboarding', desc: 'Sends the engagement letter and sets up a new client.', output: 'A signed engagement letter and a client file ready to use' },
};
TEMPLATES.forEach((t) => Object.assign(t, { by: 'firm' }, FIRM_META[t.id] || {}));
// Instead's own playbooks: the kinds of work its library covers (prepare, review, plan, estimate, notices), in plain words.
TEMPLATES.push(...[
  ['i-prep', 'Prepare a tax return', 'Filing', 'Prepares a return from the client’s documents and last year’s return.', 'A draft return with open questions flagged', ['Read the client’s documents', 'Bring in last year’s numbers', 'Prepare the return', 'Flag open questions for you'], 'fileText'],
  ['i-review', 'Review a tax return', 'Review', 'Checks a prepared return against the client’s documents.', 'A list of issues and where each one is', ['Compare the return with the documents', 'Check each section', 'List issues by importance'], 'circleCheck'],
  ['i-plan', 'Build a tax plan', 'Planning', 'Looks ahead at next year and suggests ways to pay less tax.', 'A plan with suggestions and estimated savings', ['Read the last two returns', 'Estimate next year’s income', 'Suggest what could change', 'Write up the plan'], 'library'],
  ['i-est', 'Estimate quarterly taxes', 'Planning', 'Works out what the client should pay each quarter.', 'Four payment amounts with due dates', ['Estimate this year’s income', 'Work out the tax', 'Split it into four payments'], 'timerReset'],
  ['i-notice', 'Respond to an IRS letter', 'Letters', 'Reads a letter from the IRS and drafts a reply.', 'A reply ready for your review', ['Read the letter', 'Work out what the IRS is asking for', 'Draft the reply'], 'landmark'],
].map(([id, name, cat, desc, output, steps, icon]) => ({ id, name, cat, desc, output, steps, icon, by: 'instead', scope: 'one' })));
const LIB_TABS = [['all', 'All'], ['mine', 'Mine'], ['firm', 'Firm'], ['instead', 'Instead']];
const BY_LINE = { instead: 'By Instead', firm: 'Shared with your firm', mine: 'Only you' };
const BUILD_IDEAS = ['Remind clients who haven’t signed after 3 days, then tell me', 'Send a year-end checklist to every individual client'];
const library = () => TEMPLATES.filter((t) => !t.hidden).sort((a, b) => ['mine', 'firm', 'instead'].indexOf(a.by) - ['mine', 'firm', 'instead'].indexOf(b.by));
// A rough first draft from what the pro typed or uploaded; the pro edits it before saving.
const KNOWN_DRAFTS = [
  [/sign/i, 'Remind clients to sign', ['Find returns waiting on a signature for 3 days or more', 'Send the client a friendly reminder', 'Send another reminder 2 days later', 'Tell you who still hasn’t signed']],
  [/checklist|year-end/i, 'Send year-end checklists', ['Find every individual client', 'Fill in what we already know from last year', 'Send it with a due date', 'Track what comes back and follow up']],
];
function draftFrom(text, file) {
  const known = !file && KNOWN_DRAFTS.find(([re]) => re.test(text));
  const raw = !file && (text.match(/\bevery\s+(day|week|month|quarter|monday|tuesday|wednesday|thursday|friday)\b/i) || [])[1];
  const when = raw && (/day$/i.test(raw) && raw.length > 3 ? raw[0].toUpperCase() + raw.slice(1).toLowerCase() : raw.toLowerCase());
  if (known) return { name: when ? `${known[1]} every ${when}` : known[1], steps: (when ? [`Run every ${when}`] : []).concat(known[2]) };
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const name = file
    ? cap(file.replace(/\.[a-z0-9]+$/i, '').replace(/[-_]+/g, ' ').trim())
    : cap(text.split(/[,.;]| then /i)[0].split(' ').slice(0, 7).join(' ').trim());
  const parts = file ? [] : text.split(/[,.;]| then | and then /i).map((s) => s.trim()).filter((s) => s.split(' ').length >= 2);
  const steps = parts.length >= 2 ? parts.map(cap).slice(0, 4).concat(['Keep the checklist current'])
    : file ? ['Gather the documents the checklist asks for', 'Work through each check in order', 'Flag exceptions for your review', 'Write up the result in the client’s file']
    : ['Find the clients it applies to', 'Draft it for your review', 'Send it and track replies', 'Flag anything that needs you'];
  return { name: name || 'New workflow', steps };
}
const templateFor = (text) => TEMPLATES.find((t) => t.match && t.match.test(text));
const CATS = {
  docs: { label: 'Waiting on documents', tid: 't-docs', action: 'Request them all' },
  sign: { label: 'Waiting on a signature', tid: 't-sign', action: 'Resend all' },
  deadline: { label: 'Deadline coming up', tid: 't-exts', action: 'File extensions' },
};
const wfFromKey = (key) => key && key.startsWith('wf:') && ALL_WF.find((w) => wfKey(w.id) === key);
// Every workflow thread opens with the ask that started it and Instead's live checklist.
const WF_THREADS = Object.fromEntries(ALL_WF.map((w) => [wfKey(w.id), [
  { from: 'user', text: w.ask },
  { from: 'assistant', blocks: [{ p: `${w.done} of ${w.total} done. Here’s where it stands:` }, { progress: w.id }] },
]]));

const PARAMS = new URLSearchParams(location.search);
// Reviewer-only: the same home at different book sizes.
const SCENARIOS = [
  ['two', '2 clients', 'A new firm; nothing to group yet'],
  ['grouped', '12 clients', 'A typical book; 3 need you today'],
  ['large', '200 clients', 'At scale; 14 need you, list capped'],
  ['calm', 'Calm week', 'Nobody needs you; the home stays quiet'],
];
const SHOW_DEMO_SWITCH = PARAMS.get('demo') !== '0';

// Instead's opening reply for a new client thread (its shape, in plain words).
const greeting = (name) => ({
  from: 'assistant',
  blocks: [
    { p: `Hi Lokesh, good to be working with you on ${name}'s file.` },
    { p: 'What would you like to do today? A few things I can help with:' },
    { ul: [
      'Prepare or review a tax return',
      'Build a tax plan or estimate quarterly taxes',
      'Look for ways to save tax',
      'Answer a tax question',
      "Organize or summarize the client's documents",
    ] },
    { p: 'Just let me know what you need.' },
  ],
});

const fullName = (c) => c.name || `${c.first} ${c.last}`;
// One source for the home's status: the hero headline, the list under it and the briefing all
// read homeStatus(), so they never disagree.
// A workflow counts once however many clients it covers, so at 200 clients a bulk "Request
// missing documents" is 1 workflow, not 6.
function activeWorkflows(clients) {
  const inBook = (it) => clients.some((c) => c.id === it.clientId && fullName(c) === it.label);
  return ALL_WF.filter((w) => w.done < w.total && (w.clientId ? clients.some((c) => c.id === w.clientId) : w.items.every(inBook)));
}
function homeStatus(clients) {
  const attention = clients.filter((c) => c.status === 'needs_attention').sort((a, b) => a.urgency - b.urgency);
  const workflows = activeWorkflows(clients);
  const who = attention.length === 1 ? fullName(attention[0]) : `${attention.length} clients`;
  const needs = attention.length ? `${who} ${attention.length === 1 ? 'needs' : 'need'} you` : '';
  return {
    attention, workflows,
    // The headline carries only what to act on; a calm week keeps Instead's greeting.
    headline: needs ? `${needs} today. Where should we start?` : 'How can I support your firm today?',
  };
}
const railName = (c) => c.name || `${c.last}, ${c.first}`;
const iconFor = (entity) => (entity === '1040' ? 'userRound' : entity === '1041' ? 'landmark' : 'building');

// ---------- App ----------
class App extends Component {
  constructor() {
    super();
    this.state = {
      scenario: PARAMS.get('scenario') || 'grouped',
      scope: PARAMS.get('scope') ? { type: 'client', id: PARAMS.get('scope') } : null, // { type: 'client' | 'workflow', id }
      seenTip: PARAMS.has('scope'),
      showTip: false,
      menu: false,
      rowMenu: null,
      filter: null, filterOpen: false, // rail filter: 'needs' | 'workflow' | an entity code
      ctxOpen: false, ctxQuery: '', ctxInline: false, ctxIndex: 0, recent: [], // the context picker; ctxInline = opened by typing @
      query: null, // null = search closed; '' = open // client id whose ⋮ menu is open
      // The workflow tray above the composer: 'browse' | 'build' | null. wfPick is a staged workflow,
      // wfTargets who it will run for, wfFull the expanded library.
      wfTray: null, wfTab: 'all', wfFull: false, wfQuery: '', wfPreview: null,
      wfPick: null, wfTargets: [], wfChoosing: false, wfClientQ: '', wfFile: null, wfExclude: [], // wfExclude: clients a running copy already covers
      drafts: {},
      gk: 'general', // the open firm-level thread; New thread starts another
      draft: '',
      typing: false,
      from: null, // the scope to go back to after drilling from a workflow into a client
      threads: {
        ...WF_THREADS,
        'ashish#1': [{ from: 'user', text: 'Hey' }, greeting('Ashish Khoshya')],
        'c1#1': [
          { from: 'user', text: "What's blocking Meera's return?" },
          { from: 'assistant', blocks: [
            { p: 'One tax form from her investments hasn’t come in, and her return is due in 2 days.' },
            { p: 'A few ways I can keep this on track:' },
            { ul: [
              'Draft a reminder asking Meera to send the form',
              'File an extension so the deadline isn’t at risk',
              'Prepare the rest of the return and leave that part open',
            ] },
            { p: 'Which would you like?' },
          ] },
        ],
        ...(PARAMS.get('thread') === 'hey' ? { 'ref-ashish#1': [{ from: 'user', text: 'Hey' }, greeting('Ashish Khoshya')] } : {}),
      },
      // per-client thread lists (most recent first) and which one is open
      clientThreads: {
        ashish: ['ashish#1'],
        c1: ['c1#1'],
        ...(PARAMS.get('thread') === 'hey' ? { 'ref-ashish': ['ref-ashish#1'] } : {}),
      },
      activeThread: {},
      titles: { 'ashish#1': 'Friendly greeting exchange', 'c1#1': 'Missing form follow-up', 'ref-ashish#1': 'Friendly greeting exchange' },
      openYears: { 2026: true, 2025: false },
      railW: 316,
      threadsH: 260,
    };
    this.scrollPos = { clients: 0 };
    this.onKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (this.state.wfChoosing) return this.setState({ wfChoosing: false });
        if (this.state.wfFull) return this.setState({ wfFull: false });
        this.setState({ menu: false, rowMenu: null, showTip: false, protoOpen: false, ctxOpen: false });
        if (this.state.wfTray) this.closeWf();
      }
      const typing = /^(INPUT|TEXTAREA)$/.test((e.target && e.target.tagName) || '');
      if (!typing && SHOW_DEMO_SWITCH && /^[1-4]$/.test(e.key) && !e.metaKey && !e.ctrlKey) this.setScenario(SCENARIOS[+e.key - 1][0]);
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
    this.onDocClick = () => { if (this.state.rowMenu || this.state.ctxOpen || this.state.filterOpen || this.state.wfChoosing) this.setState({ rowMenu: null, ctxOpen: false, filterOpen: false, wfChoosing: false }); };
    document.addEventListener('click', this.onDocClick);
  }
  componentWillUnmount() { document.removeEventListener('keydown', this.onKeyDown); document.removeEventListener('click', this.onDocClick); }

  threadKey(scope = this.state.scope) {
    if (!scope) return this.state.gk;
    if (scope.type === 'workflow') return `wf:${scope.id}`;
    const list = this.state.clientThreads[scope.id] || [];
    return this.state.activeThread[scope.id] || list[0] || `${scope.id}#1`;
  }

  newClientThread(clientId) {
    const n = (this.state.clientThreads[clientId] || []).length + 1;
    this.setState((s) => ({ activeThread: { ...s.activeThread, [clientId]: `${clientId}#${n}` }, draft: '', menu: false }));
  }

  openClientThread(clientId, key) {
    this.setState((s) => ({ activeThread: { ...s.activeThread, [clientId]: key } }));
  }

  componentDidUpdate(prevProps, prevState) {
    // Leaving a client: the firm rail remounts — put it back exactly where it was.
    const wasClient = prevState.scope && prevState.scope.type === 'client';
    const isClient = this.state.scope && this.state.scope.type === 'client';
    if (wasClient && !isClient && this.listEl) this.listEl.scrollTop = this.scrollPos.clients || 0;
    if (this.chatEl) this.chatEl.scrollTop = this.chatEl.scrollHeight;
    const scopeChanged = prevState.scope !== this.state.scope;
    if (scopeChanged && this.inputEl) this.inputEl.focus();
  }

  // Instead lets you drag the rail's width and the Threads section's height.
  startResize(e, axis) {
    e.preventDefault();
    const startX = e.clientX, startY = e.clientY, w0 = this.state.railW, h0 = this.state.threadsH;
    const cls = axis === 'col' ? 'dragging-col' : 'dragging-row';
    document.body.classList.add(cls);
    const move = (ev) => {
      if (axis === 'col') this.setState({ railW: Math.max(260, Math.min(480, w0 + ev.clientX - startX)) });
      else this.setState({ threadsH: Math.max(120, Math.min(480, h0 - (ev.clientY - startY))) });
    };
    const up = () => { document.body.classList.remove(cls); window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up); };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  }

  remember(scope) {
    this.setState((s) => ({ recent: [scope, ...s.recent.filter((r) => !(r.type === scope.type && r.id === scope.id))].slice(0, 6) }));
  }

  // One control for "who is this chat about": firm, a client, or a workflow.
  setContext(item) {
    // Picked from an inline @mention: the "@ash" in the text has done its job, the rest stays.
    const draft = this.state.ctxInline ? this.state.draft.replace(/(^|\s)@[^\s@]*$/, '$1') : this.state.draft;
    this.setState({ ctxOpen: false, ctxQuery: '', ctxInline: false, ctxIndex: 0, draft });
    const cur = this.state.scope;
    if (!item) return this.clearScope();
    if (item.type === 'client') return this.pickClient(item.id, { from: cur && cur.type === 'workflow' ? cur : null });
    return this.pickWorkflow(item.id);
  }

  pickClient(id, { from = null, thread = null } = {}) {
    this.remember({ type: 'client', id });
    if (this.listEl && !(this.state.scope && this.state.scope.type === 'client')) this.scrollPos.clients = this.listEl.scrollTop;
    this.setState((s) => ({
      scope: { type: 'client', id }, from, seenTip: true, showTip: !s.seenTip && !from && !thread, menu: false, panelLoading: id, panelEntering: id,
      activeThread: thread ? { ...s.activeThread, [id]: thread } : s.activeThread,
    }));
    clearTimeout(this.loadT); clearTimeout(this.enterT);
    this.enterT = setTimeout(() => this.setState({ panelEntering: null }), 320);
    this.loadT = setTimeout(() => this.setState({ panelLoading: null }), 700);
  }

  // Single-client workflows live inside their client; cross-client ones stay at the firm level.
  pickWorkflow(id) {
    const w = ALL_WF.find((x) => x.id === id);
    if (w.clientId) {
      if (this.state.scope && this.state.scope.type === 'client' && this.state.scope.id === w.clientId) this.openClientThread(w.clientId, wfKey(id));
      else this.pickClient(w.clientId, { thread: wfKey(id) });
      return;
    }
    this.remember({ type: 'workflow', id });
    this.setState({ scope: { type: 'workflow', id }, from: null, menu: false, showTip: false });
  }

  // Every way in (composer menu, "/", plain language, a client's ⋮) lands here and becomes a chat thread.
  startWorkflow(tid, clientId, clients, targetIds = null, context = '') {
    const t = TEMPLATES.find((x) => x.id === tid);
    // Run for exactly one client: that's a single-client run, whatever the playbook.
    if (!clientId && targetIds && targetIds.length === 1 && t.steps) { clientId = targetIds[0]; targetIds = null; }
    const extra = context ? ` — ${context}` : '';
    this.setState({ wfTray: null, wfPick: null, wfTargets: [], wfFull: false, wfChoosing: false, wfFile: null });
    const n = (this.wfSeq = (this.wfSeq || 0) + 1);
    const id = `new${n}`;
    const c = clientId && clients.find((x) => x.id === clientId);
    // Already running for this client? Don't start a second one; open it and say so.
    const dupe = c && WORKFLOWS.single.find((x) => x.clientId === c.id && x.tid === tid);
    if (dupe) {
      const dk = wfKey(dupe.id);
      const note = { from: 'assistant', blocks: [{ p: `“${dupe.name}” is already running for ${fullName(c)}, so I’ve opened it rather than starting a second one.` }] };
      this.setState((st) => ({ menu: false, rowMenu: null, draft: '', threads: { ...st.threads, [dk]: (st.threads[dk] || []).concat([note]) } }));
      const cur0 = this.state.scope;
      if (cur0 && cur0.type === 'client' && cur0.id === c.id) this.openClientThread(c.id, dk);
      else this.pickClient(c.id, { thread: dk });
      return;
    }
    let w;
    if (c && t.steps) {
      w = { id, tid, name: t.name, ask: `${t.name} for ${fullName(c)}${extra}`, clientId: c.id, clientName: fullName(c), done: 0, total: t.steps.length,
        items: t.steps.map((label, i) => ({ label, state: 'open', note: i === 0 ? 'Working on it now' : '' })) };
      WORKFLOWS.single.unshift(w);
    } else {
      const targets = targetIds ? clients.filter((x) => targetIds.includes(x.id)) : t.targets ? t.targets(clients) : [];
      w = { id, name: t.name, ask: `${t.name}${extra}`, clients: targets.length, done: 0, total: targets.length,
        items: targets.map((x, i) => ({ clientId: x.id, label: fullName(x), state: 'open', note: t.note || (i === 0 ? 'Working on it now' : 'Queued') })) };
      WORKFLOWS.across.unshift(w);
    }
    ALL_WF.unshift(w);
    const key = wfKey(id);
    this.setState((st) => ({
      threads: { ...st.threads, [key]: [{ from: 'user', text: w.ask }] },
      typing: c ? `Setting up ${t.name.toLowerCase()}` : `Building the list of ${w.total} clients`,
      menu: false, rowMenu: null, draft: '',
    }));
    const cur = this.state.scope;
    if (c && cur && cur.type === 'client' && cur.id === c.id) this.openClientThread(c.id, key);
    else if (c) this.pickClient(c.id, { thread: key, from: cur && cur.type === 'workflow' ? cur : null });
    else this.setState({ scope: { type: 'workflow', id }, from: null, showTip: false });
    setTimeout(() => this.setState((st) => ({
      typing: false,
      threads: { ...st.threads, [key]: st.threads[key].concat([{ from: 'assistant', blocks: [
        { p: c ? `Started. I’ll work through this for ${fullName(c)} and check in when I need you.` : `Started for ${w.total} clients. I’ll keep this list current as replies come in.` },
        { progress: id },
      ] }]) },
    })), 1100);
  }

  answerInstead(t) {
    const key = this.threadKey();
    this.setState((st) => ({ threads: { ...st.threads, [key]: (st.threads[key] || []).concat([{ from: 'assistant', blocks: [{ p: t.answer }] }]) } }));
  }

  setScenario(id) {
    this.setState({ scenario: id, scope: null, from: null, showTip: false, query: null, protoOpen: false, filter: null, filterOpen: false });
  }

  // ---------- The workflow tray ----------
  openWf({ full = false } = {}) {
    this.setState({ wfTray: 'browse', wfFull: full, wfPick: null, wfChoosing: false, wfFile: null, wfQuery: '', wfPreview: null, wfExclude: [], menu: false, ctxOpen: false, showTip: false });
    if (this.inputEl) this.inputEl.focus();
  }

  closeWf() {
    this.setState({ wfTray: null, wfFull: false, wfPick: null, wfTargets: [], wfChoosing: false, wfFile: null, wfExclude: [] });
  }

  // Picking a workflow doesn't run it: it sits in the tray with who it's for, ready to send.
  stageWorkflow(tid, clients) {
    const t = TEMPLATES.find((x) => x.id === tid);
    const sc = this.state.scope && this.state.scope.type === 'client';
    const targets = !sc && t.scope === 'across' && t.targets ? t.targets(clients).map((c) => c.id) : [];
    this.setState({ wfTray: 'browse', wfPick: tid, wfTargets: targets, wfFull: false, wfChoosing: false, wfExclude: [], draft: '' });
    if (this.inputEl) this.inputEl.focus();
  }

  startBuild(seed = '', file = null) {
    this.setState({ wfTray: 'build', wfFull: false, wfPick: null, wfChoosing: false, wfFile: file, draft: seed });
    if (this.inputEl) this.inputEl.focus();
  }

  runPicked(clients, context) {
    const st = this.state;
    const sc = st.scope && st.scope.type === 'client' ? st.scope.id : null;
    const targets = sc ? [sc] : st.wfTargets;
    if (!targets.length) return this.askWhichClient(st.wfPick);
    this.startWorkflow(st.wfPick, null, clients, targets, context);
  }

  // Building is a conversation: Instead drafts, the pro edits the draft in chat and saves it.
  buildDraft(text) {
    const file = this.state.wfFile;
    const id = `d${(this.draftSeq = (this.draftSeq || 0) + 1)}`;
    const d = draftFrom(text, file);
    const ask = file ? `Turn “${file}” into a workflow${text ? ` — ${text}` : ''}` : text;
    this.setState((st) => ({ drafts: { ...st.drafts, [id]: { ...d, source: file, saved: null } } }));
    this.closeWf();
    this.pushTurn(ask, file ? `Reading ${file}` : 'Drafting the workflow', { from: 'assistant', blocks: [
      { p: file ? `I read ${file} and turned it into ${d.steps.length} steps. Change anything that’s off, then save it so you can run it for any client.` : `Here’s a first draft. Change anything that’s off, then save it so you can run it for any client.` },
      { draft: id },
    ] });
  }

  saveDraft(id, where) {
    const d = this.state.drafts[id];
    const tid = `m-${id}`;
    TEMPLATES.push({ id: tid, name: d.name, cat: 'Built by you', desc: d.source ? `Drafted from ${d.source}.` : 'Built in chat.', output: 'A checklist Instead works through and keeps current', steps: d.steps.filter(Boolean), icon: 'workflow', by: where, scope: 'one' });
    this.setState((st) => ({ drafts: { ...st.drafts, [id]: { ...d, saved: where, tid } } }));
  }

  editDraft(id, patch) {
    this.setState((st) => ({ drafts: { ...st.drafts, [id]: { ...st.drafts[id], ...patch } } }));
  }

  askWhichClient(tid) {
    const t = TEMPLATES.find((x) => x.id === tid);
    this.closeWf();
    this.setState((st) => ({
      menu: false, scope: null, from: null,
      threads: { ...st.threads, [st.gk]: (st.threads[st.gk] || []).concat([
        { from: 'user', text: t.name },
        { from: 'assistant', blocks: [{ p: 'Which client is it for?' }, { choose: { tid } }] },
      ]) },
    }));
  }

  // Firm-level threads: 'general', 'general#2', ... New thread opens an empty one; old ones stay in Threads.
  newFirmThread() {
    const used = (this.state.threads[this.state.gk] || []).length;
    const n = (this.firmSeq = (this.firmSeq || 1) + 1);
    this.setState({ gk: used ? `general#${n}` : this.state.gk, draft: '' });
    this.clearScope();
    this.closeWf();
  }

  openFirmThread(key) {
    this.setState({ gk: key });
    this.clearScope();
  }

  clearScope() {
    this.setState({ scope: null, from: null, showTip: false, menu: false });
  }

  replyFor(scope, clients, isFirst, key, text = '') {
    const w = wfFromKey(key);
    const t = !w && templateFor(text);
    const here = scope && scope.type === 'client' ? clients.find((x) => x.id === scope.id) : null;
    // Already running? Say so first instead of offering to start a second one.
    const running = t && (here ? WORKFLOWS.single.find((x) => x.clientId === here.id && x.tid === t.id && x.done < x.total)
      : t.scope === 'across' && activeWorkflows(clients).find((x) => !x.clientId && x.tid === t.id));
    if (running) return {
      status: 'Reading your request',
      msg: { from: 'assistant', blocks: [
        { p: `“${running.name}” is already running${here ? ` for ${fullName(here)}` : ` for ${running.clients} clients`}: ${running.done} of ${running.total} done.` },
        { offer: { tid: t.id, clientId: here && here.id, existing: running.id } },
      ] },
    };
    if (t && (here || t.scope === 'across')) return {
      status: 'Reading your request',
      msg: { from: 'assistant', blocks: [
        { p: here ? `I can run this as a workflow for ${fullName(here)}, so each step is tracked and you’ll see it in their panel.` : 'I can run this as a workflow across your clients, so every reply is tracked in one place.' },
        { offer: { tid: t.id, clientId: here && here.id } },
      ] },
    };
    if (t) return {
      status: 'Reading your request',
      msg: { from: 'assistant', blocks: [
        { p: `Happy to ${t.name.toLowerCase()}. Which client is it for?` },
        { choose: { tid: t.id } },
      ] },
    };
    const c = !w && scope && scope.type === 'client' ? clients.find((x) => x.id === scope.id) : null;
    if (c && isFirst) return { status: `Opening ${fullName(c)}'s file`, msg: greeting(fullName(c)) };
    if (c) return {
      status: `Reading ${fullName(c)}'s documents`,
      msg: { from: 'assistant', blocks: [
        { p: `On it. I'll work from ${fullName(c)}'s uploaded documents and last year’s return.` },
        { p: 'I’ll flag anything missing before I make changes.' },
      ] },
    };
    if (w) return {
      status: 'Updating workflow',
      msg: { from: 'assistant', blocks: [{ p: `Added to “${w.name}.” ${w.done} of ${w.total} done so far — I’ll update the checklist as I go.` }] },
    };
    return {
      status: 'Looking it up',
      msg: { from: 'assistant', blocks: [
        { p: 'Here’s the answer, with sources you can check. It’s a general answer, not about one client.' },
        { p: 'If it’s about a specific client, type @ or pick them on the left and I’ll answer from their file.' },
      ] },
    };
  }

  send(clients) {
    const st0 = this.state;
    const text = st0.draft.trim();
    if (st0.wfPick) return this.runPicked(clients, text);
    if (st0.wfTray === 'build') return (text || st0.wfFile) && this.buildDraft(text);
    if (!text) return;
    // With the tray open, typing searches the library; Enter takes the top match or builds a new one.
    if (st0.wfTray === 'browse') {
      const q = text.toLowerCase();
      const hit = library().find((t) => (st0.wfTab === 'all' || t.by === st0.wfTab) && `${t.name} ${t.cat}`.toLowerCase().includes(q));
      return hit ? this.stageWorkflow(hit.id, clients) : this.startBuild(text);
    }
    const s = this.state.scope;
    const key = this.threadKey(s);
    const isFirst = !(this.state.threads[key] || []).length;
    const { status, msg } = this.replyFor(s, clients, isFirst, key, text);
    this.pushTurn(text, status, msg);
  }

  // One turn in the current thread: the pro's message now, Instead's reply a beat later.
  pushTurn(text, status, msg) {
    const s = this.state.scope;
    const key = this.threadKey(s);
    const isFirst = !(this.state.threads[key] || []).length;
    this.setState((st) => {
      const next = { threads: { ...st.threads, [key]: (st.threads[key] || []).concat([{ from: 'user', text }]) }, draft: '', typing: status, menu: false, showTip: false };
      if (s && s.type === 'client' && isFirst && !wfFromKey(key)) {
        const list = st.clientThreads[s.id] || [];
        next.clientThreads = { ...st.clientThreads, [s.id]: [key, ...list.filter((k) => k !== key)] };
        next.activeThread = { ...st.activeThread, [s.id]: key };
        next.titles = { ...st.titles, [key]: text.length > 38 ? text.slice(0, 36).trimEnd() + '…' : text };
      }
      return next;
    });
    setTimeout(() => {
      this.setState((st) => ({
        typing: false,
        threads: { ...st.threads, [key]: (st.threads[key] || []).concat([msg]) },
      }));
    }, 1100);
  }

  // The at-a-glance answer lives in chat: one tap asks Instead for today's briefing.
  // The briefing: one list of the clients who need you, most urgent first; workflows as one sentence.
  brief({ attention, workflows }) {
    const text = attention.length ? 'Who needs me today?' : 'What’s moving today?';
    this.setState((st) => ({ threads: { ...st.threads, [st.gk]: (st.threads[st.gk] || []).concat([{ from: 'user', text }]) }, typing: 'Checking deadlines and open requests', menu: false }));
    setTimeout(() => {
      const n = attention.length;
      const k = workflows.length;
      const wfLine = k ? `${k} workflow${k === 1 ? ' is' : 's are'} also running, in your threads and your clients’ files.` : '';
      const blocks = n === 0
        ? [{ p: `No clients need you today.${k ? ` ${k} workflow${k === 1 ? ' is' : 's are'} running.` : ''}` }]
        : n <= 5
          ? [{ p: `${n} clients need you today, most urgent first:` }, { brief: attention.map((c) => c.id) }, ...(wfLine ? [{ p: wfLine }] : [])]
          : [
            { p: `${n} clients need you today. The three most urgent:` },
            { brief: attention.slice(0, 3).map((c) => c.id) },
            { p: `The other ${n - 3}, by what’s blocking them:` },
            { groups: Object.keys(CATS).map((cat) => ({ cat, ids: attention.slice(3).filter((c) => c.cat === cat).map((c) => c.id) })).filter((g) => g.ids.length) },
            ...(wfLine ? [{ p: wfLine }] : []),
          ];
      this.setState((st) => ({
        typing: false,
        threads: { ...st.threads, [st.gk]: (st.threads[st.gk] || []).concat([{ from: 'assistant', blocks }]) },
      }));
    }, 1100);
  }

  // Everything in progress, on demand: the overview a separate tab used to hold, one click from home.
  briefRunning(clients) {
    const runs = activeWorkflows(clients);
    this.setState((st) => ({ scope: null, from: null, threads: { ...st.threads, [st.gk]: (st.threads[st.gk] || []).concat([{ from: 'user', text: 'What’s running?' }]) }, typing: 'Checking workflows', menu: false }));
    setTimeout(() => {
      const across = runs.filter((w) => !w.clientId), one = runs.filter((w) => w.clientId);
      const blocks = [{ p: `${runs.length} workflow${runs.length === 1 ? ' is' : 's are'} running.` }];
      if (across.length) blocks.push({ p: 'Across clients (in your threads):' }, { runs: across.map((w) => w.id) });
      if (one.length) blocks.push({ p: 'For one client (in their files):' }, { runs: one.map((w) => w.id) });
      this.setState((st) => ({ typing: false, threads: { ...st.threads, [st.gk]: st.threads[st.gk].concat([{ from: 'assistant', blocks }]) } }));
    }, 900);
  }

  renderRuns(ids) {
    return html`<div class="brief">
      ${ids.map((id) => ALL_WF.find((w) => w.id === id)).filter(Boolean).map((w) => {
        const waiting = w.items.some((it) => it.state === 'attn');
        return html`<button class="brief-row pg-row" onClick=${() => this.pickWorkflow(w.id)}>
          <span class="pg-icon">${waiting ? html`<span class="dot"></span>` : html`<${Icon} name="workflow" />`}</span>
          <span class="brief-text"><span class="pg-label">${w.name}</span><span class="brief-note">${w.clientName || `${w.clients} clients`} · ${w.done} of ${w.total} done${waiting ? ' · needs you' : ''}</span></span>
          <span class="brief-open">Open<${Icon} name="moveRight" size=${12} /></span>
        </button>`;
      })}
    </div>`;
  }

  // A client in chat looks like a client in the rail: entity icon, name, form badge. What's
  // happening with them sits on the right, amber only when it needs you.
  clientLine({ c, label, state = 'open', note, action = 'Open', onClick }) {
    const status = note && html`<span class=${'cl-status' + (state === 'attn' ? ' attn' : state === 'done' ? ' done' : '')}>
      ${state === 'attn' ? html`<span class="dot" aria-hidden="true"></span>` : state === 'done' ? html`<${Icon} name="check" size=${12} />` : null}${note}</span>`;
    const body = html`
      <span class="pg-icon cl-icon"><${Icon} name=${c ? iconFor(c.entity) : 'userRound'} /></span>
      <span class="cl-who"><span class="pg-label">${c ? fullName(c) : label}</span>${c && html`<span class="pill-xxs lime">${c.entity}</span>`}</span>
      ${status}
      ${onClick && html`<span class="brief-open">${action}<${Icon} name="moveRight" size=${12} /></span>`}`;
    return onClick ? html`<button class="brief-row cl-row" onClick=${onClick}>${body}</button>` : html`<div class="brief-row cl-row">${body}</div>`;
  }

  renderProgress(id, clients) {
    const w = ALL_WF.find((x) => x.id === id);
    const here = this.state.scope;
    const icon = (state) => state === 'done' ? html`<span class="pg-icon done"><${Icon} name="circleCheck" /></span>`
      : state === 'attn' ? html`<span class="pg-icon"><span class="dot"></span></span>`
      : html`<span class="pg-icon"><${Icon} name="circle" /></span>`;
    const open = w.items.filter((it) => it.state !== 'done');
    const done = w.items.filter((it) => it.state === 'done');
    const row = (it) => {
      const c = it.clientId && clients.find((x) => x.id === it.clientId);
      if (it.clientId) return this.clientLine({ c, label: it.label, state: it.state, note: it.note, onClick: c && (() => this.pickClient(c.id, { from: here })) });
      const body = html`${icon(it.state)}
        <span class="brief-text"><span class=${'pg-label' + (it.state === 'done' ? ' muted' : '')}>${it.label}</span>${it.note && html`<span class="brief-note">${it.note}</span>`}</span>
        ${c && html`<span class="brief-open">Open<${Icon} name="moveRight" size=${12} /></span>`}`;
      return c
        ? html`<button class="brief-row pg-row" onClick=${() => this.pickClient(c.id, { from: here })}>${body}</button>`
        : html`<div class="brief-row pg-row">${body}</div>`;
    };
    return html`<div class="brief">
      ${open.map(row)}
      ${w.doneSummary ? html`<div class="brief-row pg-row cl-summary">${icon('done')}<span class="brief-text"><span class="pg-label muted">${w.doneSummary}</span></span></div>` : done.map(row)}
    </div>`;
  }

  renderOffer({ tid, clientId, existing }, clients) {
    const t = TEMPLATES.find((x) => x.id === tid);
    const w = existing && ALL_WF.find((x) => x.id === existing);
    if (w) return html`<div class="offer">
      <button class="offer-go" onClick=${() => this.pickWorkflow(w.id)}><${Icon} name="workflow" size=${12} />Open “${w.name}”</button>
      ${!clientId && clients.some((c) => !coveredBy(w).has(c.id)) && html`<button class="offer-alt"
        onClick=${() => { this.stageWorkflow(tid, clients); this.setState({ wfTargets: [], wfChoosing: true, wfClientQ: '', wfExclude: [...coveredBy(w)] }); }}>Start one for other clients</button>`}
      <button class="offer-alt" onClick=${() => this.answerInstead(t)}>Just answer in chat</button>
    </div>`;
    return html`<div class="offer">
      <button class="offer-go" onClick=${() => this.startWorkflow(tid, clientId, clients)}><${Icon} name="workflow" size=${12} />Start “${t.name}”</button>
      <button class="offer-alt" onClick=${() => this.answerInstead(t)}>Just answer in chat</button>
    </div>`;
  }

  renderChoose({ tid }, clients) {
    const picks = clients.filter((c) => c.status === 'needs_attention').sort((a, b) => a.urgency - b.urgency).concat(clients.filter((c) => c.status !== 'needs_attention')).slice(0, 4);
    return html`<div class="brief">
      ${picks.map((c) => {
        const running = WORKFLOWS.single.find((x) => x.clientId === c.id && x.tid === tid && x.done < x.total);
        return running
          ? this.clientLine({ c, state: 'done', note: 'Already running', onClick: () => this.pickWorkflow(running.id) })
          : this.clientLine({ c, state: c.status === 'needs_attention' ? 'attn' : 'open', note: c.note, action: 'Start', onClick: () => this.startWorkflow(tid, c.id, clients) });
      })}
    </div>`;
  }

  renderGroups(groups, clients) {
    return html`<div class="brief">
      ${groups.map(({ cat, ids }) => {
        const names = ids.map((id) => fullName(clients.find((c) => c.id === id)));
        const who = names.length <= 2 ? names.join(' and ') : `${names.slice(0, 2).join(', ')} and ${names.length - 2} more`;
        return html`<div class="brief-row pg-row">
          <span class="pg-icon"><span class="count">${ids.length}</span></span>
          <span class="brief-text"><span class="pg-label">${CATS[cat].label}</span><span class="brief-note">${who}</span></span>
          <button class="offer-alt sm" onClick=${() => this.startWorkflow(CATS[cat].tid, null, clients, ids)}>${CATS[cat].action}</button>
        </div>`;
      })}
    </div>`;
  }

  // Who a workflow runs for: the context picker's popover, rows and search, but you can pick
  // several, and groups (Needs you, Individuals…) select all their clients at once. Each click
  // applies at once (the pill shows the count), so there's no Done: it closes like any popover.
  renderRunPicker(allClients) {
    const st = this.state;
    const clients = allClients.filter((c) => !st.wfExclude.includes(c.id));
    const excluded = allClients.length - clients.length;
    const sel = new Set(st.wfTargets);
    const toggle = (ids) => { const all = ids.every((id) => sel.has(id)); this.setState({ wfTargets: all ? st.wfTargets.filter((id) => !ids.includes(id)) : [...new Set([...st.wfTargets, ...ids])] }); };
    const PLURAL = { '1040': 'Individuals', '1041': 'Trusts & estates', '1065': 'Partnerships', '1120': 'C Corps', '1120S': 'S Corps' };
    const groups = [{ name: 'Needs you', icon: null, cs: clients.filter((c) => c.status === 'needs_attention') }]
      .concat(Object.keys(ENTITY).map((e) => ({ name: PLURAL[e], icon: iconFor(e), cs: clients.filter((c) => c.entity === e) }))).filter((g) => g.cs.length);
    const q = st.wfClientQ.trim().toLowerCase();
    const shown = clients.filter((c) => !q || fullName(c).toLowerCase().includes(q)).sort((a, b) => railName(a).localeCompare(railName(b)));
    // Same mark as the context picker: a check on what's chosen, nothing on the rest.
    const check = (on) => on && html`<span class="proto-check"><${Icon} name="check" size=${12} /></span>`;
    return html`
      <div class="popover menu ctx-picker run-picker" role="listbox" aria-multiselectable="true" aria-label="Run for" onClick=${(e) => e.stopPropagation()}>
        <label class="search-field ctx-search"><${Icon} name="search" size=${12} />
          <input ref=${(el) => el && !el.dataset.f && (el.dataset.f = '1', el.focus())} placeholder=${`Search ${clients.length} clients`}
            value=${st.wfClientQ} onInput=${(e) => this.setState({ wfClientQ: e.target.value })} />
        </label>
        ${excluded > 0 && html`<div class="pick-note">${excluded} already in the running workflow, not shown</div>`}
        ${!q && html`<span class="label">Groups</span>
          ${groups.map((g) => {
            const ids = g.cs.map((c) => c.id);
            const on = ids.every((id) => sel.has(id));
            return html`<button class="menu-item ctx-item" role="option" aria-selected=${on} onClick=${() => toggle(ids)}>
              <span class="menu-icon">${g.icon ? html`<${Icon} name=${g.icon} />` : html`<span class="dot"></span>`}</span>
              <span class="row-text"><span class="row-name">${g.name}</span><span class="row-note">${g.cs.length} client${g.cs.length === 1 ? '' : 's'}</span></span>
              ${check(on)}
            </button>`;
          })}
          <span class="label">Clients</span>`}
        ${shown.map((c) => html`<button class="menu-item ctx-item" role="option" aria-selected=${sel.has(c.id)} onClick=${() => toggle([c.id])}>
            <span class="menu-icon"><${Icon} name=${iconFor(c.entity)} /></span>
            <span class="row-text"><span class="row-name">${fullName(c)}</span><span class="row-note">${c.status === 'needs_attention' ? c.flag : ENTITY[c.entity]}</span></span>
            ${c.status === 'needs_attention' && html`<span class="dot"></span>`}
            ${check(sel.has(c.id))}
          </button>`)}
        ${q && !shown.length && html`<div class="no-match">No client matches “${st.wfClientQ}”</div>`}
      </div>`;
  }

  renderContextPicker(clients, attention) {
    const st = this.state;
    const cur = st.scope;
    const same = (a, b) => a && b && a.type === b.type && a.id === b.id;
    const clientItem = (c) => ({ type: 'client', id: c.id, icon: iconFor(c.entity), name: fullName(c), sub: c.status === 'needs_attention' ? c.flag : ENTITY[c.entity], attn: c.status === 'needs_attention' });
    const wfItem = (w) => ({ type: 'workflow', id: w.id, icon: 'workflow', name: w.name, sub: w.clientName || `${w.clients} clients` });
    const toItem = (r) => {
      if (r.type === 'client') { const c = clients.find((x) => x.id === r.id); return c && clientItem(c); }
      const w = ALL_WF.find((x) => x.id === r.id); return w && wfItem(w);
    };
    const q = st.ctxQuery.trim().toLowerCase();
    let sections;
    if (q) {
      sections = [
        ['Clients', clients.filter((c) => fullName(c).toLowerCase().includes(q)).slice(0, 6).map(clientItem)],
        ['Workflows', ALL_WF.filter((w) => w.name.toLowerCase().includes(q)).slice(0, 3).map(wfItem)],
      ];
    } else {
      const recent = [st.from, ...st.recent].filter(Boolean).filter((r, i, a) => !same(r, cur) && a.findIndex((x) => same(x, r)) === i).slice(0, 3).map(toItem).filter(Boolean);
      const seen = recent.map((r) => r.type + r.id);
      const needs = attention.filter((c) => !same({ type: 'client', id: c.id }, cur) && !seen.includes('client' + c.id)).slice(0, 3).map(clientItem);
      sections = [['Recent', recent], ['Needs you', needs]];
    }
    const check = html`<span class="proto-check"><${Icon} name="check" size=${12} /></span>`;
    const all = { type: 'all', name: 'All clients' };
    this.ctxFlat = (q ? [] : [all]).concat(...sections.map(([, items]) => items));
    const active = (it) => st.ctxInline && this.ctxFlat[st.ctxIndex] === it;
    const row = (it) => html`
      <button class=${'menu-item ctx-item' + (active(it) ? ' active' : '')} role="option" aria-selected=${!!same(it, cur)} onClick=${() => this.setContext(it)}>
        <span class="menu-icon"><${Icon} name=${it.icon} /></span>
        <span class="row-text"><span class="row-name">${it.name}</span><span class="row-note">${it.sub}</span></span>
        ${it.attn && html`<span class="dot"></span>`}
        ${same(it, cur) && check}
      </button>`;
    return html`
      <div class=${'popover menu ctx-picker' + (st.ctxInline ? ' inline' : '')} role="listbox" aria-label="Chat context" onClick=${(e) => e.stopPropagation()}>
        ${!st.ctxInline && html`<label class="search-field ctx-search"><${Icon} name="search" size=${12} />
          <input ref=${(el) => el && !el.dataset.f && (el.dataset.f = '1', el.focus())} placeholder=${`Search ${clients.length} clients and workflows`}
            value=${st.ctxQuery} onInput=${(e) => this.setState({ ctxQuery: e.target.value })} />
        </label>`}
        ${!q && html`
          <button class=${'menu-item ctx-item' + (active(all) ? ' active' : '')} role="option" aria-selected=${!cur} onClick=${() => this.setContext(null)}>
            <span class="menu-icon"><${Icon} name="users" /></span>
            <span class="row-text"><span class="row-name">All clients</span><span class="row-note">Your whole firm</span></span>
            ${!cur && check}
          </button>`}
        ${sections.filter(([, items]) => items.length).map(([title, items]) => html`<span class="label">${title}</span>${items.map(row)}`)}
        ${q && sections.every(([, items]) => !items.length) && html`<div class="no-match">Nothing matches “${st.ctxQuery}”</div>`}
        <div class="menu-foot">${st.ctxInline
          ? html`<kbd>↑</kbd> <kbd>↓</kbd> to move, <kbd>Enter</kbd> to pick, <kbd>Esc</kbd> to keep typing`
          : html`Tip: type <kbd>@</kbd> in chat to switch who this is about`}</div>
      </div>`;
  }

  // Who needs you, in Instead's own composer tray: a section header (label + link, like the rail's),
  // one-line pill rows, then the composer — all on one edge, one width.
  renderToday({ attention, workflows }, clients, composerEl) {
    const n = attention.length, k = workflows.length;
    return html`<div class="today-tray">
      <section class="today" aria-label="Clients who need you today">
        <div class="section-head today-head">
          <span class="label">Needs you</span>
          ${k > 0 && html`<button class="today-link" onClick=${() => this.briefRunning(clients)}>${k} workflow${k === 1 ? '' : 's'} running<${Icon} name="moveRight" size=${12} /></button>`}
        </div>
        <div class="today-rows">
          ${attention.slice(0, 3).map((c) => html`
            <button class="today-row" onClick=${() => this.pickClient(c.id)}>
              <span class="dot" aria-hidden="true"></span>
              <span class="today-name">${fullName(c)}</span>
              <span class="today-note">${c.note}</span>
              <span class="today-open">Open<${Icon} name="moveRight" size=${12} /></span>
            </button>`)}
          ${n > 3 && html`<button class="more-row today-more" onClick=${() => this.brief({ attention, workflows })}>Show ${n - 3} more</button>`}
        </div>
      </section>
      ${composerEl}
    </div>`;
  }

  // Workflows open in the same sand tray as "Needs you": pick, say who it's for, send. The expand
  // button grows the tray into the full library without leaving the chat.
  renderWfTray(clients, sc, composerEl) {
    const st = this.state;
    const I = (name, label, onClick) => html`<button class="ic" aria-label=${label} onClick=${onClick}><${Icon} name=${name} /></button>`;
    const close = I('x', 'Close workflows', () => this.closeWf());
    const upload = (label) => html`<label class="wf-action" role="button" tabindex="0">
        <input type="file" hidden accept=".pdf,.doc,.docx,.txt,.md,.csv,.xlsx" onChange=${(e) => { const f = e.target.files[0]; e.target.value = ''; if (f) this.startBuild('', f.name); }} />
        <${Icon} name="upload" size=${12} />${label}</label>`;
    const actions = html`<div class="wf-foot">
        <button class="wf-action" onClick=${() => this.startBuild()}><${Icon} name="sparkles" size=${12} />Build a new workflow</button>
        ${upload('Upload a workflow')}
      </div>`;
    const tabs = html`<div class="wf-tabs" role="tablist">${LIB_TABS.map(([id, label]) => html`
        <button role="tab" class="wf-tab" aria-selected=${st.wfTab === id} onClick=${() => this.setState({ wfTab: id, wfPreview: null })}>${label}</button>`)}</div>`;
    const q = (st.wfFull ? st.wfQuery : st.draft).trim().toLowerCase();
    const list = library().filter((t) => (st.wfTab === 'all' || t.by === st.wfTab) && (!q || `${t.name} ${t.cat}`.toLowerCase().includes(q)));
    const empty = st.wfTab === 'mine' && !q
      ? html`<div class="wf-empty">Nothing here yet. Describe the work you repeat and Instead drafts it, or upload the checklist you already use.</div>`
      : q && html`<button class="today-row wf-row" onClick=${() => this.startBuild(st.wfFull ? st.wfQuery : st.draft)}>
          <span class="wf-row-icon"><${Icon} name="sparkles" size=${14} /></span>
          <span class="today-name">Build “${(st.wfFull ? st.wfQuery : st.draft).trim()}” as a new workflow</span>
        </button>`;
    const wrap = (cls, body) => html`<div class=${'today-tray wf-tray' + cls}><section class="today wf" aria-label="Workflows">${body}</section>${composerEl}</div>`;

    // Expanded: the whole library with a real preview, still above the same composer.
    if (st.wfFull) {
      const prev = list.find((t) => t.id === st.wfPreview) || list[0];
      const cats = [...new Set(list.map((t) => t.cat))];
      return wrap(' full', html`
        <div class="section-head today-head wf-head">
          <span class="label">Workflow library</span>
          ${tabs}
          <label class="search-field wf-search"><${Icon} name="search" size=${12} />
            <input placeholder="Search" value=${st.wfQuery} onInput=${(e) => this.setState({ wfQuery: e.target.value, wfPreview: null })} />
          </label>
          <div class="head-icons">${I('minimize2', 'Collapse library', () => this.setState({ wfFull: false }))}${close}</div>
        </div>
        <div class="wf-lib">
          <div class="wf-lib-list">
            ${cats.map((cat) => html`<div class="wf-lib-group">
              <div class="group-label">${cat}</div>
              ${list.filter((t) => t.cat === cat).map((t) => html`
                <button class=${'wf-lib-row' + (prev && prev.id === t.id ? ' on' : '')} onClick=${() => this.setState({ wfPreview: t.id })}>
                  <span class="wf-row-icon"><${Icon} name=${t.icon || 'workflow'} size=${14} /></span>
                  <span class="row-name">${t.name}</span>
                </button>`)}
            </div>`)}
            ${!list.length && empty}
          </div>
          ${prev ? html`<article class="wf-preview">
              <div class="wf-preview-top">
                <span class="label">${prev.cat}</span>
                <h3 class="serif wf-preview-title">${prev.name}</h3>
                <p class="wf-preview-desc">${prev.desc}</p>
              </div>
              <div class="wf-preview-block"><span class="label">You’ll get</span><p class="wf-preview-desc">${prev.output}</p></div>
              ${prev.steps && html`<div class="wf-preview-block"><span class="label">Steps</span>
                <ol class="wf-steps">${prev.steps.map((s, i) => html`<li class="wf-step"><span class="step-n">${i + 1}</span><span>${s}</span></li>`)}</ol></div>`}
              <div class="wf-preview-foot">
                <span class="wf-by">${BY_LINE[prev.by]}</span>
                <button class="offer-go" onClick=${() => this.stageWorkflow(prev.id, clients)}><${Icon} name="workflow" size=${12} />Use this workflow</button>
              </div>
            </article>`
            : html`<article class="wf-preview wf-preview-empty">${actions}</article>`}
        </div>
        ${actions}`);
    }

    // Staged: the workflow as a chip; who it runs for is the composer pill. Send starts it; nothing runs before that.
    if (st.wfPick) {
      const t = TEMPLATES.find((x) => x.id === st.wfPick);
      return wrap('', html`
        <div class="section-head today-head"><span class="label">Run a workflow</span><div class="head-icons">${close}</div></div>
        <div class="wf-stage">
          <span class="wf-chip"><span class="wf-chip-icon"><${Icon} name="workflow" size=${12} /></span>${t.name}
            <button class="chip-x" aria-label="Choose a different workflow" onClick=${() => this.setState({ wfPick: null, wfTargets: [] })}><${Icon} name="x" size=${12} stroke=${2} /></button></span>
        </div>
        <p class="wf-note">${t.desc} You’ll get: ${(t.output || '').replace(/^./, (ch) => ch.toLowerCase())}.</p>`);
    }

    // Building: say what you do, or upload what you already use. Instead drafts; you review.
    if (st.wfTray === 'build') {
      return wrap('', html`
        <div class="section-head today-head"><span class="label">New workflow</span><div class="head-icons">${close}</div></div>
        <div class="wf-stage">
          <span class="wf-chip"><span class="wf-chip-icon"><${Icon} name="sparkles" size=${12} /></span>New workflow</span>
          ${st.wfFile && html`<span class="wf-chip"><${Icon} name="fileText" size=${12} />${st.wfFile}
            <button class="chip-x" aria-label="Remove file" onClick=${() => this.setState({ wfFile: null })}><${Icon} name="x" size=${12} stroke=${2} /></button></span>`}
        </div>
        <p class="wf-note">${st.wfFile
          ? `Instead reads ${st.wfFile} and turns it into steps. You review the draft before it’s saved.`
          : 'Explain it the way you’d explain it to a new hire. Instead drafts the steps, and you review them before anything is saved.'}</p>
        ${!st.wfFile && !st.draft && html`<div class="wf-foot">
          ${BUILD_IDEAS.map((idea) => html`<button class="wf-action" onClick=${() => { this.setState({ draft: idea }); if (this.inputEl) this.inputEl.focus(); }}>${idea}</button>`)}
          ${upload('Upload a checklist instead')}
        </div>`}`);
    }

    // Browse: a short list, filtered by what's typed in the composer.
    const shown = list.slice(0, 5);
    return wrap('', html`
      <div class="section-head today-head wf-head">
        <span class="label">Workflows</span>
        ${tabs}
        <div class="head-icons">${I('maximize2', 'Expand the library', () => this.setState({ wfFull: true, wfQuery: st.draft, wfPreview: null }))}${close}</div>
      </div>
      <div class="today-rows">
        ${shown.map((t) => html`
          <button class="today-row wf-row" onClick=${() => this.stageWorkflow(t.id, clients)}>
            <span class="wf-row-icon"><${Icon} name=${t.icon || 'workflow'} size=${14} /></span>
            <span class="today-name">${t.name}</span>
            <span class="today-note">${t.cat}</span>
            <span class="today-open">Use<${Icon} name="moveRight" size=${12} /></span>
          </button>`)}
        ${list.length > shown.length && html`<button class="more-row today-more" onClick=${() => this.setState({ wfFull: true, wfQuery: st.draft, wfPreview: null })}>Show all ${list.length}</button>`}
        ${!list.length && empty}
      </div>
      ${actions}`);
  }

  // A drafted workflow in chat: edit the name and steps in place, then save it to the library.
  renderDraft(id) {
    const d = this.state.drafts[id];
    if (!d) return null;
    const locked = !!d.saved;
    return html`<div class="draft-card">
      <span class="label">${locked ? `Saved to ${d.saved === 'firm' ? 'Firm' : 'My'} workflows` : d.source ? `Draft · from ${d.source}` : 'Draft workflow'}</span>
      <input class="serif draft-name" aria-label="Workflow name" value=${d.name} disabled=${locked} onInput=${(e) => this.editDraft(id, { name: e.target.value })} />
      <ol class="wf-steps">${d.steps.map((s, i) => html`
        <li class="wf-step">
          <span class="step-n">${i + 1}</span>
          <input class="draft-step" aria-label=${`Step ${i + 1}`} value=${s} disabled=${locked}
            onInput=${(e) => this.editDraft(id, { steps: d.steps.map((x, j) => (j === i ? e.target.value : x)) })} />
          ${!locked && html`<button class="chip-x" aria-label=${`Remove step ${i + 1}`} onClick=${() => this.editDraft(id, { steps: d.steps.filter((_, j) => j !== i) })}><${Icon} name="x" size=${12} stroke=${2} /></button>`}
        </li>`)}
      </ol>
      ${!locked && html`<button class="more-row add-step" onClick=${() => this.editDraft(id, { steps: d.steps.concat(['']) })}>+ Add a step</button>`}
      <div class="offer">
        ${locked
          ? html`<button class="offer-go" onClick=${() => this.stageWorkflow(d.tid, [])}><${Icon} name="workflow" size=${12} />Run it now</button>
              <button class="offer-alt" onClick=${() => this.setState({ wfTray: 'browse', wfFull: true, wfTab: d.saved, wfQuery: '', wfPreview: d.tid, wfPick: null })}>View in library</button>`
          : html`<button class="offer-go" onClick=${() => this.saveDraft(id, 'mine')}>Save to My workflows</button>
              <button class="offer-alt" onClick=${() => this.saveDraft(id, 'firm')}>Share with firm</button>`}
      </div>
    </div>`;
  }

  renderBrief(ids, clients) {
    return html`<div class="brief">
      ${ids.map((id) => clients.find((c) => c.id === id)).filter(Boolean).map((c) => this.clientLine({ c, state: 'attn', note: c.note, onClick: () => this.pickClient(c.id) }))}
    </div>`;
  }

  // ---------- render pieces ----------
  renderClientRow(c, { selected, wf }) {
    const attn = c.status === 'needs_attention';
    return html`
      <div class=${'row' + (selected ? ' on' : '')} role="button" tabindex="0" title=${attn ? c.note : undefined}
        onClick=${() => this.pickClient(c.id)} onKeyDown=${(e) => { if (e.key === 'Enter') this.pickClient(c.id); }}
        aria-label=${`${fullName(c)}, ${ENTITY[c.entity] || c.entity}${attn ? `, needs attention: ${c.note}` : ''}`}>
        <span class="avatar">
          <span class="avatar-icon"><${Icon} name=${iconFor(c.entity)} /></span>
          <span class="avatar-check"><${Icon} name="check" size=${12} /></span>
        </span>
        <span class="row-text"><span class="row-name">${railName(c)}</span></span>
        <span class="row-meta">
          ${wf && html`<button class="wf-count" title=${`${wf.name}: ${wf.done} of ${wf.total} done`} aria-label=${`Open ${wf.name}`}
            onClick=${(e) => { e.stopPropagation(); this.pickWorkflow(wf.id); }}><${Icon} name="workflow" size=${12} />${wf.done}/${wf.total}</button>`}
          ${attn && html`<span class="dot" aria-hidden="true"></span>`}
          <span class="pill-xxs lime">${c.entity}</span>
        </span>
        <button class="ic row-more" aria-label="More" aria-expanded=${this.state.rowMenu === c.id}
          onClick=${(e) => { e.stopPropagation(); this.setState((s) => ({ rowMenu: s.rowMenu === c.id ? null : c.id })); }}><${Icon} name="moreVertical" /></button>
        ${this.state.rowMenu === c.id && html`
          <div class="row-menu menu" role="menu" onClick=${(e) => e.stopPropagation()}>
            <button class="menu-item" role="menuitem" onClick=${() => { this.setState({ rowMenu: null }); this.pickClient(c.id); }}>
              <span class="menu-icon"><${Icon} name="messagePlus" /></span><span class="row-text"><span class="row-name">Ask about ${fullName(c)}</span></span>
            </button>
            <button class="menu-item" role="menuitem" onClick=${() => { this.pickClient(c.id); this.setState({ rowMenu: null }); this.openWf(); }}>
              <span class="menu-icon"><${Icon} name="workflow" /></span><span class="row-text"><span class="row-name">Start a workflow…</span></span>
            </button>
          </div>`}
      </div>`;
  }

  renderClientShell(c, activeKey) {
    const st = this.state;
    const list = st.clientThreads[c.id] || [];
    const loading = st.panelLoading === c.id;
    const cWf = WORKFLOWS.single.filter((w) => w.clientId === c.id);
    // Drilled in from a workflow: the way back sits at the top of the panel, not inside a menu.
    const backTo = st.from && st.from.type === 'workflow' && ALL_WF.find((w) => w.id === st.from.id);
    const I = (name, label, onClick, cls = 'ic') => html`<button class=${cls} aria-label=${label} onClick=${onClick}><${Icon} name=${name} /></button>`;
    const year = (y) => html`<div class="doc-year">
      <div class="doc-row" role="button" tabindex="0" aria-expanded=${!!st.openYears[y]} onClick=${() => this.setState((s) => ({ openYears: { ...s.openYears, [y]: !s.openYears[y] } }))}>
        <span class="avatar sm"><span class="avatar-icon"><${Icon} name=${st.openYears[y] ? 'folderOpen' : 'folder'} size=${16} /></span><span class="avatar-check"><${Icon} name="check" size=${12} /></span></span>
        <span class="doc-name">${y}</span>
        <button class="ic row-more" aria-label="More" onClick=${(e) => e.stopPropagation()}><${Icon} name="moreVertical" /></button>
      </div>
      ${st.openYears[y] && html`<div class="doc-children"><button class="upload-row"><${Icon} name="plus" />Upload files</button></div>`}
    </div>`;
    return html`
      <aside class="client-shell">
        <nav class="icon-col" aria-label="Workspace">
          <button class="logo-tile" aria-label="Back to firm" onClick=${() => this.clearScope()}><img src="./img/instead-lime.svg" alt="" /></button>
          <div class="col-bottom">
            <div class="col-actions">${I('userPlus', 'Invite teammate', null, 'col-btn')}${I('settings2', 'Settings', null, 'col-btn')}</div>
            <div class="col-initials serif">LB</div>
          </div>
        </nav>

        <section class=${'client-panel' + (st.panelEntering === c.id ? ' entering' : '')} aria-label=${`${fullName(c)} workspace`}>
          ${backTo && html`<div class="cp-back-row"><button class="cp-back" onClick=${() => this.pickWorkflow(backTo.id)}><${Icon} name="chevronLeft" size=${12} /><span class="cp-back-name">${backTo.name}</span></button></div>`}
          <header class="cp-header">
            <h2 class="serif cp-name">${fullName(c)}</h2>
            <span class="pill-xxs lime">${c.entity}</span>
            <span class="cp-header-end">${I('x', 'Close client', () => this.clearScope(), 'ic lg')}</span>
          </header>

          <div class="cp-actions">
            <button class="nav-pill" onClick=${() => this.newClientThread(c.id)}>
              <span class="nav-pill-icon"><${Icon} name="messagePlus" /></span><span class="nav-pill-label">New client thread</span><span class="nav-pill-go"><${Icon} name="moveRight" /></span>
            </button>
            <div class="cp-action-icons">
              ${I('moreVertical', 'More', null, 'ic lg')}${I('timerReset', 'History', null, 'ic lg')}${I('panelLeftClose', 'Collapse panel', () => this.clearScope(), 'ic lg')}
            </div>
          </div>

          <div class="cp-docs">
            <div class="section-head">
              <span class="label">Tax docs</span>
              <div class="head-icons">${I('search', 'Search documents')}${I('archiveX', 'Archived')}${I('plus', 'Add document')}</div>
            </div>
            <div class="cp-doc-list">
              ${loading
                ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => html`<div class="skeleton" style=${{ animationDelay: `${i * 60}ms` }}></div>`)
                : html`${year(2026)}${year(2025)}`}
            </div>
          </div>

          <div class="cp-threads">
            <div class="section-head">
              <span class="label">Client threads</span>
              <div class="head-icons">${I('plus', 'New client thread', () => this.newClientThread(c.id))}</div>
            </div>
            <div class="threads-list">
              ${loading
                ? [0, 1, 2].map((i) => html`<div class="skeleton" style=${{ animationDelay: `${i * 60}ms` }}></div>`)
                : list.length || cWf.length
                  ? html`${cWf.map((w) => html`<div class=${'thread-row wf' + (wfKey(w.id) === activeKey ? ' on' : '')} role="button" tabindex="0" onClick=${() => this.openClientThread(c.id, wfKey(w.id))}>
                      <${Icon} name="workflow" size=${12} />
                      <span class="t">${w.name}</span>
                      <span class="thread-when">${w.done}/${w.total}</span>
                    </div>`)}${list.map((k) => html`<div class=${'thread-row' + (k === activeKey ? ' on' : '')} role="button" tabindex="0" onClick=${() => this.openClientThread(c.id, k)}>
                      <span class="t">${st.titles[k] || 'New thread'}</span>
                      <span class="thread-when">${k.endsWith('#1') ? '1h' : 'Now'}</span>
                      <span class="thread-actions"><button class="ic sm" aria-label="Bookmark" onClick=${(e) => e.stopPropagation()}><${Icon} name="bookmark" /></button><button class="ic sm" aria-label="More" onClick=${(e) => e.stopPropagation()}><${Icon} name="moreVertical" /></button></span>
                    </div>`)}`
                  : html`<div class="empty-threads"><${Icon} name="messages" />Start your first thread</div>`}
            </div>
          </div>
        </section>
      </aside>`;
  }

  render() {
    const st = this.state;
    const clients = clientsFor(st.scenario);
    const status = homeStatus(clients);
    const { attention } = status;
    // The rail is the book, not the to-do list: every client A–Z, like Instead's. "Who needs you" lives
    // in the home tray; here it's only an amber dot, so it isn't said twice on one screen.
    // Filters use what Instead already knows (status, workflows, entity) — no folders to keep up.
    const inWorkflow = new Set(status.workflows.flatMap((w) => (w.clientId ? [w.clientId] : w.items.filter((it) => it.state !== 'done').map((it) => it.clientId))));
    const FILTERS = [
      ['Status', [['needs', 'Needs you', (c) => c.status === 'needs_attention'], ['workflow', 'In a workflow', (c) => inWorkflow.has(c.id)]]],
      ['Entity', Object.keys(ENTITY).filter((e) => clients.some((c) => c.entity === e)).map((e) => [e, `${ENTITY[e]} (${e})`, (c) => c.entity === e])],
    ].map(([title, opts]) => [title, opts.map(([id, label, test]) => ({ id, label, test, count: clients.filter(test).length })).filter((o) => o.count)]);
    const activeFilter = st.filter && FILTERS.flatMap(([, o]) => o).find((o) => o.id === st.filter);
    const book = clients.filter((c) => !activeFilter || activeFilter.test(c)).sort((a, b) => railName(a).localeCompare(railName(b)));
    const q = (st.query || '').trim().toLowerCase();
    const matches = q ? book.filter((c) => fullName(c).toLowerCase().includes(q) || railName(c).toLowerCase().includes(q)) : null;
    const wfByClient = Object.fromEntries(WORKFLOWS.single.map((w) => [w.clientId, w]));

    const scope = st.scope;
    const sc = scope && scope.type === 'client' ? clients.find((c) => c.id === scope.id) : null;
    const sw = scope && scope.type === 'workflow' ? ALL_WF.find((w) => w.id === scope.id) : null;
    const scoped = !!(sc || sw);
    const key = this.threadKey(sc ? { type: 'client', id: sc.id } : scope);
    const messages = st.threads[key] || [];
    const hasMessages = messages.length > 0;
    // Firm threads with messages, newest first.
    const firmThreads = Object.keys(st.threads).filter((k) => (k === 'general' || k.startsWith('general#')) && (st.threads[k] || []).length)
      .sort((a, b) => (+(b.split('#')[1] || 1)) - (+(a.split('#')[1] || 1)));
    const titleOf = (k) => { const m = st.threads[k].find((x) => x.from === 'user'); return m ? m.text : 'New thread'; };
    // Every running workflow is visible from the home, so the book's work in progress is one glance:
    // cross-client runs are firm threads; single-client runs also live in their client's panel and
    // show here with the client's name. Capped so 200 clients don't bury the threads.
    const runs = status.workflows;
    const RUNS_SHOWN = 5;
    const firmRuns = st.runsAll ? runs : runs.slice(0, RUNS_SHOWN);

    // A calm week keeps Instead's greeting; otherwise the home leads with who needs you.
    let heroText = status.headline;
    // The home answers its own headline: who needs you is on the page, not behind a click.
    const showToday = !scoped && !hasMessages && attention.length > 0 && !st.wfTray;
    if (sc) heroText = `How can I support ${fullName(sc)}?`;
    if (sw) heroText = `Let’s keep “${sw.name}” moving.`;

    // Staging a workflow outside a client: the composer pill becomes who it runs for.
    const audience = st.wfPick && !sc && (() => {
      const n = st.wfTargets.length;
      const one = n === 1 && clients.find((c) => c.id === st.wfTargets[0]);
      return { n, label: one ? fullName(one) : n ? `${n} clients` : 'Choose clients', icon: one ? iconFor(one.entity) : n ? 'users' : 'plus' };
    })();
    const canSend = st.draft.trim().length > 0 || !!st.wfPick || (st.wfTray === 'build' && !!st.wfFile);
    const I = (name, label, onClick, cls = 'ic') => html`<button class=${cls} aria-label=${label} onClick=${onClick}><${Icon} name=${name} /></button>`;

    // Pop-ups anchor to the composer itself, so they open just above it wherever it sits.
    const composerEl = html`<div class="composer-anchor">
        ${st.showTip && sc && html`
          <div class="popover tooltip" role="status">
            <p class="tooltip-text">This chat is now about <b>${fullName(sc)}</b>. Answers use only their documents and history. The × in the chat box takes you back to all clients.</p>
            <div class="tooltip-actions"><button class="tooltip-btn" onClick=${() => this.setState({ showTip: false })}>Got it</button></div>
          </div>`}

        ${st.ctxOpen && this.renderContextPicker(clients, attention)}
        ${audience && st.wfChoosing && this.renderRunPicker(clients)}
      <form class="composer" onSubmit=${(e) => { e.preventDefault(); this.send(clients); }}>
        <textarea ref=${(el) => (this.inputEl = el)} rows="1"
          placeholder=${st.wfPick ? 'Add any context for this workflow, or send to start...'
            : st.wfTray === 'build' ? (st.wfFile ? 'Anything to add? Or send and Instead drafts it...' : 'Describe the work you repeat, step by step...')
            : st.wfTray ? 'Search workflows, or describe a new one...'
            : sc ? (hasMessages ? 'Ask a follow up...' : 'Ask a question or give a task...') : sw ? 'Ask a follow up...' : 'Give me a task or question to work on...'}
          value=${st.draft}
          onInput=${(e) => {
            const v = e.target.value;
            if (v === '/' && !st.wfTray) return this.openWf();
            // @ works inline, as in other chat tools: it stays in the text and what follows filters the picker.
            const at = !scoped && !st.wfTray && v.match(/(^|\s)@([^\s@]*)$/);
            if (at) return this.setState({ draft: v, ctxOpen: true, ctxInline: true, ctxQuery: at[2], ctxIndex: 0, menu: false, showTip: false });
            if (st.ctxInline) return this.setState({ draft: v, ctxOpen: false, ctxInline: false, ctxQuery: '' });
            this.setState({ draft: v });
          }}
          onKeyDown=${(e) => {
            if (st.ctxOpen && st.ctxInline) {
              const items = this.ctxFlat || [];
              if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
                if (items.length) this.setState({ ctxIndex: (st.ctxIndex + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length });
                return;
              }
              if (e.key === 'Enter' || e.key === 'Tab') { e.preventDefault(); const it = items[st.ctxIndex]; if (it) this.setContext(it.type === 'all' ? null : it); return; }
              if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); this.setState({ ctxOpen: false, ctxInline: false }); return; }
            }
            if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.send(clients); }
          }}></textarea>
        <div class="composer-controls">
          <div class="controls-group">
            ${audience ? html`<div class=${'ctx-pill' + (audience.n ? ' scoped' : ' pick') + (st.wfChoosing ? ' open' : '')}>
                <button type="button" class="ctx-btn" aria-haspopup="listbox" aria-expanded=${st.wfChoosing} aria-label=${`Run for: ${audience.label}. Change`}
                  onClick=${(e) => { e.stopPropagation(); this.setState((s) => ({ wfChoosing: !s.wfChoosing, wfClientQ: '' })); }}>
                  <${Icon} name=${audience.icon} size=${14} />
                  <span class="ctx-name">${audience.label}</span>
                  <${Icon} name="chevronDown" size=${12} />
                </button>
                ${audience.n > 0 && html`<button type="button" class="chip-x" aria-label="Clear clients" onClick=${() => this.setState({ wfTargets: [] })}><${Icon} name="x" size=${12} stroke=${2} /></button>`}
              </div>`
            : html`<div class=${'ctx-pill' + (scoped ? ' scoped' : '') + (st.ctxOpen ? ' open' : '')}>
              ${sc
                // Inside a thread (a client's or a workflow's) the pill is a label: it says who the chat
                // covers, and moving elsewhere is the rail's job. Only the firm-level chat has the switcher.
                ? html`<span class="ctx-btn ctx-label" aria-label=${`Chat context: ${fullName(sc)}`}>
                    <${Icon} name=${iconFor(sc.entity)} size=${14} />
                    <span class="ctx-name">${fullName(sc)}</span>
                  </span>`
                // Inside a workflow thread the heading already names it: the pill says who it covers.
                : sw ? html`<span class="ctx-btn ctx-label" aria-label=${`Chat context: the ${sw.clients} clients in ${sw.name}`}>
                    <${Icon} name="users" size=${14} />
                    <span class="ctx-name">${sw.clients} clients</span>
                  </span>`
                : html`<button type="button" class="ctx-btn" aria-haspopup="listbox" aria-expanded=${st.ctxOpen} aria-label="Chat context: All clients. Change"
                onClick=${(e) => { e.stopPropagation(); this.setState((s) => ({ ctxOpen: !s.ctxOpen, ctxInline: false, ctxQuery: '', menu: false, showTip: false })); }}>
                <${Icon} name="users" size=${14} />
                <span class="ctx-name">All clients</span>
                <${Icon} name="chevronDown" size=${12} />
              </button>`}
              ${scoped && html`<button type="button" class="chip-x" aria-label="Back to all clients" onClick=${() => this.clearScope()}><${Icon} name="x" size=${12} stroke=${2} /></button>`}
            </div>`}
            ${I('paperclip', 'Attach files', null, 'circ')}
            ${I('settings2', 'Settings', null, 'circ')}
            <button type="button" class=${'circ' + (st.wfTray ? ' active' : '')} aria-label="Workflows" aria-expanded=${!!st.wfTray}
              onClick=${() => (st.wfTray ? this.closeWf() : this.openWf())}><${Icon} name="workflow" /></button>
          </div>
          <div class="controls-group">
            ${I('mic', 'Dictate', null, 'circ')}
            <button type="submit" class=${'send' + (canSend ? ' ready' : '')} aria-label="Send"><${Icon} name="arrowUp" /></button>
          </div>
        </div>
      </form>
    </div>`;

    return html`
      <div class="app">
        <div class="body">
          ${sc ? this.renderClientShell(sc, key) : html`
          <aside class="rail" style=${{ '--rail-w': `${st.railW}px`, '--threads-h': `${st.threadsH}px` }}>
            <div class="rail-resize" aria-hidden="true" onMouseDown=${(e) => this.startResize(e, 'col')}><div class="rail-line"></div><div class="rail-grip"></div></div>
            <div class="rail-logo"><img src="./img/instead-logo.svg" alt="instead" /></div>

            <div class="toolbar">
              <button class=${'nav-pill wf-nav' + (st.wfTray ? ' on' : '')} aria-expanded=${!!st.wfTray} onClick=${() => (st.wfTray ? this.closeWf() : this.openWf())}>
                <span class="nav-pill-icon"><${Icon} name="workflow" /></span><span class="nav-pill-label">Workflows</span><span class="nav-pill-go"><${Icon} name="moveRight" /></span>
              </button>
              ${I('library', 'Library', null, 'round-btn')}
              ${I('messagePlus', 'New thread', () => this.newFirmThread(), 'round-btn')}
            </div>

            <div class="clients-pane">
              <div class="section-head">
                ${st.query !== null
                    ? html`<label class="search-field"><${Icon} name="search" size=${12} />
                        <input ref=${(el) => el && !el.dataset.f && (el.dataset.f = '1', el.focus())} placeholder=${`Search ${clients.length} clients`} value=${st.query}
                          onInput=${(e) => this.setState({ query: e.target.value })} onKeyDown=${(e) => { if (e.key === 'Escape') this.setState({ query: null }); }} />
                        <button class="chip-x" aria-label="Close search" onClick=${() => this.setState({ query: null })}><${Icon} name="x" size=${12} stroke=${2} /></button>
                      </label>`
                    : html`<span class="label">Clients</span>
                      <div class="head-icons">${I('search', 'Search clients', () => this.setState({ query: '' }))}${I('archiveX', 'Archived')}${I('arrowUpDown', 'Sort')}
                        <span class="filter-anchor">
                          <button class=${'ic' + (st.filter || st.filterOpen ? ' on' : '')} aria-label="Filter clients" aria-haspopup="menu" aria-expanded=${st.filterOpen}
                            onClick=${(e) => { e.stopPropagation(); this.setState((s) => ({ filterOpen: !s.filterOpen, rowMenu: null })); }}><${Icon} name="listFilter" /></button>
                          ${st.filterOpen && html`
                            <div class="menu filter-menu" role="menu" onClick=${(e) => e.stopPropagation()}>
                              ${FILTERS.filter(([, opts]) => opts.length).map(([title, opts]) => html`
                                <span class="label">${title}</span>
                                ${opts.map((o) => html`
                                  <button class="menu-item filter-item" role="menuitemradio" aria-checked=${st.filter === o.id}
                                    onClick=${() => this.setState((s) => ({ filter: s.filter === o.id ? null : o.id, filterOpen: false }))}>
                                    ${o.id === 'needs' && html`<span class="dot" aria-hidden="true"></span>`}
                                    <span class="row-text"><span class="row-name">${o.label}</span></span>
                                    <span class="filter-count">${o.count}</span>
                                    ${st.filter === o.id && html`<span class="proto-check"><${Icon} name="check" size=${12} /></span>`}
                                  </button>`)}`)}
                            </div>`}
                        </span>${I('plus', 'Add client')}</div>`}
              </div>
              ${activeFilter && html`
                <div class="filter-bar">
                  <span class="filter-chip">${activeFilter.label} · ${book.length}
                    <button class="chip-x" aria-label="Clear filter" onClick=${() => this.setState({ filter: null })}><${Icon} name="x" size=${12} stroke=${2} /></button>
                  </span>
                </div>`}
              <div class="list" ref=${(el) => (this.listEl = el)}>
                ${matches
                  ? matches.length
                    ? matches.map((c) => this.renderClientRow(c, { selected: false, wf: wfByClient[c.id] }))
                    : html`<div class="no-match">No client matches “${st.query}”${activeFilter ? ` in ${activeFilter.label}` : ''}</div>`
                  : html`<div class="list-section">${book.map((c) => this.renderClientRow(c, { selected: false, wf: wfByClient[c.id] }))}</div>`}
                <div class="add-wrap"><button class="add-row"><${Icon} name="plus" />Add new client</button></div>
              </div>
            </div>

            <div class="threads-pane">
              <div class="threads-resize" aria-hidden="true" onMouseDown=${(e) => this.startResize(e, 'row')}></div>
              <div class="section-head">
                <span class="label">Threads</span>
                <div class="head-icons">${I('plus', 'New thread', () => this.newFirmThread())}</div>
              </div>
              <div class="threads-list">
                ${firmThreads.map((k, i) => html`<div class=${'thread-row' + (!scoped && k === st.gk ? ' on' : '')} role="button" tabindex="0"
                    onClick=${() => this.openFirmThread(k)} onKeyDown=${(e) => { if (e.key === 'Enter') this.openFirmThread(k); }}>
                    <span class="t">${titleOf(k)}</span><span class="thread-when">${i === 0 ? 'Now' : 'Today'}</span>
                  </div>`)}
                ${firmRuns.map((w) => html`<div class=${'thread-row wf' + (sw && sw.id === w.id ? ' on' : '')} role="button" tabindex="0"
                    title=${w.clientId ? `${w.name} for ${w.clientName}: ${w.done} of ${w.total} steps done` : `${w.name}: ${w.done} of ${w.total} clients done`}
                    onClick=${() => this.pickWorkflow(w.id)} onKeyDown=${(e) => { if (e.key === 'Enter') this.pickWorkflow(w.id); }}>
                    <${Icon} name="workflow" size=${12} /><span class="t">${w.name}${w.clientId && html`<span class="t-client"> · ${w.clientName}</span>`}</span><span class="thread-when">${w.done}/${w.total}</span>
                  </div>`)}
                ${runs.length > RUNS_SHOWN && html`<button class="more-row" onClick=${() => this.setState((s) => ({ runsAll: !s.runsAll }))}>${st.runsAll ? 'Show fewer' : `Show ${runs.length - RUNS_SHOWN} more workflow${runs.length - RUNS_SHOWN === 1 ? '' : 's'}`}</button>`}
                ${!firmThreads.length && !firmRuns.length && html`<div class="empty-threads"><${Icon} name="messages" />Start your first thread</div>`}
              </div>
            </div>

            <div class="user-wrap">
              <div class="user-card">
                <div class="serif user-name">Lokesh Kumar Bhatia</div>
                <div class="user-card-row">
                  <div class="initials serif">LB</div>
                  <div class="head-icons">${I('userPlus', 'Invite teammate')}${I('settings2', 'Settings')}</div>
                </div>
              </div>
            </div>
          </aside>`}

          <main class=${'main' + (sc ? ' client' : '') + (hasMessages ? ' docked' : '') + (showToday || (st.wfTray && !hasMessages) ? ' has-today' : '') + (st.wfTray && st.wfFull ? ' wf-full' : '')}>
            ${!hasMessages && html`
              <div class="hero-wrap">
                <${Hero} text=${heroText} intro=${!this.introPlayed && !scoped} onIntroDone=${() => { this.introPlayed = true; }} key=${heroText} />
              </div>`}
            ${hasMessages && html`
              <div class="chat-scroll" ref=${(el) => (this.chatEl = el)}>
                <div class="chat-col">
                  ${messages.map((m, i) => (m.from === 'user'
                    ? html`<div class=${'serif user-turn' + (i === 0 ? ' first' : '')}>${m.text}</div>`
                    : html`<div class="answer">
                        ${(m.blocks || [{ p: m.text }]).map((b) => (b.offer ? this.renderOffer(b.offer, clients) : b.choose ? this.renderChoose(b.choose, clients) : b.progress ? this.renderProgress(b.progress, clients) : b.groups ? this.renderGroups(b.groups, clients) : b.brief ? this.renderBrief(b.brief, clients) : b.draft ? this.renderDraft(b.draft) : b.runs ? this.renderRuns(b.runs)
                          : b.ul ? html`<ul>${b.ul.map((li) => html`<li>${li}</li>`)}</ul>` : html`<p>${b.p}</p>`))}
                        <div class="msg-actions">
                          ${I('thumbsUp', 'Good response', null, 'fb')}${I('thumbsDown', 'Bad response', null, 'fb')}${I('filePen', 'Edit as document', null, 'fb')}
                        </div>
                      </div>`))}
                  ${st.typing && html`<div class="status-line">${st.typing}<${Icon} name="chevronDown" size=${12} /></div>`}
                </div>
              </div>`}

            <div class="composer-wrap">
                ${st.wfTray ? this.renderWfTray(clients, sc, composerEl) : showToday ? this.renderToday(status, clients, composerEl) : composerEl}

            </div>
          </main>
        </div>

        ${SHOW_DEMO_SWITCH && html`
          <div class="proto">
            ${st.protoOpen && html`
              <div class="proto-panel menu" role="dialog" aria-label="Preview the home at different book sizes">
                <div class="proto-head">
                  <span class="label">Preview this home as</span>
                  <button class="chip-x" aria-label="Close" onClick=${() => this.setState({ protoOpen: false })}><${Icon} name="x" size=${12} stroke=${2} /></button>
                </div>
                ${SCENARIOS.map(([id, title, sub], i) => html`
                  <button class="menu-item proto-item" aria-pressed=${String(st.scenario === id)} onClick=${() => this.setScenario(id)}>
                    <span class="proto-key">${i + 1}</span>
                    <span class="row-text"><span class="row-name">${title}</span><span class="row-note">${sub}</span></span>
                    ${st.scenario === id && html`<span class="proto-check"><${Icon} name="check" size=${12} /></span>`}
                  </button>`)}
                <div class="menu-foot">Prototype control, not part of the product. Press <kbd>1</kbd>–<kbd>4</kbd> to switch.</div>
              </div>`}
            <button class=${'proto-btn' + (st.protoOpen ? ' on' : '')} aria-expanded=${!!st.protoOpen} onClick=${() => this.setState((s) => ({ protoOpen: !s.protoOpen }))}>
              <${Icon} name="users" size=${12} />${(SCENARIOS.find(([id]) => id === st.scenario) || [, 'Prototype'])[1]}<${Icon} name="chevronDown" size=${12} />
            </button>
          </div>`}
      </div>`;
  }
}

// Instead's hero: the logo flips (rotateX) into the heading, which types in 15ms per character.
// Once typed, it settles into one plain text node (one layer when imported into Figma).
class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = { phase: props.intro ? 'logo' : 'text' };
  }
  componentDidMount() {
    if (this.state.phase === 'logo') {
      this.t1 = setTimeout(() => this.setState({ phase: 'flip' }), 1100);
      this.t2 = setTimeout(() => { this.setState({ phase: 'text' }); this.props.onIntroDone && this.props.onIntroDone(); }, 1400);
    }
    this.settle();
  }
  componentDidUpdate(_, prev) { if (prev.phase !== this.state.phase) this.settle(); }
  settle() {
    if (this.state.phase !== 'text') return;
    clearTimeout(this.t3);
    this.t3 = setTimeout(() => this.setState({ phase: 'done' }), this.props.text.length * 15 + 350);
  }
  componentWillUnmount() { clearTimeout(this.t1); clearTimeout(this.t2); clearTimeout(this.t3); }
  render({ text }, { phase }) {
    if (phase === 'logo' || phase === 'flip') return html`<img class=${'hero-logo' + (phase === 'flip' ? ' leaving' : '')} src="./img/instead-logo.svg" alt="instead" />`;
    if (phase === 'done') return html`<h1 class="serif hero-title">${text}</h1>`;
    let n = 0;
    return html`<h1 class="serif hero-title entering" aria-label=${text}>
      ${text.split(' ').map((word, wi) => html`${wi > 0 && ' '}<span class="tw-word" aria-hidden="true">${[...word].map((ch) => html`<span class="tw-char" style=${{ animationDelay: `${(n++) * 15}ms` }}>${ch}</span>`)}</span>`)}
    </h1>`;
  }
}

render(html`<${App} />`, document.getElementById('root'));
