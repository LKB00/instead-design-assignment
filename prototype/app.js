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
};

const Icon = ({ name, size = 15, stroke = 1.75 }) => html`
  <svg width=${size} height=${size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width=${stroke} stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PATHS[name]}</svg>`;

// ---------- Mock data ----------
const ENTITY = { '1040': 'Individual', '1120': 'C Corp', '1120S': 'S Corp', '1065': 'Partnership', '1041': 'Trust & Estate' };

function clientsFor(scenario) {
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

const fullName = (c) => c.name || `${c.first} ${c.last}`;
const railName = (c) => c.name || `${c.last}, ${c.first}`;
const iconFor = (entity) => (entity === '1040' ? 'userRound' : entity === '1041' ? 'landmark' : 'building');

// ---------- App ----------
class App extends Component {
  constructor() {
    super();
    this.state = {
      scenario: 'grouped',
      tab: 'clients',
      scope: null, // { type: 'client' | 'workflow', id }
      seenTip: false,
      showTip: false,
      menu: false,
      draft: '',
      typing: false,
      threads: {
        ashish: [{ from: 'assistant', text: "Hi Lokesh, good to be working with you on Ashish Khoshya's file. His 1040 workpaper is two of three steps through review — want me to pull up what's left?" }],
        c1: [{ from: 'assistant', text: "Meera Iyer's K-1 from Alderwood Partners still hasn't come in, and her return is due in 2 days. I can draft a reminder to her, or file an extension now — which would you like?" }],
      },
      selectedWorkflow: null,
    };
    this.scrollPos = { clients: 0, workflows: 0 };
    this.onKeyDown = (e) => { if (e.key === 'Escape') this.setState({ menu: false, showTip: false }); };
  }

  componentDidMount() { document.addEventListener('keydown', this.onKeyDown); }
  componentWillUnmount() { document.removeEventListener('keydown', this.onKeyDown); }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tab !== this.state.tab && this.listEl) {
      this.listEl.scrollTop = this.scrollPos[this.state.tab] || 0;
    }
    if (this.chatEl) this.chatEl.scrollTop = this.chatEl.scrollHeight;
    const scopeChanged = prevState.scope !== this.state.scope;
    if (scopeChanged && this.inputEl) this.inputEl.focus();
  }

  setTab(tab) {
    if (tab === this.state.tab) return;
    if (this.listEl) this.scrollPos[this.state.tab] = this.listEl.scrollTop;
    this.setState({ tab });
  }

  pickClient(id) {
    this.setState((s) => ({ scope: { type: 'client', id }, seenTip: true, showTip: !s.seenTip, menu: false }));
  }

  pickWorkflow(id) {
    this.setState({ scope: { type: 'workflow', id }, menu: false, showTip: false });
  }

  clearScope() {
    this.setState({ scope: null, showTip: false, menu: false });
  }

  replyFor(scope, clients) {
    if (!scope) return 'Happy to help. Should I run this across your whole book, or for a specific client? You can also pick one from the left.';
    if (scope.type === 'client') {
      const c = clients.find((x) => x.id === scope.id);
      return `On it — working inside ${c ? fullName(c) : 'this client'}'s file, using their documents and prior-year return.`;
    }
    const w = ALL_WF.find((x) => x.id === scope.id);
    return w ? `Added to “${w.name}.” ${w.done} of ${w.total} done so far — I'll update the checklist as I go.` : 'Noted.';
  }

  send(clients) {
    const text = this.state.draft.trim();
    if (!text) return;
    const s = this.state.scope;
    const key = s ? (s.type === 'client' ? s.id : `wf:${s.id}`) : 'general';
    const answer = this.replyFor(s, clients);
    this.setState((st) => ({
      threads: { ...st.threads, [key]: (st.threads[key] || []).concat([{ from: 'user', text }]) },
      draft: '', typing: true, menu: false, showTip: false,
    }));
    setTimeout(() => {
      this.setState((st) => ({
        typing: false,
        threads: { ...st.threads, [key]: (st.threads[key] || []).concat([{ from: 'assistant', text: answer }]) },
      }));
    }, 900);
  }

  // ---------- render pieces ----------
  renderClientRow(c, { selected, divider, wf }) {
    const attn = c.status === 'needs_attention';
    const showDot = attn || c.status === 'in_progress';
    return html`
      ${divider && html`<div class="divider"></div>`}
      <button class=${'row' + (selected ? ' on' : '') + (attn ? ' tall' : '')} onClick=${() => this.pickClient(c.id)}
        aria-label=${`${fullName(c)}, ${ENTITY[c.entity] || c.entity}${attn ? ', needs attention' : ''}`}>
        <div class="row-inner">
          <div class="row-icon">
            <${Icon} name=${iconFor(c.entity)} size=${18} stroke=${1.5} />
            ${showDot && html`<span class="status-dot" style=${{ background: attn ? 'var(--amber)' : 'rgba(36,40,44,0.5)' }}></span>`}
          </div>
          <div class="row-text">
            <div class="row-name">${railName(c)}</div>
            ${attn && html`<div class="row-note">${c.note}</div>`}
          </div>
          ${wf && html`<span class="meta-pill" title=${`${wf.name} — ${wf.done} of ${wf.total} done`}><${Icon} name="workflow" size=${11} stroke=${2} />${wf.done}/${wf.total}</span>`}
          <span class="badge">${c.entity}</span>
        </div>
      </button>`;
  }

  renderWorkflowRow(w, sub) {
    const s = this.state.scope;
    const selected = s && s.type === 'workflow' && s.id === w.id;
    return html`
      <button class=${'row tall' + (selected ? ' on' : '')} onClick=${() => this.pickWorkflow(w.id)}
        aria-label=${`${w.name}, ${w.done} of ${w.total} done`}>
        <div class="row-inner">
          <div class="row-icon"><${Icon} name="workflow" size=${18} stroke=${1.5} /></div>
          <div class="row-text">
            <div class="row-name">${w.name}</div>
            <div class="row-note">${sub}</div>
          </div>
          <span class="meta-pill">${w.done} of ${w.total}</span>
        </div>
      </button>`;
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
    const key = sc ? sc.id : sw ? `wf:${sw.id}` : 'general';
    const messages = st.threads[key] || [];
    const hasMessages = messages.length > 0;
    const firstGeneral = (st.threads.general || []).find((m) => m.from === 'user');

    let heroText = 'How can I support your firm today?';
    if (sc) heroText = `How can I support ${fullName(sc)}?`;
    if (sw) heroText = `Let’s keep “${sw.name}” moving.`;

    const canSend = st.draft.trim().length > 0;
    const isClients = st.tab === 'clients';

    return html`
      <div class="app">
        <div class="banner-wrap">
          <div class="banner">
            <div><b>Lokesh Kumar Bhatia</b> trial ends in 7 days.</div>
            <button class="btn-dark">Schedule with the Instead team</button>
          </div>
        </div>

        <div class="body">
          <!-- RAIL -->
          <aside class="rail">
            <div class="wordmark">instead</div>

            <div class="toolbar">
              <div class="toggle" role="tablist">
                <button role="tab" aria-selected=${isClients} onClick=${() => this.setTab('clients')}><${Icon} name="users" size=${16} stroke=${1.6} />Clients</button>
                <button role="tab" aria-selected=${!isClients} onClick=${() => this.setTab('workflows')}><${Icon} name="workflow" size=${16} stroke=${1.6} />Workflows</button>
              </div>
              <button class="round-btn" aria-label="Library"><${Icon} name="library" size=${16} stroke=${1.6} /></button>
              <button class="round-btn" aria-label="New thread" onClick=${() => this.clearScope()}><${Icon} name="messagePlus" size=${16} stroke=${1.6} /></button>
            </div>

            <div class="clients-pane">
            <div class="section-head">
              ${isClients
                ? html`<span class="label">Clients</span>
                    <div class="head-icons">
                      <button class="ic" aria-label="Search clients"><${Icon} name="search" size=${16} stroke=${1.6} /></button>
                      <button class="ic" aria-label="Archived"><${Icon} name="archiveX" size=${16} stroke=${1.6} /></button>
                      <button class="ic" aria-label="Sort"><${Icon} name="arrowUpDown" size=${16} stroke=${1.6} /></button>
                      <button class="ic" aria-label="Filter"><${Icon} name="listFilter" size=${16} stroke=${1.6} /></button>
                      <button class="ic" aria-label="Add client"><${Icon} name="plus" size=${16} stroke=${1.6} /></button>
                    </div>`
                : html`<span class="label">Workflows</span>
                    <div class="head-icons">
                      <button class="ic" aria-label="Search workflows"><${Icon} name="search" size=${16} stroke=${1.6} /></button>
                      <button class="ic" aria-label="Start a workflow" onClick=${() => this.setState((s) => ({ menu: !s.menu }))}><${Icon} name="plus" size=${16} stroke=${1.6} /></button>
                    </div>`}
            </div>

            <div class="list" ref=${(el) => (this.listEl = el)}>
              ${isClients
                ? html`
                    ${grouped && html`<div class="group-label"><span class="dot"></span><b>Needs you</b> · ${attention.length}</div>`}
                    ${ordered.map((c, i) => this.renderClientRow(c, {
                      selected: sc && sc.id === c.id,
                      divider: grouped && i === attention.length,
                      wf: wfByClient[c.id],
                    }))}
                    <button class="add-row"><${Icon} name="plus" size=${16} stroke=${1.6} />Add new client</button>`
                : html`
                    <div class="group-label">Across clients</div>
                    ${WORKFLOWS.across.map((w) => this.renderWorkflowRow(w, `${w.clients} clients`))}
                    <div class="group-label spaced">Single client</div>
                    ${WORKFLOWS.single.map((w) => this.renderWorkflowRow(w, w.clientName))}`}
            </div>
            </div>

            <div class="threads-pane">
              <div class="section-head">
                <span class="label">Threads</span>
                <div class="head-icons"><button class="ic" aria-label="New thread" onClick=${() => this.clearScope()}><${Icon} name="plus" size=${16} stroke=${1.6} /></button></div>
              </div>
              <div class="threads-list">
                ${firstGeneral
                  ? html`<button class=${'row' + (!scoped ? ' on' : '')} onClick=${() => this.clearScope()}>
                      <div class="thread-row"><span class="row-name">${firstGeneral.text}</span><span class="thread-when">Now</span></div>
                    </button>`
                  : html`<div class="empty-threads"><${Icon} name="messages" size=${17} stroke=${1.5} />Start your first thread</div>`}
              </div>
            </div>

            <div class="user-card">
              <div class="serif name">Lokesh Kumar Bhatia</div>
              <div class="user-card-row">
                <div class="initials serif">LB</div>
                <div class="head-icons" style=${{ gap: '18px', paddingRight: '2px' }}>
                  <button class="ic" aria-label="Invite teammate"><${Icon} name="userPlus" size=${16} stroke=${1.6} /></button>
                  <button class="ic" aria-label="Settings"><${Icon} name="settings2" size=${16} stroke=${1.6} /></button>
                </div>
              </div>
            </div>
          </aside>

          <!-- MAIN -->
          <main class="main">
            ${!hasMessages && html`<div class="spacer"></div><h1 class="serif hero">${heroText}</h1>`}

            ${hasMessages && html`
              <div class="chat-scroll" ref=${(el) => (this.chatEl = el)}>
                <div class="chat-col">
                  <h2 class="serif thread-heading">${sc ? fullName(sc) : sw ? sw.name : 'Your firm'}</h2>
                  ${messages.map((m) => (m.from === 'user'
                    ? html`<div class="msg-user"><div class="serif">${m.text}</div></div>`
                    : html`<div class="msg-ai">${m.text}</div>
                        <div class="msg-actions">
                          <button class="ic" aria-label="Good response"><${Icon} name="thumbsUp" size=${16} stroke=${1.6} /></button>
                          <button class="ic" aria-label="Bad response"><${Icon} name="thumbsDown" size=${16} stroke=${1.6} /></button>
                          <button class="ic" aria-label="Copy"><${Icon} name="copy" size=${16} stroke=${1.6} /></button>
                        </div>`))}
                  ${st.typing && html`<div class="thinking"><i></i><i></i><i></i></div>`}
                </div>
              </div>`}

            <div class=${'composer-wrap' + (hasMessages ? ' docked' : '')}>
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
                      <div class="row-text">
                        <div class="row-name">${w.name}</div>
                        <div class="row-note">${w.clients ? `${w.clients} clients` : w.clientName} · ${w.done} of ${w.total}</div>
                      </div>
                    </button>`)}
                </div>`}

              <div class=${'tray' + (scoped ? ' scoped' : '')}>
                ${scoped && html`
                  <div class="tray-chip-row">
                    <div class="scope-chip">
                      <${Icon} name=${sc ? 'userRound' : 'workflow'} size=${16} stroke=${1.6} />
                      <span>${sc ? fullName(sc) : sw.name}</span>
                      <span class="badge">${sc ? sc.entity : `${sw.done} of ${sw.total}`}</span>
                      <button class="chip-x" aria-label="Clear scope, back to whole firm" onClick=${() => this.clearScope()}><${Icon} name="x" size=${13} stroke=${2} /></button>
                    </div>
                  </div>`}

                <div class="composer">
                  <input ref=${(el) => (this.inputEl = el)} type="text"
                    placeholder=${scoped ? 'Ask a follow up…' : 'Give me a task or question to work on…'}
                    value=${st.draft}
                    onInput=${(e) => this.setState({ draft: e.target.value })}
                    onKeyDown=${(e) => { if (e.key === 'Enter') { e.preventDefault(); this.send(clients); } }} />
                  <div class="composer-controls">
                    <div class="controls-group">
                      <button class="circ" aria-label="Attach files"><${Icon} name="paperclip" size=${16} stroke=${1.6} /></button>
                      <button class="circ" aria-label="Settings"><${Icon} name="settings2" size=${16} stroke=${1.6} /></button>
                      <button class=${'circ' + (st.menu ? ' active' : '')} aria-label="Start a workflow" aria-expanded=${st.menu}
                        onClick=${() => this.setState((s) => ({ menu: !s.menu, showTip: false }))}><${Icon} name="workflow" size=${16} stroke=${1.6} /></button>
                    </div>
                    <div class="controls-group">
                      <button class="circ" aria-label="Dictate"><${Icon} name="mic" size=${16} stroke=${1.6} /></button>
                      <button class=${'send' + (canSend ? ' ready' : '')} aria-label="Send" onClick=${() => this.send(clients)}><${Icon} name="arrowUp" size=${16} stroke=${1.8} /></button>
                    </div>
                  </div>
                </div>
              </div>

              ${!scoped && !hasMessages && attention.length > 0 && html`
                <div class="needs-you">
                  <span class="needs-you-label">Needs you today</span>
                  ${attention.slice(0, 3).map((c) => html`
                    <button class="need-chip" onClick=${() => this.pickClient(c.id)}>
                      <span class="dot"></span><span>${fullName(c)}</span><span class="note">${c.note}</span>
                    </button>`)}
                </div>`}
            </div>

            ${!hasMessages && html`<div class="spacer lower"></div>`}
          </main>
        </div>

        <div class="scenario" aria-label="Prototype data scenario">
          <span>Data</span>
          ${[['grouped', '12 clients'], ['few-attention', '5 clients'], ['calm', 'Calm']].map(([id, label]) => html`
            <button aria-pressed=${String(st.scenario === id)} onClick=${() => this.setState({ scenario: id, scope: null, showTip: false })}>${label}</button>`)}
        </div>
      </div>`;
  }
}

render(html`<${App} />`, document.getElementById('root'));
