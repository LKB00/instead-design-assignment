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
  moreVertical: html`<circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" />`,
  timerReset: html`<path d="M10 2h4" /><path d="M12 14v-4" /><path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" /><path d="M9 17H4v5" />`,
  panelLeftClose: html`<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18" /><path d="m16 15-3-3 3-3" />`,
  folderOpen: html`<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />`,
  moveRight: html`<path d="M18 8L22 12L18 16" /><path d="M2 12H22" />`,
  check: html`<path d="M20 6 9 17l-5-5" />`,
  bookmark: html`<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />`,
  fileText: html`<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />`,
  folder: html`<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />`,
};

const Icon = ({ name, size = 14, stroke = 1.5 }) => html`
  <svg width=${size} height=${size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width=${stroke} stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PATHS[name]}</svg>`;

// ---------- Mock data ----------
const ENTITY = { '1040': 'Individual', '1120': 'C Corp', '1120S': 'S Corp', '1065': 'Partnership', '1041': 'Trust & Estate' };

// A deterministic 188-client book so the 200-client state is the same on every load.
const FIRSTS = ['Aarav', 'Beth', 'Carlos', 'Dana', 'Elena', 'Farid', 'Grace', 'Hiro', 'Isla', 'Jonah', 'Kavya', 'Liam', 'Maya', 'Noah', 'Olivia', 'Pedro', 'Quinn', 'Rhea', 'Sam', 'Tara', 'Uma', 'Victor', 'Wen', 'Yusuf', 'Zoe'];
const LASTS = ['Abbott', 'Bose', 'Chen', 'Duarte', 'Ellis', 'Fischer', 'Gupta', 'Hale', 'Ibarra', 'Jansen', 'Kaur', 'Lindqvist', 'Mehta', 'Novak', 'Okafor', 'Park', 'Reyes', 'Sato', 'Tan', 'Varga', 'Walsh', 'Young'];
const FIRMS = ['Bluebird Bakery LLC', 'Cedar Row Dental PC', 'Driftwood Studios', 'Eastline Logistics', 'Foxglove Farms', 'Granite Peak Partners', 'Hollis & Mercer LLP', 'Ironbark Holdings', 'Juniper Health PLLC', 'Kestrel Media Inc.', 'Lantern Coffee Co.', 'Marlow Trust'];
const GEN_ISSUES = [
  { cat: 'docs', note: 'W-2 missing, return due in 5 days', flag: 'Due in 5 days', urgency: 5, next: 'Request the W-2' },
  { cat: 'docs', note: '1099-B missing for 9 days', flag: 'Docs 9d late', urgency: 4, next: 'Request the 1099-B' },
  { cat: 'sign', note: '8879 unsigned for 3 days', flag: 'Unsigned 3d', urgency: 4, next: 'Nudge them to sign' },
  { cat: 'deadline', note: 'Extension due next week, not started', flag: 'Due next wk', urgency: 6, next: 'Start the extension' },
];
function generatedBook(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const isFirm = i % 9 === 4;
    const entity = isFirm ? ['1120S', '1065', '1120', '1041'][i % 4] : '1040';
    const c = isFirm ? { id: `g${i}`, name: `${FIRMS[i % FIRMS.length].replace(/(LLC|PC|LLP|Inc\.|PLLC|Co\.)$/, '').trim()} ${['', 'II', 'East', 'West'][Math.floor(i / FIRMS.length) % 4]}`.trim(), entity }
      : { id: `g${i}`, first: FIRSTS[i % FIRSTS.length], last: LASTS[(i * 7) % LASTS.length], entity };
    const issue = i % 17 === 3 ? GEN_ISSUES[i % GEN_ISSUES.length] : null;
    out.push(issue ? { ...c, status: 'needs_attention', ...issue } : { ...c, status: i % 5 === 0 ? 'in_progress' : 'on_track' });
  }
  return out;
}

function clientsFor(scenario) {
  // Same data as the real app.instead.com/firm capture, for side-by-side comparison.
  if (scenario === 'reference') return [{ id: 'ref-ashish', first: 'Ashish', last: 'Khoshya', entity: '1040', status: 'on_track' }];
  const ashish = { id: 'ashish', first: 'Ashish', last: 'Khoshya', entity: '1040', status: 'in_progress', note: 'Review 1040 draft' };
  if (scenario === 'two') return [
    ashish,
    { id: 'c2', first: 'Priya', last: 'Nair', entity: '1040', status: 'needs_attention', cat: 'sign', note: '8879 unsigned for 4 days', flag: '8879 unsigned', urgency: 1, next: 'Nudge Priya to sign' },
  ];
  if (scenario === 'large') return clientsFor('grouped').concat(generatedBook(188));
  if (scenario === 'calm') return [
    ashish,
    { id: 'c6', first: 'Daniel', last: 'Cho', entity: '1040', status: 'on_track' },
    { id: 'c8', first: 'Sana', last: 'Kapoor', entity: '1040', status: 'on_track' },
    { id: 'c7', name: 'Fern & Co.', entity: '1120S', status: 'on_track' },
  ];
  return [
    { id: 'c1', first: 'Meera', last: 'Iyer', entity: '1040', status: 'needs_attention', cat: 'docs', note: 'K-1 missing, return due in 2 days', flag: 'Due in 2 days', urgency: 2, next: 'Chase the K-1 or file an extension' },
    { id: 'c2', name: 'Sethi Holdings', entity: '1120', status: 'needs_attention', cat: 'sign', note: 'E-sign request unsigned for 6 days', flag: 'Unsigned 6d', urgency: 1, next: 'Resend the e-sign request' },
    { id: 'c3', name: 'Whitfield Family Trust', entity: '1041', status: 'needs_attention', cat: 'deadline', note: 'Extension due Friday, not started', flag: 'Due Friday', urgency: 3, next: 'Start the extension' },
    ashish,
    { id: 'c5', name: 'Alderwood LLC', entity: '1065', status: 'in_progress', note: 'Gathering K-1s' },
    { id: 'c6', first: 'Daniel', last: 'Cho', entity: '1040', status: 'on_track' },
    { id: 'c7', name: 'Fern & Co.', entity: '1120S', status: 'on_track' },
    { id: 'c8', first: 'Sana', last: 'Kapoor', entity: '1040', status: 'on_track' },
    { id: 'c9', first: 'Owen', last: 'Brecker', entity: '1040', status: 'on_track' },
    { id: 'c10', name: 'Northgate Dental PC', entity: '1120S', status: 'on_track' },
    { id: 'c11', first: 'Lena', last: 'Ortiz', entity: '1040', status: 'on_track' },
    { id: 'c12', name: 'Harbor & Pine LLP', entity: '1065', status: 'on_track' },
  ];
}

// A workflow is a thread with a checklist. Cross-client items are clients; single-client items are steps.
const WORKFLOWS = {
  across: [
    { id: 'w1', name: 'Collect missing K-1s', ask: 'Chase the missing K-1s', clients: 5, done: 3, total: 5, items: [
      { clientId: 'c1', label: 'Meera Iyer', state: 'attn', note: 'No reply in 5 days, return due in 2' },
      { clientId: 'c9', label: 'Owen Brecker', state: 'open', note: 'Reminder sent yesterday' },
      { clientId: 'c5', label: 'Alderwood LLC', state: 'done', note: 'Received' },
      { clientId: 'c7', label: 'Fern & Co.', state: 'done', note: 'Received' },
      { clientId: 'c12', label: 'Harbor & Pine LLP', state: 'done', note: 'Received' },
    ], doneSummary: 'Received from Alderwood LLC, Fern & Co. and Harbor & Pine LLP' },
    { id: 'w2', name: 'Send Q3 estimate reminders', ask: 'Send the Q3 estimate reminders', clients: 12, done: 7, total: 12, items: [
      { clientId: 'c2', label: 'Sethi Holdings', state: 'attn', note: 'Bounced, check the email on file' },
      { clientId: 'c6', label: 'Daniel Cho', state: 'open', note: 'Scheduled for Monday' },
      { clientId: 'c8', label: 'Sana Kapoor', state: 'open', note: 'Scheduled for Monday' },
      { clientId: 'c10', label: 'Northgate Dental PC', state: 'open', note: 'Scheduled for Monday' },
      { clientId: 'c11', label: 'Lena Ortiz', state: 'open', note: 'Scheduled for Monday' },
    ], doneSummary: '7 reminders sent' },
  ],
  single: [
    { id: 'w3', name: 'Review 1040 draft', ask: 'Review Ashish’s 1040 draft', clientId: 'ashish', clientName: 'Ashish Khoshya', done: 2, total: 3, items: [
      { label: 'Reconcile W-2 and 1099 income', state: 'done' },
      { label: 'Check itemized deductions against receipts', state: 'done' },
      { label: 'Final review with you', state: 'attn', note: '2 questions waiting' },
    ] },
    { id: 'w4', tid: 't-ext', name: 'File extension', ask: 'File the Whitfield extension', clientId: 'c3', clientName: 'Whitfield Family Trust', done: 0, total: 2, items: [
      { label: 'Estimate the 2025 tax due', state: 'open', note: 'Needs the prior-year 1041' },
      { label: 'Prepare and e-file Form 7004', state: 'open', note: 'Due Friday' },
    ] },
  ],
};
const ALL_WF = WORKFLOWS.across.concat(WORKFLOWS.single);
const wfKey = (id) => `wf:${id}`;

// What a pro can start. Scope decides the shape: across clients (a checklist of clients) or for one (a checklist of steps).
const TEMPLATES = [
  { id: 't-remind', answer: 'Q3 estimates are due September 15. I can draft the reminder text for you to send yourself, if you’d rather not track it.', scope: 'across', name: 'Send estimate reminders', icon: 'users', match: /remind|estimate/i,
    targets: (cs) => cs.filter((c) => c.entity === '1040').slice(0, 6), note: 'Scheduled for Monday' },
  { id: 't-docs', answer: 'I can list what’s missing for each client from their uploaded documents and last year’s return, without sending anything yet.', scope: 'across', name: 'Request missing documents', icon: 'fileText', match: /missing|document|k-1|k1/i,
    targets: (cs) => cs.filter((c) => c.status !== 'on_track'), note: 'Request drafted' },
  { id: 't-ext', answer: 'Yes. An extension moves the filing deadline to October 15, but any tax owed is still due on the original date. Want me to estimate what’s owed?', scope: 'one', name: 'Prepare an extension', icon: 'timerReset', match: /extension|7004|4868/i,
    steps: ['Estimate the tax due', 'Prepare the extension form', 'E-file and confirm acceptance'] },
  { id: 't-gather', answer: 'I can compare what’s been uploaded against last year and tell you what’s still missing.', scope: 'one', name: 'Gather documents', icon: 'folder', match: /gather|collect|upload/i,
    steps: ['Compare against last year’s documents', 'Send the client a request list', 'Check off documents as they arrive'] },
  { id: 't-strategy', answer: 'I can take a quick look at the prior-year return and name the strategies worth a closer look.', scope: 'one', name: 'Run a strategy analysis', icon: 'library', match: /strateg|plan|save/i,
    steps: ['Read the prior-year return', 'Screen for applicable strategies', 'Write up the estimated savings'] },
  { id: 't-onboard', answer: 'I can draft the engagement letter and a first request list for you to send.', scope: 'one', name: 'Onboard client', icon: 'userPlus', match: /onboard|engagement/i,
    steps: ['Send the engagement letter', 'Collect prior-year returns', 'Set up the client’s document folder'] },
];
// Bulk versions used by the at-scale briefing; not in the start menu.
TEMPLATES.push(
  { id: 't-sign', scope: 'across', hidden: true, name: 'Resend e-sign requests', icon: 'filePen', note: 'Resent today', answer: '' },
  { id: 't-exts', scope: 'across', hidden: true, name: 'Prepare extensions', icon: 'timerReset', note: 'Estimating tax due', answer: '' },
);
const templateFor = (text) => TEMPLATES.find((t) => t.match && t.match.test(text));
const CATS = {
  docs: { label: 'Waiting on documents', tid: 't-docs', action: 'Request them all' },
  sign: { label: 'Waiting on a signature', tid: 't-sign', action: 'Resend all' },
  deadline: { label: 'Deadline coming, not started', tid: 't-exts', action: 'Start extensions' },
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

// Instead's own opening reply for a new client thread (verbatim from app.instead.com).
const greeting = (name) => ({
  from: 'assistant',
  blocks: [
    { p: `Hi Lokesh, good to be working with you on ${name}'s file.` },
    { p: 'What would you like to do today? A few things I can help with:' },
    { ul: [
      'Prepare or review a 1040 return or workpaper',
      'Build a tax plan or an individual tax estimate for 2026',
      'Analyze and implement a specific tax strategy (Augusta Rule, Accountable Plan, S Corp conversion, etc.)',
      'Answer a federal or state tax research question',
      "Work with the client's documents (organize, extract, summarize)",
    ] },
    { p: 'Just let me know what you need.' },
  ],
});

const fullName = (c) => c.name || `${c.first} ${c.last}`;
const railName = (c) => c.name || `${c.last}, ${c.first}`;
const iconFor = (entity) => (entity === '1040' ? 'userRound' : entity === '1041' ? 'landmark' : 'building');

// ---------- App ----------
class App extends Component {
  constructor() {
    super();
    this.state = {
      scenario: PARAMS.get('scenario') || 'grouped',
      tab: 'clients',
      scope: PARAMS.get('scope') ? { type: 'client', id: PARAMS.get('scope') } : null, // { type: 'client' | 'workflow', id }
      seenTip: PARAMS.has('scope'),
      showTip: false,
      menu: false,
      rowMenu: null,
      ctxOpen: false, ctxQuery: '', recent: [], // the context picker in the composer
      showAllNeeds: false,
      query: null, // null = search closed; '' = open // client id whose ⋮ menu is open
      draft: '',
      typing: false,
      from: null, // the scope to go back to after drilling from a workflow into a client
      threads: {
        ...WF_THREADS,
        'ashish#1': [{ from: 'user', text: 'Hey' }, greeting('Ashish Khoshya')],
        'c1#1': [
          { from: 'user', text: "What's blocking Meera's return?" },
          { from: 'assistant', blocks: [
            { p: 'Her K-1 from Alderwood Partners still hasn’t come in, and the return is due in 2 days.' },
            { p: 'A few ways I can keep this on track:' },
            { ul: [
              'Draft a reminder to Meera asking her to forward the K-1',
              'File an extension so the deadline isn’t at risk',
              'Prepare the rest of the return and leave the K-1 lines open',
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
      titles: { 'ashish#1': 'Friendly greeting exchange', 'c1#1': 'K-1 follow-up', 'ref-ashish#1': 'Friendly greeting exchange' },
      openYears: { 2026: true, 2025: false },
      railW: 316,
      threadsH: 260,
    };
    this.scrollPos = { clients: 0, workflows: 0 };
    this.onKeyDown = (e) => {
      if (e.key === 'Escape') this.setState({ menu: false, rowMenu: null, showTip: false, protoOpen: false, ctxOpen: false });
      const typing = /^(INPUT|TEXTAREA)$/.test((e.target && e.target.tagName) || '');
      if (!typing && SHOW_DEMO_SWITCH && /^[1-4]$/.test(e.key) && !e.metaKey && !e.ctrlKey) this.setScenario(SCENARIOS[+e.key - 1][0]);
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
    this.onDocClick = () => { if (this.state.rowMenu || this.state.ctxOpen) this.setState({ rowMenu: null, ctxOpen: false }); };
    document.addEventListener('click', this.onDocClick);
  }
  componentWillUnmount() { document.removeEventListener('keydown', this.onKeyDown); document.removeEventListener('click', this.onDocClick); }

  threadKey(scope = this.state.scope) {
    if (!scope) return 'general';
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
    if (prevState.tab !== this.state.tab && this.listEl) {
      this.listEl.scrollTop = this.scrollPos[this.state.tab] || 0;
    }
    // Leaving a client: the firm rail remounts — put it back exactly where it was.
    const wasClient = prevState.scope && prevState.scope.type === 'client';
    const isClient = this.state.scope && this.state.scope.type === 'client';
    if (wasClient && !isClient && this.listEl) this.listEl.scrollTop = this.scrollPos[this.state.tab] || 0;
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

  setTab(tab) {
    if (tab === this.state.tab) return;
    if (this.listEl) this.scrollPos[this.state.tab] = this.listEl.scrollTop;
    this.setState({ tab });
  }

  remember(scope) {
    this.setState((s) => ({ recent: [scope, ...s.recent.filter((r) => !(r.type === scope.type && r.id === scope.id))].slice(0, 6) }));
  }

  // One control for "who is this chat about": firm, a client, or a workflow.
  setContext(item) {
    this.setState({ ctxOpen: false, ctxQuery: '' });
    const cur = this.state.scope;
    if (!item) return this.clearScope();
    if (item.type === 'client') return this.pickClient(item.id, { from: cur && cur.type === 'workflow' ? cur : null });
    return this.pickWorkflow(item.id);
  }

  pickClient(id, { from = null, thread = null } = {}) {
    this.remember({ type: 'client', id });
    if (this.listEl && !(this.state.scope && this.state.scope.type === 'client')) this.scrollPos[this.state.tab] = this.listEl.scrollTop;
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
  startWorkflow(tid, clientId, clients, targetIds = null) {
    const t = TEMPLATES.find((x) => x.id === tid);
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
    if (t.scope === 'one') {
      w = { id, tid, name: t.name, ask: `${t.name} for ${fullName(c)}`, clientId: c.id, clientName: fullName(c), done: 0, total: t.steps.length,
        items: t.steps.map((label, i) => ({ label, state: 'open', note: i === 0 ? 'Working on it now' : '' })) };
      WORKFLOWS.single.unshift(w);
    } else {
      const targets = targetIds ? clients.filter((x) => targetIds.includes(x.id)) : t.targets(clients);
      w = { id, name: t.name, ask: t.name, clients: targets.length, done: 0, total: targets.length,
        items: targets.map((x) => ({ clientId: x.id, label: fullName(x), state: 'open', note: t.note })) };
      WORKFLOWS.across.unshift(w);
    }
    ALL_WF.unshift(w);
    const key = wfKey(id);
    this.setState((st) => ({
      threads: { ...st.threads, [key]: [{ from: 'user', text: w.ask }] },
      typing: t.scope === 'one' ? `Setting up ${t.name.toLowerCase()}` : `Building the list of ${w.total} clients`,
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
    this.setState({ scenario: id, scope: null, from: null, showTip: false, showAllNeeds: false, query: null, protoOpen: false });
  }

  askWhichClient(tid) {
    const t = TEMPLATES.find((x) => x.id === tid);
    this.setState((st) => ({
      menu: false, scope: null, from: null,
      threads: { ...st.threads, general: (st.threads.general || []).concat([
        { from: 'user', text: t.name },
        { from: 'assistant', blocks: [{ p: 'Which client is it for?' }, { choose: { tid } }] },
      ]) },
    }));
  }

  clearScope() {
    this.setState({ scope: null, from: null, showTip: false, menu: false });
  }

  replyFor(scope, clients, isFirst, key, text = '') {
    const w = wfFromKey(key);
    const t = !w && templateFor(text);
    const here = scope && scope.type === 'client' ? clients.find((x) => x.id === scope.id) : null;
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
        { p: `On it. I'll work from ${fullName(c)}'s uploaded documents and prior-year return.` },
        { p: 'I’ll flag anything missing before I make changes.' },
      ] },
    };
    if (w) return {
      status: 'Updating workflow',
      msg: { from: 'assistant', blocks: [{ p: `Added to “${w.name}.” ${w.done} of ${w.total} done so far — I’ll update the checklist as I go.` }] },
    };
    return {
      status: 'Searching authoritative tax guidance',
      msg: { from: 'assistant', blocks: [
        { p: 'Happy to help. Should I run this across your whole book, or for a specific client?' },
        { p: 'You can also pick a client on the left to keep the answer scoped to their file.' },
      ] },
    };
  }

  send(clients) {
    const text = this.state.draft.trim();
    if (!text) return;
    const s = this.state.scope;
    const key = this.threadKey(s);
    const isFirst = !(this.state.threads[key] || []).length;
    const { status, msg } = this.replyFor(s, clients, isFirst, key, text);
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
  brief(attention) {
    const text = 'Who needs me today?';
    this.setState((st) => ({ threads: { ...st.threads, general: (st.threads.general || []).concat([{ from: 'user', text }]) }, typing: 'Checking deadlines and open requests', menu: false }));
    setTimeout(() => {
      const n = attention.length;
      this.setState((st) => ({
        typing: false,
        threads: { ...st.threads, general: (st.threads.general || []).concat([{ from: 'assistant', blocks: [
          ...(n <= 5 ? [
            { p: n === 1 ? 'One client needs you today:' : `${n} clients need you today, most urgent first:` },
            { brief: attention.map((c) => c.id) },
            { p: 'Open a client to work on their file, or tell me to handle the next step for all of them.' },
          ] : [
            { p: `${n} clients need you today. The three most urgent:` },
            { brief: attention.slice(0, 3).map((c) => c.id) },
            { p: `The other ${n - 3}, by what’s blocking them:` },
            { groups: Object.keys(CATS).map((cat) => ({ cat, ids: attention.slice(3).filter((c) => c.cat === cat).map((c) => c.id) })).filter((g) => g.ids.length) },
            { p: 'Each of those can run as one workflow, so you handle a group in one step instead of client by client.' },
          ]),
        ] }]) },
      }));
    }, 1100);
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
      const body = html`${icon(it.state)}
        <span class="brief-text"><span class=${'pg-label' + (it.state === 'done' ? ' muted' : '')}>${it.label}</span>${it.note && html`<span class="brief-note">${it.note}</span>`}</span>
        ${c && html`<span class="brief-open">Open<${Icon} name="moveRight" size=${12} /></span>`}`;
      return c
        ? html`<button class="brief-row pg-row" onClick=${() => this.pickClient(c.id, { from: here })}>${body}</button>`
        : html`<div class="brief-row pg-row">${body}</div>`;
    };
    return html`<div class="brief">
      ${open.map(row)}
      ${w.doneSummary ? html`<div class="brief-row pg-row">${icon('done')}<span class="brief-text"><span class="pg-label muted">${w.doneSummary}</span></span></div>` : done.map(row)}
    </div>`;
  }

  renderOffer({ tid, clientId }, clients) {
    const t = TEMPLATES.find((x) => x.id === tid);
    return html`<div class="offer">
      <button class="offer-go" onClick=${() => this.startWorkflow(tid, clientId, clients)}><${Icon} name="workflow" size=${12} />Start “${t.name}”</button>
      <button class="offer-alt" onClick=${() => this.answerInstead(t)}>Just answer in chat</button>
    </div>`;
  }

  renderChoose({ tid }, clients) {
    const picks = clients.filter((c) => c.status === 'needs_attention').sort((a, b) => a.urgency - b.urgency).concat(clients.filter((c) => c.status !== 'needs_attention')).slice(0, 4);
    return html`<div class="brief">
      ${picks.map((c) => html`<button class="brief-row pg-row" onClick=${() => this.startWorkflow(tid, c.id, clients)}>
        <span class="pg-icon"><${Icon} name=${iconFor(c.entity)} /></span>
        <span class="brief-text"><span class="pg-label">${fullName(c)}</span>${c.note && html`<span class="brief-note">${c.note}</span>`}</span>
        <span class="brief-open">Start<${Icon} name="moveRight" size=${12} /></span>
      </button>`)}
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
    const row = (it) => html`
      <button class="menu-item ctx-item" role="option" aria-selected=${!!same(it, cur)} onClick=${() => this.setContext(it)}>
        <span class="menu-icon"><${Icon} name=${it.icon} /></span>
        <span class="row-text"><span class="row-name">${it.name}</span><span class="row-note">${it.sub}</span></span>
        ${it.attn && html`<span class="dot"></span>`}
        ${same(it, cur) && check}
      </button>`;
    return html`
      <div class="popover menu ctx-picker" role="listbox" aria-label="Chat context" onClick=${(e) => e.stopPropagation()}>
        <label class="search-field ctx-search"><${Icon} name="search" size=${12} />
          <input ref=${(el) => el && !el.dataset.f && (el.dataset.f = '1', el.focus())} placeholder=${`Search ${clients.length} clients and workflows`}
            value=${st.ctxQuery} onInput=${(e) => this.setState({ ctxQuery: e.target.value })} />
        </label>
        ${!q && html`
          <button class="menu-item ctx-item" role="option" aria-selected=${!cur} onClick=${() => this.setContext(null)}>
            <span class="menu-icon"><${Icon} name="users" /></span>
            <span class="row-text"><span class="row-name">All clients</span><span class="row-note">Your whole firm</span></span>
            ${!cur && check}
          </button>`}
        ${sections.filter(([, items]) => items.length).map(([title, items]) => html`<span class="label">${title}</span>${items.map(row)}`)}
        ${q && sections.every(([, items]) => !items.length) && html`<div class="no-match">Nothing matches “${st.ctxQuery}”</div>`}
        <div class="menu-foot">Tip: type <kbd>@</kbd> in chat to switch who this is about</div>
      </div>`;
  }

  renderBrief(ids, clients) {
    return html`<div class="brief">
      ${ids.map((id) => clients.find((c) => c.id === id)).filter(Boolean).map((c) => html`
        <button class="brief-row" onClick=${() => this.pickClient(c.id)}>
          <span class="pg-icon"><span class="dot" aria-hidden="true"></span></span>
          <span class="brief-text">
            <span class="brief-name">${fullName(c)}</span>
            <span class="brief-note">${c.note}. ${c.next}.</span>
          </span>
          <span class="brief-open">Open<${Icon} name="moveRight" size=${12} /></span>
        </button>`)}
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
          <span class="avatar-check"><${Icon} name="check" size=${9} /></span>
        </span>
        <span class="row-text"><span class="row-name">${railName(c)}</span></span>
        <span class="row-meta">
          ${attn
            ? html`<span class="flag"><span class="dot" aria-hidden="true"></span>${c.flag}</span>`
            : html`
              ${wf && html`<button class="wf-count" title=${`${wf.name}: ${wf.done} of ${wf.total} done`} aria-label=${`Open ${wf.name}`}
                onClick=${(e) => { e.stopPropagation(); this.pickWorkflow(wf.id); }}><${Icon} name="workflow" size=${10} />${wf.done}/${wf.total}</button>`}
              <span class="pill-xxs lime">${c.entity}</span>`}
        </span>
        <button class="ic row-more" aria-label="More" aria-expanded=${this.state.rowMenu === c.id}
          onClick=${(e) => { e.stopPropagation(); this.setState((s) => ({ rowMenu: s.rowMenu === c.id ? null : c.id })); }}><${Icon} name="moreVertical" /></button>
        ${this.state.rowMenu === c.id && html`
          <div class="row-menu menu" role="menu" onClick=${(e) => e.stopPropagation()}>
            <button class="menu-item" role="menuitem" onClick=${() => { this.setState({ rowMenu: null }); this.pickClient(c.id); }}>
              <span class="menu-icon"><${Icon} name="messagePlus" /></span><span class="row-text"><span class="row-name">Ask about ${fullName(c)}</span></span>
            </button>
            <button class="menu-item" role="menuitem" onClick=${() => { this.pickClient(c.id); this.setState({ rowMenu: null, menu: true, showTip: false }); }}>
              <span class="menu-icon"><${Icon} name="workflow" /></span><span class="row-text"><span class="row-name">Start a workflow…</span></span>
            </button>
          </div>`}
      </div>`;
  }

  renderWorkflowRow(w, sub) {
    const s = this.state.scope;
    const selected = s && s.type === 'workflow' && s.id === w.id;
    return html`
      <div class=${'row' + (selected ? ' on' : '')} role="button" tabindex="0" onClick=${() => this.pickWorkflow(w.id)}
        title=${sub} aria-label=${`${w.name}, ${sub}, ${w.done} of ${w.total} done`}>
        <span class="avatar"><span class="avatar-icon"><${Icon} name="workflow" /></span></span>
        <span class="row-text"><span class="row-name">${w.name}</span></span>
        <span class="row-meta"><span class="wf-count">${w.done}/${w.total}</span></span>
        <button class="ic row-more" aria-label="More" onClick=${(e) => e.stopPropagation()}><${Icon} name="moreVertical" /></button>
      </div>`;
  }

  renderClientShell(c, activeKey) {
    const st = this.state;
    const list = st.clientThreads[c.id] || [];
    const loading = st.panelLoading === c.id;
    const cWf = WORKFLOWS.single.filter((w) => w.clientId === c.id);
    const I = (name, label, onClick, cls = 'ic') => html`<button class=${cls} aria-label=${label} onClick=${onClick}><${Icon} name=${name} /></button>`;
    const year = (y) => html`<div class="doc-year">
      <div class="doc-row" role="button" tabindex="0" aria-expanded=${!!st.openYears[y]} onClick=${() => this.setState((s) => ({ openYears: { ...s.openYears, [y]: !s.openYears[y] } }))}>
        <span class="avatar sm"><span class="avatar-icon"><${Icon} name=${st.openYears[y] ? 'folderOpen' : 'folder'} size=${st.openYears[y] ? 15 : 16} /></span><span class="avatar-check"><${Icon} name="check" size=${8} /></span></span>
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
    // Whoever needs the pro floats to the top, most urgent first; a label only once there's a group worth naming.
    const attention = clients.filter((c) => c.status === 'needs_attention').sort((a, b) => a.urgency - b.urgency);
    const grouped = attention.length >= 3;
    const others = clients.filter((c) => c.status !== 'needs_attention').sort((a, b) => railName(a).localeCompare(railName(b)));
    // At scale the short list stays short: the five most urgent, the rest one tap away.
    const NEED_CAP = 5;
    const needShown = st.showAllNeeds ? attention : attention.slice(0, NEED_CAP);
    const q = (st.query || '').trim().toLowerCase();
    const matches = q ? clients.filter((c) => fullName(c).toLowerCase().includes(q) || railName(c).toLowerCase().includes(q)) : null;
    const wfByClient = Object.fromEntries(WORKFLOWS.single.map((w) => [w.clientId, w]));

    const scope = st.scope;
    const sc = scope && scope.type === 'client' ? clients.find((c) => c.id === scope.id) : null;
    const sw = scope && scope.type === 'workflow' ? ALL_WF.find((w) => w.id === scope.id) : null;
    const scoped = !!(sc || sw);
    const key = this.threadKey(sc ? { type: 'client', id: sc.id } : scope);
    const messages = st.threads[key] || [];
    const hasMessages = messages.length > 0;
    const firstGeneral = (st.threads.general || []).find((m) => m.from === 'user');

    let heroText = 'How can I support your firm today?';
    if (sc) heroText = `How can I support ${fullName(sc)}?`;
    if (sw) heroText = `Let’s keep “${sw.name}” moving.`;

    const canSend = st.draft.trim().length > 0;
    const isClients = st.tab === 'clients';
    const I = (name, label, onClick, cls = 'ic') => html`<button class=${cls} aria-label=${label} onClick=${onClick}><${Icon} name=${name} /></button>`;

    return html`
      <div class="app">
        <div class="body">
          ${sc ? this.renderClientShell(sc, key) : html`
          <aside class="rail" style=${{ '--rail-w': `${st.railW}px`, '--threads-h': `${st.threadsH}px` }}>
            <div class="rail-resize" aria-hidden="true" onMouseDown=${(e) => this.startResize(e, 'col')}><div class="rail-line"></div><div class="rail-grip"></div></div>
            <div class="rail-logo"><img src="./img/instead-logo.svg" alt="instead" /></div>

            <div class="toolbar">
              <div class="toggle" role="tablist">
                <button role="tab" aria-selected=${isClients} onClick=${() => this.setTab('clients')}><${Icon} name="users" />Clients</button>
                <button role="tab" aria-selected=${!isClients} onClick=${() => this.setTab('workflows')}><${Icon} name="workflow" />Workflows</button>
              </div>
              ${I('library', 'Library', null, 'round-btn')}
              ${I('messagePlus', 'New thread', () => this.clearScope(), 'round-btn')}
            </div>

            <div class="clients-pane">
              <div class="section-head">
                ${isClients
                  ? st.query !== null
                    ? html`<label class="search-field"><${Icon} name="search" size=${12} />
                        <input ref=${(el) => el && !el.dataset.f && (el.dataset.f = '1', el.focus())} placeholder=${`Search ${clients.length} clients`} value=${st.query}
                          onInput=${(e) => this.setState({ query: e.target.value })} onKeyDown=${(e) => { if (e.key === 'Escape') this.setState({ query: null }); }} />
                        <button class="chip-x" aria-label="Close search" onClick=${() => this.setState({ query: null })}><${Icon} name="x" size=${10} stroke=${2} /></button>
                      </label>`
                    : html`<span class="label">Clients</span>
                      <div class="head-icons">${I('search', 'Search clients', () => this.setState({ query: '' }))}${I('archiveX', 'Archived')}${I('arrowUpDown', 'Sort')}${I('listFilter', 'Filter')}${I('plus', 'Add client')}</div>`
                  : html`<span class="label">Workflows</span>
                      <div class="head-icons">${I('search', 'Search workflows')}${I('plus', 'Start a workflow', () => this.setState((s) => ({ menu: !s.menu })))}</div>`}
              </div>
              <div class="list" ref=${(el) => (this.listEl = el)}>
                ${isClients
                  ? html`
                      ${matches
                        ? matches.length
                          ? matches.map((c) => this.renderClientRow(c, { selected: false, wf: wfByClient[c.id] }))
                          : html`<div class="no-match">No client matches “${st.query}”</div>`
                        : grouped
                          ? html`
                            <div class="list-section needs-you">
                              <div class="group-label">Needs you${attention.length > NEED_CAP ? ` · ${attention.length}` : ''}</div>
                              ${needShown.map((c) => this.renderClientRow(c, { selected: false, wf: wfByClient[c.id] }))}
                              ${attention.length > NEED_CAP && html`<button class="more-row" onClick=${() => this.setState((s) => ({ showAllNeeds: !s.showAllNeeds }))}>
                                ${st.showAllNeeds ? 'Show fewer' : `Show ${attention.length - NEED_CAP} more`}</button>`}
                            </div>
                            ${others.length > 0 && html`<div class="list-section everyone-else">
                              <div class="group-label">Everyone else${clients.length > 20 ? ` · ${others.length}` : ''}</div>
                              ${others.map((c) => this.renderClientRow(c, { selected: false, wf: wfByClient[c.id] }))}
                            </div>`}`
                          : html`<div class="list-section">${attention.concat(others).map((c) => this.renderClientRow(c, { selected: false, wf: wfByClient[c.id] }))}</div>`}
                      <div class="add-wrap"><button class="add-row"><${Icon} name="plus" />Add new client</button></div>`
                  : html`
                      <div class="list-section across-clients">
                        <div class="group-label">Across clients</div>
                        ${WORKFLOWS.across.map((w) => this.renderWorkflowRow(w, `${w.clients} clients`))}
                      </div>
                      <div class="list-section single-client">
                        <div class="group-label">Single client</div>
                        ${WORKFLOWS.single.map((w) => this.renderWorkflowRow(w, w.clientName))}
                      </div>`}
              </div>
            </div>

            <div class="threads-pane">
              <div class="threads-resize" aria-hidden="true" onMouseDown=${(e) => this.startResize(e, 'row')}></div>
              <div class="section-head">
                <span class="label">Threads</span>
                <div class="head-icons">${I('plus', 'New thread', () => this.clearScope())}</div>
              </div>
              <div class="threads-list">
                ${firstGeneral
                  ? html`<div class=${'thread-row' + (!scoped ? ' on' : '')} role="button" tabindex="0" onClick=${() => this.clearScope()}>
                      <span class="t">${firstGeneral.text}</span><span class="thread-when">Now</span>
                    </div>`
                  : html`<div class="empty-threads"><${Icon} name="messages" />Start your first thread</div>`}
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

          <main class=${'main' + (sc ? ' client' : '') + (hasMessages ? ' docked' : '')}>
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
                        ${(m.blocks || [{ p: m.text }]).map((b) => (b.offer ? this.renderOffer(b.offer, clients) : b.choose ? this.renderChoose(b.choose, clients) : b.progress ? this.renderProgress(b.progress, clients) : b.groups ? this.renderGroups(b.groups, clients) : b.brief ? this.renderBrief(b.brief, clients)
                          : b.ul ? html`<ul>${b.ul.map((li) => html`<li>${li}</li>`)}</ul>` : html`<p>${b.p}</p>`))}
                        <div class="msg-actions">
                          ${I('thumbsUp', 'Good response', null, 'fb')}${I('thumbsDown', 'Bad response', null, 'fb')}${I('filePen', 'Edit as document', null, 'fb')}
                        </div>
                      </div>`))}
                  ${st.typing && html`<div class="status-line">${st.typing}<${Icon} name="chevronDown" size=${12} /></div>`}
                </div>
              </div>`}

            <div class="composer-wrap">
              ${st.showTip && sc && html`
                <div class="popover tooltip" role="status">
                  Chat is now scoped to <b>${fullName(sc)}</b>. Answers use only their documents and history. Switch or clear it from the pill in the chat box.
                  <div class="tooltip-actions"><button class="tooltip-btn" onClick=${() => this.setState({ showTip: false })}>Got it</button></div>
                </div>`}

              ${st.menu && html`
                <div class="popover menu" role="menu">
                  ${(sc ? [['one', `For ${fullName(sc)}`]] : [['across', 'Across clients'], ['one', 'For one client']]).map(([grp, title]) => html`
                    <span class="label">${title}</span>
                    ${TEMPLATES.filter((t) => t.scope === grp && !t.hidden).map((t) => html`
                      <button class="menu-item" role="menuitem" onClick=${() => (sc || grp === 'across' ? this.startWorkflow(t.id, sc && sc.id, clients) : this.askWhichClient(t.id))}>
                        <span class="menu-icon"><${Icon} name=${t.icon} /></span>
                        <span class="row-text"><span class="row-name">${t.name}</span></span>
                      </button>`)}`)}
                  <div class="menu-foot">Tip: type <kbd>/</kbd> in chat, or just describe the work</div>
                </div>`}

              ${st.ctxOpen && this.renderContextPicker(clients, attention)}
                <form class="composer" onSubmit=${(e) => { e.preventDefault(); this.send(clients); }}>
                  <textarea ref=${(el) => (this.inputEl = el)} rows="1"
                    placeholder=${sc ? (hasMessages ? 'Ask a follow up...' : `Ask about ${fullName(sc)}...`) : sw ? `Ask about “${sw.name}”...` : 'Give me a task or question to work on...'}
                    value=${st.draft}
                    onInput=${(e) => {
                      const v = e.target.value;
                      if (v === '/') return this.setState({ draft: '', menu: true, showTip: false, ctxOpen: false });
                      if (v === '@' || v.endsWith(' @')) return this.setState({ draft: v.slice(0, -1), ctxOpen: true, ctxQuery: '', menu: false, showTip: false });
                      this.setState({ draft: v });
                    }}
                    onKeyDown=${(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.send(clients); } }}></textarea>
                  <div class="composer-controls">
                    <div class="controls-group">
                      <div class=${'ctx-pill' + (scoped ? ' scoped' : '') + (st.ctxOpen ? ' open' : '')}>
                        <button type="button" class="ctx-btn" aria-haspopup="listbox" aria-expanded=${st.ctxOpen} aria-label=${`Chat context: ${sc ? fullName(sc) : sw ? sw.name : 'All clients'}. Change`}
                          onClick=${(e) => { e.stopPropagation(); this.setState((s) => ({ ctxOpen: !s.ctxOpen, ctxQuery: '', menu: false, showTip: false })); }}>
                          <${Icon} name=${sc ? iconFor(sc.entity) : sw ? 'workflow' : 'users'} size=${13} />
                          <span class="ctx-name">${sc ? fullName(sc) : sw ? sw.name : 'All clients'}</span>
                          <${Icon} name="chevronDown" size=${12} />
                        </button>
                        ${scoped && html`<button type="button" class="chip-x" aria-label="Back to all clients" onClick=${() => this.clearScope()}><${Icon} name="x" size=${10} stroke=${2} /></button>`}
                      </div>
                      ${I('paperclip', 'Attach files', null, 'circ')}
                      ${I('settings2', 'Settings', null, 'circ')}
                      <button type="button" class=${'circ' + (st.menu ? ' active' : '')} aria-label="Start a workflow" aria-expanded=${st.menu}
                        onClick=${() => this.setState((s) => ({ menu: !s.menu, showTip: false, ctxOpen: false }))}><${Icon} name="workflow" /></button>
                    </div>
                    <div class="controls-group">
                      ${I('mic', 'Dictate', null, 'circ')}
                      <button type="submit" class=${'send' + (canSend ? ' ready' : '')} aria-label="Send"><${Icon} name="arrowUp" /></button>
                    </div>
                  </div>
                </form>

              ${!scoped && !hasMessages && attention.length > 0 && html`
                <button class="brief-link" onClick=${() => this.brief(attention)}>
                  <span class="dot" aria-hidden="true"></span>
                  ${attention.length === 1 ? `${fullName(attention[0])} needs you today` : `${attention.length} clients need you today`}
                  <${Icon} name="moveRight" size=${12} />
                </button>`}
            </div>
          </main>
        </div>

        ${SHOW_DEMO_SWITCH && html`
          <div class="proto">
            ${st.protoOpen && html`
              <div class="proto-panel menu" role="dialog" aria-label="Preview the home at different book sizes">
                <div class="proto-head">
                  <span class="label">Preview this home as</span>
                  <button class="chip-x" aria-label="Close" onClick=${() => this.setState({ protoOpen: false })}><${Icon} name="x" size=${10} stroke=${2} /></button>
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
