const PLAN = ["Génesis 1-3", "Génesis 4-7", "Génesis 8-10", "Génesis 11-13", "Génesis 14-16", "Génesis 17-20", "Génesis 21-23", "Génesis 24-26", "Génesis 27-29", "Génesis 30-33", "Génesis 34-36", "Génesis 37-39", "Génesis 40-42", "Génesis 43-46", "Génesis 47-49", "Génesis 50; Éxodo 1-2", "Éxodo 3-5", "Éxodo 6-9", "Éxodo 10-12", "Éxodo 13-15", "Éxodo 16-18", "Éxodo 19-22", "Éxodo 23-25", "Éxodo 26-28", "Éxodo 29-31", "Éxodo 32-35", "Éxodo 36-38", "Éxodo 39-40; Levítico 1", "Levítico 2-4", "Levítico 5-8", "Levítico 9-11", "Levítico 12-14", "Levítico 15-17", "Levítico 18-21", "Levítico 22-24", "Levítico 25-27", "Números 1-4", "Números 5-7", "Números 8-10", "Números 11-13", "Números 14-17", "Números 18-20", "Números 21-23", "Números 24-26", "Números 27-30", "Números 31-33", "Números 34-36", "Deuteronomio 1-3", "Deuteronomio 4-7", "Deuteronomio 8-10", "Deuteronomio 11-13", "Deuteronomio 14-16", "Deuteronomio 17-20", "Deuteronomio 21-23", "Deuteronomio 24-26", "Deuteronomio 27-29", "Deuteronomio 30-33", "Deuteronomio 34; Josué 1-2", "Josué 3-5", "Josué 6-8", "Josué 9-12", "Josué 13-15", "Josué 16-18", "Josué 19-21", "Josué 22-24; Jueces 1", "Jueces 2-4", "Jueces 5-7", "Jueces 8-11", "Jueces 12-14", "Jueces 15-17", "Jueces 18-20", "Jueces 21; Rut 1-3", "Rut 4; 1 Samuel 1-2", "1 Samuel 3-5", "1 Samuel 6-8", "1 Samuel 9-12", "1 Samuel 13-15", "1 Samuel 16-18", "1 Samuel 19-21", "1 Samuel 22-25", "1 Samuel 26-28", "1 Samuel 29-31", "2 Samuel 1-3", "2 Samuel 4-7", "2 Samuel 8-10", "2 Samuel 11-13", "2 Samuel 14-16", "2 Samuel 17-20", "2 Samuel 21-23", "2 Samuel 24; 1 Reyes 1-2", "1 Reyes 3-5", "1 Reyes 6-9", "1 Reyes 10-12", "1 Reyes 13-15", "1 Reyes 16-18", "1 Reyes 19-22", "2 Reyes 1-3", "2 Reyes 4-6", "2 Reyes 7-9", "2 Reyes 10-13", "2 Reyes 14-16", "2 Reyes 17-19", "2 Reyes 20-23", "2 Reyes 24-25; 1 Crónicas 1", "1 Crónicas 2-4", "1 Crónicas 5-7", "1 Crónicas 8-11", "1 Crónicas 12-14", "1 Crónicas 15-17", "1 Crónicas 18-20", "1 Crónicas 21-24", "1 Crónicas 25-27", "1 Crónicas 28-29; 2 Crónicas 1", "2 Crónicas 2-4", "2 Crónicas 5-8", "2 Crónicas 9-11", "2 Crónicas 12-14", "2 Crónicas 15-17", "2 Crónicas 18-21", "2 Crónicas 22-24", "2 Crónicas 25-27", "2 Crónicas 28-30", "2 Crónicas 31-34", "2 Crónicas 35-36; Esdras 1", "Esdras 2-4", "Esdras 5-7", "Esdras 8-10; Nehemías 1", "Nehemías 2-4", "Nehemías 5-7", "Nehemías 8-10", "Nehemías 11-13; Ester 1", "Ester 2-4", "Ester 5-7", "Ester 8-10; Job 1", "Job 2-4", "Job 5-7", "Job 8-10", "Job 11-14", "Job 15-17", "Job 18-20", "Job 21-23", "Job 24-27", "Job 28-30", "Job 31-33", "Job 34-36", "Job 37-40", "Job 41-42; Salmos 1", "Salmos 2-4", "Salmos 5-7", "Salmos 8-11", "Salmos 12-14", "Salmos 15-17", "Salmos 18-20", "Salmos 21-24", "Salmos 25-27", "Salmos 28-30", "Salmos 31-33", "Salmos 34-37", "Salmos 38-40", "Salmos 41-43", "Salmos 44-46", "Salmos 47-50", "Salmos 51-53", "Salmos 54-56", "Salmos 57-59", "Salmos 60-63", "Salmos 64-66", "Salmos 67-69", "Salmos 70-73", "Salmos 74-76", "Salmos 77-79", "Salmos 80-82", "Salmos 83-86", "Salmos 87-89", "Salmos 90-92", "Salmos 93-95", "Salmos 96-99", "Salmos 100-102", "Salmos 103-105", "Salmos 106-108", "Salmos 109-112", "Salmos 113-115", "Salmos 116-118", "Salmos 119-121", "Salmos 122-125", "Salmos 126-128", "Salmos 129-131", "Salmos 132-134", "Salmos 135-138", "Salmos 139-141", "Salmos 142-144", "Salmos 145-147", "Salmos 148-150; Proverbios 1", "Proverbios 2-4", "Proverbios 5-7", "Proverbios 8-10", "Proverbios 11-14", "Proverbios 15-17", "Proverbios 18-20", "Proverbios 21-24", "Proverbios 25-27", "Proverbios 28-30", "Proverbios 31; Eclesiastés 1-2", "Eclesiastés 3-6", "Eclesiastés 7-9", "Eclesiastés 10-12", "Cantares 1-3", "Cantares 4-7", "Cantares 8; Isaías 1-2", "Isaías 3-5", "Isaías 6-8", "Isaías 9-12", "Isaías 13-15", "Isaías 16-18", "Isaías 19-21", "Isaías 22-25", "Isaías 26-28", "Isaías 29-31", "Isaías 32-34", "Isaías 35-38", "Isaías 39-41", "Isaías 42-44", "Isaías 45-47", "Isaías 48-51", "Isaías 52-54", "Isaías 55-57", "Isaías 58-60", "Isaías 61-64", "Isaías 65-66; Jeremías 1", "Jeremías 2-4", "Jeremías 5-7", "Jeremías 8-11", "Jeremías 12-14", "Jeremías 15-17", "Jeremías 18-21", "Jeremías 22-24", "Jeremías 25-27", "Jeremías 28-30", "Jeremías 31-34", "Jeremías 35-37", "Jeremías 38-40", "Jeremías 41-43", "Jeremías 44-47", "Jeremías 48-50", "Jeremías 51-52; Lamentaciones 1", "Lamentaciones 2-4", "Lamentaciones 5; Ezequiel 1-3", "Ezequiel 4-6", "Ezequiel 7-9", "Ezequiel 10-12", "Ezequiel 13-16", "Ezequiel 17-19", "Ezequiel 20-22", "Ezequiel 23-25", "Ezequiel 26-29", "Ezequiel 30-32", "Ezequiel 33-35", "Ezequiel 36-38", "Ezequiel 39-42", "Ezequiel 43-45", "Ezequiel 46-48", "Daniel 1-3", "Daniel 4-7", "Daniel 8-10", "Daniel 11-12; Oseas 1", "Oseas 2-5", "Oseas 6-8", "Oseas 9-11", "Oseas 12-14", "Joel 1-3; Amós 1", "Amós 2-4", "Amós 5-7", "Amós 8-9; Abdías 1", "Jonás 1-4", "Miqueas 1-3", "Miqueas 4-6", "Miqueas 7; Nahúm 1-2", "Nahúm 3; Habacuc 1-3", "Sofonías 1-3", "Hageo 1-2; Zacarías 1", "Zacarías 2-4", "Zacarías 5-8", "Zacarías 9-11", "Zacarías 12-14", "Malaquías 1-3", "Malaquías 4; Mateo 1-3", "Mateo 4-6", "Mateo 7-9", "Mateo 10-12", "Mateo 13-16", "Mateo 17-19", "Mateo 20-22", "Mateo 23-25", "Mateo 26-28; Marcos 1", "Marcos 2-4", "Marcos 5-7", "Marcos 8-10", "Marcos 11-14", "Marcos 15-16; Lucas 1", "Lucas 2-4", "Lucas 5-8", "Lucas 9-11", "Lucas 12-14", "Lucas 15-17", "Lucas 18-21", "Lucas 22-24", "Juan 1-3", "Juan 4-6", "Juan 7-10", "Juan 11-13", "Juan 14-16", "Juan 17-19", "Juan 20-21; Hechos 1-2", "Hechos 3-5", "Hechos 6-8", "Hechos 9-11", "Hechos 12-15", "Hechos 16-18", "Hechos 19-21", "Hechos 22-24", "Hechos 25-28", "Romanos 1-3", "Romanos 4-6", "Romanos 7-9", "Romanos 10-13", "Romanos 14-16", "1 Corintios 1-3", "1 Corintios 4-6", "1 Corintios 7-10", "1 Corintios 11-13", "1 Corintios 14-16", "2 Corintios 1-4", "2 Corintios 5-7", "2 Corintios 8-10", "2 Corintios 11-13", "Gálatas 1-4", "Gálatas 5-6; Efesios 1", "Efesios 2-4", "Efesios 5-6; Filipenses 1", "Filipenses 2-4; Colosenses 1", "Colosenses 2-4", "1 Tesalonicenses 1-3", "1 Tesalonicenses 4-5; 2 Tesalonicenses 1", "2 Tesalonicenses 2-3; 1 Timoteo 1-2", "1 Timoteo 3-5", "1 Timoteo 6; 2 Timoteo 1-2", "2 Timoteo 3-4; Tito 1", "Tito 2-3; Filemón 1; Hebreos 1", "Hebreos 2-4", "Hebreos 5-7", "Hebreos 8-10", "Hebreos 11-13; Santiago 1", "Santiago 2-4", "Santiago 5; 1 Pedro 1-2", "1 Pedro 3-5", "2 Pedro 1-3; 1 Juan 1", "1 Juan 2-4", "1 Juan 5; 2 Juan 1; 3 Juan 1", "Judas 1; Apocalipsis 1-2", "Apocalipsis 3-6", "Apocalipsis 7-9", "Apocalipsis 10-12", "Apocalipsis 13-15", "Apocalipsis 16-19", "Apocalipsis 20-22"];
const TOTAL_DAYS = PLAN.length;
const STORAGE_KEY = 'cada-dia-biblia-progreso';
const THEME_KEY = 'cada-dia-biblia-tema';

const MONTH_NAMES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const DAY_NAMES_SHORT = ['dom','lun','mar','mié','jue','vie','sáb'];

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed.startDate) return null;
    if (!parsed.completed) parsed.completed = {};
    return parsed;
  } catch (e) {
    return null;
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) { /* ignore */ }
}

function loadTheme() {
  try {
    const t = localStorage.getItem(THEME_KEY);
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('data-theme', t);
    }
  } catch (e) { /* ignore */ }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const effectiveCurrent = current || (prefersDark ? 'dark' : 'light');
  const next = effectiveCurrent === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
}

function fmtDate(d) {
  return `${d.getDate()} de ${MONTH_NAMES[d.getMonth()]}`;
}

function dateForDay(dayNum) {
  const start = new Date(state.startDate + 'T00:00:00');
  const d = new Date(start);
  d.setDate(d.getDate() + (dayNum - 1));
  return d;
}

function todayStr() {
  const t = new Date();
  return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`;
}

function currentDayNumber() {
  const start = new Date(state.startDate + 'T00:00:00');
  const now = new Date();
  const startMid = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const nowMid = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = Math.floor((nowMid - startMid) / 86400000) + 1;
  return diff;
}

function isDone(dayNum) {
  return !!state.completed[dayNum];
}

function toggleDone(dayNum, showToastMsg) {
  if (state.completed[dayNum]) {
    delete state.completed[dayNum];
  } else {
    state.completed[dayNum] = true;
    if (showToastMsg) showToast('Lectura marcada — que la palabra de hoy te acompañe.');
  }
  saveState();
  render();
}

function computeStreak() {
  const completedDays = Object.keys(state.completed).map(Number).filter(n => n >= 1 && n <= TOTAL_DAYS);
  if (completedDays.length === 0) return 0;
  const maxDone = Math.max(...completedDays);
  let streak = 0;
  let d = maxDone;
  while (isDone(d) && d >= 1) {
    streak++;
    d--;
  }
  return streak;
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.remove('show'), 2600);
}

function checkSvg() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 7"/></svg>';
}

function renderHero() {
  const dayNum = currentDayNumber();
  const heroEl = document.getElementById('heroSection');

  if (dayNum > TOTAL_DAYS) {
    heroEl.innerHTML = `
      <div class="date-line">Plan completado</div>
      <h1>Has recorrido toda la Escritura este año.</h1>
      <p class="complete-note">Puedes reiniciar el progreso desde el pie de la página para comenzar de nuevo.</p>
    `;
    return;
  }

  const clampedDay = Math.max(1, dayNum);
  const d = dateForDay(clampedDay);
  const reading = PLAN[clampedDay - 1];
  const done = isDone(clampedDay);
  const isFuture = dayNum < 1;

  heroEl.innerHTML = `
    <div class="date-line">
      <span class="day-of">Día ${clampedDay}</span> de 365 · ${fmtDate(d)}
    </div>
    <h1>${reading}</h1>
    <div class="actions">
      <button class="mark-btn ${done ? 'done' : ''}" id="markTodayBtn">
        ${done ? checkSvg() + ' Lectura marcada' : 'Marcar como leída'}
      </button>
      ${done ? '' : '<span class="complete-note">Tómate tu tiempo. No hay prisa.</span>'}
    </div>
  `;

  document.getElementById('markTodayBtn').addEventListener('click', () => {
    toggleDone(clampedDay, !isDone(clampedDay));
  });
}

function renderChain() {
  const chain = document.getElementById('chain');
  const todayNum = currentDayNumber();
  let html = '';
  let doneCount = 0;
  for (let i = 1; i <= TOTAL_DAYS; i++) {
    const done = isDone(i);
    if (done) doneCount++;
    let cls = 'tick';
    if (done) cls += ' done';
    else if (i === todayNum) cls += ' today';
    else if (i < todayNum) cls += ' pending';
    html += `<div class="${cls}" data-day="${i}" title="Día ${i}: ${PLAN[i-1]}"></div>`;
  }
  chain.innerHTML = html;
  document.getElementById('chainFrac').textContent = `${doneCount} / ${TOTAL_DAYS}`;

  chain.querySelectorAll('.tick').forEach(el => {
    el.addEventListener('click', () => {
      const day = Number(el.dataset.day);
      toggleDone(day, false);
    });
  });

  return doneCount;
}

function renderPending() {
  const todayNum = currentDayNumber();
  const list = document.getElementById('pendingList');
  const countEl = document.getElementById('pendingCount');
  const pending = [];
  const upper = Math.min(todayNum - 1, TOTAL_DAYS);
  for (let i = 1; i <= upper; i++) {
    if (!isDone(i)) pending.push(i);
  }

  countEl.textContent = pending.length > 0 ? `${pending.length} sin marcar` : '';

  if (pending.length === 0) {
    list.innerHTML = '<div class="pending-empty">No tienes lecturas pendientes. Vas al día.</div>';
    return;
  }

  list.className = 'pending-list';
  list.innerHTML = pending.map(day => {
    const d = dateForDay(day);
    return `
      <div class="day-row" data-day="${day}">
        <span class="num">${day}</span>
        <span class="check"></span>
        <span class="info">
          <div class="passage">${PLAN[day-1]}</div>
          <div class="meta overdue">${fmtDate(d)} · pendiente</div>
        </span>
      </div>
    `;
  }).join('');

  list.querySelectorAll('.day-row').forEach(el => {
    el.addEventListener('click', () => toggleDone(Number(el.dataset.day), false));
  });
}

function renderFullPlan() {
  const container = document.getElementById('fullPlan');
  const todayNum = currentDayNumber();
  const groups = [];
  let currentKey = null;
  let currentGroup = null;

  for (let i = 1; i <= TOTAL_DAYS; i++) {
    const d = dateForDay(i);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    if (key !== currentKey) {
      currentKey = key;
      currentGroup = { label: `${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`, days: [] };
      groups.push(currentGroup);
    }
    currentGroup.days.push(i);
  }

  container.innerHTML = groups.map(g => {
    const rows = g.days.map(day => {
      const done = isDone(day);
      const isToday = day === todayNum;
      let rowClass = 'day-row';
      if (done) rowClass += ' done';
      if (isToday) rowClass += ' today';
      const d = dateForDay(day);
      let metaText = `${DAY_NAMES_SHORT[d.getDay()]} ${d.getDate()}`;
      if (isToday) metaText += ' · hoy';
      return `
        <div class="${rowClass}" data-day="${day}">
          <span class="num">${day}</span>
          <span class="check">${done ? checkSvg() : ''}</span>
          <span class="info">
            <div class="passage">${PLAN[day-1]}</div>
            <div class="meta">${metaText}</div>
          </span>
        </div>
      `;
    }).join('');
    return `<div class="month-group"><div class="month-title">${g.label}</div>${rows}</div>`;
  }).join('');

  container.querySelectorAll('.day-row').forEach(el => {
    el.addEventListener('click', () => toggleDone(Number(el.dataset.day), false));
  });
}

function renderStreak() {
  const streak = computeStreak();
  const pill = document.getElementById('streakPill');
  if (streak >= 2) {
    pill.hidden = false;
    document.getElementById('streakNum').textContent = streak;
  } else {
    pill.hidden = true;
  }
}

function renderFooter(doneCount) {
  const pct = Math.round((doneCount / TOTAL_DAYS) * 100);
  document.getElementById('progressSummary').textContent = `${pct}% del año completado · comenzaste el ${fmtDate(new Date(state.startDate + 'T00:00:00'))}`;
}

function render() {
  renderHero();
  const doneCount = renderChain();
  renderPending();
  renderFullPlan();
  renderStreak();
  renderFooter(doneCount);
}

function showOnboarding() {
  document.getElementById('onboard').hidden = false;
  document.getElementById('app').hidden = true;
  const input = document.getElementById('startDateInput');
  input.value = todayStr();
}

function showApp() {
  document.getElementById('onboard').hidden = true;
  document.getElementById('app').hidden = false;
  render();
}

document.getElementById('startBtn').addEventListener('click', () => {
  const val = document.getElementById('startDateInput').value || todayStr();
  state = { startDate: val, completed: {} };
  saveState();
  showApp();
});

document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('¿Reiniciar tu progreso? Se borrará todo lo marcado y podrás elegir una nueva fecha de inicio.')) {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    state = null;
    showOnboarding();
  }
});

document.getElementById('settingsBtn').addEventListener('click', () => {
  if (!state) return;
  const newDate = prompt('Cambiar fecha de inicio (AAAA-MM-DD):', state.startDate);
  if (newDate && /^\d{4}-\d{2}-\d{2}$/.test(newDate)) {
    state.startDate = newDate;
    saveState();
    render();
  }
});

document.getElementById('themeToggle').addEventListener('click', toggleTheme);

document.getElementById('planToggle').addEventListener('click', () => {
  const el = document.getElementById('fullPlan');
  const btn = document.getElementById('planToggle');
  const closing = !el.classList.contains('closed');
  el.classList.toggle('closed');
  btn.classList.toggle('open');
  btn.querySelector('span').textContent = closing ? 'Ver los 365 días' : 'Ocultar el plan';
});

loadTheme();
if (state && state.startDate) {
  showApp();
} else {
  showOnboarding();
}
