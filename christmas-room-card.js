/*! Christmas Room Card for Home Assistant
 * A cosy, animated living room: Christmas tree, balcony-door garland, garden lights,
 * wreath, scent candles (Pura) and music (any media player). Every object is tappable
 * and runs a Home Assistant action. German + English UI.
 * https://github.com/Severinius-MUC/christmas-room-card  ·  MIT License
 */
const WZ_VERSION = '1.2.0';
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
      styles: [['classic', 'Klassisch (gezeichnet)'], ['modern', 'Modern (Foto)']],
      labels: {
        title: 'Titel', style: 'Stil', background_image: 'Eigenes Hintergrundbild (nur Modern, optional – URL)', fit: 'Bildanpassung', height: 'Höhe (leer = ganzer Bildschirm, „auto“ = Seitenverhältnis)', language: 'Sprache (leer = wie Home Assistant)',
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
      styles: [['classic', 'Classic (illustrated)'], ['modern', 'Modern (photo)']],
      labels: {
        title: 'Title', style: 'Style', background_image: 'Own background image (modern only, optional – URL)', fit: 'Scaling', height: 'Height (empty = full screen, "auto" = aspect ratio)', language: 'Language (empty = like Home Assistant)',
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

// ---------- Modern style: photo background + lit regions ----------
const WZM = {
  tree: [[1293, 28], [1332, 100], [1365, 185], [1412, 300], [1470, 430], [1520, 560], [1538, 625], [1440, 692], [1160, 692], [1092, 625], [1118, 520], [1170, 400], [1222, 262], [1258, 140]],
  doorOuter: [205, 86, 722, 670], doorInner: [258, 178, 680, 640],
  wreath: [927, 268, 92], candles: [[896, 462, 92], [138, 622, 78]], calendar: [1036, 84]
};
function wzInPoly(x, y, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if (((yi > y) !== (yj > y)) && (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)) inside = !inside;
  }
  return inside;
}
const WZ_GRAM = `
      <ellipse cx="120" cy="584" rx="78" ry="9" fill="#000" opacity=".45"/>
      <rect x="62" y="534" width="116" height="46" rx="4" fill="url(#gWood)"/>
      <rect x="62" y="534" width="116" height="6" fill="#7a5233"/>
      <rect x="72" y="546" width="96" height="26" rx="3" fill="none" stroke="#c9a24a" stroke-opacity=".45"/>
      <rect x="110" y="553" width="20" height="10" rx="2" fill="#ffcf6b"/>
      <path d="M178 556 h12 v-12" stroke="#8a6d3b" stroke-width="3" fill="none"/><circle cx="190" cy="543" r="3.5" fill="#3b2414"/>
      <ellipse cx="124" cy="533" rx="46" ry="8" fill="#121212"/>
      <ellipse cx="124" cy="533" rx="36" ry="6" fill="none" stroke="#333"/><ellipse cx="124" cy="533" rx="26" ry="4.4" fill="none" stroke="#2a2a2a"/>
      <ellipse cx="124" cy="533" rx="9" ry="1.8" fill="#b71c1c"/>
      <path d="M90 530 L115 523 L134 531" stroke="#c9a24a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M78 532 C76 482 40 456 15 430 L105 411 C80 452 90 492 90 532 Z" fill="url(#gBrass)"/>
      <ellipse cx="60" cy="420" rx="46" ry="21" transform="rotate(-12 60 420)" fill="url(#gBrass)"/>
      <ellipse cx="60" cy="421" rx="41" ry="17" transform="rotate(-12 60 421)" fill="url(#gHornIn)"/>`;
function wzModernScene(img, calendarSvg) {
  const R = wzRng(1612);
  const pts = (n, fn) => { const out = []; for (let i = 0; i < 4000 && out.length < n; i++) { const p = fn(); if (p) out.push(p); } return out; };
  const glow = (cls, [x, y], r, grad) => `<circle class="${cls}" cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="url(#${grad || 'gWarm'})" style="animation-delay:${(R() * 3).toFixed(2)}s;animation-duration:${(1.5 + R() * 2.5).toFixed(2)}s"/>`;
  const [ox1, oy1, ox2, oy2] = WZM.doorOuter, [ix1, iy1, ix2, iy2] = WZM.doorInner;
  const tree = pts(80, () => { const x = 1095 + R() * 445, y = 60 + R() * 620; return wzInPoly(x, y, WZM.tree) ? [x, y] : null; });
  const door = pts(70, () => { const x = ox1 + R() * (ox2 - ox1), y = oy1 + R() * (oy2 - oy1); return (x < ix1 + 6 || x > ix2 - 6 || y < iy1 + 6) ? [x, y] : null; });
  const [wx, wy, wr] = WZM.wreath;
  const wreath = Array.from({ length: 22 }, (_, i) => { const a = (i / 22) * Math.PI * 2 + R() * 0.2, rr = wr * (0.62 + R() * 0.3); return [wx + Math.cos(a) * rr, wy + Math.sin(a) * rr * 0.98]; });
  const rail = Array.from({ length: 26 }, (_, i) => [ix1 + 10 + i * ((ix2 - ix1 - 20) / 25), 540 + R() * 8]);
  const GC = ['#ff5252', '#ffd740', '#40c4ff', '#69f0ae', '#ff80ab'];
  const im = (extra) => `<use href="#wzImg" ${extra}/>`;
  const polyStr = WZM.tree.map((p) => p.join(',')).join(' ');
  return `
    <defs>
      <image id="wzImg" href="${wzEsc(img)}" x="0" y="0" width="1600" height="900" preserveAspectRatio="none"/>
      <radialGradient id="gWarm"><stop offset="0" stop-color="#fff6d6" stop-opacity="1"/><stop offset=".25" stop-color="#ffd27a" stop-opacity=".75"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></radialGradient>
      ${GC.map((c, i) => `<radialGradient id="gL${i}"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset=".3" stop-color="${c}" stop-opacity=".8"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient>`).join('')}
      <linearGradient id="gWood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a3a24"/><stop offset="1" stop-color="#3a2416"/></linearGradient>
      <linearGradient id="gBrass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6d986"/><stop offset=".45" stop-color="#c4923a"/><stop offset="1" stop-color="#6e4a12"/></linearGradient>
      <radialGradient id="gHornIn" cx=".5" cy=".6" r=".6"><stop offset="0" stop-color="#1c1006"/><stop offset=".7" stop-color="#5a3c12"/><stop offset="1" stop-color="#a87a2c"/></radialGradient>
      <radialGradient id="gSpill"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
      <filter id="fDim" color-interpolation-filters="sRGB">
        <feColorMatrix type="saturate" values="0.72"/>
        <feComponentTransfer><feFuncR type="table" tableValues="0 0.09 0.16 0.21 0.245 0.27"/><feFuncG type="table" tableValues="0 0.08 0.145 0.19 0.22 0.24"/><feFuncB type="table" tableValues="0 0.08 0.13 0.165 0.19 0.205"/></feComponentTransfer>
      </filter>
      <filter id="fSoft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="14"/></filter>
      <filter id="fBg" x="-10%" y="-10%" width="120%" height="120%" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="9"/><feComponentTransfer><feFuncR type="linear" slope=".3"/><feFuncG type="linear" slope=".28"/><feFuncB type="linear" slope=".26"/></feComponentTransfer></filter>
      <filter id="fEdge" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="22"/></filter>
      <mask id="mEdge" maskUnits="userSpaceOnUse" x="-100" y="-100" width="1800" height="1100"><rect x="36" y="36" width="1528" height="828" fill="#fff" filter="url(#fEdge)"/></mask>
      <linearGradient id="gFloorShade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a0604" stop-opacity="0"/><stop offset="1" stop-color="#0a0604" stop-opacity=".62"/></linearGradient>
      <mask id="mTree"><g filter="url(#fSoft)"><polygon points="${polyStr}" fill="#fff"/><rect x="1090" y="600" width="460" height="130" fill="#fff"/></g><ellipse cx="1300" cy="420" rx="430" ry="470" fill="url(#gSpill)"/></mask>
      <mask id="mDoor"><g filter="url(#fSoft)"><path d="M${ox1} ${oy1}H${ox2}V${oy2}H${ox1}Z M${ix1} ${iy1}V${iy2}H${ix2}V${iy1}Z" fill="#fff" fill-rule="evenodd"/></g><ellipse cx="${(ox1 + ox2) / 2}" cy="${(oy1 + oy2) / 2}" rx="420" ry="380" fill="url(#gSpill)" opacity=".6"/></mask>
      <mask id="mGarden"><rect x="${ix1}" y="${iy1}" width="${ix2 - ix1}" height="${iy2 - iy1}" fill="#fff"/><path d="M236 486 C268 470 318 474 342 506 L348 660 L236 660 Z" fill="#000" filter="url(#fSoft)"/></mask>
      <mask id="mWreath"><g filter="url(#fSoft)"><circle cx="${wx}" cy="${wy}" r="${wr + 8}" fill="#fff"/><rect x="${wx - 40}" y="${wy + 40}" width="80" height="110" fill="#fff"/></g><circle cx="${wx}" cy="${wy}" r="230" fill="url(#gSpill)" opacity=".7"/></mask>
      <mask id="mCandles"><g filter="url(#fSoft)">${WZM.candles.map(([x, y, rr]) => `<circle cx="${x}" cy="${y}" r="${rr}" fill="#fff"/>`).join('')}</g>${WZM.candles.map(([x, y, rr]) => `<circle cx="${x}" cy="${y - 20}" r="${rr * 2.6}" fill="url(#gSpill)"/>`).join('')}</mask>
    </defs>
    <use href="#wzImg" filter="url(#fBg)" transform="translate(800 450) scale(3.4) translate(-800 -450)"/>
    <g mask="url(#mEdge)">
    ${im('filter="url(#fDim)"')}
    <g class="lit lit-garden">${im('mask="url(#mGarden)"')}</g>
    <g class="lit lit-door">${im('mask="url(#mDoor)"')}</g>
    <g class="lit lit-wreath">${im('mask="url(#mWreath)"')}</g>
    <g class="lit lit-candles">${im('mask="url(#mCandles)"')}</g>
    <g class="lit lit-tree">${im('mask="url(#mTree)"')}</g>
    </g>
    <rect x="0" y="640" width="1600" height="262" fill="url(#gFloorShade)"/>
    <g transform="translate(768,107) scale(1.1)">
      <g filter="url(#fDim)">${WZ_GRAM}</g>
      <g class="lit lit-music">${WZ_GRAM}<ellipse class="hornglow" cx="60" cy="421" rx="38" ry="15" transform="rotate(-12 60 421)" fill="url(#gWarm)"/></g>
      <text class="note" x="84" y="388" font-size="20" style="animation-delay:0s">♪</text>
      <text class="note" x="112" y="366" font-size="26" style="animation-delay:.8s">♫</text>
      <text class="note" x="138" y="392" font-size="18" style="animation-delay:1.6s">♪</text>
    </g>
    <g>${tree.map((p) => glow('tglow', p, 10)).join('')}${door.map((p) => glow('dglow', p, 9)).join('')}${wreath.map((p) => glow('kglow', p, 8)).join('')}${rail.map((p, i) => glow('gglow', p, 7, 'gL' + (i % GC.length))).join('')}</g>
    <circle class="starglow" cx="1293" cy="72" r="70" fill="url(#gWarm)"/>
    <g transform="translate(${WZM.calendar[0]},${WZM.calendar[1]}) scale(1.72)">${calendarSvg}</g>
    <polygon class="hit" data-k="tree" points="${polyStr}"/>
    <path class="hit" data-k="door" d="M${ox1} ${oy1}H${ox2}V${oy2}H${ox1}Z M${ix1} ${iy1}V${iy2}H${ix2}V${iy1}Z" fill-rule="evenodd"/>
    <rect class="hit" data-k="garden" x="${ix1}" y="${iy1}" width="${ix2 - ix1}" height="${iy2 - iy1}"/>
    <circle class="hit" data-k="wreath" cx="${wx}" cy="${wy + 20}" r="${wr + 30}"/>
    ${WZM.candles.map(([x, y, rr]) => `<circle class="hit" data-k="candles" cx="${x}" cy="${y}" r="${rr}"/>`).join('')}
    <rect class="hit" data-k="music" x="776" y="490" width="214" height="232"/>`;
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
    if (this._modern) {
      const a = r.height > 0 ? r.width / r.height : 16 / 9;
      const slice = mode === 'cover' || (mode === 'auto' && a >= 1.45 && a <= 2.1);
      setBox(0, 0, 1600, 900, slice ? 'xMidYMid slice' : 'xMidYMid meet');
      return;
    }
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
    const key = JSON.stringify([cfg.title, cfg.show_chips, cfg.height, WZ_ITEMS.map(([k]) => (cfg[k] || {}).name), new Date().toDateString(), WZ_T.title, cfg.style, cfg.background_image]);
    if (this._key === key && this.shadowRoot.getElementById('room')) { this._fit(); this._apply(); return; }
    this._key = key;
    const cfgH = cfg.height || 'calc(100vh - var(--header-height, 56px))';
    const autoH = cfgH === 'auto';
    const chips = cfg.show_chips !== false;
    this._modern = cfg.style === 'modern';
    const modernImg = cfg.background_image || WZ_MODERN_IMG;
    const calendarSvg = (() => {
      const now = new Date(), t = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      let x = new Date(now.getFullYear(), 11, 24);
      if (t > new Date(now.getFullYear(), 11, 26)) x = new Date(now.getFullYear() + 1, 11, 24);
      const d = Math.round((x - t) / 86400000);
      const mon = WZ_T.months[now.getMonth()];
      const big = d > 0 ? String(d) : (d === 0 ? '24' : '🎄');
      const l1 = d > 1 ? WZ_T.calDays : (d === 1 ? WZ_T.calDay : (d === 0 ? WZ_T.calToday : WZ_T.calMerry));
      const l2 = d >= 0 ? WZ_T.calEve : WZ_T.calXmas;
      return `<g class="cal">
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
    })();
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
  .modern .lit { opacity:0; transition:opacity 1.1s ease; }
  .tree-on .lit-tree, .door-on .lit-door, .garden-on .lit-garden, .wreath-on .lit-wreath, .music-on .lit-music { opacity:1; }
  .candles-on .lit-candles { opacity:1; animation: cflick 2.1s ease-in-out infinite; }
  .modern .tglow, .modern .dglow, .modern .kglow, .modern .gglow { mix-blend-mode:screen; }
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
  ${this._modern ? `<svg id="room" class="modern" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Christmas living room">${wzModernScene(modernImg, calendarSvg)}</svg>` : `<svg id="room" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Christmas living room">
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

    <g transform="translate(668,62)">${calendarSvg}</g>


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
  </svg>`}
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
    { name: '', type: 'grid', schema: [
      { name: 'style', selector: { select: { mode: 'dropdown', options: T.ed.styles.map(([value, label]) => ({ value, label })) } } },
      { name: 'background_image', selector: { text: {} } }
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

// Background for style: modern (WebP, embedded so the card stays self-contained)
const WZ_MODERN_IMG = 'data:image/webp;base64,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';

class WeihnachtszimmerCard extends ChristmasRoomCard {}            // alias for older configs
if (!customElements.get('christmas-room-card-editor')) customElements.define('christmas-room-card-editor', ChristmasRoomCardEditor);
if (!customElements.get('christmas-room-card')) customElements.define('christmas-room-card', ChristmasRoomCard);
if (!customElements.get('weihnachtszimmer-card')) customElements.define('weihnachtszimmer-card', WeihnachtszimmerCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: 'christmas-room-card', name: 'Christmas Room Card', preview: true, documentationURL: 'https://github.com/Severinius-MUC/christmas-room-card',
  description: 'Cosy Christmas living room – tree, garland, garden lights, wreath, scent candles and music. Every object is tappable.' });
console.info(`%c CHRISTMAS-ROOM-CARD %c v${WZ_VERSION} `, 'color:#fff;background:#b71c1c;font-weight:700', 'color:#b71c1c;background:#fff3c4');
