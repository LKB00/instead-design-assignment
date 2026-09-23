import { h, render, Component } from 'https://esm.sh/preact@10.24.3';
import htm from 'https://esm.sh/htm@3.1.1';

const html = htm.bind(h);

// ---------- Lucide icons ----------
const PATHS = {
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
  copy: html`<rect width="14" height="14" x="8" y="8" rx="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />`,
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

function clientsFor(scenario) {
  // Same data as the real app.instead.com/firm capture, for side-by-side comparison.
  if (scenario === 'reference') return [{ id: 'ref-ashish', first: 'Ashish', last: 'Khoshya', entity: '1040', status: 'on_track' }];
  const ashish = { id: 'ashish', first: 'Ashish', last: 'Khoshya', entity: '1040', status: 'in_progress', note: 'Review 1040 draft' };
  if (scenario === 'few-attention') return [
    ashish,
    { id: 'c6', first: 'Daniel', last: 'Cho', entity: '1040', status: 'on_track' },
    { id: 'c2', first: 'Priya', last: 'Nair', entity: '1040', status: 'needs_attention', note: '8879 unsigned 4 days' },
    { id: 'c5', name: 'Alderwood LLC', entity: '1065', status: 'in_progress', note: 'Gathering K-1s' },
    { id: 'c7', name: 'Fern & Co.', entity: '1120S', status: 'on_track' },
  ];
  if (scenario === 'calm') return [
    ashish,
    { id: 'c6', first: 'Daniel', last: 'Cho', entity: '1040', status: 'on_track' },
    { id: 'c8', first: 'Sana', last: 'Kapoor', entity: '1040', status: 'on_track' },
    { id: 'c7', name: 'Fern & Co.', entity: '1120S', status: 'on_track' },
  ];
  return [
    { id: 'c1', first: 'Meera', last: 'Iyer', entity: '1040', status: 'needs_attention', note: 'K-1 missing · due in 2 days' },
    { id: 'c2', name: 'Sethi Holdings', entity: '1120', status: 'needs_attention', note: 'E-sign overdue 6 days' },
    { id: 'c3', name: 'Whitfield Family Trust', entity: '1041', status: 'needs_attention', note: 'Extension due Friday' },
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

const WORKFLOWS = {
  across: [
    { id: 'w1', name: 'Collect missing K-1s', clients: 5, done: 3, total: 5 },
    { id: 'w2', name: 'Send Q3 estimate reminders', clients: 12, done: 7, total: 12 },
  ],
  single: [
    { id: 'w3', name: 'Review 1040 draft', clientId: 'ashish', clientName: 'Ashish Khoshya', done: 2, total: 3 },
    { id: 'w4', name: 'File extension', clientId: 'c3', clientName: 'Whitfield Family Trust', done: 0, total: 2 },
  ],
};
const ALL_WF = WORKFLOWS.across.concat(WORKFLOWS.single);

const PARAMS = new URLSearchParams(location.search);
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
      draft: '',
      typing: false,
      threads: {
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
      selectedWorkflow: null,
    };
    this.scrollPos = { clients: 0, workflows: 0 };
    this.onKeyDown = (e) => { if (e.key === 'Escape') this.setState({ menu: false, showTip: false }); };
  }

  componentDidMount() { document.addEventListener('keydown', this.onKeyDown); }
  componentWillUnmount() { document.removeEventListener('keydown', this.onKeyDown); }

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

  pickClient(id) {
    if (this.listEl && !(this.state.scope && this.state.scope.type === 'client')) this.scrollPos[this.state.tab] = this.listEl.scrollTop;
    this.setState((s) => ({ scope: { type: 'client', id }, seenTip: true, showTip: !s.seenTip, menu: false, panelLoading: id, panelEntering: id }));
    clearTimeout(this.loadT); clearTimeout(this.enterT);
    this.enterT = setTimeout(() => this.setState({ panelEntering: null }), 320);
    this.loadT = setTimeout(() => this.setState({ panelLoading: null }), 700);
  }

  pickWorkflow(id) {
    this.setState({ scope: { type: 'workflow', id }, menu: false, showTip: false });
  }

  clearScope() {
    this.setState({ scope: null, showTip: false, menu: false });
  }

  replyFor(scope, clients, isFirst) {
    const c = scope && scope.type === 'client' ? clients.find((x) => x.id === scope.id) : null;
    const w = scope && scope.type === 'workflow' ? ALL_WF.find((x) => x.id === scope.id) : null;
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
    const { status, msg } = this.replyFor(s, clients, isFirst);
    this.setState((st) => {
      const next = { threads: { ...st.threads, [key]: (st.threads[key] || []).concat([{ from: 'user', text }]) }, draft: '', typing: status, menu: false, showTip: false };
      if (s && s.type === 'client' && isFirst) {
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

  // ---------- render pieces ----------
  renderClientRow(c, { selected, divider, wf }) {
    const attn = c.status === 'needs_attention';
    const busy = c.status === 'in_progress';
    return html`
      ${divider && html`<div class="divider"></div>`}
      <div class=${'row' + (selected ? ' on' : '') + (attn ? ' tall' : '')} role="button" tabindex="0"
        onClick=${() => this.pickClient(c.id)} onKeyDown=${(e) => { if (e.key === 'Enter') this.pickClient(c.id); }}
        aria-label=${`${fullName(c)}, ${ENTITY[c.entity] || c.entity}${attn ? ', needs attention' : ''}`}>
        <span class="avatar">
          <span class="avatar-icon"><${Icon} name=${iconFor(c.entity)} /></span>
          <span class="avatar-check"><${Icon} name="check" size=${9} /></span>
          ${(attn || busy) && html`<span class=${'status-dot' + (attn ? ' attn' : '')}></span>`}
        </span>
        <span class="row-text">
          <span class="row-name">${railName(c)}</span>
          ${attn && html`<span class="row-note">${c.note}</span>`}
        </span>
        <span class="row-meta">
          ${wf && html`<span class="pill-xxs outline" title=${`${wf.name} — ${wf.done} of ${wf.total} done`}><${Icon} name="workflow" size=${10} />${wf.done}/${wf.total}</span>`}
          <span class="pill-xxs lime">${c.entity}</span>
        </span>
        <button class="ic row-more" aria-label="More" onClick=${(e) => e.stopPropagation()}><${Icon} name="moreVertical" /></button>
      </div>`;
  }

  renderWorkflowRow(w, sub) {
    const s = this.state.scope;
    const selected = s && s.type === 'workflow' && s.id === w.id;
    return html`
      <div class=${'row tall' + (selected ? ' on' : '')} role="button" tabindex="0" onClick=${() => this.pickWorkflow(w.id)}
        aria-label=${`${w.name}, ${w.done} of ${w.total} done`}>
        <span class="avatar"><span class="avatar-icon"><${Icon} name="workflow" /></span></span>
        <span class="row-text"><span class="row-name">${w.name}</span><span class="row-note">${sub}</span></span>
        <span class="row-meta"><span class="pill-xxs outline">${w.done} of ${w.total}</span></span>
        <button class="ic row-more" aria-label="More" onClick=${(e) => e.stopPropagation()}><${Icon} name="moreVertical" /></button>
      </div>`;
  }

  renderClientShell(c, activeKey) {
    const st = this.state;
    const list = st.clientThreads[c.id] || [];
    const loading = st.panelLoading === c.id;
    const I = (name, label, onClick, cls = 'ic') => html`<button class=${cls} aria-label=${label} onClick=${onClick}><${Icon} name=${name} /></button>`;
    const year = (y) => html`
      <div class="doc-row" role="button" tabindex="0" aria-expanded=${!!st.openYears[y]} onClick=${() => this.setState((s) => ({ openYears: { ...s.openYears, [y]: !s.openYears[y] } }))}>
        <span class="avatar sm"><span class="avatar-icon"><${Icon} name=${st.openYears[y] ? 'folderOpen' : 'folder'} size=${st.openYears[y] ? 15 : 16} /></span><span class="avatar-check"><${Icon} name="check" size=${8} /></span></span>
        <span class="doc-name">${y}</span>
        <button class="ic row-more" aria-label="More" onClick=${(e) => e.stopPropagation()}><${Icon} name="moreVertical" /></button>
      </div>
      ${st.openYears[y] && html`<button class="upload-row"><${Icon} name="plus" />Upload files</button>`}`;
    return html`
      <aside class="client-shell">
        <nav class="icon-col" aria-label="Workspace">
          <button class="logo-tile" aria-label="Back to firm" onClick=${() => this.clearScope()}><img src="./img/instead-lime.svg" alt="" /></button>
          <div class="col-spacer"></div>
          ${I('userPlus', 'Invite teammate', null, 'col-btn')}
          ${I('settings2', 'Settings', null, 'col-btn')}
          <div class="col-initials serif">LB</div>
        </nav>

        <section class=${'client-panel' + (st.panelEntering === c.id ? ' entering' : '')} aria-label=${`${fullName(c)} workspace`}>
          <header class="cp-header">
            <h2 class="serif cp-name">${fullName(c)}</h2>
            <span class="pill-xxs lime">${c.entity}</span>
            <div class="flex1"></div>
            ${I('x', 'Close client', () => this.clearScope(), 'ic lg')}
          </header>

          <div class="cp-actions">
            <button class="nav-pill" onClick=${() => this.newClientThread(c.id)}>
              <span class="nav-pill-icon"><${Icon} name="messagePlus" /></span><span class="flex1">New client thread</span><span class="nav-pill-go"><${Icon} name="moveRight" /></span>
            </button>
            ${I('moreVertical', 'More', null, 'ic lg')}
            ${I('timerReset', 'History', null, 'ic lg')}
            ${I('panelLeftClose', 'Collapse panel', () => this.clearScope(), 'ic lg')}
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
                : list.length
                  ? list.map((k) => html`<div class=${'thread-row' + (k === activeKey ? ' on' : '')} role="button" tabindex="0" onClick=${() => this.openClientThread(c.id, k)}>
                      <span class="t">${st.titles[k] || 'New thread'}</span>
                      <span class="thread-when">${k.endsWith('#1') ? '1h' : 'Now'}</span>
                      <span class="thread-actions"><button class="ic sm" aria-label="Bookmark" onClick=${(e) => e.stopPropagation()}><${Icon} name="bookmark" /></button><button class="ic sm" aria-label="More" onClick=${(e) => e.stopPropagation()}><${Icon} name="moreVertical" /></button></span>
                    </div>`)
                  : html`<div class="empty-threads"><${Icon} name="messages" />Start your first thread</div>`}
            </div>
          </div>
        </section>
      </aside>`;
  }

  render() {
    const st = this.state;
    const clients = clientsFor(st.scenario);
    const attention = clients.filter((c) => c.status === 'needs_attention');
    const grouped = attention.length >= 3;
    const ordered = grouped ? attention.concat(clients.filter((c) => c.status !== 'needs_attention')) : clients;
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
        <div class="banner">
          <span class="banner-text"><b>Lokesh Kumar Bhatia</b> trial ends in 7 days.</span>
          <button class="btn-dark">Schedule with the Instead team</button>
        </div>

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
                  ? html`<span class="label">Clients</span>
                      <div class="head-icons">${I('search', 'Search clients')}${I('archiveX', 'Archived')}${I('arrowUpDown', 'Sort')}${I('listFilter', 'Filter')}${I('plus', 'Add client')}</div>`
                  : html`<span class="label">Workflows</span>
                      <div class="head-icons">${I('search', 'Search workflows')}${I('plus', 'Start a workflow', () => this.setState((s) => ({ menu: !s.menu })))}</div>`}
              </div>
              <div class="list" ref=${(el) => (this.listEl = el)}>
                ${isClients
                  ? html`
                      ${grouped && html`<div class="group-label"><span class="dot"></span><b>Needs you</b><span>· ${attention.length}</span></div>`}
                      ${ordered.map((c, i) => this.renderClientRow(c, { selected: false, divider: grouped && i === attention.length, wf: wfByClient[c.id] }))}
                      <div class="add-wrap"><button class="add-row"><${Icon} name="plus" />Add new client</button></div>`
                  : html`
                      <div class="group-label">Across clients</div>
                      ${WORKFLOWS.across.map((w) => this.renderWorkflowRow(w, `${w.clients} clients`))}
                      <div class="group-label spaced">Single client</div>
                      ${WORKFLOWS.single.map((w) => this.renderWorkflowRow(w, w.clientName))}`}
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
                        ${(m.blocks || [{ p: m.text }]).map((b) => (b.ul ? html`<ul>${b.ul.map((li) => html`<li>${li}</li>`)}</ul>` : html`<p>${b.p}</p>`))}
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
                  Chat is now scoped to <b>${fullName(sc)}</b>. Answers use only their documents and history. Tap × on the chip to go back to your whole firm.
                  <div class="tooltip-actions"><button class="tooltip-btn" onClick=${() => this.setState({ showTip: false })}>Got it</button></div>
                </div>`}

              ${st.menu && html`
                <div class="popover menu" role="menu">
                  <span class="label">Start a workflow</span>
                  ${ALL_WF.map((w, i) => html`
                    <button class="menu-item" role="menuitem" onClick=${() => this.pickWorkflow(w.id)}>
                      <span class="menu-num">${i + 1}</span>
                      <span class="row-text"><span class="row-name">${w.name}</span><span class="row-note">${w.clients ? `${w.clients} clients` : w.clientName} · ${w.done} of ${w.total}</span></span>
                    </button>`)}
                </div>`}

              <div class=${'tray' + (scoped ? ' scoped' : '')}>
                ${scoped && html`
                  <div class="tray-chips">
                    <div class="scope-chip">
                      <${Icon} name=${sc ? 'userRound' : 'workflow'} />
                      <span class="chip-name">${sc ? fullName(sc) : sw.name}</span>
                      <span class="pill-xxs lime">${sc ? sc.entity : `${sw.done} of ${sw.total}`}</span>
                      <button class="chip-x" aria-label="Clear scope, back to whole firm" onClick=${() => this.clearScope()}><${Icon} name="x" size=${10} stroke=${2} /></button>
                    </div>
                  </div>`}

                <form class="composer" onSubmit=${(e) => { e.preventDefault(); this.send(clients); }}>
                  <textarea ref=${(el) => (this.inputEl = el)} rows="1"
                    placeholder=${scoped ? 'Ask a follow up...' : 'Give me a task or question to work on...'}
                    value=${st.draft}
                    onInput=${(e) => this.setState({ draft: e.target.value })}
                    onKeyDown=${(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.send(clients); } }}></textarea>
                  <div class="composer-controls">
                    <div class="controls-group">
                      ${I('paperclip', 'Attach files', null, 'circ')}
                      ${I('settings2', 'Settings', null, 'circ')}
                      ${!(sc && hasMessages) && html`<button type="button" class=${'circ' + (st.menu ? ' active' : '')} aria-label="Start a workflow" aria-expanded=${st.menu}
                        onClick=${() => this.setState((s) => ({ menu: !s.menu, showTip: false }))}><${Icon} name="workflow" /></button>`}
                    </div>
                    <div class="controls-group">
                      ${I('mic', 'Dictate', null, 'circ')}
                      <button type="submit" class=${'send' + (canSend ? ' ready' : '')} aria-label="Send"><${Icon} name="arrowUp" /></button>
                    </div>
                  </div>
                </form>
              </div>

              ${!scoped && !hasMessages && attention.length > 0 && html`
                <div class="needs-you">
                  <span class="needs-you-label">Needs you today</span>
                  ${attention.slice(0, 3).map((c) => html`
                    <button class="need-chip" onClick=${() => this.pickClient(c.id)}><span class="dot"></span><span>${fullName(c)}</span><span class="note">${c.note}</span></button>`)}
                </div>`}
            </div>
          </main>
        </div>

        ${SHOW_DEMO_SWITCH && html`<div class="scenario" aria-label="Prototype data scenario">
          <span>Data</span>
          ${[['grouped', '12 clients'], ['few-attention', '5 clients'], ['calm', 'Calm']].map(([id, label]) => html`
            <button aria-pressed=${String(st.scenario === id)} onClick=${() => this.setState({ scenario: id, scope: null, showTip: false })}>${label}</button>`)}
        </div>`}
      </div>`;
  }
}

// Instead's hero: the logo flips (rotateX) into the heading, which types in 15ms per character.
class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = { phase: props.intro ? 'logo' : 'text' };
  }
  componentDidMount() {
    if (this.state.phase !== 'logo') return;
    this.t1 = setTimeout(() => this.setState({ phase: 'flip' }), 1100);
    this.t2 = setTimeout(() => { this.setState({ phase: 'text' }); this.props.onIntroDone && this.props.onIntroDone(); }, 1400);
  }
  componentWillUnmount() { clearTimeout(this.t1); clearTimeout(this.t2); }
  render({ text }, { phase }) {
    if (phase !== 'text') return html`<img class=${'hero-logo' + (phase === 'flip' ? ' leaving' : '')} src="./img/instead-logo.svg" alt="instead" />`;
    let n = 0;
    return html`<h1 class="serif hero-title entering" aria-label=${text}>
      ${text.split(' ').map((word, wi) => html`${wi > 0 && html`<span class="tw-space"> </span>`}<span class="tw-word" aria-hidden="true">${[...word].map((ch) => html`<span class="tw-char" style=${{ animationDelay: `${(n++) * 15}ms` }}>${ch}</span>`)}</span>`)}
    </h1>`;
  }
}

render(html`<${App} />`, document.getElementById('root'));
