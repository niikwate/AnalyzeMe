// === 1. CONFIGURATIE & CONSTANTEN ===
const CONFIG = {
  STORAGE_ATHLETE: 'intervals_athlete_id',
  STORAGE_KEY: 'intervals_api_key',
  BASE_URL: 'https://intervals.icu/api/v1'
};

const ICONS = {
  run: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="4.5" r="2.2"/><path d="M13.8 7.5c-1.4-.3-3.1-.3-4.6 0l-2.6 2.8c-.4.4-.4 1.1 0 1.5.4.4 1.1.4 1.5 0l2.1-2.2.6 2.4-2.4 4.1-3.8.5c-.6.1-1 .6-.9 1.2.1.6.6 1 1.2.9l4.4-.6c.3 0 .6-.2.8-.5l1.6-2.7 3.4 1.6v4.8c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1v-5.5c0-.4-.2-.8-.6-1l-3.1-1.5 1.1-4.8 1.9 1.5c.2.2.5.3.8.3l3.1-.5c.6-.1 1-.6.9-1.2-.1-.6-.6-1-1.2-.9l-2.6.4-2.3-2.9z"/><path d="M14.8 11.4l2.7 2.1c.2.2.5.2.8.2l3.1-.5c.6-.1 1-.6.9-1.2-.1-.6-.6-1-1.2-.9l-2.6.4-2.2-1.7-.8 1.6z"/></svg>`,
  ride: `<svg viewBox="0 0 28 20" width="18" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="6.5" cy="14" r="4.2"/><circle cx="21.5" cy="14" r="4.2"/><path d="M6.5 14h6.8l5.7-8.2"/><path d="M10.2 5.2h3.4"/><path d="M11.9 5.2l1.4 8.8"/><path d="M11.9 5.2L6.5 14"/><path d="M11.9 5.2h7.6l2.4 8.8"/><path d="M19.5 5.2h2.2c1.4 0 2.3.9 2.3 2.1 0 1.1-.8 1.9-1.9 1.9"/></svg>`,
  other: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  sloth: `<svg class="sloth-icon" width="76" height="48" viewBox="0 0 130 82" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-label="Rustdag">
    <path d="M12 43c-3 0-4.5 3-4.5 6.5s1.5 6.5 4.5 6.5c2.8 0 4.2-3 4.2-6.5S14.8 43 12 43z"/>
    <path d="M12 43c8 1 13 2 18 2"/>
    <path d="M12 56c10-1 18-1.5 26-1.5"/>
    <path d="M46 46.5h10"/>
    <path d="M54 54.5h12"/>
    <path d="M74 47h9"/>
    <path d="M76 54h8"/>
    <path d="M93 46c10-.5 18-2 26-2.5 2.5 0 3.5 2.5 3.5 5.5s-1 5.5-3.5 5.5c-9 0-17 1-27 1.5"/>
    <path d="M19 48.5c3 .3 5 .3 8 0" stroke-width="1.8"/>
    <path d="M104 49.5c4-.3 8-.3 12 0" stroke-width="1.8"/>
    <path d="M104 45c3-3 6-7 9-12"/>
    <path d="M111 36c-5-1-8-5-7-10 5 1 8 5 7 10z"/>
    <path d="M113 35c2-5 6-8 11-7-1 5-5 8-11 7z"/>
    <path d="M30 54c-.5 7 1 14 4.5 18 2 2 5 1.5 5.5-1 .8-4 .2-9-.5-14"/>
    <path d="M35.5 72.5l1.5 3M37.5 72l1.8 2.8M39.3 71l1.7 2.5" stroke-width="2"/>
    <path d="M66 53.5c.5 6 2 11 5 14 2 1.8 4.5 1 4.8-1.5.5-3.5 0-8-.8-12"/>
    <path d="M71.5 68l1.4 2.6M73.5 67.5l1.6 2.4M75.2 66.5l1.5 2.2" stroke-width="2"/>
    <path d="M47 32c7 0 13-4 23-4 13 0 23 7 23 19 0 6-2.5 12-6 17-1.8 2.5-5 2.2-6-.5-1.5-4-1.5-10-1-16"/>
    <path d="M75 49c2-3 4-5 6-6"/>
    <path d="M68 32c2 0 3.5.4 5 1" stroke-width="1.8"/>
    <path d="M76 34.5c1.5.5 2.8 1.2 4 2" stroke-width="1.8"/>
    <path d="M46 41c-1 8-2 17 0 24 .8 2.8 4.5 3.5 6.2 1 2.5-3.8 3.8-11 4.2-19"/>
    <path d="M46.5 66.5l1 3.2M48.8 67l1.2 3M51 66.5l1.3 2.8" stroke-width="2"/>
    <path d="M87 64l1.2 3M89.2 63.5l1.4 2.8M91.2 62.5l1.4 2.5" stroke-width="2"/>
    <path d="M29 29l-2-2.5M32 27.5l-1.5-3" stroke-width="2.2"/>
    <ellipse cx="36" cy="36" rx="13" ry="11.5" transform="rotate(-14 36 36)" fill="#182234"/>
    <path d="M26 37c-1-4 2-7.5 6-7.5 2.2 0 3.5 1 4.5 1s2.5-1.8 5-2c4-.3 7 2.5 6.5 6.5-.5 4.5-5.5 8.5-11.5 9-5.5.4-9.8-2.8-10.5-7z"/>
    <path d="M26.5 36.5c2-1.5 5-1.5 6.5.5-1 2.2-4 3-6.5 1.5"/>
    <path d="M28.5 36.8c1 .7 2.3.6 3.2-.2" stroke-width="2"/>
    <path d="M39.5 33.5c1.8-2 4.8-2.2 6.8-.5-1 2.2-4 3-6.8 1.8"/>
    <path d="M41.3 33.5c1 .6 2.3.5 3.2-.3" stroke-width="2"/>
    <ellipse cx="36.8" cy="37.8" rx="2.2" ry="1.3" transform="rotate(-12 36.8 37.8)" fill="#ffffff"/>
    <path d="M34.8 40.5c1.5 1.2 3.8.8 5-1" stroke-width="2"/>
  </svg>`
};

// === 2. HULPFUNCTIES ===
const Helpers = {
  days: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
  months: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],

  toLocalYMD(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  },

  getMonday(d) {
    const date = new Date(d);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  },

  formatHours(sec) {
    if (!sec || sec <= 0) return '0u 00m';
    const totalMin = Math.round(sec / 60);
    const h = Math.floor(totalMin / 60);
    const m = totalMin % 60;
    return `${h}u ${String(m).padStart(2, '0')}m`;
  },

  isRun(typeStr) {
    if (!typeStr) return false;
    const t = typeStr.toLowerCase();
    return t.includes('run') || t.includes('hardloop') || t.includes('trail');
  },

  isRide(typeStr) {
    if (!typeStr) return false;
    const t = typeStr.toLowerCase();
    return t.includes('ride') || t.includes('cycl') || t.includes('fiets') || t.includes('mtb') || t.includes('gravel') || t.includes('zwift') || t.includes('virtualride');
  },

  getDurationSec(item) {
    return item.moving_time || item.elapsed_time || item.duration || 0;
  },

  getLoad(item) {
    return Math.round(item.icu_training_load || item.training_load || item.tss || 0);
  },

  classifyColorValue(rawVal = '') {
    const val = String(rawVal).toLowerCase().trim();
    if (!val) return null;

    if (val.includes('green') || val.includes('groen') || val.includes('lime') || val.includes('emerald')) {
      return { text: 'Light week', color: '#34d399', bg: 'rgba(52, 211, 153, 0.15)', border: 'rgba(52, 211, 153, 0.4)' };
    }
    if (val.includes('orange') || val.includes('oranje') || val.includes('yellow') || val.includes('geel') || val.includes('amber')) {
      return { text: 'Medium week', color: '#fb923c', bg: 'rgba(251, 146, 60, 0.15)', border: 'rgba(251, 146, 60, 0.4)' };
    }
    if (val.includes('red') || val.includes('rood') || val.includes('crimson') || val.includes('rose')) {
      return { text: 'Hard week', color: '#f87171', bg: 'rgba(248, 113, 113, 0.15)', border: 'rgba(248, 113, 113, 0.4)' };
    }
    if (val.includes('blue') || val.includes('blauw') || val.includes('cyan') || val.includes('sky') || val.includes('aqua') || val.includes('teal')) {
      return { text: 'Herstelweek', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', border: 'rgba(56, 189, 248, 0.4)' };
    }

    const hexMatch = val.match(/#([0-9a-f]{3}|[0-9a-f]{6})\b/i);
    if (hexMatch) {
      let hex = hexMatch[1];
      if (hex.length === 3) {
        hex = hex.split('').map(ch => ch + ch).join('');
      }
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);

      if (b > r + 25 && b > g - 15) {
        return { text: 'Herstelweek', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', border: 'rgba(56, 189, 248, 0.4)' };
      }
      if (g > r + 20 && g > b + 15) {
        return { text: 'Light week', color: '#34d399', bg: 'rgba(52, 211, 153, 0.15)', border: 'rgba(52, 211, 153, 0.4)' };
      }
      if (r > 150 && g > 70 && b < 110) {
        return { text: 'Medium week', color: '#fb923c', bg: 'rgba(251, 146, 60, 0.15)', border: 'rgba(251, 146, 60, 0.4)' };
      }
      if (r > g + 35 && r > b + 35) {
        return { text: 'Hard week', color: '#f87171', bg: 'rgba(248, 113, 113, 0.15)', border: 'rgba(248, 113, 113, 0.4)' };
      }
    }

    return null;
  },

  parseWeekNote(events = []) {
    const noteEvents = events.filter(e => e.category === 'NOTE');
    if (noteEvents.length === 0) return null;

    for (const note of noteEvents) {
      const colorCandidates = [
        note.color,
        note.background_color,
        note.bg_color,
        note.text_color,
        note.name,
        note.description
      ];

      for (const candidate of colorCandidates) {
        const matched = this.classifyColorValue(candidate);
        if (matched) return matched;
      }

      const txt = `${note.name || ''} ${note.description || ''}`.toLowerCase();
      if (txt.includes('herstel') || txt.includes('recovery') || txt.includes('deload')) {
        return { text: 'Herstelweek', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', border: 'rgba(56, 189, 248, 0.4)' };
      }
    }

    return null;
  }
};

// === 3. INSTELLINGEN & API COMMUNICATIE ===
const SettingsManager = {
  init() {
    const openBtn = document.getElementById('openSettingsBtn');
    const saveBtn = document.getElementById('saveSettingsBtn');
    const panel = document.getElementById('settingsBar');

    const savedAthlete = localStorage.getItem(CONFIG.STORAGE_ATHLETE) || '';
    const savedKey = localStorage.getItem(CONFIG.STORAGE_KEY) || '';

    document.getElementById('athleteIdInput').value = savedAthlete;
    document.getElementById('apiKeyInput').value = savedKey;

    if (!savedAthlete || !savedKey) {
      panel.style.display = 'block';
    }

    openBtn?.addEventListener('click', () => {
      panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    });

    saveBtn?.addEventListener('click', () => {
      const athlete = document.getElementById('athleteIdInput').value.trim();
      const key = document.getElementById('apiKeyInput').value.trim();
      if (!athlete || !key) {
        alert('Vul zowel Athlete ID als API Key in.');
        return;
      }
      localStorage.setItem(CONFIG.STORAGE_ATHLETE, athlete);
      localStorage.setItem(CONFIG.STORAGE_KEY, key);
      panel.style.display = 'none';
      WeekPlanner.render();
    });
  },

  getCredentials() {
    return {
      athleteId: localStorage.getItem(CONFIG.STORAGE_ATHLETE),
      apiKey: localStorage.getItem(CONFIG.STORAGE_KEY)
    };
  }
};

const IntervalsAPI = {
  async fetchWeekData(athleteId, apiKey, oldestYMD, newestYMD) {
    const authHeader = 'Basic ' + btoa('API_KEY:' + apiKey);
    const headers = { 'Authorization': authHeader };
    const cleanAthlete = encodeURIComponent(athleteId);

    const eventsUrl = `${CONFIG.BASE_URL}/athlete/${cleanAthlete}/events?oldest=${oldestYMD}&newest=${newestYMD}`;
    const actsUrl = `${CONFIG.BASE_URL}/athlete/${cleanAthlete}/activities?oldest=${oldestYMD}&newest=${newestYMD}`;

    const [eventsRes, actsRes] = await Promise.all([
      fetch(eventsUrl, { headers }),
      fetch(actsUrl, { headers })
    ]);

    if (!eventsRes.ok || !actsRes.ok) {
      throw new Error(`API fout (${eventsRes.status} / ${actsRes.status}). Controleer je Athlete ID en API Key.`);
    }

    const [events, activities] = await Promise.all([eventsRes.json(), actsRes.json()]);
    return { events, activities };
  }
};

// === 4. DEMO DATA (ALS ER NOG GEEN API KEY IS INGEVULD) ===
const DemoData = {
  getForWeek(monday) {
    const d = (offset) => {
      const dt = new Date(monday);
      dt.setDate(monday.getDate() + offset);
      return Helpers.toLocalYMD(dt);
    };

    return {
      events: [
        { id: 99, category: 'NOTE', name: '', color: '#22c55e', start_date_local: d(0) + 'T00:00:00' },
        { id: 1, category: 'WORKOUT', type: 'Run', name: 'Duurloop', start_date_local: d(1) + 'T08:00:00', moving_time: 3600, icu_training_load: 40 },
        { id: 2, category: 'WORKOUT', type: 'Ride', name: 'Dirt Race 1', start_date_local: d(2) + 'T18:00:00', moving_time: 2700, icu_training_load: 70 },
        { id: 3, category: 'WORKOUT', type: 'Run', name: 'Lange duurloop', start_date_local: d(4) + 'T09:00:00', moving_time: 5400, icu_training_load: 60 },
        { id: 4, category: 'WORKOUT', type: 'Ride', name: 'Duurtocht', start_date_local: d(5) + 'T09:00:00', moving_time: 5400, icu_training_load: 60 },
        { id: 5, category: 'WORKOUT', type: 'Run', name: 'Duurloop', start_date_local: d(6) + 'T10:00:00', moving_time: 3600, icu_training_load: 50 }
      ],
      activities: [
        { id: 101, type: 'Run', name: 'Duurloop', start_date_local: d(1) + 'T08:05:00', moving_time: 3600, icu_training_load: 45 },
        { id: 102, type: 'Ride', name: 'Dirt Race 1', start_date_local: d(2) + 'T18:02:00', moving_time: 3780, icu_training_load: 83 },
        { id: 103, type: 'Run', name: 'Lange duurloop', start_date_local: d(4) + 'T09:10:00', moving_time: 5400, icu_training_load: 64 },
        { id: 104, type: 'Ride', name: 'Duurtocht', start_date_local: d(5) + 'T09:05:00', moving_time: 9660, icu_training_load: 91 }
      ]
    };
  }
};

// === 5. MOBIELE INDELING HELPER ===
const MobileLayout = {
  syncProgressOrder() {
    const grids = document.querySelectorAll('.sport-progress-grid');
    if (grids.length < 2) return;

    const firstGrid = grids[0];
    const secondGrid = grids[1];

    const runBox = document.getElementById('runProgressText')?.closest('.progress-box');
    const rideBox = document.getElementById('rideProgressText')?.closest('.progress-box');
    const runLoadBox = document.getElementById('runLoadProgressText')?.closest('.progress-box');
    const rideLoadBox = document.getElementById('rideLoadProgressText')?.closest('.progress-box');

    if (!runBox || !rideBox || !runLoadBox || !rideLoadBox) return;

    if (window.innerWidth <= 768) {
      firstGrid.appendChild(runBox);
      firstGrid.appendChild(runLoadBox);
      firstGrid.appendChild(rideBox);
      firstGrid.appendChild(rideLoadBox);
      secondGrid.style.display = 'none';
    } else {
      secondGrid.style.display = '';
      if (!firstGrid.contains(runBox)) firstGrid.appendChild(runBox);
      if (!firstGrid.contains(rideBox)) firstGrid.appendChild(rideBox);
      if (!secondGrid.contains(runLoadBox)) secondGrid.appendChild(runLoadBox);
      if (!secondGrid.contains(rideLoadBox)) secondGrid.appendChild(rideLoadBox);
    }
  }
};

// === 6. WEEKPLANNING MODULE ===
const WeekPlanner = {
  offset: 0,
  isAnimating: false,

  init() {
    document.getElementById('prevWeekBtn')?.addEventListener('click', () => this.changeWeek(this.offset - 1));
    document.getElementById('nextWeekBtn')?.addEventListener('click', () => this.changeWeek(this.offset + 1));
    document.getElementById('calenderHeading')?.addEventListener('click', () => this.changeWeek(0));
    MobileLayout.syncProgressOrder();
    window.addEventListener('resize', () => MobileLayout.syncProgressOrder());
    this.render();
  },

  changeWeek(newOffset) {
    if (this.isAnimating || this.offset === newOffset) return;
    this.isAnimating = true;

    const animator = document.getElementById('cubeAnimator');
    const goingForward = newOffset > this.offset;
    const exitClass = goingForward ? 'rotate-next' : 'rotate-prev';
    const enterClass = goingForward ? 'rotate-prev' : 'rotate-next';

    animator.classList.add(exitClass);

    setTimeout(async () => {
      this.offset = newOffset;
      await this.render();

      animator.style.transition = 'none';
      animator.classList.remove('rotate-next', 'rotate-prev');
      animator.classList.add(enterClass);

      animator.getBoundingClientRect();

      animator.style.transition = '';
      animator.classList.remove('rotate-next', 'rotate-prev');

      setTimeout(() => {
        this.isAnimating = false;
      }, 350);
    }, 280);
  },

  updateWeekLabel(events) {
    const noteInfo = Helpers.parseWeekNote(events);
    const rangeEl = document.getElementById('dateRangeLabel');

    let badgeEl =
      document.getElementById('weekTypeBadge') ||
      document.getElementById('weekIntensityBadge');

    if (!badgeEl && rangeEl && rangeEl.parentElement) {
      badgeEl = document.createElement('span');
      badgeEl.id = 'weekTypeBadge';
      badgeEl.className = 'date-badge';
      rangeEl.parentElement.insertBefore(badgeEl, rangeEl);
    }

    if (badgeEl && rangeEl && rangeEl.parentElement && badgeEl.nextElementSibling !== rangeEl) {
      rangeEl.parentElement.insertBefore(badgeEl, rangeEl);
    }

    if (!badgeEl) return;

    if (noteInfo) {
      badgeEl.textContent = noteInfo.text;
      badgeEl.style.color = noteInfo.color;
      badgeEl.style.backgroundColor = noteInfo.bg;
      badgeEl.style.border = `1px solid ${noteInfo.border}`;
      badgeEl.style.marginRight = '8px';
      badgeEl.style.display = 'inline-flex';
    } else {
      badgeEl.textContent = '';
      badgeEl.style.display = 'none';
    }
  },

  async render() {
    const now = new Date();
    const currentMonday = Helpers.getMonday(now);
    const targetMonday = new Date(currentMonday);
    targetMonday.setDate(currentMonday.getDate() + (this.offset * 7));

    const targetSunday = new Date(targetMonday);
    targetSunday.setDate(targetMonday.getDate() + 6);

    const oldestYMD = Helpers.toLocalYMD(targetMonday);
    const newestYMD = Helpers.toLocalYMD(targetSunday);

    document.getElementById('dateRangeLabel').textContent =
      `${targetMonday.getDate()} ${Helpers.months[targetMonday.getMonth()]} – ${targetSunday.getDate()} ${Helpers.months[targetSunday.getMonth()]}`;

    const { athleteId, apiKey } = SettingsManager.getCredentials();
    let data;

    try {
      if (athleteId && apiKey) {
        data = await IntervalsAPI.fetchWeekData(athleteId, apiKey, oldestYMD, newestYMD);
      } else {
        data = DemoData.getForWeek(targetMonday);
      }
    } catch (err) {
      console.error(err);
      data = DemoData.getForWeek(targetMonday);
    }

    this.updateWeekLabel(data.events || []);
    this.renderCalendarAndProgress(targetMonday, data.events || [], data.activities || []);
  },

  renderCalendarAndProgress(monday, events, activities) {
    const grid = document.getElementById('calendarGrid');
    grid.innerHTML = '';

    const cleanEvents = events.filter(e =>
      e.category !== 'NOTE' &&
      e.category !== 'HOLIDAY' &&
      e.category !== 'TARGET' &&
      !e.name?.toLowerCase().includes('rust')
    );

    const todayYMD = Helpers.toLocalYMD(new Date());
    let runDone = 0, runPlan = 0, rideDone = 0, ridePlan = 0;
    let runLoadDone = 0, runLoadPlan = 0, rideLoadDone = 0, rideLoadPlan = 0;

    const getSportCategory = (t) => {
      if (Helpers.isRun(t)) return 'run';
      if (Helpers.isRide(t)) return 'ride';
      return 'other';
    };

    const getSportIcon = (sportType) => {
      const cat = getSportCategory(sportType);
      if (cat === 'run') {
        return `<span class="sport-badge sport-run" style="background-color: #2563eb; color: #ffffff;">${ICONS.run}</span>`;
      }
      if (cat === 'ride') {
        return `<span class="sport-badge sport-ride" style="background-color: #ef4444; color: #ffffff;">${ICONS.ride}</span>`;
      }
      return `<span class="sport-badge sport-other" style="color: #ffffff;">${ICONS.other}</span>`;
    };

    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(monday);
      currentDay.setDate(monday.getDate() + i);
      const dateStr = Helpers.toLocalYMD(currentDay);

      const dayActs = activities.filter(a => a.start_date_local?.startsWith(dateStr));
      const dayPlans = cleanEvents.filter(e => e.start_date_local?.startsWith(dateStr));

      const planItems = dayPlans.map(plan => {
        const sportType = plan.type || '';
        const sec = Helpers.getDurationSec(plan);
        const load = Helpers.getLoad(plan);
        if (Helpers.isRun(sportType)) {
          runPlan += sec;
          runLoadPlan += load;
        } else if (Helpers.isRide(sportType)) {
          ridePlan += sec;
          rideLoadPlan += load;
        }
        return {
          sportType,
          category: getSportCategory(sportType),
          sec,
          mins: Math.round(sec / 60),
          load,
          title: (plan.name || sportType || 'Training').trim()
        };
      });

      const actItems = dayActs.map(act => {
        const sportType = act.type || '';
        const sec = Helpers.getDurationSec(act);
        const load = Helpers.getLoad(act);
        if (Helpers.isRun(sportType)) {
          runDone += sec;
          runLoadDone += load;
        } else if (Helpers.isRide(sportType)) {
          rideDone += sec;
          rideLoadDone += load;
        }
        return {
          sportType,
          category: getSportCategory(sportType),
          sec,
          mins: Math.round(sec / 60),
          load
        };
      });

      let dayContentHTML = '';

      if (planItems.length === 0 && actItems.length === 0) {
        dayContentHTML = `<div class="rest-slot" title="Rustdag" style="display: flex; flex-direction: column; align-items: center; gap: 6px;">${ICONS.sloth}<span class="w-name" style="margin: 0; text-align: center;">Rustdag</span></div>`;
      } else {
        ['run', 'ride', 'other'].forEach(cat => {
          const catPlans = planItems.filter(p => p.category === cat);
          const catActs = actItems.filter(a => a.category === cat);

          if (catPlans.length > 0 && catActs.length > 0) {
            const doneLoad = catActs.reduce((sum, a) => sum + a.load, 0);
            const planLoad = catPlans.reduce((sum, p) => sum + p.load, 0);
            const doneMins = catActs.reduce((sum, a) => sum + a.mins, 0);
            const planMins = catPlans.reduce((sum, p) => sum + p.mins, 0);
            const pct = planLoad > 0 ? Math.round((doneLoad / planLoad) * 100) : 100;

            const title = catPlans.map(p => p.title).join(' + ');
            const icon = getSportIcon(catActs[0].sportType || catPlans[0].sportType);

            dayContentHTML += `
              <div class="workout-card done-card">
                <div class="w-header">${icon}</div>
                <div class="w-name" title="${title}">${title}</div>
                <div class="w-footer" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
                  <div style="display: flex; flex-direction: column; gap: 2px; text-align: left;">
                    <span>${planMins} min</span>
                    <span>${planLoad} TSS</span>
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 2px; text-align: right; color: #34d399; font-weight: 600;">
                    <span>${doneMins} min</span>
                    <span>${doneLoad} TSS</span>
                  </div>
                </div>
                <div style="margin-top: 8px; font-size: 12px; font-weight: 600; color: #34d399; text-align: center;">✓ ${pct}%</div>
              </div>`;
          }

          if (catPlans.length > 0 && catActs.length === 0) {
            catPlans.forEach(plan => {
              const icon = getSportIcon(plan.sportType);
              const minText = plan.mins > 0 ? `${plan.mins} min` : '';

              dayContentHTML += `
                <div class="workout-card plan-card">
                  <div class="w-header">${icon}</div>
                  <div class="w-name" title="${plan.title}">${plan.title}</div>
                  <div class="w-footer" style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div style="display: flex; flex-direction: column; gap: 2px; text-align: left;">
                      <span>${minText}</span>
                      <span>${plan.load} TSS</span>
                    </div>
                  </div>
                </div>`;
            });
          }

          if (catPlans.length === 0 && catActs.length > 0) {
            catActs.forEach(act => {
              const icon = getSportIcon(act.sportType);
              const minText = act.mins > 0 ? `${act.mins} min` : '';

              dayContentHTML += `
                <div class="workout-card done-card">
                  <div class="w-header">${icon}</div>
                  <div class="w-footer" style="display: flex; justify-content: flex-end;">
                    <div style="display: flex; flex-direction: column; gap: 2px; text-align: right; color: #34d399; font-weight: 600;">
                      <span>${minText}</span>
                      <span>${act.load} TSS</span>
                    </div>
                  </div>
                </div>`;
            });
          }
        });
      }

      grid.innerHTML += `
        <div class="day-card ${dateStr === todayYMD ? 'today' : ''}">
          <div class="day-head">
            <span class="day-name">${Helpers.days[currentDay.getDay()]}</span>
            <span class="day-date">${currentDay.getDate()} ${Helpers.months[currentDay.getMonth()]}</span>
          </div>
          <div class="day-workouts-container">
            ${dayContentHTML}
          </div>
        </div>`;
    }

    this.updateProgressBar('run', runDone, runPlan);
    this.updateProgressBar('ride', rideDone, ridePlan);
    this.updateLoadProgressBar('runLoad', runLoadDone, runLoadPlan);
    this.updateLoadProgressBar('rideLoad', rideLoadDone, rideLoadPlan);
  },

  updateProgressBar(prefix, doneSec, plannedSec) {
    const pct = plannedSec > 0 ? Math.round((doneSec / plannedSec) * 100) : 0;
    const barWidth = Math.max(0, Math.min(100, pct));
    const isOverTime = plannedSec > 0 && doneSec > plannedSec;
    const doneStyle = isOverTime ? ' style="color: #34d399; font-weight: 600;"' : '';
    const pctStyle = pct >= 100 ? ' style="color: #34d399; font-weight: 600;"' : '';

    document.getElementById(`${prefix}ProgressText`).innerHTML =
      `<strong${doneStyle}>${Helpers.formatHours(doneSec)}</strong> / ${Helpers.formatHours(plannedSec)} <span${pctStyle}>(${pct}%)</span>`;
    document.getElementById(`${prefix}ProgressBar`).style.width = `${barWidth}%`;
  },

  updateLoadProgressBar(prefix, doneLoad, plannedLoad) {
    const pct = plannedLoad > 0 ? Math.round((doneLoad / plannedLoad) * 100) : 0;
    const barWidth = Math.max(0, Math.min(100, pct));
    const isOverLoad = plannedLoad > 0 && doneLoad > plannedLoad;
    const doneStyle = isOverLoad ? ' style="color: #34d399; font-weight: 600;"' : '';
    const pctStyle = pct >= 100 ? ' style="color: #34d399; font-weight: 600;"' : '';

    document.getElementById(`${prefix}ProgressText`).innerHTML =
      `<strong${doneStyle}>${doneLoad}</strong> / ${plannedLoad} TSS <span${pctStyle}>(${pct}%)</span>`;
    document.getElementById(`${prefix}ProgressBar`).style.width = `${barWidth}%`;
  }
};

// === 7. INITIALISATIE ===
document.addEventListener('DOMContentLoaded', () => {
  SettingsManager.init();
  WeekPlanner.init();
});