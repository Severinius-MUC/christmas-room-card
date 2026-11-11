/*! Christmas Room Card for Home Assistant
 * A cosy, animated living room: Christmas tree, balcony-door garland, garden lights,
 * wreath, scent candles (Pura) and music (any media player). Every object is tappable
 * and runs a Home Assistant action. German + English UI.
 * https://github.com/Severinius-MUC/christmas-room-card  ·  MIT License
 */
const WZ_VERSION = '1.1.0';
const WZ_I18N = {
  de: {
    title: 'Frohe Weihnachten', on: 'an', off: 'aus',
    items: { tree: 'Baum', door: 'Balkontür', garden: 'Garten', wreath: 'Kranz', candles: 'Duftkerzen', music: 'Musik' },
    music: 'Musik', musicTitle: 'Weihnachtsmusik', playPause: 'Abspielen / Pause', pause: '⏸ Pause', play: '▶ Abspielen',
    random: 'Zufall', randomSub: 'jedes Mal eine andere Playlist',
    scent: 'Duft', scentToggle: 'Duft an/aus', scentTitle: 'Weihnachtsduft', intensity: 'Intensität', timer: 'Timer',
    ints: ['Sanft', 'Dezent', 'Mittel', 'Stark', 'Intensiv'], permanent: 'Dauerhaft', hours: 'Std',
    slot: (n, pct, act) => `Slot ${n}` + (pct != null ? ` · noch ${pct} %` : '') + (act ? ' · aktiv' : ''),
    turnOff: '⏻ Ausschalten', startScent: '✨ Duft starten', timerLeft: (m) => `Timer läuft noch ${m} min`,
    schedule: 'Zeitplan', active: '✓ Aktiv', inactive: 'Aus', lightsOn: 'Lichter gehen an',
    sunset: '🌅 Sonnenuntergang', fixed: '🕖 Feste Uhrzeit', at: 'Um', oclock: 'Uhr', offset: 'Versatz', exact: 'Genau',
    today: (hm) => `Heute: ${hm} Uhr`, allOff: 'Alles geht aus um', allOffSub: 'Uhr · Lichter, Duft und Musik',
    schedNote: (l) => `Eingeschaltet werden alle Geräte mit dem Label „${l}“. Der Zeitplan läuft in Home Assistant – auch wenn diese Seite nicht offen ist.`,
    defaultLabel: 'Weihnachtslicht', locale: 'de-DE',
    months: ['JANUAR', 'FEBRUAR', 'MÄRZ', 'APRIL', 'MAI', 'JUNI', 'JULI', 'AUGUST', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DEZEMBER'],
    calDays: 'Tage bis', calDay: 'Tag bis', calToday: 'Heute ist', calMerry: 'Frohe', calEve: 'Heiligabend', calXmas: 'Weihnachten',
    ed: {
      titles: { tree: 'Weihnachtsbaum', door: 'Balkontür-Girlande', garden: 'Garten (Lichter im Fenster)', wreath: 'Kranz an der Wand', candles: 'Duftkerzen', music: 'Musik', schedule: 'Zeitplan (Start / Alles aus)' },
      fit: [['auto', 'Automatisch'], ['cover', 'Füllend (Ränder beschneiden)'], ['contain', 'Ganz anzeigen']],
      labels: {
        title: 'Titel', fit: 'Bildanpassung', height: 'Höhe (leer = ganzer Bildschirm, „auto“ = Seitenverhältnis)', language: 'Sprache (leer = wie Home Assistant)',
        show_chips: 'Schaltknöpfe unten anzeigen', name: 'Anzeigename', entity: 'Entität (Zustand steuert die Optik)',
        action: 'Aktion beim Antippen (optional – sonst wird die Entität geschaltet)', on_states: 'Zustände, die als „an“ gelten (optional)',
        controls: 'Bedien-Panel unten anzeigen', sources: 'Favoriten/Quellen des Players (Sonos-Favoriten; leer = alle Weihnachts-Favoriten)',
        playlists: 'Eigene Playlists – Spotify, Radio, Music Assistant … (zusammen mit den Favoriten max. 6)', pl_name: 'Name (optional)', pl_media: 'Medium auswählen',
        random: 'Zufall-Kachel anbieten (jedes Mal eine andere Playlist)', default_timer: 'Standard-Timer in Minuten (0 = dauerhaft)', default_intensity: 'Standard-Intensität',
        enabled: 'Schalter „Zeitplan aktiv“', start_mode: 'Startmodus (Sonnenuntergang / Uhrzeit)', start_offset: 'Versatz zum Sonnenuntergang (min)',
        sun_start: 'Sensor „Start bei Sonnenuntergang“ (optional)', start_time: 'Startzeit (Modus Uhrzeit)', end_time: 'Endzeit (alles aus)', label: 'Name des Labels (nur zur Anzeige)',
        pura_device: 'Pura-Duftspender (aktiviert Slots, Intensität und Timer)', timers: 'Timer-Auswahl in Minuten (0 = dauerhaft)'
      }
    }
  },
  en: {
    title: 'Merry Christmas', on: 'on', off: 'off',
    items: { tree: 'Tree', door: 'Balcony door', garden: 'Garden', wreath: 'Wreath', candles: 'Scent candles', music: 'Music' },
    music: 'Music', musicTitle: 'Christmas music', playPause: 'Play / Pause', pause: '⏸ Pause', play: '▶ Play',
    random: 'Shuffle', randomSub: 'a different playlist every time',
    scent: 'Scent', scentToggle: 'Scent on/off', scentTitle: 'Christmas scent', intensity: 'Intensity', timer: 'Timer',
    ints: ['Gentle', 'Subtle', 'Medium', 'Strong', 'Intense'], permanent: 'Continuous', hours: 'h',
    slot: (n, pct, act) => `Slot ${n}` + (pct != null ? ` · ${pct} % left` : '') + (act ? ' · active' : ''),
    turnOff: '⏻ Turn off', startScent: '✨ Start scent', timerLeft: (m) => `Timer: ${m} min left`,
    schedule: 'Schedule', active: '✓ On', inactive: 'Off', lightsOn: 'Lights turn on',
    sunset: '🌅 Sunset', fixed: '🕖 Fixed time', at: 'At', oclock: '', offset: 'Offset', exact: 'At sunset',
    today: (hm) => `Today: ${hm}`, allOff: 'Everything turns off at', allOffSub: 'Lights, scent and music',
    schedNote: (l) => `Everything with the label “${l}” is switched on. The schedule runs in Home Assistant – even when this page is closed.`,
    defaultLabel: 'Christmas lights', locale: 'en-GB',
    months: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
    calDays: 'days until', calDay: 'day until', calToday: 'Today is', calMerry: 'Merry', calEve: 'Christmas Eve', calXmas: 'Christmas',
    ed: {
      titles: { tree: 'Christmas tree', door: 'Balcony door garland', garden: 'Garden (lights in the window)', wreath: 'Wreath on the wall', candles: 'Scent candles', music: 'Music', schedule: 'Schedule (start / all off)' },
      fit: [['auto', 'Automatic'], ['cover', 'Fill (crop edges)'], ['contain', 'Show everything']],
      labels: {
        title: 'Title', fit: 'Scaling', height: 'Height (empty = full screen, "auto" = aspect ratio)', language: 'Language (empty = like Home Assistant)',
        show_chips: 'Show buttons at the bottom', name: 'Display name', entity: 'Entity (its state drives the visuals)',
        action: 'Tap action (optional – otherwise the entity is toggled)', on_states: 'States that count as "on" (optional)',
        controls: 'Show control panel at the bottom', sources: 'Player favourites/sources (e.g. Sonos favourites; empty = all Christmas favourites)',
        playlists: 'Own playlists – Spotify, radio, Music Assistant … (max. 6 together with favourites)', pl_name: 'Name (optional)', pl_media: 'Choose media',
        random: 'Offer a shuffle tile (a different playlist every time)', default_timer: 'Default timer in minutes (0 = continuous)', default_intensity: 'Default intensity',
        enabled: 'Switch "schedule active"', start_mode: 'Start mode (sunset / fixed time)', start_offset: 'Offset to sunset (min)',
        sun_start: 'Sensor "start at sunset" (optional)', start_time: 'Start time (fixed-time mode)', end_time: 'End time (everything off)', label: 'Label name (display only)',
        pura_device: 'Pura diffuser (enables slots, intensity and timer)', timers: 'Timer choices in minutes (0 = continuous)'
      }
    }
  }
};
const wzLang = (cfg, hass) => {
  const l = (cfg && cfg.language) || (hass && ((hass.locale && hass.locale.language) || hass.language)) || (navigator.language || 'en');
  return String(l).toLowerCase().startsWith('de') ? 'de' : 'en';
};
let WZ_T = WZ_I18N[wzLang(null, null)];
const WZ_OFF = ['off', 'unavailable', 'unknown', 'idle', 'paused', 'standby', 'none', '', 'closed'];
const WZ_ITEMS = [
  ['tree', '🎄'], ['door', '✨'], ['garden', '🌟'], ['wreath', '💫'], ['candles', '🕯️'], ['music', '🎵']
];

const WZ_RND = '__random__';
const WZ_INT = [['gentle', 2], ['subtle', 4], ['medium', 6], ['strong', 8], ['intense', 10]];
const wzIntLabel = (v) => WZ_T.ints[Math.max(0, WZ_INT.findIndex((x) => x[0] === v))];
const wzEsc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function wzRng(seed) { let s = seed % 2147483647; if (s <= 0) s += 2147483646; return () => (s = (s * 16807) % 2147483647, (s - 1) / 2147483646); }
const f1 = (n) => n.toFixed(1);

function wzNeedleBuckets(n) { return Array.from({ length: n }, () => []); }
const WZ_PAL = ['#0a2210', '#113619', '#174723', '#1f5a2c', '#296d36', '#357f41', '#4a9150'];

function wzTree(R, cx, top, base, maxW) {
  const H = base - top, tiers = 13;
  const groups = [wzNeedleBuckets(WZ_PAL.length), wzNeedleBuckets(WZ_PAL.length), wzNeedleBuckets(WZ_PAL.length)];
  const left = [], right = [];
  const tierY = (f) => top + H * (0.05 + 0.95 * f);
  const tierW = (f) => maxW * Math.pow(f, 0.82) + 8;
  for (let t = tiers - 1; t >= 0; t--) {
    const f = (t + 1) / tiers;
    const yT = tierY(f), w = tierW(f) * (0.9 + R() * 0.18);
    const g = t >= 8 ? 0 : (t >= 4 ? 1 : 2);
    const tipY = yT + 8 + w * 0.08, notchY = yT - 10;
    left.push([cx - w * 0.8, tipY], [cx - w * 0.5, notchY]);
    right.push([cx + w * 0.8, tipY], [cx + w * 0.5, notchY]);
    const nb = 6 + Math.round(f * 16);
    for (let b = 0; b < nb; b++) {
      let u = ((b + 0.5) / nb) * 2 - 1 + (R() - 0.5) * 0.12;
      u = Math.max(-1, Math.min(1, u));
      const sx = cx + u * w * 0.12, sy = yT - 16 - 10 * f;
      const ex = cx + u * w * (0.9 + R() * 0.12), ey = yT + 8 + Math.abs(u) * w * 0.12 + R() * 8;
      const qx = (sx + ex) / 2, qy = sy + (ey - sy) * 0.15 - 6;
      const len = Math.hypot(ex - sx, ey - sy);
      const steps = 5 + Math.round(len / 9);
      for (let k = 0; k < steps; k++) {
        const p = 0.15 + 0.85 * (k / (steps - 1));
        const ip = 1 - p;
        const x = ip * ip * sx + 2 * ip * p * qx + p * p * ex;
        const y = ip * ip * sy + 2 * ip * p * qy + p * p * ey;
        const tx = 2 * ip * (qx - sx) + 2 * p * (ex - qx), ty = 2 * ip * (qy - sy) + 2 * p * (ey - qy);
        const ang = Math.atan2(ty, tx);
        const nn = 7;
        for (let m = 0; m < nn; m++) {
          const a = ang + (R() - 0.5) * 2.4 + 0.35 * Math.sign(Math.cos(ang) || 1) * 0.6;
          const l = (4.5 + R() * 6) * (0.75 + 0.45 * (1 - p));
          const x2 = x + Math.cos(a) * l, y2 = y + Math.sin(a) * l + 1.5;
          let ci = Math.floor(1 + p * 3.2 + R() * 2.2 - (y2 < y ? 0 : 0.6) - g * 0.0);
          if (g === 0) ci -= 0.5;
          ci = Math.max(0, Math.min(WZ_PAL.length - 1, Math.round(ci)));
          groups[g][ci].push(`M${f1(x)} ${f1(y)}L${f1(x2)} ${f1(y2)}`);
        }
      }
    }
  }
  const sil = [[cx, top - 4], ...right.slice().reverse(), [cx + maxW * 0.6, base + 4], [cx - maxW * 0.6, base + 4], ...left];
  const silStr = sil.map(([x, y]) => `${f1(x)},${f1(y)}`).join(' ');
  let needles = '';
  groups.forEach((grp) => grp.forEach((arr, ci) => {
    if (arr.length) needles += `<path d="${arr.join('')}" stroke="${WZ_PAL[ci]}" stroke-width="1.7" stroke-linecap="round" fill="none"/>`;
  }));
  // Lights
  let lights = '';
  for (let i = 0; i < 130; i++) {
    const f = 0.04 + Math.sqrt(R()) * 0.94;
    const y = tierY(f) - 6 + R() * 10, w = tierW(f) * 0.86;
    const x = cx + (R() * 2 - 1) * w;
    const d = (R() * 3).toFixed(2), dur = (1.8 + R() * 2.4).toFixed(2);
    lights += `<circle class="tglow" cx="${f1(x)}" cy="${f1(y)}" r="12" fill="url(#gWarm)" style="animation-delay:${d}s;animation-duration:${dur}s"/>` +
              `<circle class="tbulb" cx="${f1(x)}" cy="${f1(y)}" r="2.3"/>`;
  }
  // Baubles
  const ballCols = ['gRed', 'gGold', 'gRed', 'gSilver', 'gWine', 'gGold'];
  const balls = [];
  for (let i = 0; i < 30; i++) {
    const f = 0.1 + Math.sqrt(R()) * 0.86;
    const y = tierY(f) + 4 + R() * 10, w = tierW(f) * 0.78;
    balls.push([cx + (R() * 2 - 1) * w, y, 5.5 + R() * 4.5 * (0.6 + f * 0.6), ballCols[i % ballCols.length]]);
  }
  balls.sort((a, b) => a[1] - b[1]);
  const ballSvg = balls.map(([x, y, r, c]) =>
    `<line x1="${f1(x)}" y1="${f1(y - r - 5)}" x2="${f1(x)}" y2="${f1(y - r)}" stroke="#c9b37a" stroke-width=".6"/>` +
    `<rect x="${f1(x - r * 0.28)}" y="${f1(y - r - 2.2)}" width="${f1(r * 0.56)}" height="2.6" rx=".8" fill="#b89b4c"/>` +
    `<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(r)}" fill="url(#${c})"/>`).join('');
  // Bead garlands
  let beads = '';
  [0.32, 0.52, 0.72, 0.9].forEach((f, i) => {
    const y = tierY(f), w = tierW(f) * 0.8;
    const y1 = y - 8 + (i % 2) * 14, y2 = y + 14 - (i % 2) * 14;
    beads += `<path d="M${f1(cx - w)} ${f1(y1)} Q${f1(cx)} ${f1(y + 34)} ${f1(cx + w)} ${f1(y2)}" stroke="#d8c27a" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 5.5" fill="none" opacity=".85"/>`;
  });
  return { silStr, needles, lights, ballSvg, beads };
}

function wzGarland(R, pts, step) {
  // pts: polyline points; fir garland along the line
  const buckets = wzNeedleBuckets(WZ_PAL.length);
  const samples = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, y1] = pts[i], [x2, y2] = pts[i + 1];
    const L = Math.hypot(x2 - x1, y2 - y1), n = Math.max(1, Math.round(L / step));
    for (let k = 0; k < n; k++) samples.push([x1 + (x2 - x1) * k / n, y1 + (y2 - y1) * k / n, Math.atan2(y2 - y1, x2 - x1)]);
  }
  samples.forEach(([x, y]) => {
    for (let m = 0; m < 12; m++) {
      const a = R() * Math.PI * 2, l = 5 + R() * 11;
      const ox = (R() - 0.5) * 10, oy = (R() - 0.5) * 10;
      const ci = Math.max(0, Math.min(WZ_PAL.length - 1, Math.round(1 + R() * 4.6)));
      buckets[ci].push(`M${f1(x + ox)} ${f1(y + oy)}L${f1(x + ox + Math.cos(a) * l)} ${f1(y + oy + Math.sin(a) * l + 1)}`);
    }
  });
  let svg = '';
  buckets.forEach((arr, ci) => { if (arr.length) svg += `<path d="${arr.join('')}" stroke="${WZ_PAL[ci]}" stroke-width="1.7" stroke-linecap="round" fill="none"/>`; });
  let deco = '', lights = '';
  samples.forEach(([x, y, a], i) => {
    if (i % 14 === 7) {
      deco += `<g transform="translate(${f1(x + (R() - .5) * 8)},${f1(y + (R() - .5) * 8)}) rotate(${Math.round(R() * 60 - 30)})"><ellipse rx="4.5" ry="7" fill="#5d3a1f"/><path d="M-4 -3 L4 -1 M-4 1 L4 3 M-3 5 L3 6" stroke="#3b2412" stroke-width="1"/></g>`;
    }
    if (i % 9 === 3) {
      const bx = x + (R() - .5) * 10, by = y + (R() - .5) * 10;
      deco += `<circle cx="${f1(bx)}" cy="${f1(by)}" r="2.6" fill="#b3121b"/><circle cx="${f1(bx + 3.5)}" cy="${f1(by + 2)}" r="2.3" fill="#c9161f"/><circle cx="${f1(bx + 1)}" cy="${f1(by + 4.5)}" r="2.2" fill="#9e0f17"/>`;
    }
    if (i % 3 === 0) {
      const lx = x + (R() - .5) * 16, ly = y + (R() - .5) * 16;
      const d = (R() * 3).toFixed(2), dur = (1.6 + R() * 2.4).toFixed(2);
      lights += `<circle class="dglow" cx="${f1(lx)}" cy="${f1(ly)}" r="11" fill="url(#gWarm)" style="animation-delay:${d}s;animation-duration:${dur}s"/><circle class="dbulb" cx="${f1(lx)}" cy="${f1(ly)}" r="2.2"/>`;
    }
  });
  return { svg, deco, lights };
}

function wzBow(x, y, s) {
  return `<g transform="translate(${x},${y}) scale(${s})">
    <path d="M0 0 C-14 -14 -26 -6 -22 4 C-18 12 -6 8 0 0Z" fill="#b71c1c"/><path d="M0 0 C14 -14 26 -6 22 4 C18 12 6 8 0 0Z" fill="#c62828"/>
    <path d="M-2 2 L-10 26 L-4 22 L0 28 Z" fill="#a31515"/><path d="M2 2 L10 26 L4 22 L0 28 Z" fill="#b71c1c"/>
    <circle r="4.5" fill="#d32f2f"/></g>`;
}

class ChristmasRoomCard extends HTMLElement {
  static getConfigElement() { return document.createElement('christmas-room-card-editor'); }
  static getStubConfig() { return { tree: {}, door: {}, garden: {}, wreath: {}, candles: {}, music: { on_states: ['playing'], random: true } }; }
  setConfig(config) {
    this._config = Object.assign({ fit: 'auto', show_chips: true }, config || {});
    WZ_T = WZ_I18N[wzLang(this._config, this._hass)];
    this._local = this._local || {}; this._opt = this._opt || {};
    this._render();
  }
  connectedCallback() {
    if (!this._ro && window.ResizeObserver) this._ro = new ResizeObserver(() => this._fit());
    if (this._ro) this._ro.observe(this);
    this._fit();
  }
  disconnectedCallback() { if (this._ro) this._ro.disconnect(); }
  _fit() {
    const svg = this.shadowRoot && this.shadowRoot.getElementById('room');
    if (!svg) return;
    const r = this.getBoundingClientRect();
    const mode = this._config.fit || 'auto';
    const vig = this.shadowRoot.getElementById('vig');
    const setBox = (x0, y0, W, H, par) => {
      svg.setAttribute('viewBox', `${x0.toFixed(1)} ${y0.toFixed(1)} ${W.toFixed(1)} ${H.toFixed(1)}`);
      svg.setAttribute('preserveAspectRatio', par);
      if (vig) { vig.setAttribute('x', x0); vig.setAttribute('y', y0); vig.setAttribute('width', W); vig.setAttribute('height', H); }
    };
    if (mode !== 'auto' || !(r.width > 0 && r.height > 0)) {
      setBox(0, 0, 1000, 600, mode === 'cover' ? 'xMidYMid slice' : 'xMidYMid meet');
      return;
    }
    // Automatic: always show the whole scene, wall/floor grow with the screen shape
    const a = r.width / r.height;
    if (a >= 1000 / 600) { const W = 600 * a; setBox(500 - W / 2, 0, W, 600, 'xMidYMid meet'); }
    else { const H = 980 / a; setBox(10, -(H - 600) * 0.55, 980, H, 'xMidYMid meet'); }
  }
  set hass(hass) {
    this._hass = hass;
    const T = WZ_I18N[wzLang(this._config, hass)];
    if (T !== WZ_T || this._lang !== T) { WZ_T = T; this._lang = T; this._key = null; this._render(); }
    if (this._key && !this._key.includes(new Date().toDateString())) this._render();
    WZ_ITEMS.forEach(([k]) => {
      const o = this._opt[k], a = this._actual(k);
      if (o && a !== null && a === o.val) delete this._opt[k];
    });
    this._apply();
  }
  getCardSize() { return 10; }
  getGridOptions() { return { columns: 'full', min_rows: 8 }; }

  _actual(k) {
    const it = this._config[k] || {};
    const st = it.entity && this._hass && this._hass.states[it.entity];
    if (!st) return null;
    if (Array.isArray(it.on_states)) return it.on_states.includes(st.state);
    return !WZ_OFF.includes(String(st.state).toLowerCase());
  }
  _isOn(k) {
    const o = this._opt[k];
    if (o && Date.now() < o.until) return o.val;
    const a = this._actual(k);
    return a === null ? !!this._local[k] : a;
  }
  _tap(k) {
    const it = this._config[k] || {};
    const next = !this._isOn(k);
    this._opt[k] = { val: next, until: Date.now() + 8000 };
    this._local[k] = next;
    if (this._hass) {
      if (it.action) {
        const d = it.action.split('.')[0];
        if (d === 'automation') this._hass.callService('automation', 'trigger', { entity_id: it.action });
        else if (['script', 'scene'].includes(d)) this._hass.callService(d, 'turn_on', { entity_id: it.action });
        else this._hass.callService('homeassistant', 'toggle', { entity_id: it.action });
      } else if (k === 'candles' && this._pura()) {
        const p = this._pura();
        if (next) this._scentStart(p); else this._scentStop(p);
      } else if (it.entity && k === 'music' && it.entity.startsWith('media_player.')) {
        const st = this._hass.states[it.entity];
        const e = { entity_id: it.entity };
        if (!next) this._hass.callService('media_player', 'media_pause', e);
        else if (this._source === WZ_RND) this._playItem(this._pickRandom());
        else if (st && st.state === 'paused' && (!this._source || st.attributes.source === this._source || this._lastPlayed === this._source)) this._hass.callService('media_player', 'media_play', e);
        else if (this._source) this._playItem(this._source);
        else this._hass.callService('media_player', 'media_play', e);
      } else if (it.entity) {
        this._hass.callService('homeassistant', next ? 'turn_on' : 'turn_off', { entity_id: it.entity });
      }
    }
    this._apply();
    clearTimeout(this._optTimer);
    this._optTimer = setTimeout(() => this._apply(), 8200);
  }
  _apply() {
    if (!this.shadowRoot) return;
    const root = this.shadowRoot.getElementById('room');
    if (!root) return;
    WZ_ITEMS.forEach(([k]) => {
      const on = this._isOn(k);
      root.classList.toggle(k + '-on', on);
      const chip = this.shadowRoot.getElementById('chip-' + k);
      if (chip) { chip.classList.toggle('on', on); chip.querySelector('.st').textContent = on ? WZ_T.on : WZ_T.off; }
    });
    this._dock();
  }
  // ---------- Music ----------
  _music() {
    const it = this._config.music || {};
    const st = it.entity && this._hass && this._hass.states[it.entity];
    if (!st || !it.entity.startsWith('media_player.') || it.controls === false) return null;
    const all = st.attributes.source_list || [];
    const items = {};
    let list = [];
    const add = (name, x) => { if (name && !items[name]) { items[name] = x; list.push(name); } };
    const favCfg = Array.isArray(it.sources) && it.sources.length ? it.sources : null;
    (favCfg || []).forEach((s) => add(s, { kind: 'source' }));
    (Array.isArray(it.playlists) ? it.playlists : []).forEach((p) => {
      if (!p) return;
      const md = p.media || {}, meta = md.metadata || {};
      const id = p.media_content_id || md.media_content_id;
      if (!id) return;
      add(p.name || meta.title || id, { kind: 'media', id, type: p.media_content_type || md.media_content_type || 'music',
        entity: p.entity || md.entity_id || it.entity, thumb: p.image || meta.thumbnail || '' });
    });
    if (!favCfg) all.filter((s) => /christ|weihn|xmas|advent|noel|navidad|carol/i.test(s)).forEach((s) => add(s, { kind: 'source' }));
    if (!list.length) all.forEach((s) => add(s, { kind: 'source' }));
    list = list.slice(0, 6);
    const rnd = !!it.random;
    const src = st.attributes.source;
    const cur = list.includes(src) ? src : (st.state === 'playing' && this._lastPlayed && list.includes(this._lastPlayed) ? this._lastPlayed : src);
    if (!((this._source === WZ_RND && rnd) || list.includes(this._source))) this._source = list.includes(cur) ? cur : (it.source && list.includes(it.source) ? it.source : list[0]);
    const vol = typeof st.attributes.volume_level === 'number' ? Math.round(st.attributes.volume_level * 100) : null;
    return { entity: it.entity, list, items, source: this._source, cur, rnd, vol, playing: this._isOn('music') };
  }
  _playItem(name) {
    const m = this._music();
    if (!m || !name || !this._hass) return;
    const x = m.items[name] || { kind: 'source' };
    this._lastPlayed = name;
    if (x.kind === 'media') {
      this._hass.callService('media_player', 'play_media', { entity_id: x.entity, media_content_id: x.id, media_content_type: x.type });
    } else {
      this._hass.callService('media_player', 'select_source', { entity_id: m.entity, source: name });
    }
    this._opt.music = { val: true, until: Date.now() + 8000 };
  }
  _pickRandom() {
    const m = this._music();
    if (!m || !m.list.length) return null;
    const opts = m.list.length > 1 ? m.list.filter((s) => s !== m.cur) : m.list;
    return opts[Math.floor(Math.random() * opts.length)];
  }
  // ---------- Pura scent ----------
  _pura() {
    const it = this._config.candles || {};
    const h = this._hass;
    if (!it.pura_device || !h || it.controls === false) return null;
    const ents = Object.values(h.entities || {}).filter((e) => e.device_id === it.pura_device).map((e) => e.entity_id);
    const find = (fn) => ents.find(fn);
    const p = {
      device: it.pura_device,
      fragrance: it.pura_fragrance || find((e) => e.startsWith('select.') && /fragrance/.test(e)),
      intensity: it.pura_intensity || find((e) => e.startsWith('select.') && /intensity/.test(e)),
      timer: find((e) => e.startsWith('sensor.') && /_timer(_\d+)?$/.test(e)),
      slots: [1, 2, 3, 4].map((n) => ({
        n,
        name: find((e) => e.startsWith('sensor.') && new RegExp(`slot_${n}_fragrance(_\\d+)?$`).test(e)),
        level: find((e) => e.startsWith('sensor.') && new RegExp(`slot_${n}_fragrance_remaining`).test(e))
      })).filter((s) => s.name && h.states[s.name] && !['unknown', 'unavailable', ''].includes(h.states[s.name].state))
    };
    if (!p.fragrance || !h.states[p.fragrance]) return null;
    const fr = h.states[p.fragrance].state;
    p.on = !['off', 'unavailable', 'unknown'].includes(fr);
    p.active = p.on ? parseInt(String(fr).replace('slot_', ''), 10) : null;
    const inn = p.intensity && h.states[p.intensity];
    p.int = inn && WZ_INT.some((x) => x[0] === inn.state) ? inn.state : null;
    p.remain = null;
    const t = p.timer && h.states[p.timer];
    if (t && !['unknown', 'unavailable', ''].includes(t.state)) { const ms = new Date(t.state) - Date.now(); if (ms > 0) p.remain = Math.ceil(ms / 60000); }
    if (!p.on) p.remain = null;
    p.slots.forEach((s) => {
      const a = h.states[s.name].attributes || {};
      s.label = String(h.states[s.name].state).trim(); s.color = a.color || '#e8c55a'; s.pic = a.entity_picture || '';
      const l = s.level && h.states[s.level]; s.pct = l && !isNaN(parseFloat(l.state)) ? Math.round(parseFloat(l.state)) : null;
    });
    this._scent = this._scent || {};
    p.selSlot = this._scent.slot || p.active || (p.slots[0] || {}).n || 1;
    p.selInt = this._scent.intensity || (p.on && p.int) || it.default_intensity || p.int || 'medium';
    p.selTimer = this._scent.timer != null ? this._scent.timer : (p.remain ? -1 : (p.on ? 0 : (Number(it.default_timer) || 0)));
    const tl = (Array.isArray(it.timers) && it.timers.length ? it.timers : [0, 30, 60, 120]).map(Number).filter((x) => !isNaN(x));
    p.timers = tl.includes(0) ? tl : [0, ...tl];
    const dt = Number(it.default_timer);
    if (dt > 0 && !p.timers.includes(dt)) { p.timers.push(dt); p.timers.sort((a, b) => a - b); }
    return p;
  }
  _scentStart(p) {
    const h = this._hass;
    const intVal = (WZ_INT.find((x) => x[0] === p.selInt) || WZ_INT[2])[1];
    if (p.selTimer > 0) {
      h.callService('pura', 'start_timer', { device_id: p.device, slot: String(p.selSlot), intensity: intVal,
        duration: { hours: Math.floor(p.selTimer / 60), minutes: p.selTimer % 60, seconds: 0 } });
    } else {
      h.callService('select', 'select_option', { entity_id: p.fragrance, option: 'slot_' + p.selSlot });
      if (p.intensity) h.callService('select', 'select_option', { entity_id: p.intensity, option: p.selInt });
    }
    this._opt.candles = { val: true, until: Date.now() + 8000 };
  }
  _scentStop(p) {
    this._hass.callService('select', 'select_option', { entity_id: p.fragrance, option: 'off' });
    this._opt.candles = { val: false, until: Date.now() + 8000 };
  }
  _timerLabel(m) { return m === 0 ? WZ_T.permanent : (m % 60 === 0 ? `${m / 60} ${WZ_T.hours}` : `${m} min`); }
  // ---------- Schedule ----------
  _schedule() {
    const sc = this._config.schedule || {};
    const h = this._hass;
    const g = (e) => (e && h && h.states[e]) || null;
    if (!g(sc.enabled)) return null;
    const hm = (st) => (st ? String(st.state).slice(0, 5) : '');
    const opts = (g(sc.start_mode) && g(sc.start_mode).attributes.options) || ['sunset', 'time'];
    const sunOpt = opts.find((o) => /sun|sonn/i.test(o)) || opts[0];
    const timeOpt = opts.find((o) => o !== sunOpt) || opts[1];
    const mode = g(sc.start_mode) ? g(sc.start_mode).state : sunOpt;
    const off = g(sc.start_offset) ? Math.round(parseFloat(g(sc.start_offset).state) || 0) : 0;
    let sd = null;
    const sun = g(sc.sun_start);
    if (sun) sd = new Date(sun.state);
    else if (h.states['sun.sun'] && h.states['sun.sun'].attributes.next_setting) {
      const ns = new Date(h.states['sun.sun'].attributes.next_setting);
      if (ns.toDateString() !== new Date().toDateString()) ns.setDate(ns.getDate() - 1);
      sd = new Date(ns.getTime() + off * 60000);
    }
    return {
      on: g(sc.enabled).state === 'on', sunOpt, timeOpt, isSun: mode === sunOpt, off,
      start: hm(g(sc.start_time)), end: hm(g(sc.end_time)), label: sc.label || WZ_T.defaultLabel,
      sunHM: sd && !isNaN(sd) ? sd.toLocaleTimeString(WZ_T.locale, { hour: '2-digit', minute: '2-digit' }) : ''
    };
  }
  _schedSet(key, val) {
    const sc = this._config.schedule || {};
    const h = this._hass;
    if (!h) return;
    if (key === 'enabled' && sc.enabled) h.callService('input_boolean', val === 'on' ? 'turn_on' : 'turn_off', { entity_id: sc.enabled });
    if (key === 'mode' && sc.start_mode) h.callService('input_select', 'select_option', { entity_id: sc.start_mode, option: val });
    if (key === 'offset' && sc.start_offset) h.callService('input_number', 'set_value', { entity_id: sc.start_offset, value: Number(val) });
    if (key === 'start' && sc.start_time) h.callService('input_datetime', 'set_datetime', { entity_id: sc.start_time, time: val + ':00' });
    if (key === 'end' && sc.end_time) h.callService('input_datetime', 'set_datetime', { entity_id: sc.end_time, time: val + ':00' });
  }
  // ---------- Dock + Popover ----------
  _dock(force) {
    const dock = this.shadowRoot.getElementById('dock'), pop = this.shadowRoot.getElementById('pop');
    if (!dock || !pop || this._volDrag) return;
    const ae = this.shadowRoot.activeElement;
    if (!force && ae && ae.tagName === 'INPUT' && ae.type === 'time') return;
    const m = this._music(), p = this._pura(), sch = this._schedule();
    const gear = this.shadowRoot.getElementById('gear');
    if (gear) gear.style.display = sch ? '' : 'none';
    const sig = JSON.stringify([m, sch, p && [p.on, p.active, p.int, p.remain, p.selSlot, p.selInt, p.selTimer, p.slots.map((s) => [s.label, s.pct])], this._popOpen]);
    if (!force && sig === this._dockSig) return;
    this._dockSig = sig;
    const esc = wzEsc;
    let d = '';
    if (m) {
      d += `<div class="pill"><button class="pbtn ${m.playing ? 'on' : ''}" data-act="music-toggle" title="${WZ_T.playPause}">${m.playing ? '⏸' : '▶'}</button>
        <button class="plabel" data-pop="music"><span class="eq ${m.playing ? 'on' : ''}"><i></i><i></i><i></i></span><span class="pt">${m.source === WZ_RND ? '🎲 ' + esc(m.playing && m.list.includes(m.cur) ? m.cur : WZ_T.random) : esc(m.source || WZ_T.music)}</span>${m.vol != null ? `<span class="ps">🔈 ${m.vol}%</span>` : ''}<span class="caret">▾</span></button></div>`;
    }
    if (p) {
      const s = p.slots.find((x) => x.n === (p.active || p.selSlot)) || { label: WZ_T.scent, color: '#e8c55a' };
      const info = [wzIntLabel(p.on ? (p.int || p.selInt) : p.selInt), p.remain ? `⏱ ${p.remain} min` : (p.selTimer && !p.on ? `⏱ ${this._timerLabel(p.selTimer)}` : '')].filter(Boolean).join(' · ');
      d += `<div class="pill"><button class="pbtn ${p.on ? 'on' : ''}" data-act="scent-toggle" title="${WZ_T.scentToggle}">⏻</button>
        <button class="plabel" data-pop="scent"><span class="dot" style="background:${esc(s.color)};box-shadow:0 0 8px ${esc(s.color)}"></span><span class="pt">${esc(s.label)}</span><span class="ps">${esc(info)}</span><span class="caret">▾</span></button></div>`;
    }
    dock.innerHTML = d;
    // Popover
    let html = '';
    if (this._popOpen === 'music' && m) {
      const icon = (s) => {
        const x = m.items[s] || {};
        if (x.thumb) return `<img class="tthumb" src="${esc(x.thumb)}" alt="" loading="lazy">`;
        if (x.kind === 'media') return /spotify/i.test(x.id) ? '🎧' : /radio/i.test(x.id + ' ' + x.type) ? '📻' : '🎼';
        return /favou?rite/i.test(s) ? '❤️' : /top|hits/i.test(s) ? '⭐' : /radio|fm/i.test(s) ? '📻' : '🎄';
      };
      html = `<div class="pophead"><span>🎵 ${WZ_T.musicTitle}</span><button class="x" data-act="close">✕</button></div>
        <div class="tiles">${m.list.map((s) => `<button class="tile ${s === m.source ? 'sel' : ''}" data-src="${esc(s)}"><span class="ti">${icon(s)}</span><span class="tn">${esc(s)}</span>${s === (m.source === WZ_RND ? m.cur : m.source) && m.playing ? '<span class="eq on"><i></i><i></i><i></i></span>' : ''}</button>`).join('')}${m.rnd ? `<button class="tile rnd ${m.source === WZ_RND ? 'sel' : ''}" data-src="${WZ_RND}"><span class="ti">🎲</span><span class="tn">${WZ_T.random}<br><span class="sm">${WZ_T.randomSub}</span></span></button>` : ''}</div>
        <div class="row"><button class="big ${m.playing ? 'off' : ''}" data-act="music-toggle">${m.playing ? WZ_T.pause : WZ_T.play}</button>
        ${m.vol != null ? `<span>🔈</span><input type="range" id="pvol" min="0" max="100" step="1" value="${m.vol}"><span class="ps" id="pvolv">${m.vol}%</span>` : ''}</div>`;
    } else if (this._popOpen === 'scent' && p) {
      html = `<div class="pophead"><span>🕯️ ${WZ_T.scentTitle}</span><button class="x" data-act="close">✕</button></div>
        <div class="slots">${p.slots.map((s) => `<button class="slot ${s.n === p.selSlot ? 'sel' : ''}" style="--sc:${esc(s.color)}" data-slot="${s.n}">
          ${s.pic ? `<img src="${esc(s.pic)}" alt="" loading="lazy">` : '<span class="vial"></span>'}
          <span class="sinfo"><div class="sn">${esc(s.label)}</div>${s.pct != null ? `<div class="lvl"><b style="width:${s.pct}%"></b></div><div class="sm">${WZ_T.slot(s.n, s.pct, p.active === s.n)}</div>` : `<div class="sm">${WZ_T.slot(s.n, null, p.active === s.n)}</div>`}</span></button>`).join('')}</div>
        <div class="lbl">${WZ_T.intensity}</div><div class="seg">${WZ_INT.map(([v]) => `<button class="${v === p.selInt ? 'sel' : ''}" data-int="${v}">${wzIntLabel(v)}</button>`).join('')}</div>
        <div class="lbl">${WZ_T.timer}</div><div class="seg">${p.timers.map((t) => `<button class="${t === p.selTimer ? 'sel' : ''}" data-timer="${t}">${this._timerLabel(t)}</button>`).join('')}</div>
        <div class="row"><button class="big ${p.on ? 'off' : ''}" data-act="scent-toggle">${p.on ? WZ_T.turnOff : WZ_T.startScent}</button>${p.remain ? `<span class="ps">${WZ_T.timerLeft(p.remain)}</span>` : ''}</div>`;
    } else if (this._popOpen === 'settings' && sch) {
      const b = (k, v, l, sel) => `<button class="${sel ? 'sel' : ''}" data-sch="${k}:${esc(v)}">${l}</button>`;
      html = `<div class="pophead"><span>⚙️ ${WZ_T.schedule}</span><button class="x" data-act="close">✕</button></div>
        <div class="seg">${b('enabled', 'on', WZ_T.active, sch.on)}${b('enabled', 'off', WZ_T.inactive, !sch.on)}</div>
        <div class="lbl">${WZ_T.lightsOn}</div>
        <div class="seg">${b('mode', sch.sunOpt, WZ_T.sunset, sch.isSun)}${b('mode', sch.timeOpt, WZ_T.fixed, !sch.isSun)}</div>
        ${!sch.isSun
          ? `<div class="row"><span>${WZ_T.at}</span><input type="time" class="tin" id="sch-start" value="${esc(sch.start)}"><span class="ps">${WZ_T.oclock}</span></div>`
          : `<div class="lbl">${WZ_T.offset}</div><div class="seg">${[-60, -30, -15, 0, 15, 30, 60].map((v) => b('offset', v, v === 0 ? WZ_T.exact : (v > 0 ? '+' : '−') + Math.abs(v) + ' min', v === sch.off)).join('')}</div>
             ${sch.sunHM ? `<div class="sm" style="margin-top:8px">${esc(WZ_T.today(sch.sunHM))}</div>` : ''}`}
        <div class="lbl">${WZ_T.allOff}</div>
        <div class="row" style="margin-top:0"><input type="time" class="tin" id="sch-end" value="${esc(sch.end)}"><span class="ps">${WZ_T.allOffSub}</span></div>
        <div class="sm" style="margin-top:14px">${esc(WZ_T.schedNote(sch.label))}</div>`;
    } else this._popOpen = null;
    pop.innerHTML = html;
    pop.classList.toggle('open', !!this._popOpen);
    const bar = this.shadowRoot.getElementById('chipsbar');
    if (bar) this.shadowRoot.querySelector('ha-card').style.setProperty('--popb', (bar.offsetHeight + 6) + 'px');
  }
  _onDockClick(e) {
    const b = e.target.closest('button');
    if (!b) return;
    e.stopPropagation();
    const m = this._music(), p = this._pura();
    if (b.dataset.pop) { this._popOpen = this._popOpen === b.dataset.pop ? null : b.dataset.pop; this._dock(true); return; }
    const act = b.dataset.act;
    if (act === 'close') { this._popOpen = null; this._dock(true); return; }
    if (act === 'music-toggle') { this._tap('music'); this._dock(true); return; }
    if (act === 'scent-toggle') { this._tap('candles'); this._dock(true); return; }
    if (b.dataset.sch) { const i = b.dataset.sch.indexOf(':'); this._schedSet(b.dataset.sch.slice(0, i), b.dataset.sch.slice(i + 1)); return; }
    if (b.dataset.src === WZ_RND && m) {
      this._source = WZ_RND;
      const pick = this._pickRandom();
      if (pick) this._playItem(pick);
      this._opt.music = { val: true, until: Date.now() + 8000 };
      this._apply(); this._dock(true); return;
    }
    if (b.dataset.src != null && m) {
      this._source = b.dataset.src;
      this._playItem(b.dataset.src);
      this._opt.music = { val: true, until: Date.now() + 8000 };
      this._apply(); this._dock(true); return;
    }
    if (p && (b.dataset.slot || b.dataset.int || b.dataset.timer != null)) {
      this._scent = this._scent || {};
      if (b.dataset.slot) this._scent.slot = Number(b.dataset.slot);
      if (b.dataset.int) this._scent.intensity = b.dataset.int;
      if (b.dataset.timer != null) this._scent.timer = Number(b.dataset.timer);
      const q = this._pura();
      if (q.on) {
        if (b.dataset.int && !q.remain && q.intensity) this._hass.callService('select', 'select_option', { entity_id: q.intensity, option: q.selInt });
        else this._scentStart(q);
      }
      this._apply(); this._dock(true);
    }
  }

  _render() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    const cfg = this._config;
    const key = JSON.stringify([cfg.title, cfg.show_chips, cfg.height, WZ_ITEMS.map(([k]) => (cfg[k] || {}).name), new Date().toDateString(), WZ_T.title]);
    if (this._key === key && this.shadowRoot.getElementById('room')) { this._fit(); this._apply(); return; }
    this._key = key;
    const cfgH = cfg.height || 'calc(100vh - var(--header-height, 56px))';
    const autoH = cfgH === 'auto';
    const chips = cfg.show_chips !== false;
    const R = wzRng(20261224);
    const T = wzTree(R, 822, 46, 476, 168);
    const garPts = [[102, 478], [102, 104], [418, 104], [418, 478]];
    const G = wzGarland(wzRng(1225), garPts, 5);

    // View through the window
    const R2 = wzRng(77);
    let stars = '';
    for (let i = 0; i < 40; i++) stars += `<circle cx="${f1(118 + R2() * 284)}" cy="${f1(130 + R2() * 200)}" r="${f1(0.4 + R2() * 1.1)}" fill="#fff" opacity="${f1(0.4 + R2() * 0.6)}"/>`;
    let flakes = '';
    for (let i = 0; i < 70; i++) flakes += `<circle cx="${f1(118 + R2() * 284)}" cy="${f1(130 + R2() * 340)}" r="${f1(0.7 + R2() * 1.6)}" fill="#fff" opacity="${f1(0.35 + R2() * 0.5)}"/>`;
    let pines = '';
    const pineData = [];
    for (let i = 0; i < 12; i++) {
      const x = 112 + i * 26 + R2() * 10, h = 36 + R2() * 34, y = 392;
      pineData.push([x, h, y]);
      pines += `<polygon points="${f1(x)},${f1(y - h)} ${f1(x - h * 0.32)},${y} ${f1(x + h * 0.32)},${y}" fill="#0c1a2b"/><polygon points="${f1(x)},${f1(y - h)} ${f1(x - h * 0.12)},${f1(y - h * 0.6)} ${f1(x + h * 0.14)},${f1(y - h * 0.62)}" fill="#dfe9f5" opacity=".55"/>`;
    }
    // Garden lights (seen through the window)
    const GC = ['#ff5252', '#ffd740', '#40c4ff', '#69f0ae', '#ff80ab'];
    const R3 = wzRng(4711);
    let garden = '';
    const gbulb = (x, y, i) => {
      const c = i % GC.length, d = (R3() * 3).toFixed(2), dur = (1.4 + R3() * 2.2).toFixed(2);
      return `<circle class="gglow" cx="${f1(x)}" cy="${f1(y)}" r="7" fill="url(#gL${c})" style="animation-delay:${d}s;animation-duration:${dur}s"/><circle class="gbulb" cx="${f1(x)}" cy="${f1(y)}" r="1.6" data-c="${GC[c]}" style="--c:${GC[c]}"/>`;
    };
    let gi = 0;
    [[118, 256], [264, 404]].forEach(([a, b]) => {
      garden += `<path d="M${a} 399 Q${(a + b) / 2} 414 ${b} 399" stroke="#1a1a1a" stroke-width=".8" fill="none"/>`;
      for (let x = a + 5; x < b - 2; x += 8) { const t = (x - a) / (b - a); garden += gbulb(x, 399 + 15 * 2 * t * (1 - t) * 1.0, gi++); }
    });
    pineData.filter((_, i) => i % 2 === 0).forEach(([x, h, y]) => {
      for (let k = 0; k < 7; k++) {
        const t = 0.2 + R3() * 0.78, yy = y - h + h * t, half = h * 0.32 * t * 0.85;
        garden += gbulb(x + (R3() * 2 - 1) * half, yy, gi++);
      }
    });
    let rail = '';
    for (let x = 118; x <= 402; x += 13) rail += `<rect x="${x}" y="402" width="3" height="72" fill="#1d2633"/>`;

    // Candles
    const candles = [[532, 56, 24], [581, 40, 21], [628, 48, 19]];
    let candleSvg = '', flames = '', cglow = '';
    candles.forEach(([x, h, w], i) => {
      const top = 396 - h;
      candleSvg += `<rect x="${x - w / 2}" y="${top}" width="${w}" height="${h}" rx="3" fill="url(#gWax)"/>
        <path d="M${x - w / 2} ${top + 3} Q${x - w / 4} ${top + 10} ${x - w / 6} ${top + 4} Q${x} ${top + 14} ${x + w / 5} ${top + 3} Q${x + w / 3} ${top + 8} ${x + w / 2} ${top + 3} L${x + w / 2} ${top} L${x - w / 2} ${top} Z" fill="#f6ead2"/>
        <ellipse cx="${x}" cy="${top}" rx="${w / 2}" ry="2.6" fill="#efe0c0"/>
        <line x1="${x}" y1="${top}" x2="${x + 0.5}" y2="${top - 5}" stroke="#2b2118" stroke-width="1.2"/>`;
      flames += `<path class="flame" style="animation-delay:${i * 0.37}s" d="M${x} ${top - 22} C${x + 6} ${top - 13} ${x + 5} ${top - 4} ${x} ${top - 3} C${x - 5} ${top - 4} ${x - 6} ${top - 13} ${x} ${top - 22} Z" fill="url(#gFlame)"/>`;
      cglow += `<circle class="cglow" style="animation-delay:${i * 0.41}s" cx="${x}" cy="${top - 12}" r="46" fill="url(#gCandle)"/>`;
    });

    // Presents
    const gift = (x, y, w, h, c, rc) => `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${c}"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="url(#gShade)"/>
      <rect x="${x + w / 2 - 3}" y="${y}" width="6" height="${h}" fill="${rc}"/><rect x="${x}" y="${y + h * 0.35}" width="${w}" height="5" fill="${rc}"/>
      <path d="M${x + w / 2} ${y} c-10 -12 -18 -2 -10 2 z M${x + w / 2} ${y} c10 -12 18 -2 10 2 z" fill="${rc}"/></g>`;

    this.shadowRoot.innerHTML = `
<style>
  :host { display:block; height:${autoH ? 'auto' : cfgH}; }
  ha-card { display:block; position:relative; height:${autoH ? 'auto' : '100%'}; ${autoH ? 'aspect-ratio:5/3;' : ''} overflow:hidden; background:#140e0b; color:#f5ead8; border-radius:${autoH ? 'var(--ha-card-border-radius,16px)' : '0'}; }
  .head { position:absolute; top:0; left:0; right:0; z-index:2; display:flex; align-items:baseline; justify-content:space-between; flex-wrap:wrap; gap:6px 16px; padding:14px 22px 34px; background:linear-gradient(rgba(10,6,4,.75), rgba(10,6,4,0)); pointer-events:none; }
  h2 { margin:0; font-family: Georgia, 'Times New Roman', serif; font-weight:normal; font-size:1.6em; color:#f3d98b; text-shadow:0 0 14px rgba(243,200,90,.35); }
  .count { opacity:.8; font-size:.95em; }
  svg { position:absolute; inset:0; display:block; width:100%; height:100%; -webkit-tap-highlight-color:transparent; user-select:none; }
  .hit { cursor:pointer; fill:transparent; }
  .chips { position:absolute; left:0; right:0; bottom:0; z-index:2; display:${chips ? 'flex' : 'none'}; flex-wrap:wrap; gap:8px; justify-content:center; padding:34px 12px 16px; background:linear-gradient(rgba(10,6,4,0), rgba(10,6,4,.7)); }
  .chip { display:flex; align-items:center; gap:8px; padding:8px 14px; border-radius:999px; border:1px solid rgba(243,217,139,.25);
    background:rgba(20,12,8,.6); backdrop-filter:blur(4px); color:#f5ead8; font:inherit; cursor:pointer; }
  .chip .st { font-size:.85em; opacity:.7; }
  .chip.on { background:rgba(243,200,90,.18); border-color:rgba(243,200,90,.7); box-shadow:0 0 14px rgba(243,200,90,.25); }
  .dock { width:100%; display:flex; flex-wrap:wrap; gap:8px; justify-content:center; }
  .dock:empty { display:none; }
  .pill { display:flex; align-items:center; gap:2px; border-radius:999px; background:rgba(20,12,8,.62); border:1px solid rgba(243,217,139,.28); backdrop-filter:blur(6px); padding:3px; max-width:100%; box-sizing:border-box; }
  .pbtn { width:34px; height:34px; border-radius:50%; border:none; background:rgba(243,200,90,.16); color:#f3d98b; font-size:15px; cursor:pointer; flex:none; }
  .pbtn.on { background:#e8c55a; color:#2a1a08; }
  .plabel { display:flex; align-items:center; gap:8px; background:none; border:none; color:#f5ead8; font:inherit; cursor:pointer; padding:4px 12px 4px 8px; min-width:0; }
  .pt { white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:34vw; }
  .ps { font-size:.82em; opacity:.72; white-space:nowrap; }
  .caret { opacity:.6; font-size:.8em; }
  .dot { width:12px; height:12px; border-radius:50%; flex:none; }
  .eq { display:inline-flex; align-items:flex-end; gap:2px; height:14px; flex:none; }
  .eq i { width:3px; height:30%; background:#e8c55a; border-radius:1px; }
  .eq.on i { animation: eq 1s ease-in-out infinite; } .eq.on i:nth-child(2) { animation-delay:.25s; } .eq.on i:nth-child(3) { animation-delay:.5s; }
  @keyframes eq { 0%,100% { height:25%; } 50% { height:100%; } }
  .pop { position:absolute; left:50%; transform:translateX(-50%); bottom:var(--popb,120px); z-index:3; width:min(580px, calc(100% - 24px)); max-height:64%; overflow:auto; box-sizing:border-box;
    padding:14px 16px 16px; border-radius:20px; background:rgba(24,15,10,.88); border:1px solid rgba(243,217,139,.3); box-shadow:0 18px 50px rgba(0,0,0,.55); backdrop-filter:blur(10px); display:none; }
  .pop.open { display:block; }
  .pophead { display:flex; justify-content:space-between; align-items:center; font-family:Georgia,'Times New Roman',serif; color:#f3d98b; font-size:1.15em; margin-bottom:10px; }
  .x { background:none; border:none; color:#f5ead8; font-size:1.1em; cursor:pointer; opacity:.7; }
  .gear { pointer-events:auto; width:40px; height:40px; border-radius:50%; border:1px solid rgba(243,217,139,.3); background:rgba(20,12,8,.55); backdrop-filter:blur(4px); font-size:18px; cursor:pointer; }
  .gear:hover { background:rgba(243,200,90,.2); }
  .tin { background:rgba(255,255,255,.06); color:#f5ead8; border:1px solid rgba(243,217,139,.3); border-radius:10px; padding:7px 10px; font:inherit; color-scheme:dark; }
  .tile.rnd { border-style:dashed; }
  .tthumb { width:30px; height:30px; border-radius:7px; object-fit:cover; display:block; }
  .cal { cursor:default; }
  .cal .pg { transition: filter .8s; }
  .tree-on .cal .pg { filter: drop-shadow(0 0 6px rgba(255,200,110,.35)); }
  .tiles { display:grid; grid-template-columns:repeat(auto-fill,minmax(160px,1fr)); gap:8px; }
  .tile { display:flex; align-items:center; gap:10px; text-align:left; padding:10px 12px; border-radius:14px; border:1px solid rgba(243,217,139,.18); background:rgba(255,255,255,.04); color:#f5ead8; font:inherit; font-size:.92em; cursor:pointer; }
  .tile:hover, .slot:hover { background:rgba(255,255,255,.08); }
  .tile.sel { border-color:#e8c55a; background:rgba(232,197,90,.16); box-shadow:0 0 16px rgba(232,197,90,.18); }
  .ti { font-size:1.3em; } .tn { flex:1; line-height:1.25; }
  .row { display:flex; align-items:center; gap:12px; margin-top:14px; flex-wrap:wrap; }
  .big { padding:9px 18px; border-radius:999px; border:none; background:#e8c55a; color:#2a1a08; font:inherit; font-weight:600; cursor:pointer; }
  .big.off { background:rgba(255,255,255,.1); color:#f5ead8; }
  .row input[type=range] { flex:1; min-width:120px; accent-color:#e8c55a; cursor:pointer; }
  .lbl { margin:14px 0 6px; font-size:.78em; letter-spacing:.08em; text-transform:uppercase; opacity:.6; }
  .seg { display:flex; flex-wrap:wrap; gap:6px; }
  .seg button { padding:7px 13px; border-radius:999px; border:1px solid rgba(243,217,139,.22); background:rgba(255,255,255,.04); color:#f5ead8; font:inherit; font-size:.9em; cursor:pointer; }
  .seg button.sel { background:#e8c55a; color:#2a1a08; border-color:#e8c55a; }
  .slots { display:grid; grid-template-columns:repeat(auto-fit,minmax(210px,1fr)); gap:10px; }
  .slot { display:flex; gap:12px; align-items:center; padding:10px 12px; border-radius:16px; border:1px solid rgba(243,217,139,.18); background:rgba(255,255,255,.04); color:#f5ead8; font:inherit; text-align:left; cursor:pointer; }
  .slot.sel { border-color:var(--sc,#e8c55a); background:rgba(232,197,90,.12); box-shadow:0 0 18px rgba(232,197,90,.15); }
  .slot img { width:34px; height:52px; object-fit:contain; flex:none; }
  .vial { width:20px; height:44px; border-radius:6px 6px 10px 10px; background:var(--sc,#e8c55a); flex:none; }
  .sinfo { flex:1; min-width:0; } .sn { font-weight:600; }
  .lvl { height:5px; border-radius:3px; background:rgba(255,255,255,.12); margin:6px 0 3px; overflow:hidden; } .lvl b { display:block; height:100%; background:var(--sc,#e8c55a); }
  .sm { font-size:.8em; opacity:.7; }

  /* Lights: off = dimmed, on = twinkle (brightness only, no motion) */
  .tglow, .dglow { opacity:0; transition:opacity .6s; }
  .tbulb, .dbulb { fill:#5d5a47; transition:fill .4s; }
  .tree-on .tbulb, .door-on .dbulb { fill:#fff3c9; }
  .tree-on .tglow, .door-on .dglow { opacity:.85; animation-name:tw; animation-timing-function:ease-in-out; animation-iteration-count:infinite; }
  @keyframes tw { 0%,100% { opacity:.35; } 50% { opacity:1; } }
  .gglow { opacity:0; transition:opacity .6s; }
  .gbulb { fill:#2c3440; transition:fill .4s; }
  .garden-on .gbulb { fill:var(--c); }
  .garden-on .gglow { opacity:.9; animation-name:tw; animation-timing-function:ease-in-out; animation-iteration-count:infinite; }
  .garden-on .amb-garden { opacity:1; }
  .kglow { opacity:0; transition:opacity .6s; }
  .kbulb { fill:#5d5a47; transition:fill .4s; }
  .wreath-on .kbulb { fill:#fff3c9; }
  .wreath-on .kglow { opacity:.85; animation-name:tw; animation-timing-function:ease-in-out; animation-iteration-count:infinite; }
  .wreath-on .amb-wreath { opacity:.8; }
  .star { transition: filter .6s; }
  .tree-on .star { filter: drop-shadow(0 0 10px #ffd76a) drop-shadow(0 0 22px #ffc94a); }
  .starglow { opacity:0; transition:opacity .6s; }
  .tree-on .starglow { opacity:1; }
  .amb { opacity:0; transition:opacity 1.2s; }
  .tree-on .amb-tree, .door-on .amb-door, .candles-on .amb-candles, .music-on .amb-music { opacity:1; }
  .dark { transition:opacity 1.2s; opacity:.38; }
  .tree-on .dark, .door-on .dark, .candles-on .dark { opacity:.18; }

  .flame, .cglow { opacity:0; transition:opacity .5s; }
  .candles-on .flame { opacity:1; animation: flick 1.6s ease-in-out infinite; }
  .candles-on .cglow { opacity:.9; animation: cflick 2.1s ease-in-out infinite; }
  @keyframes flick { 0%,100% { opacity:1; } 30% { opacity:.82; } 55% { opacity:.95; } 80% { opacity:.86; } }
  @keyframes cflick { 0%,100% { opacity:.9; } 40% { opacity:.65; } 70% { opacity:.8; } }
  .smoke { opacity:0; transition:opacity 1s; }
  .candles-on .smoke { opacity:.18; }

  .dial { fill:#3a2c1c; transition:fill .5s; }
  .music-on .dial { fill:#ffcf6b; }
  .hornglow { opacity:0; transition:opacity .8s; }
  .music-on .hornglow { opacity:.45; }
  .note { opacity:0; transition:opacity .6s; fill:#ffe3a3; font-family: serif; }
  .music-on .note { animation: notes 2.4s ease-in-out infinite; }
  @keyframes notes { 0%,100% { opacity:.15; } 50% { opacity:.95; } }
</style>
<ha-card>
  <div class="head"><h2>${wzEsc(this._config.title || WZ_T.title)}</h2><button class="gear" id="gear" data-pop="settings" title="${WZ_T.schedule}" style="display:none">⚙️</button></div>
  <svg id="room" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Christmas living room">
    <defs>
      <radialGradient id="gWarm"><stop offset="0" stop-color="#fff6d6" stop-opacity="1"/><stop offset=".25" stop-color="#ffd27a" stop-opacity=".75"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></radialGradient>
      ${GC.map((c, i) => `<radialGradient id="gL${i}"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset=".3" stop-color="${c}" stop-opacity=".8"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient>`).join('')}
      <linearGradient id="gGardenGlow" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffcf8a" stop-opacity="0"/><stop offset="1" stop-color="#ffcf8a" stop-opacity=".22"/></linearGradient>
      <linearGradient id="gBrass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6d986"/><stop offset=".45" stop-color="#c4923a"/><stop offset="1" stop-color="#6e4a12"/></linearGradient>
      <radialGradient id="gHornIn" cx=".5" cy=".6" r=".6"><stop offset="0" stop-color="#1c1006"/><stop offset=".7" stop-color="#5a3c12"/><stop offset="1" stop-color="#a87a2c"/></radialGradient>
      <radialGradient id="gCandle"><stop offset="0" stop-color="#ffd58a" stop-opacity=".55"/><stop offset="1" stop-color="#ff9f3a" stop-opacity="0"/></radialGradient>
      <radialGradient id="gFlame" cx=".5" cy=".7" r=".6"><stop offset="0" stop-color="#fffbe8"/><stop offset=".45" stop-color="#ffd25e"/><stop offset="1" stop-color="#ff7a1a" stop-opacity=".2"/></radialGradient>
      <radialGradient id="gRoomTree" cx="822" cy="300" r="420" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffb84d" stop-opacity=".33"/><stop offset="1" stop-color="#ffb84d" stop-opacity="0"/></radialGradient>
      <radialGradient id="gRoomDoor" cx="260" cy="290" r="300" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffc86b" stop-opacity=".2"/><stop offset="1" stop-color="#ffc86b" stop-opacity="0"/></radialGradient>
      <radialGradient id="gRoomCandle" cx="580" cy="330" r="200" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffa94d" stop-opacity=".35"/><stop offset="1" stop-color="#ffa94d" stop-opacity="0"/></radialGradient>
      <radialGradient id="gVignette" cx=".5" cy=".5" r=".75"><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".75"/></radialGradient>
      <radialGradient id="gRed" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#ff8a80"/><stop offset=".35" stop-color="#c62828"/><stop offset="1" stop-color="#4a0505"/></radialGradient>
      <radialGradient id="gWine" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#e57373"/><stop offset=".4" stop-color="#7b1020"/><stop offset="1" stop-color="#2b0208"/></radialGradient>
      <radialGradient id="gGold" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#fff3c4"/><stop offset=".35" stop-color="#d4a83a"/><stop offset="1" stop-color="#5a4010"/></radialGradient>
      <radialGradient id="gSilver" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#ffffff"/><stop offset=".4" stop-color="#b7bec7"/><stop offset="1" stop-color="#3c434c"/></radialGradient>
      <linearGradient id="gWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2a22"/><stop offset="1" stop-color="#4c372b"/></linearGradient>
      <linearGradient id="gFloor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a2f1d"/><stop offset="1" stop-color="#25170e"/></linearGradient>
      <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#07101f"/><stop offset=".7" stop-color="#1b2f4f"/><stop offset="1" stop-color="#2d4466"/></linearGradient>
      <linearGradient id="gTreeShade" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".05"/><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".35"/></linearGradient>
      <linearGradient id="gTreeBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d2a14"/><stop offset="1" stop-color="#071a0c"/></linearGradient>
      <linearGradient id="gWax" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9c8a6"/><stop offset=".45" stop-color="#f7eedc"/><stop offset="1" stop-color="#c2ae88"/></linearGradient>
      <linearGradient id="gWood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a3a24"/><stop offset="1" stop-color="#3a2416"/></linearGradient>
      <linearGradient id="gCurtain" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4a0e14"/><stop offset=".2" stop-color="#7a1a22"/><stop offset=".4" stop-color="#5a1219"/><stop offset=".6" stop-color="#7f1d25"/><stop offset=".8" stop-color="#55111a"/><stop offset="1" stop-color="#3a0a10"/></linearGradient>
      <linearGradient id="gShade" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".12"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></linearGradient>
      <linearGradient id="gGlass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".07"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></linearGradient>
      <pattern id="pWall" width="34" height="34" patternUnits="userSpaceOnUse"><rect width="34" height="34" fill="none"/><path d="M17 4 l3 6 -3 6 -3 -6z" fill="#fff" opacity=".035"/><path d="M0 17h34" stroke="#000" stroke-opacity=".04"/></pattern>
      <pattern id="pGrille" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="4" fill="#8a7155"/><path d="M0 0L4 4M4 0L0 4" stroke="#6d5841" stroke-width=".7"/></pattern>
    </defs>

    <!-- Room -->
    <rect x="-3000" y="-3000" width="7000" height="3482" fill="#3a2a22"/>
    <rect width="1000" height="482" fill="url(#gWall)"/>
    <rect x="-3000" y="-3000" width="7000" height="3482" fill="url(#pWall)"/>
    <rect x="-3000" y="300" width="7000" height="170" fill="#000" opacity=".08"/>
    <path d="M-3000 300 H4000" stroke="#d9c3a0" stroke-opacity=".12" stroke-width="3"/>
    <rect x="-3000" y="482" width="7000" height="3000" fill="#25170e"/>
    <rect x="-3000" y="482" width="7000" height="118" fill="url(#gFloor)"/>
    ${Array.from({ length: 70 }, (_, i) => `<path d="M${500 + (i - 35) * 46} 482 L${f1(500 + (i - 35) * (46 + 64 * 1518 / 118))} 2000" stroke="#000" stroke-opacity=".22"/>`).join('')}
    <path d="M-3000 510H4000 M-3000 545H4000 M-3000 585H4000 M-3000 635H4000 M-3000 700H4000 M-3000 785H4000 M-3000 895H4000 M-3000 1040H4000" stroke="#000" stroke-opacity=".12"/>
    <rect x="-3000" y="468" width="7000" height="14" fill="#e6dccb" opacity=".85"/><rect x="-3000" y="480" width="7000" height="2" fill="#000" opacity=".3"/>
    <!-- Hanging stars (visible on tall screens) -->
    ${[[300, -150, 1], [470, -70, 0.8], [650, -190, 1.1], [905, -90, 0.9]].map(([x, y, s]) => `<line x1="${x}" y1="-3000" x2="${x}" y2="${y - 22 * s}" stroke="#c9b37a" stroke-opacity=".5" stroke-width="1"/>
      <circle class="starglow" cx="${x}" cy="${y}" r="${46 * s}" fill="url(#gWarm)" opacity=".7"/>
      <polygon class="star" transform="translate(${x},${y}) scale(${s})" points="0,-24 6.5,-7 24,-7 10,3.5 15.5,21 0,10.5 -15.5,21 -10,3.5 -24,-7 -6.5,-7" fill="#e8c55a" stroke="#fff1b8" stroke-width="1"/>`).join('')}

    <!-- Ambient light on the wall -->
    <rect class="amb amb-tree" x="-3000" y="-3000" width="7000" height="7000" fill="url(#gRoomTree)"/>
    <rect class="amb amb-door" x="-3000" y="-3000" width="7000" height="7000" fill="url(#gRoomDoor)"/>
    <rect class="amb amb-candles" x="-3000" y="-3000" width="7000" height="7000" fill="url(#gRoomCandle)"/>

    <!-- Rug -->
    <ellipse cx="520" cy="560" rx="340" ry="34" fill="#5a1418"/><ellipse cx="520" cy="560" rx="318" ry="27" fill="none" stroke="#c9a24a" stroke-opacity=".5" stroke-width="2" stroke-dasharray="6 5"/>

    <!-- Balcony door (double door) -->
    <rect x="100" y="112" width="320" height="366" fill="#efe9de"/>
    <rect x="116" y="128" width="288" height="344" fill="url(#gSky)"/>
    ${stars}
    <circle cx="360" cy="178" r="17" fill="#f4f1e1"/><circle cx="366" cy="173" r="15" fill="#1b2f4f" opacity=".0"/>
    <circle cx="360" cy="178" r="34" fill="#f4f1e1" opacity=".08"/>
    ${pines}
    <rect x="116" y="392" width="288" height="80" fill="#dfe8f2"/>
    ${rail}
    <rect x="116" y="398" width="288" height="7" fill="#26313f"/><path d="M116 398 Q200 391 260 397 T404 397 V399 H116Z" fill="#f4f8fc"/>
    ${flakes}
    <rect class="amb amb-garden" x="116" y="300" width="288" height="172" fill="url(#gGardenGlow)"/>
    <g id="garden">${garden}</g>
    <rect x="116" y="128" width="288" height="344" fill="url(#gGlass)"/>
    <rect x="256" y="120" width="8" height="356" fill="#e8e1d4"/>
    <rect x="116" y="296" width="140" height="7" fill="#e8e1d4"/><rect x="264" y="296" width="140" height="7" fill="#e8e1d4"/>
    <rect x="108" y="120" width="304" height="352" fill="none" stroke="#e8e1d4" stroke-width="16"/>
    <rect x="244" y="292" width="5" height="22" rx="2" fill="#b9b2a4"/><rect x="271" y="292" width="5" height="22" rx="2" fill="#b9b2a4"/>
    <rect x="92" y="474" width="336" height="8" fill="#d8cfbf"/>

    <!-- Curtains -->
    <rect x="18" y="62" width="484" height="5" rx="2" fill="#2b1b12"/>
    <path d="M26 66 H90 C86 200 92 380 80 478 H22 C30 380 24 200 26 66Z" fill="url(#gCurtain)"/>
    <path d="M430 66 H494 C496 200 490 380 498 478 H440 C428 380 434 200 430 66Z" fill="url(#gCurtain)"/>

    <!-- Garland around the door -->
    <g id="garland">${G.svg}${G.deco}${wzBow(102, 104, 1)}${wzBow(418, 104, 1)}${wzBow(260, 100, 1.15)}${G.lights}</g>

    <!-- Wreath on the wall -->
    <circle class="amb amb-wreath" cx="580" cy="214" r="120" fill="url(#gCandle)"/>
    <g transform="translate(580,214)">
      ${(() => { const r = wzRng(31); let s = ''; for (let i = 0; i < 260; i++) { const a = r() * Math.PI * 2, rr = 28 + r() * 16, l = 5 + r() * 8, b = a + (r() - .5) * 2; const ci = 1 + Math.floor(r() * 5); s += `<path d="M${f1(Math.cos(a) * rr)} ${f1(Math.sin(a) * rr)}l${f1(Math.cos(b) * l)} ${f1(Math.sin(b) * l)}" stroke="${WZ_PAL[ci]}" stroke-width="1.7" stroke-linecap="round"/>`; } return s; })()}
      <circle cx="-30" cy="-14" r="3" fill="#b3121b"/><circle cx="-26" cy="-18" r="2.6" fill="#c9161f"/><circle cx="30" cy="10" r="3" fill="#b3121b"/><circle cx="26" cy="16" r="2.6" fill="#c9161f"/>
      ${Array.from({ length: 18 }, (_, i) => { const a = (i / 18) * Math.PI * 2 + 0.2, r = 33 + (i % 3) * 4; const x = f1(Math.cos(a) * r), y = f1(Math.sin(a) * r); return `<circle class="kglow" cx="${x}" cy="${y}" r="9" fill="url(#gWarm)" style="animation-delay:${((i * 0.37) % 2.5).toFixed(2)}s;animation-duration:${(1.6 + (i % 4) * 0.5).toFixed(1)}s"/><circle class="kbulb" cx="${x}" cy="${y}" r="2"/>`; }).join('')}
      ${wzBow(0, 34, 0.8)}
    </g>

    <!-- Sideboard -->
    <rect x="500" y="396" width="160" height="10" rx="2" fill="#6b4529"/>
    <rect x="506" y="406" width="148" height="58" fill="url(#gWood)"/>
    <path d="M580 410 V460" stroke="#000" stroke-opacity=".3"/><circle cx="572" cy="434" r="2" fill="#c9a24a"/><circle cx="588" cy="434" r="2" fill="#c9a24a"/>
    <rect x="512" y="464" width="6" height="16" fill="#2a1a10"/><rect x="642" y="464" width="6" height="16" fill="#2a1a10"/>

    <!-- Scent candles -->
    <g id="candles">${cglow}${candleSvg}${flames}
      <path class="smoke" d="M581 330 C576 318 588 310 581 296 C575 284 586 276 580 262" stroke="#fff" stroke-width="2" fill="none"/>
    </g>

    <!-- Gramophone / music -->
    <g id="radio" transform="translate(0,-34)">
      <ellipse cx="120" cy="584" rx="78" ry="9" fill="#000" opacity=".4"/>
      <rect x="62" y="534" width="116" height="46" rx="4" fill="url(#gWood)"/>
      <rect x="62" y="534" width="116" height="6" fill="#7a5233"/>
      <rect x="72" y="546" width="96" height="26" rx="3" fill="none" stroke="#c9a24a" stroke-opacity=".45"/>
      <rect class="dial" x="110" y="553" width="20" height="10" rx="2"/>
      <path d="M178 556 h12 v-12" stroke="#8a6d3b" stroke-width="3" fill="none"/><circle cx="190" cy="543" r="3.5" fill="#3b2414"/>
      <ellipse cx="124" cy="533" rx="46" ry="8" fill="#121212"/>
      <ellipse cx="124" cy="533" rx="36" ry="6" fill="none" stroke="#333"/><ellipse cx="124" cy="533" rx="26" ry="4.4" fill="none" stroke="#2a2a2a"/>
      <ellipse cx="124" cy="533" rx="9" ry="1.8" fill="#b71c1c"/>
      <path d="M90 530 L115 523 L134 531" stroke="#c9a24a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M78 532 C76 482 40 456 15 430 L105 411 C80 452 90 492 90 532 Z" fill="url(#gBrass)"/>
      <ellipse cx="60" cy="420" rx="46" ry="21" transform="rotate(-12 60 420)" fill="url(#gBrass)"/>
      <ellipse cx="60" cy="421" rx="41" ry="17" transform="rotate(-12 60 421)" fill="url(#gHornIn)"/>
      <ellipse class="hornglow" cx="60" cy="421" rx="38" ry="15" transform="rotate(-12 60 421)" fill="url(#gWarm)"/>
      <text class="note" x="84" y="388" font-size="20" style="animation-delay:0s">♪</text>
      <text class="note" x="112" y="366" font-size="26" style="animation-delay:.8s">♫</text>
      <text class="note" x="138" y="392" font-size="18" style="animation-delay:1.6s">♪</text>
    </g>

    <!-- Tear-off calendar (countdown) -->
    ${(() => {
      const now = new Date(), t = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      let x = new Date(now.getFullYear(), 11, 24);
      if (t > new Date(now.getFullYear(), 11, 26)) x = new Date(now.getFullYear() + 1, 11, 24);
      const d = Math.round((x - t) / 86400000);
      const mon = WZ_T.months[now.getMonth()];
      const big = d > 0 ? String(d) : (d === 0 ? '24' : '🎄');
      const l1 = d > 1 ? WZ_T.calDays : (d === 1 ? WZ_T.calDay : (d === 0 ? WZ_T.calToday : WZ_T.calMerry));
      const l2 = d >= 0 ? WZ_T.calEve : WZ_T.calXmas;
      return `<g class="cal" transform="translate(668,62)">
        <path d="M36 -4 L10 10 M36 -4 L62 10" stroke="#7a6845" stroke-width="1.2"/><circle cx="36" cy="-4" r="3" fill="#b9a77a"/>
        <rect x="3" y="11" width="72" height="92" rx="5" fill="#000" opacity=".3"/>
        <rect x="1.5" y="9" width="72" height="92" rx="5" fill="#e9dfc8"/>
        <g class="pg">
          <rect x="0" y="6" width="72" height="92" rx="5" fill="#fbf6ea"/>
          <path d="M0 11 a5 5 0 0 1 5 -5 h62 a5 5 0 0 1 5 5 v17 h-72z" fill="#b71c1c"/>
          <circle cx="16" cy="9" r="2.4" fill="#e7d9b5"/><circle cx="56" cy="9" r="2.4" fill="#e7d9b5"/>
          <text x="36" y="23" text-anchor="middle" font-size="${mon.length > 8 ? 8.6 : 10}" fill="#fff5e0" font-family="Georgia, serif" letter-spacing="1.4">${mon}</text>
          <path d="M60 30 c6 -2 10 2 12 6 c-5 0 -9 -1 -12 -6z" fill="#2e7d32"/><path d="M60 30 c-1 6 2 10 6 12 c0 -5 -2 -9 -6 -12z" fill="#1b5e20"/>
          <circle cx="60" cy="31" r="2.3" fill="#c62828"/><circle cx="63.5" cy="29.5" r="2" fill="#d32f2f"/>
          <text x="36" y="${d === 0 || d < 0 ? 62 : 64}" text-anchor="middle" font-size="${big.length > 2 ? 26 : 34}" font-weight="bold" fill="#8e1b1b" font-family="Georgia, serif">${big}</text>
          <text x="36" y="80" text-anchor="middle" font-size="8" fill="#5a4636" font-family="Georgia, serif">${l1}</text>
          <text x="36" y="90" text-anchor="middle" font-size="${l2.length > 11 ? 7 : 8}" fill="#5a4636" font-family="Georgia, serif" font-style="italic">${l2}</text>
          <path d="M72 86 L60 98 L68 98 a4 4 0 0 0 4 -4z" fill="#e2d4b2"/>
        </g>
      </g>`;
    })()}

    <!-- Christmas tree -->
    <g id="tree">
      <polygon points="${T.silStr}" fill="url(#gTreeBody)"/>
      <rect x="814" y="470" width="16" height="22" fill="#3b2414"/>
      ${T.needles}
      <polygon points="${T.silStr}" fill="url(#gTreeShade)"/>
      ${T.beads}
      ${T.ballSvg}
      ${T.lights}
      <circle class="starglow" cx="822" cy="40" r="42" fill="url(#gWarm)"/>
      <polygon class="star" points="822,14 828.5,31 846,31 832,41.5 837.5,59 822,48.5 806.5,59 812,41.5 798,31 815.5,31" fill="#e8c55a" stroke="#fff1b8" stroke-width="1"/>
      <path d="M770 490 L874 490 L864 530 L780 530 Z" fill="#7a5530"/><path d="M772 500 H872 M776 512 H868 M779 522 H865" stroke="#4d3219" stroke-width="2"/>
    </g>

    <!-- Presents -->
    ${gift(690, 502, 52, 38, '#8e1b1b', '#e2c25c')}
    ${gift(884, 498, 58, 44, '#1d4d2f', '#c62828')}
    ${gift(944, 520, 40, 30, '#c9a24a', '#7a1a22')}
    ${gift(742, 520, 36, 26, '#e8e1d4', '#b71c1c')}

    <!-- Darkening + vignette -->
    <rect class="dark" x="-3000" y="-3000" width="7000" height="7000" fill="#000" pointer-events="none"/>
    <rect id="vig" x="0" y="0" width="1000" height="600" fill="url(#gVignette)" pointer-events="none"/>

    <!-- Tap areas -->
    <polygon class="hit" data-k="tree" points="${T.silStr} " />
    <rect class="hit" data-k="tree" x="790" y="8" width="64" height="60"/>
    <rect class="hit" data-k="tree" x="760" y="480" width="124" height="56"/>
    <rect class="hit" data-k="door" x="80" y="80" width="360" height="48"/>
    <rect class="hit" data-k="door" x="80" y="128" width="36" height="356"/>
    <rect class="hit" data-k="door" x="404" y="128" width="36" height="356"/>
    <rect class="hit" data-k="garden" x="116" y="128" width="288" height="346"/>
    <circle class="hit" data-k="wreath" cx="580" cy="222" r="56"/>
    <rect class="hit" data-k="candles" x="500" y="300" width="160" height="100"/>
    <rect class="hit" data-k="music" x="10" y="316" width="190" height="240"/>
  </svg>
  <div class="pop" id="pop"></div>
  <div class="chips" id="chipsbar">
    <div class="dock" id="dock"></div>
    ${WZ_ITEMS.map(([k, icon]) => `<button class="chip" id="chip-${k}" data-k="${k}"><span>${icon}</span><span>${wzEsc((cfg[k] && cfg[k].name) || WZ_T.items[k])}</span><span class="st">${WZ_T.off}</span></button>`).join('')}
  </div>
</ha-card>`;
    this.shadowRoot.querySelectorAll('[data-k]').forEach((el) => el.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this._popOpen) { this._popOpen = null; this._dock(true); return; }
      this._tap(el.dataset.k);
    }));
    this.shadowRoot.getElementById('gear').addEventListener('click', (e) => this._onDockClick(e));
    this.shadowRoot.getElementById('room').addEventListener('click', () => { if (this._popOpen) { this._popOpen = null; this._dock(true); } });
    const dockEl = this.shadowRoot.getElementById('dock'), popEl = this.shadowRoot.getElementById('pop');
    dockEl.addEventListener('click', (e) => this._onDockClick(e));
    popEl.addEventListener('click', (e) => this._onDockClick(e));
    popEl.addEventListener('input', (e) => {
      if (e.target.id !== 'pvol') return;
      this._volDrag = true;
      const v = this.shadowRoot.getElementById('pvolv'); if (v) v.textContent = e.target.value + '%';
    });
    popEl.addEventListener('change', (e) => {
      if (e.target.id === 'sch-start' || e.target.id === 'sch-end') {
        if (e.target.value) this._schedSet(e.target.id === 'sch-start' ? 'start' : 'end', e.target.value);
        e.target.blur();
        return;
      }
      if (e.target.id !== 'pvol') return;
      this._volDrag = false;
      const it = this._config.music || {};
      if (this._hass && it.entity) this._hass.callService('media_player', 'volume_set', { entity_id: it.entity, volume_level: Number(e.target.value) / 100 });
    });
    this._dockSig = null;
    this._apply();
    this._fit();
  }
}

// ---------- Visual editor ----------
const WZ_ACTION_DOMAINS = ['script', 'scene', 'automation', 'switch', 'light', 'input_boolean'];
function wzEditorSchema(hass, cfg) {
  const T = WZ_I18N[wzLang(cfg, hass)];
  const item = (k, icon, extra = []) => ({ type: 'expandable', name: k, title: T.ed.titles[k], icon, schema: [
    { name: 'name', selector: { text: {} } },
    { name: 'entity', selector: { entity: {} } },
    { name: 'action', selector: { entity: { domain: WZ_ACTION_DOMAINS } } },
    { name: 'on_states', selector: { select: { multiple: true, custom_value: true, options: ['on', 'playing', 'open', 'home', 'heat'] } } },
    ...extra
  ] });
  const mus = (cfg && cfg.music) || {};
  const st = mus.entity && hass && hass.states[mus.entity];
  const srcOpts = st && Array.isArray(st.attributes.source_list) ? st.attributes.source_list : [];
  return [
    { name: 'title', selector: { text: {} } },
    { name: '', type: 'grid', schema: [
      { name: 'fit', selector: { select: { mode: 'dropdown', options: T.ed.fit.map(([value, label]) => ({ value, label })) } } },
      { name: 'height', selector: { text: {} } }
    ] },
    { name: '', type: 'grid', schema: [
      { name: 'show_chips', selector: { boolean: {} } },
      { name: 'language', selector: { select: { mode: 'dropdown', options: [{ value: 'de', label: 'Deutsch' }, { value: 'en', label: 'English' }] } } }
    ] },
    item('tree', 'mdi:pine-tree'),
    item('door', 'mdi:door-sliding'),
    item('garden', 'mdi:pine-tree-variant'),
    item('wreath', 'mdi:circle-double'),
    item('candles', 'mdi:candle', [
      { name: 'pura_device', selector: { device: { filter: [{ integration: 'pura' }] } } },
      { name: 'controls', selector: { boolean: {} } },
      { name: 'timers', selector: { select: { multiple: true, custom_value: true, options: ['0', '15', '30', '45', '60', '90', '120', '180', '240'] } } },
      { name: 'default_timer', selector: { number: { min: 0, max: 240, step: 5, mode: 'box', unit_of_measurement: 'min' } } },
      { name: 'default_intensity', selector: { select: { mode: 'dropdown', options: WZ_INT.map(([v], i) => ({ value: v, label: T.ints[i] })) } } }
    ]),
    item('music', 'mdi:music', [
      { name: 'controls', selector: { boolean: {} } },
      { name: 'sources', selector: { select: { multiple: true, custom_value: true, reorder: true, options: srcOpts } } },
      { name: 'playlists', selector: { object: { multiple: true, label_field: 'name', fields: {
        name: { label: T.ed.labels.pl_name, selector: { text: {} } },
        media: { label: T.ed.labels.pl_media, required: true, selector: { media: {} } }
      } } } },
      { name: 'random', selector: { boolean: {} } }
    ]),
    { type: 'expandable', name: 'schedule', title: T.ed.titles.schedule, icon: 'mdi:calendar-clock', schema: [
      { name: 'enabled', selector: { entity: { domain: 'input_boolean' } } },
      { name: 'start_mode', selector: { entity: { domain: 'input_select' } } },
      { name: 'start_offset', selector: { entity: { domain: 'input_number' } } },
      { name: 'start_time', selector: { entity: { domain: 'input_datetime' } } },
      { name: 'end_time', selector: { entity: { domain: 'input_datetime' } } },
      { name: 'sun_start', selector: { entity: { domain: 'sensor' } } },
      { name: 'label', selector: { text: {} } }
    ] }
  ];
}

class ChristmasRoomCardEditor extends HTMLElement {
  setConfig(config) { this._config = config; this._update(); }
  set hass(hass) { this._hass = hass; this._update(); }
  async connectedCallback() {
    if (!customElements.get('ha-form') && window.loadCardHelpers) {
      try {
        const h = await window.loadCardHelpers();
        const c = await h.createCardElement({ type: 'entities', entities: [] });
        if (c && c.constructor.getConfigElement) await c.constructor.getConfigElement();
      } catch (e) { /* ignore */ }
    }
    this._update();
  }
  _update() {
    if (!this.isConnected && !this._form) return;
    if (!this._form) {
      this._form = document.createElement('ha-form');
      this._form.computeLabel = (sch) => WZ_I18N[wzLang(this._config, this._hass)].ed.labels[sch.name] || sch.title || sch.name;
      this._form.addEventListener('value-changed', (ev) => {
        ev.stopPropagation();
        this._config = Object.assign({}, ev.detail.value);
        this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config }, bubbles: true, composed: true }));
      });
      this.appendChild(this._form);
    }
    if (this._hass) this._form.hass = this._hass;
    this._form.schema = wzEditorSchema(this._hass, this._config);
    this._form.data = this._config || {};
  }
}

class WeihnachtszimmerCard extends ChristmasRoomCard {}            // alias for older configs
if (!customElements.get('christmas-room-card-editor')) customElements.define('christmas-room-card-editor', ChristmasRoomCardEditor);
if (!customElements.get('christmas-room-card')) customElements.define('christmas-room-card', ChristmasRoomCard);
if (!customElements.get('weihnachtszimmer-card')) customElements.define('weihnachtszimmer-card', WeihnachtszimmerCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: 'christmas-room-card', name: 'Christmas Room Card', preview: true, documentationURL: 'https://github.com/Severinius-MUC/christmas-room-card',
  description: 'Cosy Christmas living room – tree, garland, garden lights, wreath, scent candles and music. Every object is tappable.' });
console.info(`%c CHRISTMAS-ROOM-CARD %c v${WZ_VERSION} `, 'color:#fff;background:#b71c1c;font-weight:700', 'color:#b71c1c;background:#fff3c4');
